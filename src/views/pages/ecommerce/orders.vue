<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Orders component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Orders",
      items: [
        {
          text: "Ecommerce"
        },
        {
          text: "Orders",
          active: true
        }
      ],
      orderData: [
        {
          id: "#MN0132",
          date: "10 Jul, 2020",
          name: "Melvin Martin",
          total: "$142",
          status: "Paid"
        },
        {
          id: "#MN0131",
          date: "09 Jul, 2020",
          name: "Roy Michael",
          total: "$130",
          status: "Paid"
        },
        {
          id: "#MN0130",
          date: "08 Jul, 2020",
          name: "Shelby Wolf",
          total: "$123",
          status: "unpaid"
        },
        {
          id: "#MN0129",
          date: "07 Jul, 2020",
          name: "James Riddick",
          total: "$173",
          status: "Paid"
        },
        {
          id: "#MN0128",
          date: "07 Jul, 2020",
          name: "George Kwan",
          total: "$160",
          status: "Chargeback"
        },
        {
          id: "#MN0127",
          date: "06 Jul, 2020",
          name: "Kevin Patterson",
          total: "$165",
          status: "Paid"
        },
        {
          id: "#MN0126",
          date: "05 Jul, 2020",
          name: "Danny Orr",
          total: "$161",
          status: "Paid"
        },
        {
          id: "#MN0125",
          date: "04 Jul, 2020",
          name: "Sylvia Garcia",
          total: "$153",
          status: "unpaid"
        },
        {
          id: "#MN0124",
          date: "04 Jul, 2020",
          name: "Charles Denney",
          total: "$152",
          status: "Paid"
        },
        {
          id: "#MN0123",
          date: "03 Jul, 2020",
          name: "Lisa Farrell",
          total: "$167",
          status: "Paid"
        },
        {
          id: "#MN0122",
          date: "02 Jul, 2020",
          name: "Connie Franco",
          total: "$163",
          status: "Paid"
        },
        {
          id: "#MN0121",
          date: "02 Jul, 2020",
          name: "Lara Casillas",
          total: "$171",
          status: "Paid"
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
          key: "check",
          label: ""
        },
        {
          key: "id",
          label: "Order ID"
        },
        {
          key: "date",
          sortable: true
        },
        {
          key: "name",
          label: "Billing Name",
          sortable: true
        },
        {
          key: "total",
          sortable: true
        },
        {
          key: "status",
          label: "Payment Status",
          sortable: true
        },
        "action"
      ]
    };
  },
  middleware: "authentication",
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.orderData.length;
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
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol cols="12">
        <div>
          <div class="float-end">
            <form class="d-inline-flex mb-3">
              <label class="my-1 me-2" for="order-selectinput">Orders</label>
              <select class="form-select" id="order-selectinput">
                <option selected="">All</option>
                <option value="1">Active</option>
                <option value="2">Unpaid</option>
              </select>
            </form>
          </div>
          <BButton type="button" class="btn btn-success mb-3">
            <i class="mdi mdi-plus me-1"></i> Add New Order
          </BButton>
        </div>
        <div
          class="table table-centered datatable dt-responsive nowrap table-card-list dataTable no-footer dtr-inline"
        >
          <BRow>
            <BCol sm="12" md="6">
              <div id="tickets-table_length" class="dataTables_length">
                <label class="d-inline-flex align-items-center fw-normal">
                  Show&nbsp;
                  <BFormSelect
                    v-model="perPage"
                    size="sm"
                    :options="pageOptions"
                  />&nbsp;entries
                </label>
              </div>
            </BCol>
            <!-- Search -->
            <BCol sm="12" cols="md-6">
              <div
                id="tickets-table_filter"
                class="dataTables_filter text-md-end"
              >
                <label class="d-inline-flex align-items-center fw-normal">
                  Search:
                  <BFormInput
                    v-model="filter"
                    type="search"
                    placeholder="Search..."
                    class="form-control form-control-sm ms-2"
                  ></BFormInput>
                </label>
              </div>
            </BCol>
            <!-- End search -->
          </BRow>
          <!-- Table -->

          <BTable
            table-class="table table-centered datatable table-card-list"
            thead-tr-class="bg-transparent"
            :items="orderData"
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
            <template v-slot:cell(check)="data">
              <div class="custom-control custom-checkbox text-center">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :id="`contacusercheck${data.item.id}`"
                />
                <label
                  class="custom-control-label"
                  :for="`contacusercheck${data.item.id}`"
                ></label>
              </div>
            </template>
            <template v-slot:cell(id)="data">
              <a href="javascript: void(0);" class="nav-link fw-bold">{{
                data.item.id
              }}</a>
            </template>

            <template v-slot:cell(name)="data">
              <a href="#" class="text-body">{{ data.item.name }}</a>
            </template>
            <template v-slot:cell(status)="data">
              <div
                class="badge bg-pill bg-soft-success font-size-12"
                :class="{
                  'bg-soft-danger': data.item.status === 'Chargeback',
                  'bg-soft-warning': data.item.status === 'unpaid'
                }"
              >
                {{ data.item.status }}
              </div>
            </template>
            <template v-slot:cell(action)>
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    class="px-2 text-primary"
                    v-b-tooltip.hover
                    title="Edit"
                  >
                    <i class="uil uil-pen font-size-18"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    class="px-2 text-danger"
                    v-b-tooltip.hover
                    title="Delete"
                  >
                    <i class="uil uil-trash-alt font-size-18"></i>
                  </a>
                </li>
              </ul>
            </template>
          </BTable>
        </div>
        <BRow>
          <BCol>
            <div class="dataTables_paginate paging_simple_numbers float-end">
              <ul class="pagination pagination-rounded">
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
      </BCol>
    </BRow>
  </Layout>
</template>
