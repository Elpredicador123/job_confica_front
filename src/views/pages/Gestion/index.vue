<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import moment from 'moment';

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
            dataDateInstalaciones: null,
            currentPage: 1,
            perPage: 20,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            fields: [
            ],
            //--------------------
            dataDateMantenimientos: null,
            currentPage2: 1,
            perPage2: 20,
            pageOptions2: [10, 25, 50, 100],
            filter2: null,
            filterOn2: [],
            sortBy2: "age",
            sortDesc2: false,
            fieldsMantenimiento: [
            ],
            //--------------------
            dataDateGestor: null,
            currentPageGestor: 1,
            perPageGestor: 20,
            pageOptionsGestor: [10,25,50,100],
            filterOnGestor: [],
            filterGestor: null,
            sortByGestor: "age",
            sortDescGestor: false,
            fieldsGestor: [],
            //--------------------
            dataDateOrder: null,
            currentPageOrder: 1,
            perPageOrder: 20,
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
        this.getGestorAgenda();
        this.getOrdenesGestor();
    },
    methods:{
        formatearHora(value){
            if (!value) return '';
            return moment(value, 'DD/MM/YYYY HH:mm:ss').format('HH:mm:ss');
        },
        async fetchData(url, timeoutMs = 4000) {
            try {
                const responsePromise = this.$http.get(this.$apiURL + url);
                const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeoutMs));
                const response = await Promise.race([responsePromise, timeoutPromise]);
                return response.data;

            } catch (error) {

                return null;  // Retornar null o manejar de otra forma según sea necesario
            }
        },
        async getGestorAgenda(){
            try {
                const response = await this.fetchData('manager/managersaltas');
                if (response && response.data) {
                    response.data.map(i => this.GestorAgenda.push( i.manager ));
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
                const response = await this.fetchData('city/all');
                if (response && response.data) {
                    response.data.forEach(city => this.Ciudades.push(city.name));
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
                const response = await this.fetchData('manager/managersaverias');
                if (response && response.data) {
                    response.data.forEach(i => this.OrdenesGestor.push(i.manager));
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
                        if (response && response.data.series && response.data.fields) {
                            response.data.series.map(i => this.tableMantenimiento.push({ ...i }));
                            response.data.fields.map(i => this.fieldsMantenimiento.push({ key: i, sortable : true }));
                            this.dataDateMantenimientos = this.formatearHora(response.data.date)
                            localStorage.setItem('maintenance_progress_table', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('maintenance_progress_table')); // Convertir los datos del usuario a JSON
                            console.log(currentData)
                            if(currentData){
                                currentData.data.series.map(i => this.tableMantenimiento.push({ ...i }));
                                currentData.data.fields.map(i => this.fieldsMantenimiento.push({ key: i, sortable : true }));
                                this.dataDateMantenimientos = this.formatearHora(currentData.data.date)
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
                        console.log(response)
                        if (response && response.data.series && response.data.fields) {
                            response.data.series.map(i => this.TableInstalaciones.push({ ...i }));
                            response.data.fields.map(i => this.fields.push({ key: i, sortable : true }));
                            this.dataDateInstalaciones = this.formatearHora(response.data.date)
                            localStorage.setItem('installation_progress_table', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('installation_progress_table')); // Convertir los datos del usuario a JSON
                            if(currentData){
                                currentData.data.series.map(i => this.TableInstalaciones.push({ ...i }));
                                currentData.data.fields.map(i => this.fields.push({ key: i, sortable : true }));
                                this.dataDateInstalaciones = this.formatearHora(currentData.data.date)
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

                        if (response && response.data.series && response.data.categories) {
                            response.data.series.map(i => this.tableDataGestor.push({ ...i }));
                            response.data.categories.map(i => this.fieldsGestor.push({ key: i, sortable : true }));
                            this.dataDateGestor = this.formatearHora(response.data.date)
                            localStorage.setItem('installation_manager_table', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('installation_manager_table')); // Convertir los datos del usuario a JSON
                            if(currentData){
                                currentData.data.series.map(i => this.tableDataGestor.push({ ...i }));
                                currentData.data.categories.map(i => this.fieldsGestor.push({ key: i, sortable : true }));
                                this.dataDateGestor = this.formatearHora(currentData.data.date)
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

                        if (response && response.data.series && response.data.categories) {
                            response.data.series.map(i => this.tableDataOrder.push({ ...i }));
                            response.data.categories.map(i => this.fieldsOrder.push({ key: i, sortable : true }));
                            this.dataDateOrder = this.formatearHora(response.data.date)
                            localStorage.setItem('order_manager_table', JSON.stringify(response));
                        }
                        else{
                            const currentData = JSON.parse(localStorage.getItem('order_manager_table')); // Convertir los datos del usuario a JSON
                            if(currentData){
                                currentData.data.series.map(i => this.tableDataOrder.push({ ...i }));
                                currentData.data.categories.map(i => this.fieldsOrder.push({ key: i, sortable : true }));
                                this.dataDateOrder = this.formatearHora(currentData.data.date)
                            }
                        }
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },
        getColor(tiempoSinAtencion) {
            console.log(tiempoSinAtencion)
            return 'success';

            // if (tiempoSinAtencion >= 0 && tiempoSinAtencion < 50) {
            //     return 'success'; // Verde
            // } else if (tiempoSinAtencion >= 50 && tiempoSinAtencion < 70) {
            //     return 'warning'; // Amarillo
            // } else {
            //     return 'danger'; // Rojo
            // }
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
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Avance instalaciones
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ dataDateInstalaciones }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
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
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Ordenes por gestor instalaciones
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ dataDateGestor }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
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
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
    <!-- end row -->

    <!-- end row -->
    <div class="row">
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Avance Mantenimientos
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ dataDateMantenimientos }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
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
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="6">
            <BCard no-body>
                <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                    <BRow>
                        <BCol sm="7">
                            <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Ordenes por gestor - horas pendientes
                        </BCol>
                        <BCol sm="5">
                            Actualizado a las {{ dataDateOrder }}
                        </BCol>
                    </BRow>
                </BCardHeader>
                <BCardBody>
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
                        <template v-slot:cell(button)="row">
                            <BButton
                                :variant="getColor(row.item['Tiempo sin atención'])"
                                size="sm"
                            >
                                Validar
                            </BButton>
                        </template>
                        </BTable>
                    </div>
                </BCardBody>
            </BCard>
        </BCol>
    </div>
    <!-- end row -->
</Layout>
</template>
