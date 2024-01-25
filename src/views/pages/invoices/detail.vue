<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Invoice Detail component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Invoice Detail",
      items: [
        {
          text: "Invoices"
        },
        {
          text: "Invoice Detail",
          active: true
        }
      ]
    };
  },
  computed: {
    isDarkMode() {
      return this.$store?.state?.layout?.mode === "dark" || false;
    }
  },
  middleware: "authentication"
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <div class="invoice-title">
              <h4 class="float-end font-size-16">
                Invoice #MN0131
                <span class="badge bg-success font-size-12 ms-2">Paid</span>
              </h4>
              <div class="mb-4">
                <img
                  v-if="isDarkMode"
                  src="@/assets/images/logo-light.png"
                  alt="logo"
                  height="20"
                />
                <img
                  v-else
                  src="@/assets/images/logo-dark.png"
                  alt="logo"
                  height="20"
                />
              </div>
              <div class="text-muted">
                <p class="mb-1">641 Counts Lane Wilmore, KY 40390</p>
                <p class="mb-1">
                  <i class="uil uil-envelope-alt me-1"></i> abc@123.com
                </p>
                <p><i class="uil uil-phone me-1"></i> 012-345-6789</p>
              </div>
            </div>

            <hr class="my-4" />

            <BRow>
              <BCol sm="6">
                <div class="text-muted">
                  <h5 class="font-size-16 mb-3">Billed To:</h5>
                  <h5 class="font-size-15 mb-2">Preston Miller</h5>
                  <p class="mb-1">4450 Fancher Drive Dallas, TX 75247</p>
                  <p class="mb-1">PrestonMiller@armyspy.com</p>
                  <p>001-234-5678</p>
                </div>
              </BCol>
              <BCol sm="6">
                <div class="text-muted text-sm-end">
                  <div>
                    <h5 class="font-size-16 mb-1">Invoice No:</h5>
                    <p>#MN0131</p>
                  </div>
                  <div class="mt-4">
                    <h5 class="font-size-16 mb-1">Invoice Date:</h5>
                    <p>09 Jul, 2020</p>
                  </div>
                  <div class="mt-4">
                    <h5 class="font-size-16 mb-1">Order No:</h5>
                    <p>#1123456</p>
                  </div>
                </div>
              </BCol>
            </BRow>

            <div class="py-2">
              <h5 class="font-size-15">Order summary</h5>

              <div class="table-responsive">
                <table class="table table-nowrap table-centered mb-0">
                  <thead>
                    <tr>
                      <th style="width: 70px">No.</th>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th class="text-end" style="width: 120px">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">01</th>
                      <td>
                        <h5 class="font-size-15 mb-1">
                          Nike N012 Running Shoes
                        </h5>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item">
                            Color :
                            <span class="fw-medium">Gray</span>
                          </li>
                          <li class="list-inline-item">
                            Size :
                            <span class="fw-medium">08</span>
                          </li>
                        </ul>
                      </td>
                      <td>$260</td>
                      <td>1</td>
                      <td class="text-end">$260.00</td>
                    </tr>

                    <tr>
                      <th scope="row">02</th>
                      <td>
                        <h5 class="font-size-15 mb-1">Adidas Running Shoes</h5>
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item">
                            Color :
                            <span class="fw-medium">Black</span>
                          </li>
                          <li class="list-inline-item">
                            Size :
                            <span class="fw-medium">09</span>
                          </li>
                        </ul>
                      </td>
                      <td>$250</td>
                      <td>1</td>
                      <td class="text-end">$250.00</td>
                    </tr>

                    <tr>
                      <th scope="row" colspan="4" class="text-end">
                        Sub Total
                      </th>
                      <td class="text-end">$510.00</td>
                    </tr>
                    <tr>
                      <th scope="row" colspan="4" class="border-0 text-end">
                        Discount :
                      </th>
                      <td class="border-0 text-end">- $50.00</td>
                    </tr>
                    <tr>
                      <th scope="row" colspan="4" class="border-0 text-end">
                        Shipping Charge :
                      </th>
                      <td class="border-0 text-end">$25.00</td>
                    </tr>
                    <tr>
                      <th scope="row" colspan="4" class="border-0 text-end">
                        Tax
                      </th>
                      <td class="border-0 text-end">$13.00</td>
                    </tr>
                    <tr>
                      <th scope="row" colspan="4" class="border-0 text-end">
                        Total
                      </th>
                      <td class="border-0 text-end">
                        <h4 class="m-0">$498.00</h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-print-none mt-4">
                <div class="float-end">
                  <a
                    href="javascript:window.print()"
                    class="btn btn-success me-1"
                  >
                    <i class="fa fa-print"></i>
                  </a>
                  <a href="#" class="btn btn-primary w-md ms-1">Send</a>
                </div>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
  </Layout>
</template>
