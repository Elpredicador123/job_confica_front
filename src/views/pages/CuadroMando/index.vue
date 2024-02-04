<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import {
    linewithDataChart,
    dashedLineChart,
    splineAreaChart,
    columnChart,
    columnDatalabelChart,
    barChart,
    mixedChart,
    radialChart,
    pieChart,
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
            columnDatalabelChart: columnDatalabelChart,
            barChart: barChart,
            mixedChart: mixedChart,
            radialChart: radialChart,
            pieChart: pieChart,
            donutChart: donutChart,
            title: "Apex",
            items: [
                {
                    text: "Charts",
                    href: "/"
                },
                {
                    text: "Apex",
                    active: true
                }
            ]
        };
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
  type="line"
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
                <BCardTitle class="mb-4">Column Charts</BCardTitle>
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
    <BCol cols="4">
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
    </BRow>
    <!-- end row -->

    <!-- end row -->
    <div class="row">
        <BCol cols="6">
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
        <BCol cols="6">
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
                    <BCardTitle class="mb-4">Pie Chart</BCardTitle>
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
                    <BCardTitle class="mb-4">Pie Chart</BCardTitle>
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

    </div>
    <!-- end row -->
</Layout>
</template>
