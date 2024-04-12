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
                    text: "Gestión",
                    href: "/"
                },
                {
                    text: "Listadp",
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
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'manager/managersaltas');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                if (response) {
                    response.data.data.map(i => this.GestorAgenda.push( i.manager ));
                    this.GestorAgendaId = this.GestorAgenda[0]
                }
                else{
                    this.GestorAgendaId = ""
                }
                this.getTableGestor()
            } catch (error) {
                console.error(error);
            }
        },
        async getCity() {
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'city/all');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                if (response) {
                    response.data.data.forEach(city => this.Ciudades.push(city.name));
                    this.ciudadId = this.Ciudades[0];
                    this.ciudadId2 = this.Ciudades[0];
                } else {
                    this.ciudadId = "Lima";
                    this.ciudadId2 = "Lima";
                }
                // Realiza otras operaciones después de obtener las ciudades
                this.getTableInstalaciones();
                this.getTableMantenimientos();
            } catch (error) {
                console.error(error);
            }
        },

        async getOrdenesGestor(){
            try {
                const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                const responsePromise = this.$http.get(this.$apiURL + 'manager/managersaverias');
                const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                if (response) {
                    response.data.data.forEach(i => this.OrdenesGestor.push(i.manager));
                    this.OrdenesGestorId = this.OrdenesGestor[0]
                } else {
                    this.OrdenesGestorId = "";
                }
                // Realiza otras operaciones después de obtener las ciudades
                this.getTableOrder();
            } catch (error) {
                console.error(error);
            }    
        },
        async getTableMantenimientos() {
            try {
                if(this.ciudadId2 != null){
                    this.$nextTick(async () => {
                        this.tableMantenimiento.splice(0, this.tableMantenimiento.length);
                        this.fieldsMantenimiento.splice(0, this.fieldsMantenimiento.length);
                        const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                        const responsePromise = this.$http.get(this.$apiURL + 'management/maintenanceprogresstable/' + this.ciudadId2);
                        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                        const response = await Promise.race([responsePromise, timeoutPromise]);
                        if (response) {
                            response.data.series.map(i => this.tableMantenimiento.push({ ...i }));
                            response.data.fields.map(i => this.fieldsMantenimiento.push({ key: i, sortable : true }));
                            this.totalRows2 = this.tableMantenimiento.length;
                            localStorage.setItem('maintenance_progress_table', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('maintenance_progress_table')); // Convertir los datos del usuario a JSON
                            console.log(currentData)
                            if(currentData){
                                currentData.data.series.map(i => this.tableMantenimiento.push({ ...i }));
                                currentData.data.fields.map(i => this.fieldsMantenimiento.push({ key: i, sortable : true }));
                                this.totalRows2 = this.tableMantenimiento.length;
                            }
                        }
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },

        async getTableInstalaciones() {
            try {
                if(this.ciudadId != null){
                    this.$nextTick(async () => {
                        this.TableInstalaciones.splice(0, this.TableInstalaciones.length);
                        this.fields.splice(0, this.fields.length);
                        const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                        const responsePromise = this.$http.get(this.$apiURL + 'management/installationprogresstable/' + this.ciudadId);
                        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                        const response = await Promise.race([responsePromise, timeoutPromise]);
                        if (response) {
                            response.data.series.map(i => this.TableInstalaciones.push({ ...i }));
                            response.data.fields.map(i => this.fields.push({ key: i, sortable : true }));
                            this.totalRows = this.TableInstalaciones.length;
                            localStorage.setItem('installation_progress_table', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('installation_progress_table')); // Convertir los datos del usuario a JSON
                            if(currentData){
                                currentData.data.series.map(i => this.TableInstalaciones.push({ ...i }));
                                currentData.data.fields.map(i => this.fields.push({ key: i, sortable : true }));
                                this.totalRows = this.TableInstalaciones.length;
                            }
                        }
                    });
                }
            } catch (error) {
                // Maneja los errores
                console.error(error);
            }
        },

        async getTableGestor(){
            try {
                if(this.GestorAgendaId != null){
                    this.$nextTick(async () => {
                        this.tableDataGestor.splice(0, this.tableDataGestor.length);
                        this.fieldsGestor.splice(0, this.fieldsGestor.length);
                        const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                        const responsePromise = this.$http.get(this.$apiURL + 'management/installationlogmanagertable/' + this.GestorAgendaId);
                        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                        const response = await Promise.race([responsePromise, timeoutPromise]);

                        if (response) {
                            response.data.series.map(i => this.tableDataGestor.push({ ...i }));
                            response.data.categories.map(i => this.fieldsGestor.push({ key: i, sortable : true }));
                            this.totalRowsGestor = this.tableDataGestor.length;
                            localStorage.setItem('installation_manager_table', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('installation_manager_table')); // Convertir los datos del usuario a JSON
                            if(currentData){
                                currentData.data.series.map(i => this.tableDataGestor.push({ ...i }));
                                currentData.data.categories.map(i => this.fieldsGestor.push({ key: i, sortable : true }));
                                this.totalRowsGestor = this.tableDataGestor.length;
                            }
                        }
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

                        const TIMEOUT_MS = 4000; // Tiempo de espera en milisegundos
                        const responsePromise = this.$http.get(this.$apiURL + 'management/ordermanagertable/' + this.OrdenesGestorId);
                        const timeoutPromise = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS));
                        const response = await Promise.race([responsePromise, timeoutPromise]);

                        if (response) {
                            response.data.series.map(i => this.tableDataOrder.push({ ...i }));
                            //this.fieldsOrder.push({ key: "Ciudad", sortable : true })
                            response.data.categories.map(i => this.fieldsOrder.push({ key: i, sortable : true }));
                            this.totalRowsOrder = this.tableDataOrder.length;
                            localStorage.setItem('order_manager_table', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('order_manager_table')); // Convertir los datos del usuario a JSON
                            if(currentData){
                                currentData.data.series.map(i => this.tableDataOrder.push({ ...i }));
                                //this.fieldsOrder.push({ key: "Ciudad", sortable : true })
                                currentData.data.categories.map(i => this.fieldsOrder.push({ key: i, sortable : true }));
                                this.totalRowsOrder = this.tableDataOrder.length;
                            }
                        }
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
