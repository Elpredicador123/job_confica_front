<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import {constructor_barchart,constructor_piechart} from "@/components/constructor";
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
            title: "Mantenimiento",
            tableDataSup: [],
            tableDataTec: [],
            ContrataBar: [],
            pieChart: [],
            pieChart2: [],
            GestorAgenda: [],
            GestorOrdenes: [
            ],
            GestorAgendaId: null,
            GestorOrdenId: null,
            Ciudades : [],
            CiudadId1: null,
            CiudadId2: null,
            CiudadId3: null,
            CiudadId4: null,
            //--------------------
            totalRowsSup: 1,
            currentPageSup: 1,
            perPageSup: 20,
            pageOptionsSup: [3,10,25,50,100],
            filterOnSup: [],
            filterSup: null,
            sortBySup: "age",
            sortDescSup: false,
            fieldsSup: [],
            //--------------------
            totalRowsTec: 1,
            currentPageTec: 1,
            perPageTec: 20,
            pageOptionsTec: [3,10,25,50,100],
            filterOnTec: [],
            filterTec: null,
            sortByTec: "age",
            sortDescTec: false,
            fieldsTec: [],
            //--------------------
            ContrataDate : null,
            SupDate : null,
            TecDate : null,
            InstalacionesDate : null,
            MantenimientosDate : null,
        };
    },
    mounted() {
        //obtener datos de la api
        this.getCity();
        this.getRatioInstalaciones();
        this.getRatioMantenimientos();
    },
    methods:{
        formatearHora(value){
            const date = moment(value, ['DD/MM/YYYY HH:mm:ss', 'YYYY-MM-DDTHH:mm:ss']);
            if (!date.isValid()) return ': ' + value;
            return date.format('HH:mm:ss');
        },
        onFilteredSup(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsSup = filteredItems.length;
            this.currentPageSup = 1;
        },
        onFilteredTec(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsTec = filteredItems.length;
            this.currentPageTec = 1;
        },
        //-------------------------------------------------------
        async getContrata(){
            if(this.CiudadId1 != null){
                this.$nextTick(async () => {
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL + 'maintenance/ineffectivecontratagraphic/'+this.CiudadId1);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);
                    if (response && response !== null && 'series' in response.data && response.data.series.length>0) {
                        this.ContrataBar = {... constructor_barchart(response.data.series, response.data.categories)}
                        localStorage.setItem('ineffective_contrata', JSON.stringify(response));
                        this.ContrataDate = this.formatearHora(response.data.date)
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('ineffective_contrata')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            this.ContrataBar = {... constructor_barchart(currentData.data.series, currentData.data.categories)}
                            this.ContrataDate = this.formatearHora(currentData.data.date)
                        }
                        else{
                            this.ContrataBar = {... constructor_barchart([],[])}
                        }
                    }
                })
            }
            else{
                this.ContrataBar = {... constructor_barchart([], [])}
            }
        },
        async getTableSup(){
            if(this.CiudadId3 != null){
                this.$nextTick(async () => {
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL + 'maintenance/childhoodbreakdownsmanagers/'+this.CiudadId3);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);
                    
                    this.tableDataSup.splice(0, this.tableDataSup.length);
                    this.fieldsSup.splice(0, this.fieldsSup.length);

                    if (response && response !== null && 'series' in response.data && response.data.series.length>0) {
                        response.data.series.map(i => this.tableDataSup.push({ ...i }));
                        response.data.fields.map(i => this.fieldsSup.push({ key: i, sortable : true }));
                        this.totalRowsSup = this.tableDataSup.length;
                        localStorage.setItem('childhood_break', JSON.stringify(response));
                        this.SupDate = this.formatearHora(response.data.date)
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('childhood_break')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            currentData.data.series.map(i => this.tableDataSup.push({ ...i }));
                            currentData.data.fields.map(i => this.fieldsSup.push({ key: i, sortable : true }));
                            this.totalRowsSup = this.tableDataSup.length;
                            this.SupDate = this.formatearHora(currentData.data.date)
                        }
                    }
                });
            }
        },
        async getTableTec(){
            if(this.CiudadId4 != null){
                this.$nextTick(async () => {
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL + 'maintenance/childhoodbreakdownstechnicians/'+this.CiudadId4);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);
                    this.tableDataTec.splice(0, this.tableDataTec.length);
                    this.fieldsTec.splice(0, this.fieldsTec.length);

                    if (response && response !== null && 'series' in response.data && response.data.series.length>0) {
                        response.data.series.map(i => this.tableDataTec.push({ ...i }));
                        response.data.fields.map(i => this.fieldsTec.push({ key: i, sortable : true }));
                        this.totalRowsTec = this.tableDataTec.length;
                        localStorage.setItem('childhood_break_downs', JSON.stringify(response));
                        this.TecDate = this.formatearHora(response.data.date)
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('childhood_break_downs')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            currentData.data.series.map(i => this.tableDataTec.push({ ...i }));
                            currentData.data.fields.map(i => this.fieldsTec.push({ key: i, sortable : true }));
                            this.totalRowsTec = this.tableDataTec.length;
                            this.TecDate = this.formatearHora(currentData.data.date)
                        }
                    }
                });
            }
        },
        async getCity(){ 
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'city/all');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                if (response && response.data.data) {
                    response.data.data.forEach(city => this.Ciudades.push(city.name));
                    this.CiudadId1 = this.Ciudades[0]
                    this.CiudadId2 = this.Ciudades[0]
                    this.CiudadId3 = this.Ciudades[0]
                    this.CiudadId4 = this.Ciudades[0]
                } else {
                    this.CiudadId1 = "Lima"
                    this.CiudadId2 = "Lima"
                    this.CiudadId3 = "Lima"
                    this.CiudadId4 = "Lima"
                }
                // Realiza otras operaciones después de obtener las ciudades
                this.getContrata();
                this.getTableSup();
                this.getTableTec();
            } catch (error) {
                console.error(error);
            }
        },
        async getRatioInstalaciones(){
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'maintenance/childhoodbreakdownsgeneral');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);

                if (response && response !== null && 'series' in response.data && response.data.series.length>0) {
                    this.pieChart = {... constructor_piechart(response.data.series, response.data.categories)}
                    localStorage.setItem('child_hood_break', JSON.stringify(response));
                    this.InstalacionesDate = this.formatearHora(response.data.date)
                } else {
                    const currentData = JSON.parse(localStorage.getItem('child_hood_break')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.pieChart = {... constructor_piechart(currentData.data.series, currentData.data.categories)}
                        this.InstalacionesDate = this.formatearHora(currentData.data.date)
                    }
                    else {
                        this.pieChart = {... constructor_piechart([], [])}
                    }
                }
            } catch (error) {
                console.error(error);  
            }
        },
        async getRatioMantenimientos(){
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'maintenance/ineffectivedistributionratiographic');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);

                if (response && response !== null && 'series' in response.data && response.data.series.length>0) {
                    this.pieChart2 = {... constructor_piechart(response.data.series, response.data.categories)}
                    localStorage.setItem('ineffective_distribution', JSON.stringify(response));
                    this.MantenimientosDate = this.formatearHora(response.data.date)
                } else {
                    const currentData = JSON.parse(localStorage.getItem('ineffective_distribution')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.pieChart2 = {... constructor_piechart(currentData.data.series, currentData.data.categories)}
                        this.MantenimientosDate = this.formatearHora(currentData.data.date)
                    }
                    else {
                        this.pieChart2 = {... constructor_piechart([], [])}
                    }
                }
            } catch (error) {
                console.error(error);
            }
        }
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
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Inefectiva Gestor
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ ContrataDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <BCardTitle class="mb-4"></BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="CiudadId1"
                                size="sm"
                                :options="Ciudades"
                                @change="getContrata()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <!-- Bar Chart -->
                    <apexchart
                        class="apex-charts"
                        height="350"
                        type="bar"
                        dir="ltr"
                        :series="ContrataBar.series"
                        :options="ContrataBar.chartOptions"
                    ></apexchart>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Distrubución Inefectiva
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ MantenimientosDate }}
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
        <BCol lg="12">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Distrubución Reitero
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ InstalacionesDate }}
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
        <BCol lg="12">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Averías Reiteradas - Sup
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ SupDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="CiudadId3"
                                size="sm"
                                :options="Ciudades"
                                @change="getTableSup()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <!-- Table -->
                    <div class="table-responsive mb-0">
                        <BTable
                            :items="tableDataSup"
                            :fields="fieldsSup"
                            responsive="sm"
                            :per-page="perPageSup"
                            :current-page="currentPageSup"
                            :sort-by.sync="sortBySup"
                            :sort-desc.sync="sortDescSup"
                            :filter="filterSup"
                            :filter-included-fields="filterOnSup"
                            @filtered="onFilteredSup"
                        >                    
                    </BTable>
                    </div>                   
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="12">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Averías Reiteradas - Tec
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ TecDate }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="CiudadId4"
                                size="sm"
                                :options="Ciudades"
                                @change="getTableTec()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <!-- Table -->
                    <div class="table-responsive mb-0">
                        <BTable
                            :items="tableDataTec"
                            :fields="fieldsTec"
                            responsive="sm"
                            :per-page="perPageTec"
                            :current-page="currentPageTec"
                            :sort-by.sync="sortByTec"
                            :sort-desc.sync="sortDescTec"
                            :filter="filterTec"
                            :filter-included-fields="filterOnTec"
                            @filtered="onFilteredTec"
                        >                    
                        </BTable>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</Layout>
</template>
