<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Multiselect from "@vueform/multiselect";
import {
  barChart
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
            tableDataGestor: [],
            tableDataOrder: [],
            ContrataBar: barChart,
            GestorBar: barChart,
            GestorAgenda: [],
            GestorOrdenes: [
            ],
            GestorAgendaId: null,
            GestorOrdenId: null,
            itemsGestor: [
                {
                    text: "Charts",
                    href: "/"
                },
                {
                    text: "Apex",
                    active: true
                }
            ],
            itemsOrder: [
                {
                    text: "Charts",
                    href: "/"
                },
                {
                    text: "Apex",
                    active: true
                }
            ],
            //--------------------
            totalRowsGestor: 1,
            currentPageGestor: 1,
            perPageGestor: 3,
            pageOptionsGestor: [3,10,25,50,100],
            filterOnGestor: [],
            filterGestor: null,
            sortByGestor: "age",
            sortDescGestor: false,
            fieldsGestor: [],
            totalesGestor : 0,
            //--------------------
            totalRowsOrder: 1,
            currentPageOrder: 1,
            perPageOrder: 3,
            pageOptionsOrder: [3,10,25,50,100],
            filterOnOrder: [],
            filterOrder: null,
            sortByOrder: "age",
            sortDescOrder: false,
            fieldsOrder: [],
            totalesOrder : 0,
        };
    },
    mounted() {
        // Set the initial number of items
        this.totalRowsGestor = this.itemsGestor.length;
        this.totalRowsOrder = this.itemsOrder.length;

        //obtener datos de la api
        this.getTableGestor();
        //this.getGestor();
        this.getTableOrder();
        //this.getContrata();
    },
    methods:{
        onFilteredGestor(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsGestor = filteredItems.length;
            this.currentPageGestor = 1;
        },
        onFilteredOrder(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsOrder = filteredItems.length;
            this.currentPageOrder = 1;
        },
        async getContrata(){
            const response = await this.$http.get(this.$apiURL+'provision/diarycontratagraphic');
                this.ContrataBar.series = response.data.series;
                this.ContrataBar.chartOptions.xaxis.categories = response.data.categories;
        },
        async getGestor() {
            try {
                const response = await this.$http.get(this.$apiURL+'provision/diarymanagergraphic');
                this.GestorBar.series = response.data.series;
                this.GestorBar.chartOptions.xaxis.categories = response.data.categories;
            } catch (error) {
                console.error(error);
            }
        },
        async getTableGestor(){
            try {
                const response = await this.$http.get(this.$apiURL+'management/installationlogmanagertable');
                response.data.series.map(i => this.tableDataGestor.push({ ...i }));
                //this.fieldsGestor.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsGestor.push({ key: i, sortable : true }));
                this.totalRowsGestor = this.tableDataGestor.length;
                this.totalesGestor = response.data.totales;
            } catch (error) {
                console.error(error);
            }
        },
        async getTableOrder(){
            try {
                const response = await this.$http.get(this.$apiURL+'management/ordermanagertable');
                response.data.series.map(i => this.tableDataOrder.push({ ...i }));
                //this.fieldsOrder.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsOrder.push({ key: i, sortable : true }));
                this.totalRowsOrder = this.tableDataOrder.length;
                this.totalesOrder = response.data.totales;
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
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Ordenes por gestor instalaciones</BCardTitle>
                    <BRow>
                        <BCol cols="8">

                        </BCol>
                        <BCol cols="4">
                            Filtrar por:
                            <Multiselect
                                v-model="GestorAgendaId"
                                :options="GestorAgenda"
                                placeholder="Seleccionar Gestor"
                                label="manager"
                            />
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                            <label class="d-inline-flex align-items-center">
                                Show&nbsp;
                                <BFormSelect
                                    v-model="perPageGestor"
                                    size="sm"
                                    :options="pageOptionsGestor"
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
                                v-model="filterGestor"
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
                            :items="tableDataGestor"
                            :fields="fieldsGestor"
                            responsive="sm"
                            :per-page="perPageGestor"
                            :current-page="currentPageGestor"
                            :sort-by.sync="sortByGestor"
                            :sort-desc.sync="sortDescGestor"
                            :filter="filterGestor"
                            :filter-included-fields="filterOnGestor"
                            @filtered="onFilteredGestor"
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
                                v-model="currentPageGestor"
                                :total-rows="totalRowsGestor"
                                :per-page="perPageGestor"
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
                    <BCardTitle>Ordenes por gestor - horas pendientes</BCardTitle>
                    <BRow>
                        <BCol cols="8">

                        </BCol>
                        <BCol cols="4">
                            Filtrar por:
                            <Multiselect
                                v-model="GestorOrdenId"
                                :options="GestorOrdenes"
                                placeholder="Seleccionar Gestor"
                                label="manager"
                            />
                        </BCol>
                    </BRow>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <BFormSelect
                                        v-model="perPageOrder"
                                        size="sm"
                                        :options="pageOptionsOrder"
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
                                    v-model="filterOrder"
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
                            :items="tableDataOrder"
                            :fields="fieldsOrder"
                            responsive="sm"
                            :per-page="perPageOrder"
                            :current-page="currentPageOrder"
                            :sort-by.sync="sortByOrder"
                            :sort-desc.sync="sortDescOrder"
                            :filter="filterOrder"
                            :filter-included-fields="filterOnOrder"
                            @filtered="onFilteredOrder"
                        >                    
                        </BTable>
                    </div>
                <BRow>
                    <BCol>
                        <div class="dataTables_paginate paging_simple_numbers float-end">
                            <ul class="pagination pagination-rounded mb-0">
                                <!-- pagination -->
                                <BPagination
                                    v-model="currentPageOrder"
                                    :total-rows="totalRowsOrder"
                                    :per-page="perPageOrder"
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
