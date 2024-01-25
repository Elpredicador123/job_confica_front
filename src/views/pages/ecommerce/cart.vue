<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import NumberInputSpinner from "@/components/custom/NumberInputSpinner.vue";

/**
 * Cart component
 */
export default {
  components: {
    NumberInputSpinner,
    Layout,
    PageHeader
  },
  data() {
    return {
      title: "Cart",
      items: [
        {
          text: "Ecommerce"
        },
        {
          text: "Cart",
          active: true
        }
      ],
      firstSpinner: 2,
      secondSpinner: 2
    };
  },
  middleware: "authentication"
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol cols="xl-8">
        <div class="card border shadow-none">
          <BCardBody>
            <div
              class="media border-bottom pb-3 d-flex justify-content-between"
            >
              <div class="d-flex">
                <div class="me-4">
                  <img
                    src="@/assets/images/product/img-1.png"
                    alt
                    class="avatar-lg"
                  />
                </div>
                <div class="media-body align-self-center overflow-hidden">
                  <div>
                    <h5 class="text-truncate font-size-16">
                      <router-link
                        to="/ecommerce/product-detail/1"
                        class="nav-link"
                        >Nike N012 Running Shoes</router-link
                      >
                    </h5>
                    <p class="mb-1">
                      Color :
                      <span class="fw-medium">Gray</span>
                    </p>
                    <p>
                      Size :
                      <span class="fw-medium">08</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="ms-2">
                <ul class="list-inline mb-0 font-size-16">
                  <li class="list-inline-item" v-b-tooltip.hover title="Remove">
                    <a href="#" class="text-muted px-2">
                      <i class="uil uil-trash-alt"></i>
                    </a>
                  </li>
                  <li
                    class="list-inline-item"
                    v-b-tooltip.hover
                    title="Add Wishlist"
                  >
                    <a href="#" class="text-muted px-2">
                      <i class="uil uil-heart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <BRow>
                <BCol md="4">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Price</p>
                    <h5 class="font-size-16">$260</h5>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Quantity</p>
                    <div>
                      <div class="input-group">
                        <NumberInputSpinner
                          v-model="secondSpinner"
                          :min="1"
                          :max="100"
                          @input="secondSpinner = $event"
                        />
                      </div>
                    </div>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Total</p>
                    <h5 class="font-size-16">$520</h5>
                  </div>
                </BCol>
              </BRow>
            </div>
          </BCardBody>
        </div>
        <!-- end card -->

        <BCard no-body class="card border shadow-none">
          <BCardBody>
            <div
              class="media border-bottom pb-3 d-flex justify-content-between"
            >
              <div class="d-flex">
                <div class="me-4">
                  <img
                    src="@/assets/images/product/img-2.png"
                    alt
                    class="avatar-lg"
                  />
                </div>
                <div class="media-body align-self-center overflow-hidden">
                  <div>
                    <h5 class="text-truncate font-size-16">
                      <router-link
                        to="/ecommerce/product-detail/1"
                        class="nav-link"
                        >Adidas Running Shoes</router-link
                      >
                    </h5>
                    <p class="mb-1">
                      Color :
                      <span class="fw-medium">Black</span>
                    </p>
                    <p>
                      Size :
                      <span class="fw-medium">09</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="ms-2">
                <ul class="list-inline mb-0 font-size-16">
                  <li class="list-inline-item" v-b-tooltip.hover title="Remove">
                    <a href="#" class="text-muted px-2">
                      <i class="uil uil-trash-alt"></i>
                    </a>
                  </li>
                  <li
                    class="list-inline-item"
                    v-b-tooltip.hover
                    title="Add Wishlist"
                  >
                    <a href="#" class="text-muted px-2">
                      <i class="uil uil-heart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <BRow>
                <BCol md="4">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Price</p>
                    <h5 class="font-size-16">$260</h5>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Quantity</p>
                    <div>
                      <div class="input-group">
                        <NumberInputSpinner
                          :min="1"
                          :max="100"
                          v-model="firstSpinner"
                          @input="firstSpinner = $event"
                        />
                      </div>
                    </div>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mt-3">
                    <p class="text-muted mb-2">Total</p>
                    <h5 class="font-size-16">$260</h5>
                  </div>
                </BCol>
              </BRow>
            </div>
          </BCardBody>
        </BCard>
        <!-- end card -->

        <BRow class="mt-4">
          <BCol sm="6">
            <router-link
              to="/ecommerce/products"
              class="btn btn-link text-muted"
            >
              <i class="uil uil-arrow-left me-1"></i> Continue Shopping
            </router-link>
          </BCol>
          <!-- end col -->
          <BCol sm="6">
            <div class="text-sm-end mt-2 mt-sm-0">
              <router-link to="/ecommerce/checkout" class="btn btn-success">
                <i class="uil uil-shopping-cart-alt me-1"></i> Checkout
              </router-link>
            </div>
          </BCol>
          <!-- end col -->
        </BRow>
        <!-- end row-->
      </BCol>

      <BCol cols="xl-4">
        <div class="mt-5 mt-lg-0">
          <BCard no-body class="border shadow-none">
            <BCardHeader class="bg-transparent border-bottom py-3 px-4">
              <h5 class="font-size-16 mb-0">
                Order Summary
                <span class="float-end">#MN0124</span>
              </h5>
            </BCardHeader>
            <BCardBody class="p-4">
              <div class="table-responsive">
                <table class="table mb-0">
                  <tbody>
                    <tr>
                      <td>Sub Total :</td>
                      <td class="text-end">$ 780</td>
                    </tr>
                    <tr>
                      <td>Discount :</td>
                      <td class="text-end">- $ 78</td>
                    </tr>
                    <tr>
                      <td>Shipping Charge :</td>
                      <td class="text-end">$ 25</td>
                    </tr>
                    <tr>
                      <td>Estimated Tax :</td>
                      <td class="text-end">$ 18.20</td>
                    </tr>
                    <tr class="bg-light">
                      <th>Total :</th>
                      <td class="text-end">
                        <span class="fw-bold">$ 745.2</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- end table-responsive -->
            </BCardBody>
          </BCard>
        </div>
      </BCol>
    </BRow>
    <!-- end row -->
  </Layout>
</template>
