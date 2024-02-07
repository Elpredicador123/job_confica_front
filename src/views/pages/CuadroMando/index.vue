<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import {
    linewithDataChart,
    dashedLineChart,
    splineAreaChart,
    columnChart,
    columnChart2,
    columnDatalabelChart,
    barChart,
    mixedChart,
    radialChart,
    pieChart,
    pieChart2,
    donutChart
} from "./data";

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
            linewithDataChart: linewithDataChart,
            dashedLineChart: dashedLineChart,
            splineAreaChart: splineAreaChart,
            columnChart: columnChart,
            columnChart2: columnChart2,
            columnDatalabelChart: columnDatalabelChart,
            barChart: barChart,
            mixedChart: mixedChart,
            radialChart: radialChart,
            pieChart: pieChart,
            pieChart2: pieChart2,
            donutChart: donutChart,
            title: "Apex",
            tableData: [],
            tableData2: [],
            items: [
                {
                    text: "Charts",
                    href: "/"
                },
                {
                    text: "Apex",
                    active: true
                }
            ],
            items2: [
                {
                    text: "Charts",
                    href: "/"
                },
                {
                    text: "Apex",
                    active: true
                }
            ],
            //Primera tabla------------:
            totalRows: 1,
            currentPage: 1,
            perPage: 3,
            pageOptions: [3,10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            fields: [
            ],
            //--------------------
            totalRows2: 1,
            currentPage2: 1,
            perPage2: 3,
            pageOptions2: [3,10, 25, 50, 100],
            filter2: null,
            filterOn2: [],
            sortBy2: "age",
            sortDesc2: false,
            fields2: [
            ]
        };
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
        this.totalRows2 = this.items2.length;
        //obtener datos de la api
        this.getInstalaciones();
        this.getMantenimientos();
        this.getTableMantenimientos();
        this.getTableInstalaciones();
    },
    methods:{
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },

        onFiltered2(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows2 = filteredItems.length;
            this.currentPage2 = 1;
        },
        async getTableMantenimientos() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/maintenanceprogresstable');
                console.log(response)
                response.data.series.map(i => this.tableData2.push({ ...i }));
                this.fields2.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fields2.push({ key: i, sortable : true }));
                console.log(this.tableData2)
                this.totalRows2= this.tableData2.length;
            } catch (error) {
                console.error(error);
            }
        },
        async getTableInstalaciones() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/installationprogresstable');
                console.log(response)
                response.data.series.map(i => this.tableData.push({ ...i }));
                this.fields.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fields.push({ key: i, sortable : true }));
                console.log(this.tableData)
                this.totalRows = this.tableData.length;
            } catch (error) {
                console.error(error);
            }
        },
        async getInstalaciones() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/installationprogressgraphic');
                this.columnChart.series = response.data.series;
                this.columnChart.chartOptions.xaxis.categories = response.data.categories;
            } catch (error) {
                console.error(error);
            }
        },
        async getMantenimientos() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/maintenanceprogressgraphic');
                this.columnChart2.series = response.data.series;
                this.columnChart2.chartOptions.xaxis.categories = response.data.categories;
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
    <BCol lg="4">
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
    <BCol lg="4">
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
    <BCol cols="4">
        <BCard no-body>
            <BCardBody>
                <BCardTitle>Producción Día : S/87,971.00</BCardTitle>
                <BRow class="mt-4">
                    <BCol sm="12" md="6">
                        <div id="tickets-table_length" class="dataTables_length">
                        <label class="d-inline-flex align-items-center">
                            Show&nbsp;
                            <BFormSelect
                                v-model="perPage"
                                size="sm"
                                :options="pageOptions"
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
                            v-model="filter"
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
                    <template #cell(is_active)="data">
                        <b-button
                        variant="success"
                        v-if="data.item.is_active === 1"
                        >
                        Activo
                        </b-button>
                        <b-button
                        variant="danger"
                        v-else
                        >
                        Inactivo
                        </b-button>
                    </template>
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
                            v-model="currentPage"
                            :total-rows="totalRows"
                            :per-page="perPage"
                            ></BPagination>
                        </ul>
                        </div>
                    </BCol>
                </BRow>
            </BCardBody>
        </BCard>
    </BCol>
    </BRow>
    <!-- end row -->

    <!-- end row -->
    <div class="row">
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Instalaciones</BCardTitle>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                            <label class="d-inline-flex align-items-center">
                                Show&nbsp;
                                <BFormSelect
                                v-model="perPage"
                                size="sm"
                                :options="pageOptions"
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
                                v-model="filter"
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
                    <BRow>
                        <BCol>
                            <div
                            class="dataTables_paginate paging_simple_numbers float-end"
                            >
                            <ul class="pagination pagination-rounded mb-0">
                                <!-- pagination -->
                                <BPagination
                                v-model="currentPage"
                                :total-rows="totalRows"
                                :per-page="perPage"
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
                    <BCardTitle>Mantenimientos</BCardTitle>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                            <label class="d-inline-flex align-items-center">
                                Show&nbsp;
                                <BFormSelect
                                v-model="perPage2"
                                size="sm"
                                :options="pageOptions2"
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
                                v-model="filter2"
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
                    <BRow>
                        <BCol>
                            <div
                            class="dataTables_paginate paging_simple_numbers float-end"
                            >
                            <ul class="pagination pagination-rounded mb-0">
                                <!-- pagination -->
                                <BPagination
                                v-model="currentPage2"
                                :total-rows="totalRows2"
                                :per-page="perPage2"
                                ></BPagination>
                            </ul>
                            </div>
                        </BCol>
                    </BRow>
                </BCardBody>
            </BCard>
        </BCol>
    </div>
    <div class="row">
        
        <BCol cols="12">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Data Table</BCardTitle>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                            <label class="d-inline-flex align-items-center">
                                Show&nbsp;
                                <BFormSelect
                                v-model="perPage"
                                size="sm"
                                :options="pageOptions"
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
                                v-model="filter"
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
                        <template #cell(is_active)="data">
                            <b-button
                            variant="success"
                            v-if="data.item.is_active === 1"
                            >
                            Activo
                            </b-button>
                            <b-button
                            variant="danger"
                            v-else
                            >
                            Inactivo
                            </b-button>
                        </template>
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
                                v-model="currentPage"
                                :total-rows="totalRows"
                                :per-page="perPage"
                                ></BPagination>
                            </ul>
                            </div>
                        </BCol>
                    </BRow>
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
                    <BCardTitle class="mb-4">Ratio de instalaciones tec</BCardTitle>
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
