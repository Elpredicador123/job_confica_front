<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Carousel component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Carousel",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Carousel",
          active: true
        }
      ],
      slide: 0,
      slide1: 0,
      sliding: null
    };
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
          <BCardBody>
            <BCardTitle>Slides only</BCardTitle>
            <p class="card-title-desc">
              Here’s a carousel with slides only. Note the presence of the
              <code>.d-block</code>
              and
              <code>.img-fluid</code> on carousel images to prevent browser
              default image alignment.
            </p>
            <BCarousel
              class="carousel slide"
              :interval="3000"
              ride="carousel"
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
            >
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-1.jpg')"
              ></BCarouselSlide>
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-2.jpg')"
              ></BCarouselSlide>
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-3.jpg')"
              ></BCarouselSlide>
            </BCarousel>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>With controls</BCardTitle>
            <p class="card-title-desc">
              Adding in the previous and next controls:
            </p>
            <BCarousel
              :interval="3000"
              ride="carousel"
              style="text-shadow: 0px 0px 2px #000"
              controls
            >
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-4.jpg')"
              ></BCarouselSlide>
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-5.jpg')"
              ></BCarouselSlide>
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-6.jpg')"
              ></BCarouselSlide>
            </BCarousel>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>With indicators</BCardTitle>
            <p class="card-title-desc">
              You can also add the indicators to the carousel, alongside the
              controls, too.
            </p>
            <BCarousel
              style="text-shadow: 0px 0px 2px #000"
              controls
              indicators
              :interval="3000"
              ride="carousel"
            >
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-3.jpg')"
              ></BCarouselSlide>
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-2.jpg')"
              ></BCarouselSlide>
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-1.jpg')"
              ></BCarouselSlide>
            </BCarousel>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>With captions</BCardTitle>
            <p class="card-title-desc">
              Add captions to your slides easily with the
              <code>.carousel-caption</code> element within any
              <code>.carousel-item</code>.
            </p>
            <BCarousel
              id="carousel-1"
              v-model="slide"
              :interval="3000"
              ride="carousel"
              controls
              indicators
              background="#ababab"
              style="text-shadow: 1px 1px 2px #333"
            >
              <!-- Text slides with image -->
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-7.jpg')"
              >
                <div class="text-muted">
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </BCarouselSlide>

              <!-- Slides with custom text -->
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-5.jpg')"
              >
                <h5 class="text-white">Second slide label</h5>
                <p class="text-white-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </BCarouselSlide>

              <!-- Slides with image only -->
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-4.jpg')"
              >
                <h5 class="text-white">Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </BCarouselSlide>
            </BCarousel>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Crossfade</BCardTitle>
            <p class="card-title-desc">
              Add
              <code>.carousel-fade</code> to your carousel to animate slides
              with a fade transition instead of a slide.
            </p>
            <BCarousel
              style="text-shadow: 0px 0px 2px #000"
              controls
              indicators
              :interval="3000"
              ride="carousel"
            >
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-1.jpg')"
              ></BCarouselSlide>
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-2.jpg')"
              ></BCarouselSlide>
              <BCarouselSlide
                :img-src="require('@/assets/images/small/img-3.jpg')"
              ></BCarouselSlide>
            </BCarousel>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
