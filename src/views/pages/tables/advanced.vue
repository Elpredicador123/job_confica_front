<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import { tableData } from "./dataAdvancedtable";

/**
 * Advanced-table component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      tableData: tableData,

      title: "Advanced",
      items: [
        {
          text: "Tables"
        },
        {
          text: "Advanced",
          active: true
        }
      ],
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
          key: "name",
          sortable: true
        },
        {
          key: "position",
          sortable: true
        },
        {
          key: "office",
          sortable: true
        },
        {
          key: "age",
          sortable: true
        },
        {
          key: "date",
          sortable: true
        },
        {
          key: "salary",
          sortable: true
        }
      ]
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.tableData.length;
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  middleware: "authentication"
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Data Table</BCardTitle>
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
              ></BTable>
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
                      :total-rows="rows"
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
  </Layout>
</template>
