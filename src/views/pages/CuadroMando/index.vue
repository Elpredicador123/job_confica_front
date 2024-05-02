<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import {constructor_chart,constructor_piechart,constructor_donutchart} from "@/components/constructor";
import moment from 'moment';
import { BCardHeader } from "bootstrap-vue-next";


/**
 * Apex-chart component
 */
export default {
    components: {
        Layout,
        PageHeader,
        BCardHeader
    },
    data() {
        return {
            columnChart : [],
            columnChartAux : [],
            columnChart2: [],
            pieChart: [],
            pieChart2: [],
            donutInstalaciones : [],
            donutMaintenance: [],
            title: "Cuadro de Mando",
            tableData: [],
            tableData2: [],
            tableDataPorDia: [],
            tableDataAgenda: [],
            //Primera tabla------------:
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            tableDate:null,
            fields: [
            ],
            //--------------------
            totalRows2: 1,
            currentPage2: 1,
            perPage2: 10,
            pageOptions2: [10, 25, 50, 100],
            filter2: null,
            filterOn2: [],
            sortBy2: "age",
            sortDesc2: false,
            tableDate2:null,
            fields2: [
            ],
            //--------------------
            totalRowsPorDia: 1,
            currentPagePorDia: 1,
            perPagePorDia: 10,
            pageOptionsPorDia: [10,25,50,100],
            filterOnPorDia: [],
            filterPorDia: null,
            sortByPorDia: "age",
            sortDescPorDia: false,
            fieldsPorDia: [],
            totalesPorDia : 0,
            tableDatePorDia:null,
            //--------------------
            currentPageAgenda: 1,
            perPageAgenda: 20,
            pageOptionsAgenda: [20,25,50,100],
            filterOnAgenda: [],
            filterAgenda: null,
            sortByAgenda: "age",
            sortDescAgenda: false,
            fieldsAgenda: [],
            totalesAgenda : 0,
            tableDateAgenda:null,
            //---------------------
            tableDateAux:null,
            InstalacionesDate : null,
            MantenimientosDate : null,
            MantenimientoDate : null,
            InstalacionDate : null,
            DiaryDate : null,
            RatioMantenimientoDate : null,
            RatioInstalacionesDate: null,
            AvanceMantenimientoDate:null,
            AvanceInstalacionDate: null,
            CiudadId1 : null,
            Ciudades : []
        };
    },
    mounted() {
        // Set the initial number of items
        this.totalRows2 = this.tableData2.length;
        this.totalRowsPorDia = this.tableDataPorDia.length;
        this.getCity();
        //obtener datos de la api
        this.getInstalaciones();
        this.getMantenimientos();
        //this.getTablePorDia();
        this.getTableMantenimientos();
        this.getTableInstalaciones();
        this.getRatioInstalaciones();
        this.getRatioMantenimientos();
        //this.getTableAgendaPorDias();
        this.getTableInstalacionesDia();
        this.getTableMantenimientosDia();
        // setInterval(() => {
        //         this.updateDataIfChanged();
        //     }, 300000);
    },
    methods:{
        async getCity(){
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'city/all');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                if (response && response.data.data) {
                    response.data.data.forEach(city => this.Ciudades.push(city.name));
                    this.CiudadId1 = this.Ciudades[0]
                } else {
                    this.CiudadId1 = "Lima"
                }
                this.getTableAgendaPorDias()
            } catch (error) {
                console.error(error);
            }
        },
        formatearHora(value){
            const date = moment(value, ['DD/MM/YYYY HH:mm:ss', 'YYYY-MM-DDTHH:mm:ss']);
            if (!date.isValid()) return ': ' + value;
            return date.format('HH:mm:ss');
        },
        onFilteredPorDia(filteredItems) {
            this.totalRowsPorDia = filteredItems.length;
            this.currentPagePorDia = 1;
        },
        async fetchData(url, timeoutMs = 12000) {
            try {
                const responsePromise = this.$http.get(this.$apiURL + url);
                const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeoutMs));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                return response.data;

            } catch (error) {

                return null;  // Retornar null o manejar de otra forma según sea necesario
            }
        },
        processTableData(data, tableData, fields, storageKey) {
            if (data.series && data.fields) {
                tableData.push(...data.series.map(i => ({ ...i })));
                fields.push(...data.fields.map(i => ({ key: i, sortable: true })));
                if(data.totales){
                    this.totalesPorDia = data.totales;
                }
                localStorage.setItem(storageKey, JSON.stringify({ data }));
            } else {
                this.loadFromLocalStorage(storageKey, tableData, fields);
            }
        },
        loadFromLocalStorage(storageKey, tableData, fields) {
            const currentData = JSON.parse(localStorage.getItem(storageKey));
            if (currentData) {
                this.processTableData(currentData.data, tableData, fields);
            }
        },
        async getTableMantenimientos() {
            try {
                const data = await this.fetchData('control-panel/maintenanceprogresstable');
                if(data !== null && 'series' in data && data.series.length>0){
                    this.processTableData(data, this.tableData2, this.fields2,'maintenance_progress');
                    this.MantenimientoDate = this.formatearHora(data.date)
                }
                else{
                    const currentData = JSON.parse(localStorage.getItem('maintenance_progress'));
                    if (currentData) {
                        this.processTableData(currentData.data, this.tableData2, this.fields2);
                    }
                    this.MantenimientoDate = this.formatearHora(currentData.data.date)
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableInstalaciones() {
            try {
                const data = await this.fetchData('control-panel/installationprogresstable');
                if(data !== null && 'series' in data && data.series.length>0){
                    this.processTableData(data, this.tableData, this.fields,'installation_progress_table');
                    this.InstalacionDate = this.formatearHora(data.date)
                }
                else{
                    const currentData = JSON.parse(localStorage.getItem('installation_progress_table'));
                    if (currentData) {
                        this.processTableData(currentData.data, this.tableData, this.fields);
                        this.InstalacionDate = this.formatearHora(currentData.data.date)
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableInstalacionesDia(){
            try {
                const response = await this.fetchData('control-panel/productiontableinstallation');
                if (response !== null && 'series' in response && response.series.length > 0) {
                    this.donutInstalaciones = {... constructor_donutchart(response.series, response.fields)}
                    localStorage.setItem('production_table_installation', JSON.stringify(response));
                    this.InstalacionesDate = this.formatearHora(response.date)
                }
                else{
                    const currentData = JSON.parse(localStorage.getItem('production_table_installation')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.donutInstalaciones = {... constructor_donutchart(currentData.series, currentData.fields)}
                        this.InstalacionesDate = this.formatearHora(currentData.date)
                    }
                    else {
                        this.donutInstalaciones = {... constructor_donutchart([], [])}
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableMantenimientosDia(){
            try {
                const response = await this.fetchData('control-panel/productiontablemaintenance');
                if (response !== null && 'series' in response && response.series.length>0) {
                    this.donutMaintenance = {... constructor_donutchart(response.series, response.fields)}
                    localStorage.setItem('production_table_mantenimientos', JSON.stringify(response));
                    this.MantenimientosDate = this.formatearHora(response.date)
                }
                else{
                    const currentData = JSON.parse(localStorage.getItem('production_table_mantenimientos')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.donutMaintenance = {... constructor_donutchart(currentData.series, currentData.fields)}
                        this.MantenimientosDate = this.formatearHora(currentData.date)
                    }
                    else {
                        this.donutMaintenance = {... constructor_donutchart([], [])}
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableAgendaPorDias(){
            try {
                if(this.CiudadId1 != null ){
                    this.$nextTick(async () => {
                        this.tableDataAgenda.splice(0, this.tableDataAgenda.length);
                        this.fieldsAgenda.splice(0, this.fieldsAgenda.length);
                        const data = await this.fetchData('control-panel/diarytable/'+this.CiudadId1);
                        if(data !== null && 'series' in data && data.series.length>0){
                            this.processTableData(data, this.tableDataAgenda, this.fieldsAgenda,'agenda_dias');
                            this.DiaryDate = this.formatearHora(data.date)
                            console.log(this.fieldsAgenda)
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('agenda_dias'));
                            if (currentData) {
                                this.processTableData(currentData.data, this.tableDataAgenda, this.fieldsAgenda);
                            }
                            this.DiaryDate = this.formatearHora(currentData.data.date)
                        }
                    }); 
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getInstalaciones() {
            try {
                const response = await this.fetchData('control-panel/installationprogressgraphic');
                if (response !== null && 'series' in response && response.series.length>0) {
                    this.columnChart = {... constructor_chart(response.series, response.categories)}
                    localStorage.setItem('installation_progress', JSON.stringify(response));
                    this.AvanceInstalacionDate = this.formatearHora(response.date)
                }
                else{
                    const currentData = JSON.parse(localStorage.getItem('installation_progress')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.columnChart = {... constructor_chart(currentData.series, currentData.categories)}
                        this.AvanceInstalacionDate = this.formatearHora(currentData.date)
                    }
                    else {
                        this.columnChart = {... constructor_chart([], [])}
                    }
                }

            } catch (error) {
                console.error(error);
            }
        },
        async getMantenimientos() {
            try {
                const response = await this.fetchData('control-panel/maintenanceprogressgraphic');
                if (response !== null && 'series' in response && response.series.length >0) {
                    this.columnChart2 = {... constructor_chart(response.series, response.categories)}
                    localStorage.setItem('mantenimientos_data', JSON.stringify(response));
                    this.AvanceMantenimientoDate = this.formatearHora(response.date)
                } else {
                    const currentData = JSON.parse(localStorage.getItem('mantenimientos_data')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.columnChart2 = {... constructor_chart(currentData.series, currentData.categories)}
                        this.AvanceMantenimientoDate = this.formatearHora(currentData.date)
                    }
                    else {
                        this.columnChart2 = {... constructor_chart([], [])}
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getRatioInstalaciones() {
            try {
                const response = await this.fetchData('control-panel/installationratiographic');

                if (response !== null && 'series' in response && response.series.length > 0) {
                    this.pieChart = {... constructor_piechart(response.series, response.labels)}
                    localStorage.setItem('installation_ratio', JSON.stringify(response));
                    this.RatioInstalacionesDate = this.formatearHora(response.date)
                } else {
                    const currentData = JSON.parse(localStorage.getItem('installation_ratio')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.pieChart = {... constructor_piechart(currentData.series, currentData.labels)}
                        this.RatioInstalacionesDate = this.formatearHora(currentData.date)
                    }
                    else {
                        this.pieChart = {... constructor_piechart([], [])}
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getRatioMantenimientos() {
            try {
                const response = await this.fetchData('control-panel/maintenanceratiographic');
                if (response !== null && 'series' in response && response.series.length>0) {
                    this.pieChart2 = {... constructor_piechart(response.series, response.labels,"distinto")}
                    localStorage.setItem('maintenance_ratio', JSON.stringify(response));
                    this.RatioMantenimientoDate = this.formatearHora(response.date)
                } else {
                    const currentData = JSON.parse(localStorage.getItem('maintenance_ratio')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.pieChart2 = {... constructor_piechart(currentData.series, currentData.labels,"distinto")}
                        this.RatioMantenimientoDate = this.formatearHora(currentData.date)
                    }
                    else {
                        this.pieChart2 = {... constructor_piechart([], [])}
                    }
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    middleware: "authentication"
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />

    <BRow>
    <BCol lg="6">
        <BCard no-body>
            <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                <BRow>
                    <BCol sm="7">
                        <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Avance instalaciones
                    </BCol>
                    <BCol sm="5">
                        Actualizado a las {{ AvanceInstalacionDate }}
                    </BCol>
                </BRow>
            </BCardHeader>
            <BCardBody>
                <!-- Column Charts -->
                <apexchart
                    class="apex-charts"
                    height="350"
                    type="bar"
                    dir="ltr"
                    :series="columnChart.series"
                    :options="columnChart.chartOptions"
                ></apexchart>
            </BCardBody>
        </BCard>
    </BCol>
    <BCol lg="6">
        <BCard no-body>
            <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                <BRow>
                    <BCol sm="7">
                        <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Avance mantenimientos
                    </BCol>
                    <BCol sm="5">
                        Actualizado a las {{ AvanceMantenimientoDate }}
                    </BCol>
                </BRow>
            </BCardHeader>
            <BCardBody>
                <!-- Column Charts -->
                <apexchart
                    class="apex-charts"
                    height="350"
                    type="bar"
                    dir="ltr"
                    :series="columnChart2.series"
                    :options="columnChart2.chartOptions"
                ></apexchart>
            </BCardBody>
        </BCard>
    </BCol>
    </BRow>
    <!-- end row -->

    <!-- end row -->
    <div class="row">
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Instalaciones
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ InstalacionDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <!-- Table -->
                    <div class="table-responsive mb-0">
                        <BTable
                            :items="tableData"
                            :fields="fields"
                            responsive="sm"
                            :per-page="perPage"
                            :current-page="currentPage"
                            :sort-by.sync="sortBy"
                            :sort-desc.sync="sortDesc"
                            :filter="filter"
                            :filter-included-fields="filterOn"
                            @filtered="onFiltered"
                        >
                        </BTable>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Mantenimientos
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ MantenimientoDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <!-- Table -->
                    <div class="table-responsive mb-0">
                        <BTable
                            :items="tableData2"
                            :fields="fields2"
                            responsive="sm"
                            :per-page="perPage2"
                            :current-page="currentPage2"
                            :sort-by.sync="sortBy2"
                            :sort-desc.sync="sortDesc2"
                            :filter="filter2"
                            :filter-included-fields="filterOn2"
                            @filtered="onFiltered"
                        >
                    </BTable>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
    </div>
    <div class="row">
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Producción día - Instalaciones
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ InstalacionesDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    
                    <!-- Donut Chart -->
                    <apexchart
                    class="apex-charts"
                    height="320"
                    type="donut"
                    dir="ltr"
                    :series="donutInstalaciones.series"
                    :options="donutInstalaciones.chartOptions"
                    ></apexchart>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Producción día - Reparaciones
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ MantenimientosDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <!-- Donut Chart -->
                    <apexchart
                    class="apex-charts"
                    height="320"
                    type="donut"
                    dir="ltr"
                    :series="donutMaintenance.series"
                    :options="donutMaintenance.chartOptions"
                    ></apexchart>
                </BCardBody>
            </BCard>
        </BCol>
    </div>
    <div class="row">
        
        <BCol lg="12">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Agenda a 7 días
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ DiaryDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <BRow>
                        <BCol cols="12">
                            Filtrar por:
                        </BCol>
                        <BCol cols="5">
                            <BFormSelect
                                v-model="CiudadId1"
                                size="sm"
                                :options="Ciudades"
                                @change="getTableAgendaPorDias()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <!-- Table -->
                    <div class="table-responsive mb-0">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th v-for="field in fieldsAgenda" :key="field.key">
                                        {{ field.key }} <!-- Mostrando el nombre del campo -->
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in tableDataAgenda" :key="item.id" >
                                    <td v-for="field in fieldsAgenda" :key="field.key" :class="{ 'background-special': item.Tipo === 'Total Migraciones' || item.Tipo === 'Total' || item.Tipo === 'Total Altas'}">
                                    {{ item[field.key] }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
    </div>
    <div class="row">
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Ratio de instalaciones tec
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ RatioInstalacionesDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <!-- Pie Chart -->
                    <apexchart
                        class="apex-charts"
                        height="320"
                        type="pie"
                        dir="ltr"
                        :series="pieChart.series"
                        :options="pieChart.chartOptions"
                    ></apexchart>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Ratio de mantenimientos tec
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ RatioMantenimientoDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <!-- Pie Chart -->
                    <apexchart
                        class="apex-charts"
                        height="320"
                        type="pie"
                        dir="ltr"
                        :series="pieChart2.series"
                        :options="pieChart2.chartOptions"
                    ></apexchart>
                </BCardBody>
            </BCard>
        </BCol>

    </div>
    <!-- end row -->
</Layout>
</template>
<style>
.background-special {
    font-weight: bold; /* Aplicar negrita */

}
.apex-charts text {
    font-family: var(--bs-font-sans-serif) !important;
    fill: #0d151d !important;
    font-weight: 400 !important;
}
</style>