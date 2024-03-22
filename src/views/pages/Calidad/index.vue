<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Multiselect from "@vueform/multiselect";
import {
  pieChart,
} from "./data";
/**
 * Apex-chart component
 */
export default {
    components: { 
        Layout,
        Multiselect,
        PageHeader
    }, 
    data() {
        return { 
            title: "Gestión",
            Ciudades : [],
            Gestor: [],
            CiudadId1: "LIMA",
            CiudadId2: "LIMA",
            CiudadId3: "LIMA",
            CiudadId4: "LIMA",
            ManagerId1: null,
            ManagerId2: null,
            //-------------------
            pieChart: pieChart,
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
        this.getGestor();
        this.getEfectividad();
        this.getAuditoria();
        this.getInspeccionesTec();
        this.getAvanceTec();
        this.getRescate();
        this.getErrorTec();
        this.getErrorCalidad();
        setInterval(() => {
            this.updateDataIfChanged();
        }, 300000);
    },
    methods:{
        onFilteredEfectividad(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsEfectividad = filteredItems.length;
            this.currentPageEfectividad = 1;
        },
        async updateDataIfChanged() {
            await Promise.all([
                this.UpdategetEfectividad(),
                this.UpdategetAuditoria(),
                this.UpdategetInspeccionesTec(),
                this.UpdategetAvanceTec(),
                this.UpdategetRescate(),
                this.UpdategetErrorTec(),
            ]);
        },
        async UpdategetEfectividad(){
            const response = await this.$http.get(this.$apiURL+'quality/inspectioneffectivenesstable/'+this.CiudadId1);
            const currentData = {
                series: response.data.series,
                categories: response.data.categories
            };

            if (this.dataChanged(this.previousTableDataEfectividad, currentData)) {
                this.tableDataEfectividad.splice(0, this.tableDataEfectividad.length);
                this.fieldsEfectividad.splice(0, this.fieldsEfectividad.length);
                response.data.series.map(i => this.tableDataEfectividad.push({ ...i }));
                response.data.categories.map(i => this.fieldsEfectividad.push({ key: i, sortable : true }));
                this.totalRowsEfectividad = this.tableDataEfectividad.length;
                this.totalesEfectividad = response.data.totales;
                this.previousTableDataEfectividad = currentData;
            }
        },

        async UpdategetAuditoria(){
            const response = await this.$http.get(this.$apiURL+'quality/auditsprogresstable/' + this.CiudadId2);
            const currentData = {
                series: response.data.series,
                categories: response.data.categories
            };

            if (this.dataChanged(this.previousTableDataAuditoria, currentData)) {
                this.tableDataAuditoria.splice(0, this.tableDataAuditoria.length);
                this.fieldsAuditoria.splice(0, this.fieldsAuditoria.length);
                response.data.series.map(i => this.tableDataAuditoria.push({ ...i }));
                response.data.categories.map(i => this.fieldsAuditoria.push({ key: i, sortable : true }));
                this.totalRowsAuditoria = this.tableDataAuditoria.length;
                this.totalesAuditoria = response.data.totales;
                this.previousTableDataAuditoria = currentData;
            }
        },
        async UpdategetInspeccionesTec(){
            const response = await this.$http.get(this.$apiURL+'quality/inspectioneffectivenessbytectable/'+this.ManagerId1);
            const currentData = {
                series: response.data.series,
                categories: response.data.categories
            };

            if (this.dataChanged(this.previousTableDataInspeccionesTec, currentData)) {
                this.tableDataInspeccionesTec.splice(0, this.tableDataInspeccionesTec.length);
                this.fieldsInspeccionesTec.splice(0, this.fieldsInspeccionesTec.length);
                response.data.series.map(i => this.tableDataInspeccionesTec.push({ ...i }));
                response.data.categories.map(i => this.fieldsInspeccionesTec.push({ key: i, sortable : true }));
                this.totalRowsInspeccionesTec = this.tableDataInspeccionesTec.length;
                this.totalesInspeccionesTec = response.data.totales;
                this.previousTableDataInspeccionesTec = currentData;
            }
        },
        async UpdategetAvanceTec(){
            const response = await this.$http.get(this.$apiURL+'quality/auditsprogressbytectable/'+this.ManagerId2);
            const currentData = {
                series: response.data.series,
                categories: response.data.categories
            };

            if (this.dataChanged(this.previousTableDataAvanceTec, currentData)) {
                this.tableDataAvanceTec.splice(0, this.tableDataAvanceTec.length);
                this.fieldsAvanceTec.splice(0, this.fieldsAvanceTec.length);
                response.data.series.map(i => this.tableDataAvanceTec.push({ ...i }));
                response.data.categories.map(i => this.fieldsAvanceTec.push({ key: i, sortable : true }));
                this.totalRowsAvanceTec = this.tableDataAvanceTec.length;
                this.totalesAvanceTec = response.data.totales;
                this.previousTableDataAvanceTec = currentData;
            }
        },
        async UpdategetRescate(){
            const response = await this.$http.get(this.$apiURL+'quality/errorsevidencetable/'+this.CiudadId3);
            const currentData = {
                series: response.data.series,
                categories: response.data.categories
            };

            if (this.dataChanged(this.previousTableDataRescate, currentData)) {
                this.tableDataRescate.splice(0, this.tableDataRescate.length);
                this.fieldsRescate.splice(0, this.fieldsRescate.length);
                response.data.series.map(i => this.tableDataRescate.push({ ...i }));
                response.data.categories.map(i => this.fieldsRescate.push({ key: i, sortable : true }));
                this.totalRowsRescate = this.tableDataRescate.length;
                this.totalesRescate = response.data.totales;
                this.previousTableDataRescate = currentData;
            }
        },

        async UpdategetErrorTec(){
            const response = await this.$http.get(this.$apiURL+'quality/errorsevidencebytectable/'+this.CiudadId4);
            const currentData = {
                series: response.data.series,
                categories: response.data.categories
            };

            if (this.dataChanged(this.previousTableDataErrorTec, currentData)) {
                this.tableDataErrorTec.splice(0, this.tableDataErrorTec.length);
                this.fieldsErrorTec.splice(0, this.fieldsErrorTec.length);
                response.data.series.map(i => this.tableDataErrorTec.push({ ...i }));
                response.data.categories.map(i => this.fieldsErrorTec.push({ key: i, sortable : true }));
                this.totalRowsErrorTec = this.tableDataErrorTec.length;
                this.totalesErrorTec = response.data.totales;
                this.previousTableDataErrorTec = currentData;
            }
        },
        //---------------------------------------
        async getEfectividad(){
            this.$nextTick(async () => {

                this.tableDataEfectividad.splice(0, this.tableDataEfectividad.length);
                this.fieldsEfectividad.splice(0, this.fieldsEfectividad.length);

                const response = await this.$http.get(this.$apiURL+'quality/inspectioneffectivenesstable/'+this.CiudadId1);
                this.previousTableDataEfectividad = {
                    series: response.data.series,
                    categories: response.data.categories
                };

                response.data.series.map(i => this.tableDataEfectividad.push({ ...i }));
                //this.fieldsEfectividad.push({ key: "Ciudad", sortable : true })
                response.data.categories.map(i => this.fieldsEfectividad.push({ key: i, sortable : true }));
                this.totalRowsEfectividad = this.tableDataEfectividad.length;
                this.totalesEfectividad = response.data.totales;
            });
        },
        async getAuditoria(){
            this.$nextTick(async () => {
                this.tableDataAuditoria.splice(0, this.tableDataAuditoria.length);
                this.fieldsAuditoria.splice(0, this.fieldsAuditoria.length);

                const response = await this.$http.get(this.$apiURL+'quality/auditsprogresstable/' + this.CiudadId2);
                this.previousTableDataAuditoria = {
                    series: response.data.series,
                    categories: response.data.categories
                };
                response.data.series.map(i => this.tableDataAuditoria.push({ ...i }));
                //this.fieldsAuditoria.push({ key: "Ciudad", sortable : true })
                response.data.categories.map(i => this.fieldsAuditoria.push({ key: i, sortable : true }));
                this.totalRowsAuditoria = this.tableDataAuditoria.length;
                this.totalesAuditoria = response.data.totales;
            });
        },
        async getInspeccionesTec(){
            this.$nextTick(async () => {
                this.tableDataInspeccionesTec.splice(0, this.tableDataInspeccionesTec.length);
                this.fieldsInspeccionesTec.splice(0, this.fieldsInspeccionesTec.length);

                const response = await this.$http.get(this.$apiURL+'quality/inspectioneffectivenessbytectable/'+this.ManagerId1);
                this.previousTableDataInspeccionesTec = {
                    series: response.data.series,
                    categories: response.data.categories
                };
                response.data.series.map(i => this.tableDataInspeccionesTec.push({ ...i }));
                //this.fieldsInspeccionesTec.push({ key: "Ciudad", sortable : true })
                response.data.categories.map(i => this.fieldsInspeccionesTec.push({ key: i, sortable : true }));
                this.totalRowsInspeccionesTec = this.tableDataInspeccionesTec.length;
                this.totalesInspeccionesTec = response.data.totales;
            });
        },
        async getAvanceTec(){
            this.$nextTick(async () => {
                this.tableDataAvanceTec.splice(0, this.tableDataAvanceTec.length);
                this.fieldsAvanceTec.splice(0, this.fieldsAvanceTec.length);

                const response = await this.$http.get(this.$apiURL+'quality/auditsprogressbytectable/'+this.ManagerId2);
                this.previousTableDataAvanceTec = {
                    series: response.data.series,
                    categories: response.data.categories
                };
                response.data.series.map(i => this.tableDataAvanceTec.push({ ...i }));
                response.data.categories.map(i => this.fieldsAvanceTec.push({ key: i, sortable : true }));
                this.totalRowsAvanceTec = this.tableDataAvanceTec.length;
                this.totalesAvanceTec = response.data.totales;
            });
        },
        async getRescate(){
            this.$nextTick(async () => {
                this.tableDataRescate.splice(0, this.tableDataRescate.length);
                this.fieldsRescate.splice(0, this.fieldsRescate.length);

                const response = await this.$http.get(this.$apiURL+'quality/errorsevidencetable/'+this.CiudadId3);
                this.previousTableDataRescate = {
                    series: response.data.series,
                    categories: response.data.categories
                };
                response.data.series.map(i => this.tableDataRescate.push({ ...i }));
                //this.fieldsRescate.push({ key: "Ciudad", sortable : true })
                response.data.categories.map(i => this.fieldsRescate.push({ key: i, sortable : true }));
                this.totalRowsRescate = this.tableDataRescate.length;
                this.totalesRescate = response.data.totales;
            });
        },
        async getErrorTec(){
            this.$nextTick(async () => {
                this.tableDataErrorTec.splice(0, this.tableDataErrorTec.length);
                this.fieldsErrorTec.splice(0, this.fieldsErrorTec.length);

                const response = await this.$http.get(this.$apiURL+'quality/errorsevidencebytectable/'+this.CiudadId4);
                this.previousTableDataErrorTec = {
                    series: response.data.series,
                    categories: response.data.categories
                };
                response.data.series.map(i => this.tableDataErrorTec.push({ ...i }));
                //this.fieldsErrorTec.push({ key: "Ciudad", sortable : true })
                response.data.categories.map(i => this.fieldsErrorTec.push({ key: i, sortable : true }));
                this.totalRowsErrorTec = this.tableDataErrorTec.length;
                this.totalesErrorTec = response.data.totales;
            });
        },
        async getErrorCalidad(){
                const response = await this.$http.get(this.$apiURL+'quality/errorinspectionratiotable');
                this.pieChart.series = response.data.series;
                this.pieChart.chartOptions.labels = response.data.categories ;
        },
        async getCity(){ 
            const response = await this.$http.get(this.$apiURL+'city/all');
                console.log(response)
                response.data.data.map(i => this.Ciudades.push( i.name ));
                console.log(this.Ciudades)
        },
        async getGestor(){
            const response = await this.$http.get(this.$apiURL+'manager/all');
                response.data.data.map(i => this.Gestor.push( i.manager ));
        },
        dataChanged(previousData, currentData) {
            if (!previousData) {
                return true;
            }
            return JSON.stringify(previousData) !== JSON.stringify(currentData);
        }

    },
    middleware: "authentication"
};
</script>

<template>
<Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Efectividad inspecciones</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId1"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
                                @change="getEfectividad()"
                            />
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
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Avance auditorias</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId2"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
                                @change="getAuditoria()"
                            />
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
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Efectividad inspecciones x tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="ManagerId1"
                                :options="Gestor"
                                placeholder="Seleccionar Gestor"
                                @change="getInspeccionesTec()"

                            />
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
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Avance auditoria x tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="ManagerId2"
                                :options="Gestor"
                                placeholder="Seleccionar Gestor"
                                @change="getAvanceTec()"

                            />
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
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Errores en línea de rescate</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId3"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
                                @change="getRescate()"

                            />
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
        <BCol cols="6">
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
        <BCol cols="12">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Errores en línea de rescate - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId4"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
                                @change="getErrorTec()"

                            />
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
