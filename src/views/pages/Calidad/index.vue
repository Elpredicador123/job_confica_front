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
        };
    },
    mounted() {
        // Set the initial number of items
        //obtener datos de la api
        this.getCity();
        this.getEfectividad();
        this.getAuditoria();
        this.getInspeccionesTec();
        this.getAvanceTec();
        this.getRescate();
        this.getErrorTec();
        this.getErrorCalidad();
    },
    methods:{
        onFilteredEfectividad(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsEfectividad = filteredItems.length;
            this.currentPageEfectividad = 1;
        },
        async getErrorCalidad(){
            try {
                const response = await this.$http.get(this.$apiURL+'maintenance/ineffectivedistributiongraphic');
                this.pieChart.series = response.data.series;
                this.pieChart.chartOptions.labels = response.data.categories ;
            } catch (error) {
                console.error(error);
            }
        },
        async getErrorTec(){
            try {
                const response = await this.$http.get(this.$apiURL+'maintenance/childhoodbreakdownsEfectividadhnicians');
                response.data.series.map(i => this.tableDataErrorTec.push({ ...i }));
                //this.fieldsErrorTec.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsErrorTec.push({ key: i, sortable : true }));
                this.totalRowsErrorTec = this.tableDataErrorTec.length;
                this.totalesErrorTec = response.data.totales;
            } catch (error) {
                console.error(error);
            }
        },
        async getRescate(){
            try {
                const response = await this.$http.get(this.$apiURL+'maintenance/childhoodbreakdownsEfectividadhnicians');
                response.data.series.map(i => this.tableDataRescate.push({ ...i }));
                //this.fieldsRescate.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsRescate.push({ key: i, sortable : true }));
                this.totalRowsRescate = this.tableDataRescate.length;
                this.totalesRescate = response.data.totales;
            } catch (error) {
                console.error(error);
            }
        },
        async getAvanceTec(){
            try {
                const response = await this.$http.get(this.$apiURL+'maintenance/childhoodbreakdownsEfectividadhnicians');
                response.data.series.map(i => this.tableDataAvanceTec.push({ ...i }));
                //this.fieldsAvanceTec.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsAvanceTec.push({ key: i, sortable : true }));
                this.totalRowsAvanceTec = this.tableDataAvanceTec.length;
                this.totalesAvanceTec = response.data.totales;
            } catch (error) {
                console.error(error);
            }
        },
        async getInspeccionesTec(){
            try {
                const response = await this.$http.get(this.$apiURL+'maintenance/childhoodbreakdownsEfectividadhnicians');
                response.data.series.map(i => this.tableDataInspeccionesTec.push({ ...i }));
                //this.fieldsInspeccionesTec.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsInspeccionesTec.push({ key: i, sortable : true }));
                this.totalRowsInspeccionesTec = this.tableDataInspeccionesTec.length;
                this.totalesInspeccionesTec = response.data.totales;
            } catch (error) {
                console.error(error);
            }
        },
        async getEfectividad(){
            try {
                const response = await this.$http.get(this.$apiURL+'maintenance/childhoodbreakdownsEfectividadhnicians');
                response.data.series.map(i => this.tableDataEfectividad.push({ ...i }));
                //this.fieldsEfectividad.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsEfectividad.push({ key: i, sortable : true }));
                this.totalRowsEfectividad = this.tableDataEfectividad.length;
                this.totalesEfectividad = response.data.totales;
            } catch (error) {
                console.error(error);
            }
        },
        async getAuditoria(){
            try {
                const response = await this.$http.get(this.$apiURL+'maintenance/childhoodbreakdownsEfectividadhnicians');
                response.data.series.map(i => this.tableDataAuditoria.push({ ...i }));
                //this.fieldsAuditoria.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsAuditoria.push({ key: i, sortable : true }));
                this.totalRowsAuditoria = this.tableDataAuditoria.length;
                this.totalesAuditoria = response.data.totales;
            } catch (error) {
                console.error(error);
            }
        },
        async getCity(){ 
            const response = await this.$http.get(this.$apiURL+'city/all');
                console.log(response)
                response.data.data.map(i => this.Ciudades.push( i.name ));
                console.log(this.Ciudades)
        },

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
                    <BCardTitle>Averías Reiteradas - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId4"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
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
                    <BCardTitle>Averías Reiteradas - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId4"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
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
                    <BCardTitle>Averías Reiteradas - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId4"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
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
                    <BCardTitle>Averías Reiteradas - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId4"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
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
                    <BCardTitle>Averías Reiteradas - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId4"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
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
                    <BCardTitle class="mb-4">Distrubución Inefectiva</BCardTitle>
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
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Averías Reiteradas - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId4"
                                :options="Ciudades"
                                placeholder="Seleccionar Ciudad"
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
