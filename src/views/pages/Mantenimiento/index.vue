<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import {constructor_barchart,constructor_piechart} from "@/components/constructor";
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
            perPageSup: 3,
            pageOptionsSup: [3,10,25,50,100],
            filterOnSup: [],
            filterSup: null,
            sortBySup: "age",
            sortDescSup: false,
            fieldsSup: [],
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
            //--------------------
        };
    },
    mounted() {
        //obtener datos de la api
        this.getCity();
        this.getRatioInstalaciones();
        this.getRatioMantenimientos();
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
        //-------------------------------------------------------
        async getContrata(){
            if(this.CiudadId1 != null){
                this.$nextTick(async () => {
                    const response = await this.$http.get(this.$apiURL+'maintenance/ineffectivecontratagraphic/'+this.CiudadId1);
                    if (response.data.series && response.data.categories) {
                        this.ContrataBar = {... constructor_barchart(response.data.series, response.data.categories)}
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
                    this.tableDataSup.splice(0, this.tableDataSup.length);
                    this.fieldsSup.splice(0, this.fieldsSup.length);
                    const response = await this.$http.get(this.$apiURL+'maintenance/childhoodbreakdownsmanagers/'+this.CiudadId3);
                    response.data.series.map(i => this.tableDataSup.push({ ...i }));
                    response.data.fields.map(i => this.fieldsSup.push({ key: i, sortable : true }));

                    this.totalRowsSup = this.tableDataSup.length;
                });
            }
        },
        async getTableTec(){
            if(this.CiudadId4 != null){
                this.$nextTick(async () => {
                    this.tableDataTec.splice(0, this.tableDataTec.length);
                    this.fieldsTec.splice(0, this.fieldsTec.length);

                    const response = await this.$http.get(this.$apiURL+'maintenance/childhoodbreakdownstechnicians/'+this.CiudadId4);
                    response.data.series.map(i => this.tableDataTec.push({ ...i }));
                    //this.fieldsTec.push({ key: "Ciudad", sortable : true })
                    response.data.fields.map(i => this.fieldsTec.push({ key: i, sortable : true }));
                    this.totalRowsTec = this.tableDataTec.length;
                    this.totalesTec = response.data.totales;
                });
            }
        },
        async getCity(){ 
            const response = await this.$http.get(this.$apiURL+'city/all');
                response.data.data.map(i => this.Ciudades.push( i.name ));
                this.CiudadId1 = this.Ciudades[0]
                this.CiudadId2 = this.Ciudades[0]
                this.CiudadId3 = this.Ciudades[0]
                this.CiudadId4 = this.Ciudades[0]
                this.getContrata();
                this.getTableSup();
                this.getTableTec();
        },
        async getRatioInstalaciones(){
            try {
                const response = await this.$http.get(this.$apiURL+'maintenance/childhoodbreakdownsgeneral');
                if (response.data.series && response.data.categories) {
                    this.pieChart = {... constructor_piechart(response.data.series, response.data.categories)}
                }
                else{
                    this.pieChart = {... constructor_piechart([] , [])}
                }
            } catch (error) {
                console.error(error);  
            }
        },
        async getRatioMantenimientos(){
            try {
                const response = await this.$http.get(this.$apiURL+'maintenance/ineffectivedistributionratiographic');
                if (response.data.series && response.data.categories) {
                    this.pieChart2 = {... constructor_piechart(response.data.series, response.data.categories)}
                }
                else{
                    this.pieChart2 = {... constructor_piechart([], [])}
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
                <BCardBody>
                    <BCardTitle class="mb-4">Inefectiva Gestor</BCardTitle>
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
                <BCardBody>
                    <BCardTitle class="mb-4">Distrubución Inefectiva</BCardTitle>
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
        <BCol lg="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle class="mb-4">Distribución Reitero</BCardTitle>
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
                    <BCardTitle>Averías Reiteradas - Sup</BCardTitle>
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
                    <BCardTitle>Averías Reiteradas - Tec</BCardTitle>
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
