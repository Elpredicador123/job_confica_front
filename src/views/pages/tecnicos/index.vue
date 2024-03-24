<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
export default {
    components: { 
        Layout,
        PageHeader
    },
    data(){
        return {
            //--------------------
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
            tableDataTec: [],
            totalRowsTec: 1,
            currentPageTec: 1,
            perPageTec: 25,
            pageOptionsTec: [10,25,50,100],
            filterOnTec: [],
            filterTec: null,
            sortByTec: "age",
            sortDescTec: false,
            fieldsTec: [],
            totalesTec : 0,
        }
    },
    mounted(){
        this.totalRowsTec = this.itemsTec.length;
        this.getTableTec();
    },
    methods: {
        onFilteredTec(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRowsTec = filteredItems.length;
            this.currentPageTec = 1;
        },
        async getTableTec(){
            try {
                this.$nextTick(async () => { 
                    this.tableDataTec.splice(0, this.tableDataTec.length);
                    this.fieldsTec.splice(0, this.fieldsTec.length);

                    const response = await this.$http.get(this.$apiURL+'technical/all');
                    this.previousTableTecData = {
                        series: response.data.data,
                    };
                    response.data.data.map(i => this.tableDataTec.push({ ...i }));
                    //this.fieldsTec.push({ key: "Ciudad", sortable : true })
                    this.totalRowsTec = this.tableDataTec.length;
                    this.totalesTec = response.data.totales;
                });
            } catch (error) {
                console.error(error);
            }
        },
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
                        <BCardTitle>Averías de infancia - Tec</BCardTitle>
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