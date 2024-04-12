<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import {constructor_piechart} from "@/components/constructor";
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
            title: "Gestión",
            Ciudades : [],
            Months: [],
            Gestor: [],
            CiudadId1: null,
            CiudadId2: null,
            CiudadId3: null,
            CiudadId4: null,
            CiudadId5: null,
            CiudadId6: null,
            Month1: null,
            Month2: null,
            Month5: null,
            Month6: null,
            //-------------------
            pieChart: [],
            //--------------------
            tableDataEfectividad: [],
            totalRowsEfectividad: 1,
            currentPageEfectividad: 1,
            perPageEfectividad: 3,
            pageOptionsEfectividad: [3,10,25,50,100],
            filterOnEfectividad: [],
            filterEfectividad: null,
            sortByEfectividad: "age",
            sortDescEfectividad: false,
            fieldsEfectividad: [],
            totalesEfectividad : 0,
            //--------------------
            tableDataInspeccionesTec: [],
            totalRowsInspeccionesTec: 1,
            currentPageInspeccionesTec: 1,
            perPageInspeccionesTec: 3,
            pageOptionsInspeccionesTec: [3,10,25,50,100],
            filterOnInspeccionesTec: [],
            filterInspeccionesTec: null,
            sortByInspeccionesTec: "age",
            sortDescInspeccionesTec: false,
            fieldsInspeccionesTec: [],
            totalesInspeccionesTec : 0,
            //--------------------
            tableDataAvanceTec: [],
            totalRowsAvanceTec: 1,
            currentPageAvanceTec: 1,
            perPageAvanceTec: 3,
            pageOptionsAvanceTec: [3,10,25,50,100],
            filterOnAvanceTec: [],
            filterAvanceTec: null,
            sortByAvanceTec: "age",
            sortDescAvanceTec: false,
            fieldsAvanceTec: [],
            totalesAvanceTec : 0,
            //--------------------
            tableDataAuditoria: [],
            totalRowsAuditoria: 1,
            currentPageAuditoria: 1,
            perPageAuditoria: 3,
            pageOptionsAuditoria: [3,10,25,50,100],
            filterOnAuditoria: [],
            filterAuditoria: null,
            sortByAuditoria: "age",
            sortDescAuditoria: false,
            fieldsAuditoria: [],
            totalesAuditoria : 0,
            //--------------------
            tableDataRestace: [],
            totalRowsRestace: 1,
            currentPageRestace: 1,
            perPageRestace: 3,
            pageOptionsRestace: [3,10,25,50,100],
            filterOnRestace: [],
            filterRestace: null,
            sortByRestace: "age",
            sortDescRestace: false,
            fieldsRestace: [],
            totalesRestace : 0,
            //--------------------
            tableDataErrorTec: [],
            totalRowsErrorTec: 1,
            currentPageErrorTec: 1,
            perPageErrorTec: 3,
            pageOptionsErrorTec: [3,10,25,50,100],
            filterOnErrorTec: [],
            filterErrorTec: null,
            sortByErrorTec: "age",
            sortDescErrorTec: false,
            fieldsErrorTec: [],
            totalesErrorTec : 0,
            //--------------------
            tableDataRescate: [],
            totalRowsRescate: 1,
            currentPageRescate: 1,
            perPageRescate: 3,
            pageOptionsRescate: [3,10,25,50,100],
            filterOnRescate: [],
            filterRescate: null,
            sortByRescate: "age",
            sortDescRescate: false,
            fieldsRescate: [],
            totalesRescate : 0,
        };
    },
    mounted() {
        // Set the initial number of items
        //obtener datos de la api
        this.getCity();
        this.getErrorCalidad();
    },
    methods:{
        onFilteredEfectividad(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsEfectividad = filteredItems.length;
            this.currentPageEfectividad = 1;
        },
        onFilteredAuditoria(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.tableDataAuditoria = filteredItems.length;
            this.currentPageAuditoria = 1;
        },
        onFilteredInspeccionesTec(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.tableDataInspeccionesTec = filteredItems.length;
            this.currentPageInspeccionesTec = 1;
        },
        onFilteredAvanceTec(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.tableDataAvanceTec = filteredItems.length;
            this.currentPageAvanceTec = 1;
        },
        onFilteredRescate(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.tableDataRescate = filteredItems.length;
            this.currentPageRescate = 1;
        },
        onFilteredErrorTec(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.tableDataErrorTec = filteredItems.length;
            this.currentPageErrorTec = 1;
        },
        //---------------------------------------
        async getEfectividad(){
            if(this.CiudadId1 != null && this.Month1 != null){
                this.$nextTick(async () => {

                    this.tableDataEfectividad.splice(0, this.tableDataEfectividad.length);
                    this.fieldsEfectividad.splice(0, this.fieldsEfectividad.length);
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL+'quality/inspectioneffectivenesstable/'+this.CiudadId1 +"/"+this.Month1);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);

                    if (response) {
                        response.data.series.map(i => this.tableDataEfectividad.push({ ...i }));
                        response.data.categories.map(i => this.fieldsEfectividad.push({ key: i, sortable : true }));
                        this.totalRowsEfectividad = this.tableDataEfectividad.length;
                        localStorage.setItem('inspection_efectiveness', JSON.stringify(response));
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('inspection_efectiveness')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            currentData.data.series.map(i => this.tableDataEfectividad.push({ ...i }));
                            currentData.data.categories.map(i => this.fieldsEfectividad.push({ key: i, sortable : true }));
                            this.totalRowsEfectividad = this.tableDataEfectividad.length;
                        }
                    }
                });
            }
        },
        async getAuditoria(){
            if(this.CiudadId2 != null && this.Month2 != null){
                this.$nextTick(async () => {
                    this.tableDataAuditoria.splice(0, this.tableDataAuditoria.length);
                    this.fieldsAuditoria.splice(0, this.fieldsAuditoria.length);
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL+'quality/auditsprogresstable/'+this.CiudadId2 +"/"+this.Month2);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);

                    if (response) {
                        response.data.series.map(i => this.tableDataAuditoria.push({ ...i }));
                        response.data.categories.map(i => this.fieldsAuditoria.push({ key: i, sortable : true }));
                        this.totalRowsAuditoria = this.tableDataAuditoria.length;
                        localStorage.setItem('audits_progress_table', JSON.stringify(response));
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('audits_progress_table')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            currentData.data.series.map(i => this.tableDataAuditoria.push({ ...i }));
                            currentData.data.categories.map(i => this.fieldsAuditoria.push({ key: i, sortable : true }));
                            this.totalRowsAuditoria = this.tableDataAuditoria.length;
                        }
                    }
                });
            }
        },
        async getInspeccionesTec(){
            if(this.CiudadId5 != null && this.Month5 != null){
                this.$nextTick(async () => {
                    this.tableDataInspeccionesTec.splice(0, this.tableDataInspeccionesTec.length);
                    this.fieldsInspeccionesTec.splice(0, this.fieldsInspeccionesTec.length);
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL+'quality/inspectioneffectivenessbytectable/'+this.CiudadId5 +"/"+this.Month5);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);

                    if (response) {
                        response.data.series.map(i => this.tableDataInspeccionesTec.push({ ...i }));
                        response.data.categories.map(i => this.fieldsInspeccionesTec.push({ key: i, sortable : true }));
                        this.totalRowsInspeccionesTec = this.tableDataInspeccionesTec.length;
                        localStorage.setItem('inspection_effective', JSON.stringify(response));
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('inspection_effective')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            currentData.data.series.map(i => this.tableDataInspeccionesTec.push({ ...i }));
                            currentData.data.categories.map(i => this.fieldsInspeccionesTec.push({ key: i, sortable : true }));
                            this.totalRowsInspeccionesTec = this.tableDataInspeccionesTec.length;
                        }
                    }
                });
            }
        },
        async getAvanceTec(){
            if(this.CiudadId6 != null && this.Month6 != null){
                this.$nextTick(async () => {
                    this.tableDataAvanceTec.splice(0, this.tableDataAvanceTec.length);
                    this.fieldsAvanceTec.splice(0, this.fieldsAvanceTec.length);
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL+'quality/auditsprogressbytectable/'+this.CiudadId6 +"/"+this.Month6);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);

                    if (response) {
                        response.data.series.map(i => this.tableDataAvanceTec.push({ ...i }));
                        response.data.categories.map(i => this.fieldsAvanceTec.push({ key: i, sortable : true }));
                        this.totalRowsAvanceTec = this.tableDataAvanceTec.length;
                        localStorage.setItem('audits_progress_tec', JSON.stringify(response));
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('audits_progress_tec')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            currentData.data.series.map(i => this.tableDataAvanceTec.push({ ...i }));
                            currentData.data.categories.map(i => this.fieldsAvanceTec.push({ key: i, sortable : true }));
                            this.totalRowsAvanceTec = this.tableDataAvanceTec.length;
                        }
                    }
                });
            }
        },
        async getRescate(){
            if(this.CiudadId3 != null){
                this.$nextTick(async () => {
                    this.tableDataRescate.splice(0, this.tableDataRescate.length);
                    this.fieldsRescate.splice(0, this.fieldsRescate.length);
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL + 'quality/errorsevidencetable/' + this.CiudadId3);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);

                    if (response) {
                        response.data.series.map(i => this.tableDataRescate.push({ ...i }));
                        response.data.categories.map(i => this.fieldsRescate.push({ key: i, sortable : true }));
                        this.totalRowsRescate = this.tableDataRescate.length;
                        localStorage.setItem('errors_evidence', JSON.stringify(response));
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('errors_evidence')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            currentData.data.series.map(i => this.tableDataRescate.push({ ...i }));
                            currentData.data.categories.map(i => this.fieldsRescate.push({ key: i, sortable : true }));
                            this.totalRowsRescate = this.tableDataRescate.length;
                        }
                    }
                });
            }
        },
        async getErrorTec(){
            if(this.CiudadId4 != null){
                this.$nextTick(async () => {
                    this.tableDataErrorTec.splice(0, this.tableDataErrorTec.length);
                    this.fieldsErrorTec.splice(0, this.fieldsErrorTec.length);
                    const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                    const responsePromise = this.$http.get(this.$apiURL + 'quality/errorsevidencebytectable/' + this.CiudadId4);
                    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                    const response = await Promise.race([responsePromise, timeoutPromise]);
                    if (response) {
                        response.data.series.map(i => this.tableDataErrorTec.push({ ...i }));
                        response.data.categories.map(i => this.fieldsErrorTec.push({ key: i, sortable : true }));
                        this.totalRowsErrorTec = this.tableDataErrorTec.length;
                        localStorage.setItem('maintenance_progress_calidad', JSON.stringify(response));
                    }
                    else{
                        const currentData = JSON.parse(localStorage.getItem('maintenance_progress_calidad')); // Convertir los datos del usuario a JSON
                        if(currentData){
                            currentData.data.series.map(i => this.tableDataErrorTec.push({ ...i }));
                            currentData.data.categories.map(i => this.fieldsErrorTec.push({ key: i, sortable : true }));
                            this.totalRowsErrorTec = this.tableDataErrorTec.length;
                        }
                    }
                });
            }
        },
        async getErrorCalidad(){
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'quality/errorinspectionratiotable');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);

                if (response) {
                    this.pieChart = {... constructor_piechart(response.data.series, response.data.categories)}
                    localStorage.setItem('error_inspection', JSON.stringify(response));
                } else {
                    const currentData = JSON.parse(localStorage.getItem('error_inspection')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.pieChart = {... constructor_piechart(currentData.data.series, currentData.data.categories)}
                    }
                    else {
                        this.pieChart = {... constructor_piechart([], [])}
                    }
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
                    this.CiudadId1 = this.Ciudades[0]
                    this.CiudadId2 = this.Ciudades[0]
                    this.CiudadId3 = this.Ciudades[0]
                    this.CiudadId4 = this.Ciudades[0]
                    this.CiudadId5 = this.Ciudades[0]
                    this.CiudadId6 = this.Ciudades[0]
                } else {
                    this.CiudadId1 = "Lima"
                    this.CiudadId2 = "Lima"
                    this.CiudadId3 = "Lima"
                    this.CiudadId4 = "Lima"
                    this.CiudadId5 = "Lima"
                    this.CiudadId6 = "Lima"
                }
                this.getMonths();
            } catch (error) {
                console.error(error);
            }
        },
        async getMonths(){
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'audit/months');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                if (response) {
                    response.data.data.map(i => this.Months.push( i.MES ));
                    this.Month1 = this.Months[0]
                    this.Month2 = this.Months[0]
                    this.Month5 = this.Months[0]
                    this.Month6 = this.Months[0]
                } else {
                    this.Month1 = ""
                    this.Month2 = ""
                    this.Month5 = ""
                    this.Month6 = ""
                }
                this.getEfectividad();
                this.getAuditoria();
                this.getRescate();
                this.getErrorTec();
                this.getInspeccionesTec();
                this.getAvanceTec();
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
                <BCardBody>
                    <BCardTitle>Efectividad inspecciones</BCardTitle>
                    <BRow>
                        <BCol cols="12">
                            Filtrar por:
                        </BCol>
                        <BCol cols="5">
                            <BFormSelect
                                v-model="CiudadId1"
                                size="sm"
                                :options="Ciudades"
                                @change="getEfectividad()"
                            ></BFormSelect>
                        </BCol>
                        <BCol cols="5">
                            <BFormSelect
                                v-model="Month1"
                                size="sm"
                                :options="Months"
                                @change="getEfectividad()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <BFormSelect
                                        v-model="perPageEfectividad"
                                        size="sm"
                                        :options="pageOptionsEfectividad"
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
                                    v-model="filterEfectividad"
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
                            :items="tableDataEfectividad"
                            :fields="fieldsEfectividad"
                            responsive="sm"
                            :per-page="perPageEfectividad"
                            :current-page="currentPageEfectividad"
                            :sort-by.sync="sortByEfectividad"
                            :sort-desc.sync="sortDescEfectividad"
                            :filter="filterEfectividad"
                            :filter-included-fields="filterOnEfectividad"
                            @filtered="onFilteredEfectividad"
                        >                    
                        </BTable>
                    </div>
                    <BRow>
                        <BCol>
                            <div class="dataTables_paginate paging_simple_numbers float-end">
                                <ul class="pagination pagination-rounded mb-0">
                                    <!-- pagination -->
                                    <BPagination
                                        v-model="currentPageEfectividad"
                                        :total-rows="totalRowsEfectividad"
                                        :per-page="perPageEfectividad"
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
                    <BCardTitle>Efectividad inspecciones x tec</BCardTitle>
                    <BRow>
                        <BCol cols="12">
                            Filtrar por:
                        </BCol>
                        <BCol cols="5">
                            <BFormSelect
                                v-model="CiudadId5"
                                size="sm"
                                :options="Ciudades"
                                @change="getInspeccionesTec()"
                            ></BFormSelect>
                        </BCol>
                        <BCol cols="5">
                            <BFormSelect
                                v-model="Month5"
                                size="sm"
                                :options="Months"
                                @change="getInspeccionesTec()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <BFormSelect
                                        v-model="perPageInspeccionesTec"
                                        size="sm"
                                        :options="pageOptionsInspeccionesTec"
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
                                    v-model="filterInspeccionesTec"
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
                            :items="tableDataInspeccionesTec"
                            :fields="fieldsInspeccionesTec"
                            responsive="sm"
                            :per-page="perPageInspeccionesTec"
                            :current-page="currentPageInspeccionesTec"
                            :sort-by.sync="sortByInspeccionesTec"
                            :sort-desc.sync="sortDescInspeccionesTec"
                            :filter="filterInspeccionesTec"
                            :filter-included-fields="filterOnInspeccionesTec"
                            @filtered="onFilteredInspeccionesTec"
                        >                    
                        </BTable>
                    </div>
                    <BRow>
                        <BCol>
                            <div class="dataTables_paginate paging_simple_numbers float-end">
                                <ul class="pagination pagination-rounded mb-0">
                                    <!-- pagination -->
                                    <BPagination
                                        v-model="currentPageInspeccionesTec"
                                        :total-rows="totalRowsInspeccionesTec"
                                        :per-page="perPageInspeccionesTec"
                                    ></BPagination>
                                </ul>
                            </div>
                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="12">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Avance auditorias</BCardTitle>
                    <BRow>
                        <BCol cols="12">
                            Filtrar por:
                        </BCol>
                        <BCol cols="5">
                            <BFormSelect
                                v-model="CiudadId2"
                                size="sm"
                                :options="Ciudades"
                                @change="getAuditoria()"
                            ></BFormSelect>
                        </BCol>
                        <BCol cols="5">
                            <BFormSelect
                                v-model="Month2"
                                size="sm"
                                :options="Months"
                                @change="getAuditoria()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <BFormSelect
                                        v-model="perPageAuditoria"
                                        size="sm"
                                        :options="pageOptionsAuditoria"
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
                                    v-model="filterAuditoria"
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
                            :items="tableDataAuditoria"
                            :fields="fieldsAuditoria"
                            responsive="sm"
                            :per-page="perPageAuditoria"
                            :current-page="currentPageAuditoria"
                            :sort-by.sync="sortByAuditoria"
                            :sort-desc.sync="sortDescAuditoria"
                            :filter="filterAuditoria"
                            :filter-included-fields="filterOnAuditoria"
                            @filtered="onFilteredAuditoria"
                        >                    
                        </BTable>
                    </div>
                    <BRow>
                        <BCol>
                            <div class="dataTables_paginate paging_simple_numbers float-end">
                                <ul class="pagination pagination-rounded mb-0">
                                    <!-- pagination -->
                                    <BPagination
                                        v-model="currentPageAuditoria"
                                        :total-rows="totalRowsAuditoria"
                                        :per-page="perPageAuditoria"
                                    ></BPagination>
                                </ul>
                            </div>
                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>
        </BCol>

        <BCol lg="12">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Avance auditoria x tec</BCardTitle>
                    <BRow>
                        <BCol cols="12">
                            Filtrar por:
                        </BCol>
                        <BCol cols="5">
                            <BFormSelect
                                v-model="CiudadId6"
                                size="sm"
                                :options="Ciudades"
                                @change="getAvanceTec()"
                            ></BFormSelect>
                        </BCol>
                        <BCol cols="5">
                            <BFormSelect
                                v-model="Month6"
                                size="sm"
                                :options="Months"
                                @change="getAvanceTec()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <BFormSelect
                                        v-model="perPageAvanceTec"
                                        size="sm"
                                        :options="pageOptionsAvanceTec"
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
                                    v-model="filterAvanceTec"
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
                            :items="tableDataAvanceTec"
                            :fields="fieldsAvanceTec"
                            responsive="sm"
                            :per-page="perPageAvanceTec"
                            :current-page="currentPageAvanceTec"
                            :sort-by.sync="sortByAvanceTec"
                            :sort-desc.sync="sortDescAvanceTec"
                            :filter="filterAvanceTec"
                            :filter-included-fields="filterOnAvanceTec"
                            @filtered="onFilteredAvanceTec"
                        >                    
                        </BTable>
                    </div>
                    <BRow>
                        <BCol>
                            <div class="dataTables_paginate paging_simple_numbers float-end">
                                <ul class="pagination pagination-rounded mb-0">
                                    <!-- pagination -->
                                    <BPagination
                                        v-model="currentPageAvanceTec"
                                        :total-rows="totalRowsAvanceTec"
                                        :per-page="perPageAvanceTec"
                                    ></BPagination>
                                </ul>
                            </div>
                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
    <BRow>
        <BCol lg="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Errores en línea de rescate</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="CiudadId3"
                                size="sm"
                                :options="Ciudades"
                                @change="getRescate()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <BFormSelect
                                        v-model="perPageRescate"
                                        size="sm"
                                        :options="pageOptionsRescate"
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
                                    v-model="filterRescate"
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
                            :items="tableDataRescate"
                            :fields="fieldsRescate"
                            responsive="sm"
                            :per-page="perPageRescate"
                            :current-page="currentPageRescate"
                            :sort-by.sync="sortByRescate"
                            :sort-desc.sync="sortDescRescate"
                            :filter="filterRescate"
                            :filter-included-fields="filterOnRescate"
                            @filtered="onFilteredRescate"
                        >                    
                        </BTable>
                    </div>
                    <BRow>
                        <BCol>
                            <div class="dataTables_paginate paging_simple_numbers float-end">
                                <ul class="pagination pagination-rounded mb-0">
                                    <!-- pagination -->
                                    <BPagination
                                        v-model="currentPageRescate"
                                        :total-rows="totalRowsRescate"
                                        :per-page="perPageRescate"
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
                    <BCardTitle class="mb-4">% Errores calidad</BCardTitle>
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
                <BCardBody>
                    <BCardTitle>Errores en línea de rescate - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="CiudadId4"
                                size="sm"
                                :options="Ciudades"
                                @change="getErrorTec()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <BFormSelect
                                        v-model="perPageErrorTec"
                                        size="sm"
                                        :options="pageOptionsErrorTec"
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
                                    v-model="filterErrorTec"
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
                            :items="tableDataErrorTec"
                            :fields="fieldsErrorTec"
                            responsive="sm"
                            :per-page="perPageErrorTec"
                            :current-page="currentPageErrorTec"
                            :sort-by.sync="sortByErrorTec"
                            :sort-desc.sync="sortDescErrorTec"
                            :filter="filterErrorTec"
                            :filter-included-fields="filterOnErrorTec"
                            @filtered="onFilteredErrorTec"
                        >                    
                        </BTable>
                    </div>
                    <BRow>
                        <BCol>
                            <div class="dataTables_paginate paging_simple_numbers float-end">
                                <ul class="pagination pagination-rounded mb-0">
                                    <!-- pagination -->
                                    <BPagination
                                        v-model="currentPageErrorTec"
                                        :total-rows="totalRowsErrorTec"
                                        :per-page="perPageErrorTec"
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
