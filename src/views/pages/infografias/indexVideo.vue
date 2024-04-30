<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import VideoModal from "./edit.vue";
import InfografiaModal from "./edit_infografia.vue";

/**
 * Products component
 */
export default {
  components: { Layout, PageHeader,InfografiaModal,VideoModal },
    data() {
        return {
            title: "Material de Capacitación",
            //--------------------------
            tableData: [],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            fields: [
                {
                    key: "id",
                    sortable: true
                },
                {
                    key: "title",
                    sortable: true
                },
                {
                    key: "Autor",
                    sortable: true
                },
                {
                    key: "date",
                    sortable: true
                },
                {
                    key: "url",
                    sortable: true
                },
            ],
            //--------------------------
            tableInfografia: [],
            totalRowsInfografia: 1,
            currentPageInfografia: 1,
            perPageInfografia: 10,
            pageOptionsInfografia: [10, 25, 50, 100],
            filterInfografia: null,
            filterOnInfografia: [],
            sortByInfografia: "age",
            sortDescInfografia: false,
            fieldsInfografia: [
                {
                    key: "id",
                    sortable: true
                },
                {
                    key: "title",
                    sortable: true
                },
                {
                    key: "Autor",
                    sortable: true
                },
                {
                    key: "date",
                    sortable: true
                },
                {
                    key: "url",
                    sortable: true
                },
            ]
        }
    },
    // computed: {
    //     /**
    //      * Total no. of records
    //      */
    //     rows: function () {
    //         return this.tableData.length;
    //     }
    // },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.tableData.length;
        this.totalRowsInfografia = this.tableInfografia.length;
        //obtener datos de la api
        this.getData();
        this.getInfografia();
    },
    methods:{
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        onFilteredInfografia(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsInfografia = filteredItems.length;
            this.currentPageInfografia = 1;
        },
        async getData() {
            try {
                const response = await this.$http.get(this.$apiURL+'video/all');
                response.data.data.map(i => this.tableData.push({ ...i }));
                this.totalRows = this.tableData.length;
            } catch (error) {
                console.error(error);
            }
        },
        async getInfografia() {
            try {
                const response = await this.$http.get(this.$apiURL+'infographic/all');
                response.data.data.map(i => this.tableInfografia.push({ ...i }));
                this.totalRowsInfografia = this.tableInfografia.length;
            } catch (error) {
                console.error(error);
            }
        },
        editItem(item) {
            this.selectedItem = JSON.parse(JSON.stringify(item)); // Realiza una copia profunda del ítem
            this.$refs.VideoModal.open(this.selectedItem);
        },
        editInfografia(item) {
            this.selectedItem = JSON.parse(JSON.stringify(item)); // Realiza una copia profunda del ítem
            this.$refs.InfografiaModal.open(this.selectedItem);
        },
    }
}
</script>

<template>
    <Layout>
        <PageHeader :title="title"  />
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                        <BRow>
                            <BCol sm="7">
                                <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Material de Capacitación
                            </BCol>
                            <BCol sm="5">
                            </BCol>
                        </BRow>
                    </BCardHeader>
                    <BCardBody>
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
                            <template #cell(url)="data">
                                <a :href="`${this.$storageURL}/${data.item.url}`" target="_blank" rel="noopener noreferrer" download>
                                    <i class="fas fa-download"></i> Descargar
                                </a>
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
        <VideoModal ref="VideoModal"></VideoModal>
        <InfografiaModal ref="InfografiaModal"></InfografiaModal>
    </Layout>
</template>