<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import UserModal from "./edit.vue";
export default {
    components: { 
        Layout,
        PageHeader,
        UserModal
    },
    data(){
        return {
            //--------------------
            itemsUser: [
                {
                    text: "Charts",
                    href: "/"
                },
                {
                    text: "Apex",
                    active: true
                }
            ],
            tableDataUser: [],
            totalRowsUser: 1,
            currentPageUser: 1,
            perPageUser: 25,
            pageOptionsUser: [10,25,50,100],
            filterOnUser: [],
            filterUser: null,
            sortByUser: "age",
            sortDescUser: false,
            fieldsUser: [
                {
                    key: "id",
                    sortable: true
                },
                {
                    key: "username",
                    sortable: true
                },
                {
                    key: "rol",
                    sortable: true
                },
                {
                    key: "actions",
                    sortable: true
                }
            ],
        }
    },
    mounted(){
        this.totalRowsUser = this.itemsUser.length;
        this.getTableUser();
    },
    methods: {
        onFilteredUser(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsUser = filteredItems.length;
            this.currentPageUser = 1;
        },
        async getTableUser(){
          console.log("hola")
            try {
                const response = await this.$http.get(this.$apiURL+'user/all');
                console.log(response)
                response.data.data.map(i => this.tableDataUser.push({ ...i }));
                //this.fieldsUser.push({ key: "Ciudad", sortable : true })
                this.totalRowsUser = this.tableDataUser.length;
            } catch (error) {
                console.error(error);
            }
        },
        editItem(item) {
            console.log("Editar item", item);
            this.selectedItem = JSON.parse(JSON.stringify(item)); // Realiza una copia profunda del ítem
            this.$refs.UserModal.open(this.selectedItem);
        }
    },
    middleware: "authentication"
}
</script>
<template>
        <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Listado de Usuarios</BCardTitle>
                        <BRow class="mt-4">
                            <BCol sm="12" md="6">
                                <div id="tickets-table_length" class="dataTables_length">
                                    <label class="d-inline-flex align-items-center">
                                        Show&nbsp;
                                        <BFormSelect
                                            v-model="perPageUser"
                                            size="sm"
                                            :options="pageOptionsUser"
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
                                        v-model="filterUser"
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
                                :items="tableDataUser"
                                :fields="fieldsUser"
                                responsive="sm"
                                :per-page="perPageUser"
                                :current-page="currentPageUser"
                                :sort-by.sync="sortByUser"
                                :sort-desc.sync="sortDescUser"
                                :filter="filterUser"
                                :filter-included-fields="filterOnUser"
                                @filtered="onFilteredUser">
                              <template #cell(actions)="{ item }">
                                  <!-- Agregar botón de edición -->
                                  <BButton @click="editItem(item)" variant="info">Editar</BButton>
                              </template>
                            </BTable>
                        </div>
                    <BRow>
                        <BCol>
                            <div class="dataTables_paginate paging_simple_numbers float-end">
                                <ul class="pagination pagination-rounded mb-0">
                                    <!-- pagination -->
                                    <BPagination
                                        v-model="currentPageUser"
                                        :total-rows="totalRowsUser"
                                        :per-page="perPageUser"
                                    ></BPagination>
                                </ul>
                            </div>
                        </BCol>
                    </BRow>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
        <UserModal ref="UserModal"></UserModal>
    </Layout>
</template>