<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import {constructor_barchart} from "@/components/constructor";
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
            title: "Provisiónes",
            tableDataSup: [],
            tableDataTec: [],
            ContrataBar: [], 
            GestorBar: [],
            GestorAgenda: [],
            GestorOrdenes: [
            ],
            GestorAgendaId: null,
            GestorOrdenId: null,
            Ciudades : [],
            ciudades_form: {},
            ciudadId1: null,
            ciudadId2: null,
            ciudadId3: null,
            ciudadId4: null,
            items: [
                {
                    text: "Privisiones",
                }
            ],
            //--------------------
            totalRowsSup: 1,
            currentPageSup: 1,
            perPageSup: 3,
            pageOptionsSup: [3,10,25,50,100],
            filterOnSup: [],
            filterSup: null,
            sortBySup: "age",
            sortDescSup: false,
            fieldsSup: [],
            totalesSup : 0,
            //--------------------
            totalRowsTec: 1,
            currentPageTec: 1,
            perPageTec: 3,
            pageOptionsTec: [3,10,25,50,100],
            filterOnTec: [],
            filterTec: null,
            sortByTec: "age",
            sortDescTec: false,
            fieldsTec: [],
            totalesTec : 0,
            //---------------------
            previousContrataData: null,
            previousGestorData: null,
            previousTableSupData: null,
            previousTableTecData: null,
            previousCityData: null
        };
    },
    mounted() {
        // Set the initial number of items
        this.totalRowsSup = this.tableDataSup.length;
        this.totalRowsTec = this.tableDataTec.length;
        //obtener datos de la api
        this.getCity();
    },
    methods:{
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
        async getContrata(){
            if(this.ciudadId1 != null){
                this.$nextTick(async () => {
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL + 'provision/diarycontratagraphic/'+this.ciudadId1);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);
                    if (response) {
                        this.ContrataBar = {... constructor_barchart(response.data.series, response.data.categories)}
                        localStorage.setItem('contrata_bar_provision', JSON.stringify(response));
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('contrata_bar_provision')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            this.ContrataBar = {... constructor_barchart(currentData.data.series, currentData.data.categories)}
                        }
                        else{
                            this.ContrataBar = {... constructor_barchart([],[])}
                        }
                    }
                });
            }
            else{
                this.ContrataBar = {... constructor_barchart([],[])}
            }

        },
        async getGestor() {
            try {
                if(this.ciudadId2 != null){
                    this.$nextTick(async () => {
                        const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                        const responsePromise = this.$http.get(this.$apiURL + 'provision/diarymanagergraphic/'+this.ciudadId2);
                        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                        const response = await Promise.race([responsePromise, timeoutPromise]);
                        if (response) {
                            this.GestorBar = {... constructor_barchart(response.data.series, response.data.categories)}
                            localStorage.setItem('diary_manager_provision', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('diary_manager_provision')); // Convertir los datos del usuario a JSON
                            if(currentData){
                                this.GestorBar = {... constructor_barchart(currentData.data.series, currentData.data.categories)}
                            }
                            else{
                                this.GestorBar = {... constructor_barchart([],[])}
                            }
                        }
                    })
                }
                else{
                    this.GestorBar = {... constructor_barchart([],[])}
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableSup(){
            try {
                if(this.ciudadId3 != null){
                    this.$nextTick(async () => {
                        const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                        const responsePromise = this.$http.get(this.$apiURL + 'provision/childhoodbreakdownsmanagers/'+this.ciudadId3);
                        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                        const response = await Promise.race([responsePromise, timeoutPromise]);
                        this.tableDataSup.splice(0, this.tableDataSup.length);
                        this.fieldsSup.splice(0, this.fieldsSup.length);
                        if (response) {
                            response.data.series.map(i => this.tableDataSup.push({ ...i }));
                            response.data.fields.map(i => this.fieldsSup.push({ key: i, sortable : true }));
                            this.totalRowsSup = this.tableDataSup.length;
                            localStorage.setItem('installation_manager_provision', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('installation_manager_provision')); // Convertir los datos del usuario a JSON
                            if(currentData){
                                currentData.data.series.map(i => this.tableDataSup.push({ ...i }));
                                currentData.data.fields.map(i => this.fieldsSup.push({ key: i, sortable : true }));
                                this.totalRowsSup = this.tableDataSup.length;
                            }
                        }
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableTec(){
            try {
                if(this.ciudadId4 != null){
                    this.$nextTick(async () => { 
                        const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                        const responsePromise = this.$http.get(this.$apiURL + 'provision/childhoodbreakdownstechnicians/'+this.ciudadId4);
                        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                        const response = await Promise.race([responsePromise, timeoutPromise]);
                        this.tableDataTec.splice(0, this.tableDataTec.length);
                        this.fieldsTec.splice(0, this.fieldsTec.length);

                        if (response) {
                            response.data.series.map(i => this.tableDataTec.push({ ...i }));
                            response.data.fields.map(i => this.fieldsTec.push({ key: i, sortable : true }));
                            this.totalRowsTec = this.tableDataTec.length;
                            localStorage.setItem('childhood_table', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('childhood_table')); // Convertir los datos del usuario a JSON
                            if(currentData){
                                currentData.data.series.map(i => this.tableDataTec.push({ ...i }));
                                currentData.data.fields.map(i => this.fieldsTec.push({ key: i, sortable : true }));
                                this.totalRowsTec = this.tableDataTec.length;
                            }
                        }
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getCity(){
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'city/all');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                if (response) {
                    response.data.data.forEach(city => this.Ciudades.push(city.name));
                    this.ciudadId1 = this.Ciudades[0];
                    this.ciudadId2 = this.Ciudades[0];
                    this.ciudadId3 = this.Ciudades[0];
                    this.ciudadId4 = this.Ciudades[0];
                } else {
                    this.ciudadId = "Lima";
                    this.ciudadId2 = "Lima";
                    this.ciudadId3 = "Lima";
                    this.ciudadId4 = "Lima";
                }
                this.getTableTec();
                this.getContrata();
                this.getGestor();
                this.getTableSup();
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
                    <BCardTitle class="mb-4">Cumplimiento agenda - Contrata</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="ciudadId1"
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
                <BCardBody>
                    <BCardTitle class="mb-4">Cumplimiento agenda - Gestor</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="ciudadId2"
                                size="sm"
                                :options="Ciudades"
                                @change="getGestor()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <!-- Bar Chart -->
                    <apexchart
                        class="apex-charts"
                        height="350"
                        type="bar"
                        dir="ltr"
                        :series="GestorBar.series"
                        :options="GestorBar.chartOptions"
                    ></apexchart>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Averías de infancia - Sup</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="ciudadId3"
                                size="sm"
                                :options="Ciudades"
                                @change="getTableSup()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                            <label class="d-inline-flex align-items-center">
                                Show&nbsp;
                                <BFormSelect
                                    v-model="perPageSup"
                                    size="sm"
                                    :options="pageOptionsSup"
                                ></BFormSelect
                                >&nbsp;entries
                            </label>
                            </div>
                        </BCol>
                        <!-- Search -->
                        <div class="col-sm-12 col-md-6">
                            <div
                            id="tickets-table_filter"
                            class="dataTables_filter text-md-end"
                            >
                            <label class="d-inline-flex align-items-center">
                                Search:
                                <BFormInput
                                v-model="filterSup"
                                type="search"
                                placeholder="Search..."
                                class="form-control form-control-sm ms-2"
                                ></BFormInput>
                            </label>
                            </div>
                        </div>
                        <!-- End search -->
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
                    <BRow>
                        <BCol>
                            <div
                            class="dataTables_paginate paging_simple_numbers float-end"
                            >
                            <ul class="pagination pagination-rounded mb-0">
                                <!-- pagination -->
                                <BPagination
                                v-model="currentPageSup"
                                :total-rows="totalRowsSup"
                                :per-page="perPageSup"
                                ></BPagination>
                            </ul>
                            </div>
                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Averías de infancia - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="ciudadId4"
                                size="sm"
                                :options="Ciudades"
                                @change="getTableTec()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <BFormSelect
                                        v-model="perPageTec"
                                        size="sm"
                                        :options="pageOptionsTec"
                                    ></BFormSelect
                                    >&nbsp;entries
                                </label>
                            </div>
                        </BCol>
                        <!-- Search -->
                        <div class="col-sm-12 col-md-6">
                            <div id="tickets-table_filter" class="dataTables_filter text-md-end">
                                <label class="d-inline-flex align-items-center">
                                    Search:
                                    <BFormInput
                                    v-model="filterTec"
                                    type="search"
                                    placeholder="Search..."
                                    class="form-control form-control-sm ms-2"
                                    ></BFormInput>
                                </label>
                            </div>
                        </div>
                        <!-- End search -->
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
                <BRow>
                    <BCol>
                        <div class="dataTables_paginate paging_simple_numbers float-end">
                            <ul class="pagination pagination-rounded mb-0">
                                <!-- pagination -->
                                <BPagination
                                    v-model="currentPageTec"
                                    :total-rows="totalRowsTec"
                                    :per-page="perPageTec"
                                ></BPagination>
                            </ul>
                        </div>
                    </BCol>
                </BRow>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</Layout>
</template>
