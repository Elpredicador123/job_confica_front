<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import {constructor_chart,constructor_piechart,constructor_donutchart} from "@/components/constructor";
import moment from 'moment';


/**
 * Apex-chart component
 */
export default {
    components: {
        Layout,
        PageHeader
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
            totalRowsAgenda: 1,
            currentPageAgenda: 1,
            perPageAgenda: 4,
            pageOptionsAgenda: [4,10,25,50,100],
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
        };
    },
    mounted() {
        // Set the initial number of items
        this.totalRows2 = this.tableData2.length;
        this.totalRowsPorDia = this.tableDataPorDia.length;
        this.totalRowsAgenda = this.tableDataAgenda.length;

        //obtener datos de la api
        this.getInstalaciones();
        this.getMantenimientos();
        //this.getTablePorDia();
        this.getTableMantenimientos();
        this.getTableInstalaciones();
        this.getRatioInstalaciones();
        this.getRatioMantenimientos();
        this.getTableAgendaPorDias();
        this.getTableInstalacionesDia();
        this.getTableMantenimientosDia();
        // setInterval(() => {
        //         this.updateDataIfChanged();
        //     }, 300000);
    },
    methods:{
        formatearHora(value){
            if (!value) return '';
            return moment(value, 'DD/MM/YYYY HH:mm:ss').format('HH:mm:ss');
        },
        onFilteredPorDia(filteredItems) {
            this.totalRowsPorDia = filteredItems.length;
            this.currentPagePorDia = 1;
        },
        onFilteredAgenda(filteredItems) {
            this.totalRowsAgenda = filteredItems.length;
            this.currentPageAgenda = 1;
        },
        async fetchData(url, timeoutMs = 9000) {
            try {
                const responsePromise = this.$http.get(this.$apiURL + url);
                const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeoutMs));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                return response.data;

            } catch (error) {

                return null;  // Retornar null o manejar de otra forma según sea necesario
            }
        },
        processTableData(data, tableData, fields, storageKey,tableDate) {
            if (data.series && data.fields) {
                tableData.push(...data.series.map(i => ({ ...i })));
                fields.push(...data.fields.map(i => ({ key: i, sortable: true })));
                if(data.totales){
                    this.totalesPorDia = data.totales;
                }
                tableDate = { ...data.date };
                localStorage.setItem(storageKey, JSON.stringify({ data }));
            } else {
                this.loadFromLocalStorage(storageKey, tableData, fields,tableDate);
            }
        },
        loadFromLocalStorage(storageKey, tableData, fields,tableDate) {
            const currentData = JSON.parse(localStorage.getItem(storageKey));
            if (currentData) {
                this.processTableData(currentData.data, tableData, fields,tableDate);
            }
        },
        async getTableMantenimientos() {
            try {
                const data = await this.fetchData('control-panel/maintenanceprogresstable');
                if(data.series.length>0){
                    this.processTableData(data, this.tableData2, this.fields2,'maintenance_progress',this.tableDate2);
                }
                else{
                    this.loadFromLocalStorage('maintenance_progress', this.tableData2, this.fields2,this.tableDate2);
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableInstalaciones() {
            try {
                const data = await this.fetchData('control-panel/installationprogresstable');
                if(data.series.length>0){
                    this.processTableData(data, this.tableData, this.fields,'installation_progress_table',this.tableDate);
                }
                else{
                    this.loadFromLocalStorage('installation_progress_table', this.tableData, this.fields,this.tableDate);
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableInstalacionesDia(){
            try {
                const response = await this.fetchData('control-panel/productiontableinstallation');
                if (response.series.length > 0) {
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
                if (response.series.length>0) {
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
                const data = await this.fetchData('control-panel/diarytable');
                if(data.series.length>0){
                    this.processTableData(data, this.tableDataAgenda, this.fieldsAgenda,'agenda_dias',this.tableDateAux);
                    this.totalRowsAgenda = this.tableDataAgenda.length;
                }
                else{
                    this.loadFromLocalStorage('agenda_dias', this.tableDataAgenda, this.fieldsAgenda,this.tableDateAux);
                    this.totalRowsAgenda = this.tableDataAgenda.length;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getInstalaciones() {
            try {
                const response = await this.fetchData('control-panel/installationprogressgraphic');

                if (response) {
                    this.columnChart = {... constructor_chart(response.series, response.categories)}
                    localStorage.setItem('installation_progress', JSON.stringify(response));
                }
                else{
                    const currentData = JSON.parse(localStorage.getItem('installation_progress')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.columnChart = {... constructor_chart(currentData.data.series, currentData.data.categories)}
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
                if (response) {
                    this.columnChart2 = {... constructor_chart(response.series, response.categories)}
                    localStorage.setItem('mantenimientos_data', JSON.stringify(response));
                } else {
                    const currentData = JSON.parse(localStorage.getItem('mantenimientos_data')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.columnChart2 = {... constructor_chart(currentData.series, currentData.categories)}
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

                if (response) {
                    this.pieChart = {... constructor_piechart(response.series, response.labels)}
                    localStorage.setItem('installation_ratio', JSON.stringify(response));
                } else {
                    const currentData = JSON.parse(localStorage.getItem('installation_ratio')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.pieChart = {... constructor_piechart(currentData.series, currentData.labels)}
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
                if (response) {
                    this.pieChart2 = {... constructor_piechart(response.series, response.labels,"distinto")}
                    localStorage.setItem('maintenance_ratio', JSON.stringify(response));
                } else {
                    const currentData = JSON.parse(localStorage.getItem('maintenance_ratio')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.pieChart2 = {... constructor_piechart(currentData.series, currentData.labels,"distinto")}
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
            <BCardBody>
                <BCardTitle class="mb-4">Avance instalaciones</BCardTitle>
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
            <BCardBody>
                <BCardTitle class="mb-4">Avance mantenimientos</BCardTitle>
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
                <BCardBody>
                    <BCardTitle>Instalaciones</BCardTitle>
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
                <BCardBody>
                    <BCardTitle>Mantenimientos</BCardTitle>
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
                <BCardBody>
                    <BRow>
                        <BCol sm="7">
                            <BCardTitle class="mb-4">Producción día - Instalaciones</BCardTitle>
                        </BCol>
                        <BCol sm="5">
                            <p class="text-muted">Actualizado a las {{ InstalacionesDate }}</p>
                        </BCol>
                    </BRow>
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
                <BCardBody>
                    <BRow>
                        <BCol sm="7">
                            <BCardTitle class="mb-4">Producción día - Reparaciones</BCardTitle>
                        </BCol>
                        <BCol sm="5">
                            <p class="text-muted">Actualizado a las {{ MantenimientosDate }}</p>
                        </BCol>
                    </BRow>
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
                <BCardBody>
                    <BCardTitle>Agenda a 7 días</BCardTitle>
                    <!-- Table -->
                    <div class="table-responsive mb-0">
                        <BTable
                            :items="tableDataAgenda"
                            :fields="fieldsAgenda"
                            responsive="sm"
                            :per-page="perPageAgenda"
                            :current-page="currentPageAgenda"
                            :sort-by.sync="sortByAgenda"
                            :sort-desc.sync="sortDescAgenda"
                            :filter="filterAgenda"
                            :filter-included-fields="filterOnAgenda"
                            @filtered="onFilteredAgenda"
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
                <BCardBody>
                    <BCardTitle class="mb-4">Ratio de instalaciones tec</BCardTitle>
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
                <BCardBody>
                    <BCardTitle class="mb-4">Ratio de mantenimientos tec</BCardTitle>
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
