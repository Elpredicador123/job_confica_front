<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

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
            TableInstalaciones: [],
            tableMantenimiento: [],
            tableDataGestor: [],
            tableDataOrder: [],
            GestorAgenda: [],
            Ciudades : [],
            ciudadId: "Lima",
            ciudadId2: "Lima",
            OrdenesGestor: [],
            GestorOrdenes: [],
            GestorAgendaId: null,
            OrdenesGestorId: null,
            GestorOrdenId: null,
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
            //Primera tabla------------:
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            fields: [
            ],
            //--------------------
            totalRows2: 1,
            currentPage2: 1,
            perPage2: 10,
            pageOptions2: [10, 25, 50, 100],
            filter2: null,
            filterOn2: [],
            sortBy2: "age",
            sortDesc2: false,
            fieldsMantenimiento: [
            ],
            //--------------------
            totalRowsGestor: 1,
            currentPageGestor: 1,
            perPageGestor: 10,
            pageOptionsGestor: [10,25,50,100],
            filterOnGestor: [],
            filterGestor: null,
            sortByGestor: "age",
            sortDescGestor: false,
            fieldsGestor: [],
            totalesGestor : 0,
            //--------------------
            totalRowsOrder: 1,
            currentPageOrder: 1,
            perPageOrder: 10,
            pageOptionsOrder: [10,25,50,100],
            filterOnOrder: [],
            filterOrder: null,
            sortByOrder: "age",
            sortDescOrder: false,
            fieldsOrder: [],
            totalesOrder : 0,
            //-----------------------
            previousTableMantenimientosData: {},
            previousTableInstalacionesData : {},
            previousTableGestorData: {},
            previousTableOrderData: { },
        };
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
        this.totalRows2 = this.items2.length;
        this.totalRowsGestor = this.itemsGestor.length;
        this.totalRowsOrder = this.itemsOrder.length;
        this.getCity();
        //obtener datos de la api
        this.getGestorAgenda();
        this.getOrdenesGestor();

        // Establecer intervalo para obtener datos de la API cada 5 minutos
        // setInterval(() => {
        //     this.updateDataIfChanged();
        // }, 100000);
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
        async getGestorAgenda(){
            const response = await this.$http.get(this.$apiURL+'manager/managersaltas');
                response.data.data.map(i => this.GestorAgenda.push( i.manager ));
                this.GestorAgendaId = this.GestorAgenda[0]
                this.getTableGestor()
        },
        async getCity(){
            const response = await this.$http.get(this.$apiURL+'city/all');
                response.data.data.map(i => this.Ciudades.push( i.name ));
                this.ciudadId = this.Ciudades[0]
                this.ciudadId2 = this.Ciudades[0]
                this.getTableInstalaciones();
                this.getTableMantenimientos();
                console.log(this.Ciudades)
        },
        async getOrdenesGestor(){
            const response = await this.$http.get(this.$apiURL+'manager/managersaverias');
                response.data.data.map(i => this.OrdenesGestor.push( i.manager ));
                this.OrdenesGestorId = this.OrdenesGestor[0]
                this.getTableOrder();
        },
        async getTableMantenimientos() {
            try {
                if(this.ciudadId2 != null){
                    this.$nextTick(async () => {
                        this.tableMantenimiento.splice(0, this.tableMantenimiento.length);
                        this.fieldsMantenimiento.splice(0, this.fieldsMantenimiento.length);
                        const response = await this.$http.get(this.$apiURL+'management/maintenanceprogresstable/'+this.ciudadId2);
                        this.previousTableMantenimientosData = {
                            series: response.data.series,
                            fields: response.data.fields
                        };
                        response.data.series.map(i => this.tableMantenimiento.push({ ...i }));
                        response.data.fields.map(i => this.fieldsMantenimiento.push({ key: i, sortable : true }));
                        this.totalRows2 = this.tableMantenimiento.length;
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },

        async getTableInstalaciones() {
            try {
                    
                    this.$nextTick(async () => {
                        this.TableInstalaciones.splice(0, this.TableInstalaciones.length);
                        this.fields.splice(0, this.fields.length);

                        const response = await this.$http.get(this.$apiURL+'management/installationprogresstable/'+this.ciudadId);
                        this.previousTableInstalacionesData = {
                            series: response.data.series,
                            fields: response.data.fields
                        };
                        response.data.series.map(i => this.TableInstalaciones.push({ ...i }));
                        response.data.fields.map(i => this.fields.push({ key: i, sortable : true }));
                        this.totalRows = this.TableInstalaciones.length;
                    });
            } catch (error) {
                console.error(error);
            }
        },
        async getTableGestor(){
            try {
                if(this.GestorAgendaId != null){
                    this.$nextTick(async () => {
                        this.tableDataGestor.splice(0, this.tableDataGestor.length);
                        this.fieldsGestor.splice(0, this.fieldsGestor.length);

                        const response = await this.$http.get(this.$apiURL+'management/installationlogmanagertable/'+this.GestorAgendaId);
                        this.previousTableGestorData = {
                            series: response.data.series,
                            fields: response.data.fields
                        };
                        response.data.series.map(i => this.tableDataGestor.push({ ...i }));
                        //this.fieldsGestor.push({ key: "Ciudad", sortable : true })
                        response.data.categories.map(i => this.fieldsGestor.push({ key: i, sortable : true }));
                        this.totalRowsGestor = this.tableDataGestor.length;
                        this.totalesGestor = response.data.totales;
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },
        async getTableOrder(){
            try {
                if(this.OrdenesGestorId != null){
                    this.$nextTick(async () => {
                        this.tableDataOrder.splice(0, this.tableDataOrder.length);
                        this.fieldsOrder.splice(0, this.fieldsOrder.length);

                        const response = await this.$http.get(this.$apiURL+'management/ordermanagertable/'+this.OrdenesGestorId);
                        this.previousTableOrderData = {
                            series: response.data.series,
                            categories: response.data.categories
                        };
                        response.data.series.map(i => this.tableDataOrder.push({ ...i }));
                        //this.fieldsOrder.push({ key: "Ciudad", sortable : true })
                        response.data.categories.map(i => this.fieldsOrder.push({ key: i, sortable : true }));
                        this.totalRowsOrder = this.tableDataOrder.length;
                        this.totalesOrder = response.data.totales;
                    });
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
                    <BCardTitle>Avance instalaciones</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="ciudadId"
                                size="sm"
                                :options="Ciudades"
                                @change="getTableInstalaciones()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
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
                            :items="TableInstalaciones"
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
                    <BCardTitle>Ordenes por gestor instalaciones</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="GestorAgendaId"
                                size="sm"
                                :options="GestorAgenda"
                                @change="getTableGestor()"
                            ></BFormSelect>
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
    </BRow>
    <!-- end row -->

    <!-- end row -->
    <div class="row">
        <BCol lg="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Avance Mantenimientos</BCardTitle>
                    <BRow>
                        <BCol cols="7">

                        </BCol>
                        <BCol cols="5">
                            Filtrar por:
                            <BFormSelect
                                v-model="ciudadId2"
                                size="sm"
                                :options="Ciudades"
                                @change="getTableMantenimientos()"
                            ></BFormSelect>
                        </BCol>
                    </BRow>
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
                            :items="tableMantenimiento"
                            :fields="fieldsMantenimiento"
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
        <BCol lg="6">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Ordenes por gestor - horas pendientes</BCardTitle>
                    <BRow>
                        <BCol cols="8">

                        </BCol>
                        <BCol cols="4">
                            Filtrar por:
                            <BFormSelect
                                v-model="OrdenesGestorId"
                                size="sm"
                                :options="OrdenesGestor"
                                @change="getTableOrder()"
                            ></BFormSelect>
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
    </div>
    <!-- end row -->
</Layout>
</template>
