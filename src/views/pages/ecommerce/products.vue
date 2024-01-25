<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Slider from "@/components/custom/Slider.vue";

import { productData } from "./data-products";
/**
 * Products component
 */
export default {
  components: { Layout, PageHeader, Slider },
  data() {
    return {
      productData: productData,
      title: "Products",
      items: [
        {
          text: "Ecommerce"
        },
        {
          text: "Products",
          active: true
        }
      ],
      sliderPrice: 800,
      currentPage: 1
    };
  },
  middleware: "authentication",
  methods: {
    valuechange(value) {
      this.sliderPrice = value;
      this.productData = productData.filter(function (product) {
        return product.newprice <= value;
      });
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol lg="4" class="col-xl-3">
        <BCard no-body>
          <div class="card-header bg-transparent border-bottom">
            <h5 class="mb-0">Filters</h5>
          </div>

          <div class="p-4">
            <h5 class="font-size-14 mb-3">Categories</h5>
            <div class="custom-accordion">
              <a
                class="text-body fw-semibold pb-2 d-block"
                data-toggle="collapse"
                href="javascript: void(0);"
                role="button"
                aria-expanded="false"
                v-b-toggle.categories-collapse
              >
                <i
                  class="mdi mdi-chevron-up accor-down-icon text-primary me-1"
                ></i>
                Footwear
              </a>
              <BCollapse visible id="categories-collapse">
                <div class="card p-2 border shadow-none">
                  <ul class="list-unstyled categories-list mb-0">
                    <li>
                      <a href="#">
                        <i class="mdi mdi-circle-medium me-1"></i> Formal Shoes
                      </a>
                    </li>
                    <li class="active">
                      <a href="#">
                        <i class="mdi mdi-circle-medium me-1"></i> Sports Shoes
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-circle-medium me-1"></i> casual Shoes
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-circle-medium me-1"></i> Sandals
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="mdi mdi-circle-medium me-1"></i> Slippers
                      </a>
                    </li>
                  </ul>
                </div>
              </BCollapse>
            </div>
          </div>

          <div class="p-4 border-top">
            <div>
              <h5 class="font-size-14 mb-4">Price</h5>
              <Slider
                v-model="sliderPrice"
                :min="0"
                :max="1000"
                @input="valuechange"
              />
            </div>
          </div>

          <div class="custom-accordion">
            <div class="p-4 border-top">
              <div>
                <h5 class="font-size-14 mb-0">
                  <a
                    href="javascript: void(0);"
                    class="nav-link d-block"
                    data-toggle="collapse"
                    v-b-toggle.filtersizes-collapse
                  >
                    Sizes
                    <i class="mdi mdi-chevron-up float-end accor-down-icon"></i>
                  </a>
                </h5>

                <BCollapse visible id="filtersizes-collapse">
                  <div class="mt-4">
                    <div class="media align-items-center d-flex">
                      <div class="media-body flex-grow-1">
                        <h5 class="font-size-15 mb-0">Select Sizes</h5>
                      </div>
                      <div class="w-xs">
                        <select class="form-select">
                          <option value="1">3</option>
                          <option value="2">4</option>
                          <option value="3">5</option>
                          <option value="4">6</option>
                          <option value="5" selected="">7</option>
                          <option value="6">8</option>
                          <option value="7">9</option>
                          <option value="8">10</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </BCollapse>
              </div>
            </div>

            <div class="p-4 border-top">
              <div>
                <h5 class="font-size-14 mb-0">
                  <a
                    href="javascript: void(0);"
                    class="nav-link d-block"
                    data-toggle="collapse"
                    v-b-toggle.filterprodductcolor-collapse
                  >
                    Colors
                    <i class="mdi mdi-chevron-up float-end accor-down-icon"></i>
                  </a>
                </h5>

                <BCollapse visible id="filterprodductcolor-collapse">
                  <div class="mt-4">
                    <div class="custom-control custom-checkbox mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="productcolorCheck1"
                      />
                      <label class="form-check-label" for="productcolorCheck1">
                        <i class="mdi mdi-circle text-dark mx-1"></i>
                        Black
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="productcolorCheck2"
                      />
                      <label class="form-check-label" for="productcolorCheck2">
                        <i class="mdi mdi-circle text-white mx-1"></i>
                        White
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="productcolorCheck3"
                      />
                      <label class="form-check-label" for="productcolorCheck3">
                        <i class="mdi mdi-circle text-secondary mx-1"></i>
                        Gray
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="productcolorCheck4"
                      />
                      <label class="form-check-label" for="productcolorCheck4">
                        <i class="mdi mdi-circle text-primary mx-1"></i>
                        Blue
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="productcolorCheck5"
                      />
                      <label class="form-check-label" for="productcolorCheck5">
                        <i class="mdi mdi-circle text-success mx-1"></i>
                        green
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="productcolorCheck6"
                      />
                      <label class="form-check-label" for="productcolorCheck6">
                        <i class="mdi mdi-circle text-danger mx-1"></i>
                        Red
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="productcolorCheck7"
                      />
                      <label class="form-check-label" for="productcolorCheck7">
                        <i class="mdi mdi-circle text-warning mx-1"></i>
                        Yellow
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox mt-2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="productcolorCheck8"
                      />
                      <label class="form-check-label" for="productcolorCheck8">
                        <i class="mdi mdi-circle text-purple mx-1"></i>
                        Purple
                      </label>
                    </div>
                  </div>
                </BCollapse>
              </div>
            </div>

            <div class="p-4 border-top">
              <div>
                <h5 class="font-size-14 mb-0">
                  <a
                    href="javascript: void(0);"
                    class="nav-link d-block"
                    data-toggle="collapse"
                    v-b-toggle.filterproduct-color-collapse
                  >
                    Customer Rating
                    <i class="mdi mdi-chevron-up float-end accor-down-icon"></i>
                  </a>
                </h5>

                <BCollapse visible id="filterproduct-color-collapse">
                  <div class="mt-4">
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productratingRadio1"
                        name="productratingRadio1"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="productratingRadio1">
                        4
                        <i class="mdi mdi-star text-warning"></i> & Above
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productratingRadio2"
                        name="productratingRadio1"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="productratingRadio2">
                        3
                        <i class="mdi mdi-star text-warning"></i> & Above
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productratingRadio3"
                        name="productratingRadio1"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="productratingRadio3">
                        2
                        <i class="mdi mdi-star text-warning"></i> & Above
                      </label>
                    </div>
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productratingRadio4"
                        name="productratingRadio1"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="productratingRadio4">
                        1
                        <i class="mdi mdi-star text-warning"></i>
                      </label>
                    </div>
                  </div>
                </BCollapse>
              </div>
            </div>

            <div class="p-4 border-top">
              <div>
                <h5 class="font-size-14 mb-0">
                  <a
                    href="#filterproduct-discount-collapse"
                    class="nav-link d-block"
                    data-toggle="collapse"
                    v-b-toggle.filterproduct-discount-collapse
                  >
                    Discount
                    <i class="mdi mdi-chevron-up float-end accor-down-icon"></i>
                  </a>
                </h5>

                <BCollapse id="filterproduct-discount-collapse">
                  <div class="mt-4">
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productdiscountRadio1"
                        name="productdiscountRadio"
                        class="form-check-input"
                      />
                      <label
                        class="form-check-label"
                        for="productdiscountRadio1"
                        >50% or more</label
                      >
                    </div>
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productdiscountRadio2"
                        name="productdiscountRadio"
                        class="form-check-input"
                      />
                      <label
                        class="form-check-label"
                        for="productdiscountRadio2"
                        >40% or more</label
                      >
                    </div>
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productdiscountRadio3"
                        name="productdiscountRadio"
                        class="form-check-input"
                      />
                      <label
                        class="form-check-label"
                        for="productdiscountRadio3"
                        >30% or more</label
                      >
                    </div>
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productdiscountRadio4"
                        name="productdiscountRadio"
                        class="form-check-input"
                      />
                      <label
                        class="form-check-label"
                        for="productdiscountRadio4"
                        >20% or more</label
                      >
                    </div>
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productdiscountRadio5"
                        name="productdiscountRadio"
                        class="form-check-input"
                      />
                      <label
                        class="form-check-label"
                        for="productdiscountRadio5"
                        >10% or more</label
                      >
                    </div>
                    <div class="form-check mt-2">
                      <input
                        type="radio"
                        id="productdiscountRadio6"
                        name="productdiscountRadio"
                        class="form-check-input"
                      />
                      <label
                        class="form-check-label"
                        for="productdiscountRadio6"
                        >Less than 10%</label
                      >
                    </div>
                  </div>
                </BCollapse>
              </div>
            </div>
          </div>
        </BCard>
      </BCol>

      <BCol lg="8" class="col-xl-9">
        <BCard no-body>
          <BCardBody>
            <div>
              <BRow>
                <BCol md="6">
                  <div>
                    <h5>Showing result for "Shoes"</h5>
                    <ol class="breadcrumb p-0 bg-transparent mb-2">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Footwear</a>
                      </li>
                      <li class="breadcrumb-item active">Shoes</li>
                    </ol>
                  </div>
                </BCol>

                <BCol md="6">
                  <div class="form-inline float-md-end">
                    <div class="search-box ms-2">
                      <div class="position-relative">
                        <input
                          type="text"
                          class="form-control bg-light border-light rounded"
                          placeholder="Search..."
                        />
                        <i class="mdi mdi-magnify search-icon"></i>
                      </div>
                    </div>
                  </div>
                </BCol>
              </BRow>

              <ul
                class="nav nav-tabs nav-tabs-custom mt-3 mb-2 ecommerce-sortby-list"
              >
                <li class="nav-item">
                  <a
                    class="nav-link disabled fw-medium"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                    >Sort by:</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Popularity</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Newest</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Discount</a>
                </li>
              </ul>

              <BRow>
                <BCol
                  class="col-xl-4 col-sm-6"
                  v-for="(item, index) in productData"
                  :key="index"
                >
                  <div class="product-box">
                    <div class="product-img pt-4 px-4">
                      <div class="product-ribbon badge bg-danger">
                        - {{ item.discount }} %
                      </div>
                      <div class="product-wishlist">
                        <a href="#">
                          <i class="mdi mdi-heart-outline"></i>
                        </a>
                      </div>
                      <img
                        :src="item.image"
                        alt
                        class="img-fluid mx-auto d-block"
                      />
                    </div>

                    <div class="text-center product-content p-4">
                      <h5 class="mb-1">
                        <router-link
                          :to="'/ecommerce/product-detail/' + item.id"
                          class="nav-link"
                          >{{ item.name }}</router-link
                        >
                      </h5>
                      <p class="text-muted font-size-13">{{ item.disc }}</p>

                      <h5 class="mt-3 mb-0">
                        <span class="text-muted me-2">
                          <del>${{ item.oldprice }}</del>
                        </span>
                        ${{ item.newprice }}
                      </h5>

                      <ul class="list-inline mb-0 text-muted product-color">
                        <li class="list-inline-item">Colors :</li>
                        <li
                          class="list-inline-item"
                          v-for="(item, index) in item.colors"
                          :key="index"
                        >
                          <i :class="`mdi mdi-circle text-${item}`"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </BCol>
              </BRow>
              <!-- end row -->
              <BRow class="row mt-4">
                <BCol lg="12">
                  <BPagination
                    v-if="productData.length > 0"
                    class="justify-content-center"
                    pills
                    v-model="currentPage"
                    :total-rows="productData.length"
                    :per-page="6"
                    aria-controls="my-table"
                  ></BPagination>
                </BCol>
              </BRow>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
  </Layout>
</template>
