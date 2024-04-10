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
            tableDataPorDia: [],
            tableDataAgenda: [],
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
            itemsPorDia: [
                {
                    text: "Charts",
                    href: "/"
                },
                {
                    text: "Apex",
                    active: true
                }
            ],
            itemsAgenda: [
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
            ],
            //--------------------
            totalRowsPorDia: 1,
            currentPagePorDia: 1,
            perPagePorDia: 3,
            pageOptionsPorDia: [3,10,25,50,100],
            filterOnPorDia: [],
            filterPorDia: null,
            sortByPorDia: "age",
            sortDescPorDia: false,
            fieldsPorDia: [],
            totalesPorDia : 0,
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
            //---------------------
            previousTableGestorData: {},
            previousTableInstalacionesData:{},
            previousTablePorDiaData: {},
            previousTableAgendaPorDiasData: {},
        };
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
        this.totalRows2 = this.items2.length;
        this.totalRowsPorDia = this.itemsPorDia.length;
        this.totalRowsAgenda = this.itemsAgenda.length;

        //obtener datos de la api
        this.getInstalaciones();
        this.getMantenimientos();
        this.getTablePorDia();
        this.getTableMantenimientos();
        this.getTableInstalaciones();
        this.getRatioInstalaciones();
        this.getRatioMantenimientos();
        this.getTableAgendaPorDias();
        // setInterval(() => {
        //         this.updateDataIfChanged();
        //     }, 300000);
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
        onFilteredPorDia(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsPorDia = filteredItems.length;
            this.currentPagePorDia = 1;
        },
        onFilteredAgenda(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsAgenda = filteredItems.length;
            this.currentPageAgenda = 1;
        },
        async updateDataIfChanged() {
            console.log("change")
            await Promise.all([
                this.updateTableMantenimientos(),
                this.updateTableInstalaciones(),
                this.updateTablePorDia(),
                this.updateTableAgendaPorDias(),
                this.updateInstalaciones(),
                this.updateMantenimientos(),
                this.updateRatioInstalaciones(),
                this.updateRatioMantenimientos()
            ]);
        },

        async updateTableMantenimientos() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/maintenanceprogresstable');
                const currentData = {
                    series: response.data.series,
                    fields: response.data.fields
                };

                if (this.dataChanged(this.previousTableMantenimientosData, currentData)) {
                    this.tableData2.splice(0, this.tableData2.length);
                    this.fields2.splice(0, this.fields2.length);
                    currentData.series.map(i => this.tableData2.push({ ...i }));
                    currentData.fields.map(i => this.fields2.push({ key: i, sortable : true }));
                    this.totalRows2 = this.tableData2.length;
                    this.previousTableMantenimientosData = currentData;
                }
            } catch (error) {
                console.error(error);
            }
        },

        async updateTableInstalaciones() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/installationprogresstable');
                const currentData = {
                    series: response.data.series,
                    fields: response.data.fields
                };

                if (this.dataChanged(this.previousTableInstalacionesData, currentData)) {
                    this.tableData.splice(0, this.tableData.length);
                    this.fields.splice(0, this.fields.length);
                    currentData.series.map(i => this.tableData.push({ ...i }));
                    currentData.fields.map(i => this.fields.push({ key: i, sortable : true }));
                    this.totalRows = this.tableData.length;
                    this.previousTableInstalacionesData = currentData;
                }
            } catch (error) {
                console.error(error);
            }
        },

        async updateTablePorDia() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/productiontable');
                const currentData = {
                    series: response.data.series,
                    fields: response.data.fields
                };

                if (this.dataChanged(this.previousTablePorDiaData, currentData)) {
                    this.tableDataPorDia.splice(0, this.tableDataPorDia.length);
                    this.fieldsPorDia.splice(0, this.fieldsPorDia.length);
                    currentData.series.map(i => this.tableDataPorDia.push({ ...i }));
                    currentData.fields.map(i => this.fieldsPorDia.push({ key: i, sortable : true }));
                    this.totalRowsPorDia = this.tableDataPorDia.length;
                    this.totalesPorDia = response.data.totales;
                    this.previousTablePorDiaData = currentData;
                }
            } catch (error) {
                console.error(error);
            }
        },

        async updateTableAgendaPorDias() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/diarytable');
                const currentData = {
                    series: response.data.series,
                    fields: response.data.fields
                };

                if (this.dataChanged(this.previousTableAgendaPorDiasData, currentData)) {
                    this.tableDataAgenda.splice(0, this.tableDataAgenda.length);
                    this.fieldsAgenda.splice(0, this.fieldsAgenda.length);
                    currentData.series.map(i => this.tableDataAgenda.push({ ...i }));
                    currentData.fields.map(i => this.fieldsAgenda.push({ key: i, sortable : true }));
                    this.totalRowsAgenda = this.tableDataAgenda.length;
                    this.totalesAgenda = response.data.totales;
                    this.previousTableAgendaPorDiasData = currentData;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async updateInstalaciones() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/installationprogressgraphic');
                const currentData = {
                    series: response.data.series,
                    categories: response.data.categories
                };
                if (this.dataChanged(this.PreviusChartInstalaciones, currentData)) {
                    this.PreviusChartInstalaciones = {
                        series: this.columnChart.series,
                        categories: this.columnChart.categories
                    };
                    this.columnChart =  columnChart;
                    this.columnChart.series = currentData.series;
                    this.columnChart.chartOptions.xaxis.categories = currentData.categories;
                }
            } catch (error) {
                console.error(error);
            }
            
        },
        async updateMantenimientos() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/maintenanceprogressgraphic');
                const currentData = {
                    series: response.data.series,
                    categories: response.data.categories
                };
                if (this.dataChanged(this.PreviusChartMaintenance, currentData)) {
                    this.PreviusChartMaintenance = {
                        series: this.columnChart2.series,
                        categories: this.columnChart2.categories
                    };
                    this.columnChart2 =  columnChart2;
                    this.columnChart2.series = currentData.series;
                    this.columnChart2.chartOptions.xaxis.categories = currentData.categories;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async updateRatioInstalaciones() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/installationratiographic');
                const currentData = {
                    series: response.data.series,
                    labels: response.data.categories
                };
                if (this.dataChanged(this.previousRatioInstalacionesData, currentData)) {
                    this.previousRatioInstalacionesData = {
                        series: this.pieChart.series,
                        labels: this.pieChart.categories
                    };
                    this.pieChart =  pieChart;
                    this.pieChart.series = currentData.series;
                    this.pieChart.chartOptions.labels = currentData.categories;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async updateRatioMantenimientos() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/installationratiographic');
                const currentData = {
                    series: response.data.series,
                    labels: response.data.categories
                };
                if (this.dataChanged(this.previousRatioMantenimientosData, currentData)) {
                    this.previousRatioMantenimientosData = {
                        series: this.pieChart2.series,
                        labels: this.pieChart2.categories
                    };
                    this.pieChart2 =  pieChart2;
                    this.pieChart2.series = currentData.series;
                    this.pieChart2.chartOptions.labels = currentData.categories;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableMantenimientos() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/maintenanceprogresstable');
                this.previousTableMantenimientosData = {
                    series: response.data.series,
                    fields: response.data.fields
                };
                response.data.series.map(i => this.tableData2.push({ ...i }));
                response.data.fields.map(i => this.fields2.push({ key: i, sortable : true }));
                this.totalRows2= this.tableData2.length;
            } catch (error) {
                console.error(error);
            }
        },
        async getTableInstalaciones() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/installationprogresstable');
                this.previousTableInstalacionesData = {
                    series: response.data.series,
                    fields: response.data.fields
                };
                response.data.series.map(i => this.tableData.push({ ...i }));
                response.data.fields.map(i => this.fields.push({ key: i, sortable : true }));
                this.totalRows = this.tableData.length;
            } catch (error) {
                console.error(error);
            }
        },
        async getTablePorDia(){
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/productiontable');
                this.previousTablePorDiaData = {
                    series: response.data.series,
                    fields: response.data.fields
                };
                response.data.series.map(i => this.tableDataPorDia.push({ ...i }));
                //this.fieldsPorDia.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsPorDia.push({ key: i, sortable : true }));
                this.totalRowsPorDia = this.tableDataPorDia.length;
                this.totalesPorDia = response.data.totales;
            } catch (error) {
                console.error(error);
            }
        },
        async getTableAgendaPorDias(){ 
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/diarytable');
                this.previousTableAgendaPorDiasData = {
                    series: response.data.series,
                    fields: response.data.fields
                };
                response.data.series.map(i => this.tableDataAgenda.push({ ...i }));
                //this.fieldsAgenda.push({ key: "Ciudad", sortable : true })
                response.data.fields.map(i => this.fieldsAgenda.push({ key: i, sortable : true }));
                this.totalRowsAgenda = this.tableDataAgenda.length;
                this.totalesAgenda = response.data.totales;
            } catch (error) {
                console.error(error);
            }
        },
        async getInstalaciones() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/installationprogressgraphic');
                console.log(response)
                if (response.data.series && response.data.categories) {
                    this.PreviusChartInstalaciones = {
                        series: response.data.series,
                        categories: response.data.categories
                    };
                    this.columnChart.series = response.data.series;
                    this.columnChart.chartOptions.xaxis.categories = response.data.categories;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getMantenimientos() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/maintenanceprogressgraphic');
                if (response.data.series && response.data.categories) {
                    // Si ambos series y categories están definidos y no son nulos
                    this.previousMantenimientosData = {
                        series: response.data.series,
                        categories: response.data.categories
                    };
                    this.columnChart2.series = response.data.series;
                    this.columnChart2.chartOptions.xaxis.categories = response.data.categories;
                } else {
                    // Si uno o ambos son nulos o no están definidos
                    console.error("No se encontraron datos de series o categorías.");
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getRatioInstalaciones() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/installationratiographic');
                this.previousRatioInstalacionesData = {
                    series : response.data.series,
                    labels : response.data.categories
                }
                this.pieChart.series = response.data.series;
                this.pieChart.chartOptions.labels = response.data.categories;
            } catch (error) {
                console.error(error);
            }
        },
        async getRatioMantenimientos() {
            try {
                const response = await this.$http.get(this.$apiURL+'control-panel/maintenanceratiographic');
                this.previousRatioMantenimientosData = {
                    series : response.data.series,
                    labels : response.data.categories
                }
                this.pieChart2.series = response.data.series;
                this.pieChart2.chartOptions.labels = response.data.categories;
            } catch (error) {
                console.error(error);
            }
        },
        dataChanged(previousData, currentData) {
            if(currentData == undefined || previousData == undefined){ return false}
            console.log(previousData)
            console.log(currentData)
            return JSON.stringify(previousData) !== JSON.stringify(currentData);
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
    <BCol lg="4">
        <BCard no-body>
            <BCardBody>
                <BCardTitle>Producción Día : S/{{ totalesPorDia }}</BCardTitle>
                <BRow class="mt-4">
                    <BCol sm="12" md="6">
                        <div id="tickets-table_length" class="dataTables_length">
                        <label class="d-inline-flex align-items-center">
                            Show&nbsp;
                            <BFormSelect
                                v-model="perPagePorDia"
                                size="sm"
                                :options="pageOptionsPorDia"
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
                            v-model="filterPorDia"
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
                        :items="tableDataPorDia"
                        :fields="fieldsPorDia"
                        responsive="sm"
                        :per-page="perPagePorDia"
                        :current-page="currentPagePorDia"
                        :sort-by.sync="sortByPorDia"
                        :sort-desc.sync="sortDescPorDia"
                        :filter="filterPorDia"
                        :filter-included-fields="filterOnPorDia"
                        @filtered="onFilteredPorDia"
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
                            v-model="currentPagePorDia"
                            :total-rows="totalRowsPorDia"
                            :per-page="perPagePorDia"
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
        <BCol lg="6">
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
        <BCol lg="6">
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
        
        <BCol lg="12">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Agenda a 7 días</BCardTitle>
                    <BRow class="mt-4">
                        <BCol sm="12" md="6">
                            <div id="tickets-table_length" class="dataTables_length">
                                <label class="d-inline-flex align-items-center">
                                    Show&nbsp;
                                    <BFormSelect
                                        v-model="perPageAgenda"
                                        size="sm"
                                        :options="pageOptionsAgenda"
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
                                    v-model="filterAgenda"
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
                <BRow>
                    <BCol>
                        <div class="dataTables_paginate paging_simple_numbers float-end">
                            <ul class="pagination pagination-rounded mb-0">
                                <!-- pagination -->
                                <BPagination
                                    v-model="currentPageAgenda"
                                    :total-rows="totalRowsAgenda"
                                    :per-page="perPageAgenda"
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
