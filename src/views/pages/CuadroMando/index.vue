<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import {constructor_chart,constructor_piechart} from "@/components/constructor";


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
            title: "Cuadro de Mando",
            tableData: [],
            tableData2: [],
            tableDataPorDia: [],
            tableDataAgenda: [],
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
            perPagePorDia: 10,
            pageOptionsPorDia: [10,25,50,100],
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
        this.totalRows = this.tableData.length;
        this.totalRows2 = this.tableData2.length;
        this.totalRowsPorDia = this.tableDataPorDia.length;
        this.totalRowsAgenda = this.tableDataAgenda.length;

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
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        onFiltered2(filteredItems) {
            this.totalRows2 = filteredItems.length;
            this.currentPage2 = 1;
        },
        onFilteredPorDia(filteredItems) {
            this.totalRowsPorDia = filteredItems.length;
            this.currentPagePorDia = 1;
        },
        onFilteredAgenda(filteredItems) {
            this.totalRowsAgenda = filteredItems.length;
            this.currentPageAgenda = 1;
        },
        async fetchData(url, timeoutMs = 4000) {
            try {
                const responsePromise = this.$http.get(this.$apiURL + url);
                const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeoutMs));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                console.log(response.data)
                return response.data;
            } catch (error) {
                console.error('Error fetching data:', error);
                return null;  // Retornar null o manejar de otra forma según sea necesario
            }
        },
        processTableData(data, tableData, fields, storageKey) {
            if (data.series && data.fields) {
                tableData.push(...data.series.map(i => ({ ...i })));
                fields.push(...data.fields.map(i => ({ key: i, sortable: true })));
                if(data.totales){
                    this.totalesPorDia = data.totales;
                }
                localStorage.setItem(storageKey, JSON.stringify({ data }));
            } else {
                this.loadFromLocalStorage(storageKey, tableData, fields);
            }
        },
        loadFromLocalStorage(storageKey, tableData, fields) {
            const currentData = JSON.parse(localStorage.getItem(storageKey));
            if (currentData) {
                this.processTableData(currentData.data, tableData, fields);
            }
        },
        async getTableMantenimientos() {
            try {
                const data = await this.fetchData('control-panel/maintenanceprogresstable');
                if(data){
                    this.processTableData(data, this.tableData2, this.fields2,'maintenance_progress');
                }
                else{
                    this.loadFromLocalStorage('maintenance_progress', this.tableData2, this.fields2);
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableInstalaciones() {
            try {
                const data = await this.fetchData('control-panel/installationprogresstable');
                if(data){
                    this.processTableData(data, this.tableData, this.fields,'installation_progress_table');
                    this.totalRows = this.tableData.length;
                }
                else{
                    this.loadFromLocalStorage('installation_progress_table', this.tableData, this.fields);
                    this.totalRows = this.tableData.length;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTablePorDia(){
            try {
                const data = await this.fetchData('control-panel/productiontable');
                if(data){
                    this.processTableData(data, this.tableDataPorDia, this.fieldsPorDia,'production_table');
                    this.totalRowsPorDia = this.tableDataPorDia.length;
                }
                else{
                    this.loadFromLocalStorage('production_table', this.tableDataPorDia, this.fieldsPorDia);
                    this.totalRowsPorDia = this.tableDataPorDia.length;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableAgendaPorDias(){
            try {
                const data = await this.fetchData('control-panel/diarytable');
                if(data){
                    this.processTableData(data, this.tableDataAgenda, this.fieldsAgenda,'agenda_dias');
                    this.totalRowsAgenda = this.tableDataAgenda.length;
                }
                else{
                    this.loadFromLocalStorage('agenda_dias', this.tableDataAgenda, this.fieldsAgenda);
                    this.totalRowsAgenda = this.tableDataAgenda.length;
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getInstalaciones() {
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'control-panel/installationprogressgraphic');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);

                if (response) {
                    this.columnChart = {... constructor_chart(response.data.series, response.data.categories)}
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
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'control-panel/maintenanceprogressgraphic');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);

                if (response) {
                    this.columnChart2 = {... constructor_chart(response.data.series, response.data.categories)}
                    localStorage.setItem('mantenimientos_data', JSON.stringify(response));
                } else {
                    const currentData = JSON.parse(localStorage.getItem('mantenimientos_data')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.columnChart2 = {... constructor_chart(currentData.data.series, currentData.data.categories)}
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
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'control-panel/installationratiographic');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);

                if (response) {
                    this.pieChart = {... constructor_piechart(response.data.series, response.data.labels)}
                    localStorage.setItem('installation_ratio', JSON.stringify(response));
                } else {
                    const currentData = JSON.parse(localStorage.getItem('installation_ratio')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.pieChart = {... constructor_piechart(currentData.data.series, currentData.data.labels)}
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
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'control-panel/maintenanceratiographic');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);

                if (response) {
                    this.pieChart2 = {... constructor_piechart(response.data.series, response.data.labels)}
                    localStorage.setItem('maintenance_ratio', JSON.stringify(response));
                } else {
                    const currentData = JSON.parse(localStorage.getItem('maintenance_ratio')); // Convertir los datos del usuario a JSON
                    if(currentData){
                        this.pieChart2 = {... constructor_piechart(currentData.data.series, currentData.data.labels)}
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
