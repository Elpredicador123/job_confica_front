<script>
import StarRating from "vue-star-rating";
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Rating component
 */
export default {
  components: {
    StarRating,
    Layout,
    PageHeader
  },
  data() {
    return {
      title: "Rating",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Rating",
          active: true
        }
      ]
    };
  },
  methods: {
    setRating: function (rating) {
      this.rating = "You have Selected: " + rating + " stars";
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
            <BRow>
              <BCol sm="6" md="4" cols="xl-3">
                <div class="p-4">
                  <h5 class="font-size-15 mb-3">Default rating</h5>
                  <div>
                    <star-rating :star-size="25"></star-rating>
                  </div>
                </div>
              </BCol>

              <BCol sm="6" md="4" cols="xl-3">
                <div class="p-4">
                  <h5 class="font-size-15 mb-3">Half rating</h5>

                  <star-rating
                    :increment="0.5"
                    class="rating"
                    :star-size="25"
                  ></star-rating>
                </div>
              </BCol>

              <BCol sm="6" md="4" cols="xl-3">
                <div class="p-4">
                  <h5 class="font-size-15 mb-3">
                    Readonly rating with a value
                  </h5>
                  <star-rating
                    :rating="3"
                    :read-only="true"
                    :star-size="25"
                  ></star-rating>
                </div>
              </BCol>

              <BCol sm="6" md="4" cols="xl-3">
                <div class="p-4">
                  <h5 class="font-size-15 mb-3">Customized rating</h5>
                  <star-rating
                    :rating="1"
                    active-color="#ff3d60"
                    :star-size="25"
                  ></star-rating>
                </div>
              </BCol>

              <BCol sm="6" md="4" cols="xl-3">
                <div class="p-4">
                  <h5 class="font-size-15 mb-3">Only fill selected</h5>
                  <star-rating
                    @rating-selected="setRating"
                    :star-size="25"
                  ></star-rating>
                </div>
              </BCol>

              <BCol sm="6" md="4" cols="xl-3">
                <div class="p-4">
                  <h5 class="font-size-15 mb-3">Custom Shap</h5>
                  <star-rating
                    :star-size="25"
                    :border-width="4"
                    border-color="#d8d8d8"
                    :rounded-corners="true"
                    :star-points="[
                      23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36,
                      34, 46, 19, 31, 17
                    ]"
                  ></star-rating>
                </div>
              </BCol>

              <BCol sm="6" md="4" cols="xl-3">
                <div class="p-4">
                  <h5 class="font-size-15 mb-3">Fluid Stars</h5>
                  <star-rating
                    :increment="0.01"
                    :fixed-points="2"
                    :star-size="25"
                  ></star-rating>
                </div>
              </BCol>

              <BCol sm="6" md="4" cols="xl-3">
                <div class="p-4">
                  <h5 class="font-size-15 mb-3">Bordered Star</h5>
                  <star-rating :border-width="3" :star-size="25"></star-rating>
                </div>
              </BCol>

              <BCol sm="6" md="4" cols="xl-3">
                <div class="p-4 text-end">
                  <h5 class="font-size-15 mb-3">RTL rating</h5>
                  <star-rating
                    :rtl="true"
                    :increment="0.5"
                    :star-size="25"
                  ></star-rating>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->
    </BRow>
    <!-- end row -->
  </Layout>
</template>
