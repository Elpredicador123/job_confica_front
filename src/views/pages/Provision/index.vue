<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Multiselect from "@vueform/multiselect";
import {
  barChart,
  barChart2
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
            tableDataSup: [],
            tableDataTec: [],
            ContrataBar: barChart, 
            GestorBar: barChart2,
            GestorAgenda: [],
            GestorOrdenes: [
            ],
            GestorAgendaId: null,
            GestorOrdenId: null,
            Ciudades : [],
            CiudadId1: "LIMA",
            CiudadId2: "LIMA",
            CiudadId3: "LIMA",
            CiudadId4: "LIMA",
            itemsSup: [
                {
                    text: "Charts",
                    href: "/"
                },
                {
                    text: "Apex",
                    active: true
                }
            ],
            itemsTec: [
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
        this.totalRowsSup = this.itemsSup.length;
        this.totalRowsTec = this.itemsTec.length;

        //obtener datos de la api
        this.getTableSup();
        this.getCity();
        this.getTableTec();
        this.getContrata();
        this.getGestor();
        setInterval(() => {
            this.updateDataIfChanged();
        }, 300000);
    },
    methods:{
        async updateDataIfChanged() {
            await Promise.all([
                this.updateContrataData(),
                this.updateGestorData(),
                this.updateTableSupData(),
                this.updateTableTecData(),
            ]);
        },
        async updateContrataData() {
            this.$nextTick(async () => {
                const response = await this.$http.get(this.$apiURL + 'provision/diarycontratagraphic/' + this.CiudadId1);
                const currentData = {
                    series: response.data.series,
                    categories: response.data.categories
                };

                if (this.dataChanged(this.previousContrataData, currentData)) {
                    this.ContrataBar.series[0].data = currentData.series;
                    this.ContrataBar.chartOptions.xaxis.categories = currentData.categories;
                    this.previousContrataData = currentData;
                }
            });
        },

        async updateGestorData() {
            this.$nextTick(async () => {
                const response = await this.$http.get(this.$apiURL + 'provision/diarymanagergraphic/' + this.CiudadId2);
                const currentData = {
                    series: response.data.series,
                    categories: response.data.categories
                };

                if (this.dataChanged(this.previousGestorData, currentData)) {
                    this.GestorBar.series[0].data = currentData.series;
                    this.GestorBar.chartOptions.xaxis.categories = currentData.categories;
                    this.previousGestorData = currentData;
                }
            });
        },

        async updateTableSupData() {
            this.$nextTick(async () => {
                const response = await this.$http.get(this.$apiURL + 'provision/childhoodbreakdownsmanagers/' + this.CiudadId3);
                const currentData = {
                    series: response.data.series,
                    fields: response.data.fields
                };

                if (this.dataChanged(this.previousTableSupData, currentData)) {
                    this.tableDataSup.splice(0, this.tableDataSup.length);
                    this.fieldsSup.splice(0, this.fieldsSup.length);
                    currentData.series.map(i => this.tableDataSup.push({ ...i }));
                    currentData.fields.map(i => this.fieldsSup.push({ key: i, sortable: true }));
                    this.totalRowsSup = this.tableDataSup.length;
                    this.totalesSup = response.data.totales;
                    this.previousTableSupData = currentData;
                }
            });
        },

        async updateTableTecData() {
            this.$nextTick(async () => {
                const response = await this.$http.get(this.$apiURL + 'provision/childhoodbreakdownstechnicians/' + this.CiudadId4);
                const currentData = {
                    series: response.data.series,
                    fields: response.data.fields
                };
                if (this.dataChanged(this.previousTableTecData, currentData)) {
                    this.tableDataTec.splice(0, this.tableDataTec.length);
                    this.fieldsTec.splice(0, this.fieldsTec.length);
                    currentData.series.map(i => this.tableDataTec.push({ ...i }));
                    currentData.fields.map(i => this.fieldsTec.push({ key: i, sortable: true }));
                    this.totalRowsTec = this.tableDataTec.length;
                    this.totalesTec = response.data.totales;
                    this.previousTableTecData = currentData;
                }
            });
        },
        dataChanged(previousData, currentData) {
            return JSON.stringify(previousData) !== JSON.stringify(currentData);
        },
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
            this.$nextTick(async () => {
                this.ContrataBar = barChart;
                const response = await this.$http.get(this.$apiURL+'provision/diarycontratagraphic/'+this.CiudadId1);
                this.ContrataBar.series[0].data = response.data.series; 
                this.ContrataBar.chartOptions.xaxis.categories = response.data.categories;
            });
        },
        async getGestor() {
            try {
                this.$nextTick(async () => {
                    this.GestorBar = barChart2;

                    const response = await this.$http.get(this.$apiURL+'provision/diarymanagergraphic/'+this.CiudadId2);
                    this.GestorBar.series[0].data = response.data.series;
                    this.GestorBar.chartOptions.xaxis.categories = response.data.categories;
                })
            } catch (error) {
                console.error(error);
            }
        },
        async getTableSup(){
            try {
                this.$nextTick(async () => {
                    this.tableDataSup.splice(0, this.tableDataSup.length);
                    this.fieldsSup.splice(0, this.fieldsSup.length);

                    const response = await this.$http.get(this.$apiURL+'provision/childhoodbreakdownsmanagers/'+this.CiudadId3);
                    response.data.series.map(i => this.tableDataSup.push({ ...i }));
                    //this.fieldsGestor.push({ key: "Ciudad", sortable : true })
                    response.data.fields.map(i => this.fieldsSup.push({ key: i, sortable : true }));
                    this.totalRowsSup = this.tableDataSup.length;
                    this.totalesSup = response.data.totales;
                });
            } catch (error) {
                console.error(error);
            }
        },
        async getTableTec(){
            try {
                this.$nextTick(async () => { 
                    this.tableDataTec.splice(0, this.tableDataTec.length);
                    this.fieldsTec.splice(0, this.fieldsTec.length);

                    const response = await this.$http.get(this.$apiURL+'provision/childhoodbreakdownstechnicians/'+this.CiudadId4);
                    response.data.series.map(i => this.tableDataTec.push({ ...i }));
                    //this.fieldsTec.push({ key: "Ciudad", sortable : true })
                    response.data.fields.map(i => this.fieldsTec.push({ key: i, sortable : true }));
                    this.totalRowsTec = this.tableDataTec.length;
                    this.totalesTec = response.data.totales;
                });
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
        <BCol lg="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle class="mb-4">Cumplimiento agenda - Contrata</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId1"
                                :options="Ciudades"
                                @change="getContrata()"
                                placeholder="Seleccionar Ciudad"
                            />
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
                            <Multiselect
                                v-model="CiudadId2"
                                :options="Ciudades"
                                @change="getGestor()"
                                placeholder="Seleccionar Ciudad"
                            />
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
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Averías de infancia - Sup</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId3"
                                :options="Ciudades"
                                @change="getTableSup()"
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
        <BCol cols="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Averías de infancia - Tec</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <Multiselect
                                v-model="CiudadId4"
                                :options="Ciudades"
                                @change="getTableTec()"
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
