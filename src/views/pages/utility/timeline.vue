<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

/**
 * Timeline component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Carousel,
    Slide
  },
  data() {
    return {
      title: "Timeline",
      items: [
        {
          text: "Utility",
          href: "/"
        },
        {
          text: "Timeline",
          active: true
        }
      ],
      currentSlide: 0,
      carouselItems: [
        {
          title: "First event",
          date: "03 May",
          description:
            "If several languages coalesce, the grammar of the resulting the individual"
        },
        {
          title: "Second event",
          date: "08 May",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit illo inventore veritatis"
        },
        {
          title: "Third event",
          date: "11 May",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"
        },
        {
          title: "Fourth event",
          date: "16 May",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam"
        },
        {
          title: "Fifth event",
          date: "23 May",
          description:
            "Itaque earum rerum hic tenetur a sapiente delectus maiores alias consequatur aut"
        },
        {
          title: "sixth event",
          date: "27 May",
          description:
            "Donec quam felis ultricies nec pellentesque eu pretium sem consequat quis"
        }
      ]
    };
  },
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
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
            <h4 class="card-title mb-4">Horizontal Timeline</h4>

            <div class="hori-timeline">
              <Carousel
                ref="carousel"
                v-model="currentSlide"
                :items-to-show="4"
                class="events"
              >
                <Slide v-for="slide in carouselItems" :key="slide">
                  <div class="item event-list">
                    <div class="event-date text-primary">
                      <div class="text-primary">{{ slide.date }}</div>
                    </div>

                    <div class="px-3">
                      <h5>{{ slide.title }}</h5>
                      <p class="text-muted">
                        {{ slide.description }}
                      </p>
                      <div>
                        <a href="#">
                          View more
                          <i class="uil uil-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Carousel>
              <div class="d-flex justify-content-center">
                <BButton
                  @click="prev"
                  class="me-2 rounded-circle bg-primary-subtle text-primary timeline-slider-btn"
                  rounded="circle"
                  variant="primary"
                >
                  <i class="bx bx-chevron-left" />
                </BButton>
                <BButton
                  @click="next"
                  class="ms-2 rounded-circle bg-primary-subtle text-primary outline-none timeline-slider-btn"
                  icon
                  variant="primary"
                >
                  <i class="bx bx-chevron-right"
                /></BButton>
              </div>
            </div>
          </BCardBody>
        </BCard>
        <!-- end card -->
      </BCol>
    </BRow>
    <!-- end row -->
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title mb-5">Vertical Timeline</h4>
            <div class>
              <ul class="verti-timeline list-unstyled">
                <li class="event-list">
                  <div class="event-date text-primar">03 May</div>
                  <h5>Timeline event One</h5>
                  <p class="text-muted">
                    If several languages coalesce, the grammar of the resulting
                    the individual
                  </p>
                </li>
                <li class="event-list">
                  <div class="event-date text-primar">08 May</div>
                  <h5>Timeline event Two</h5>
                  <p class="text-muted">
                    Sed ut perspiciatis unde omnis iste natus error sit illo
                    inventore veritatis
                  </p>
                </li>
                <li class="event-list">
                  <div class="event-date text-primar">11 May</div>
                  <h5>Timeline event Three</h5>
                  <p class="text-muted">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit
                  </p>
                </li>
                <li class="event-list">
                  <div class="event-date text-primar">16 May</div>
                  <h5>Timeline event Four</h5>
                  <p class="text-muted">
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam
                  </p>
                </li>
                <li class="event-list">
                  <div class="event-date text-primar">27 May</div>
                  <h5>Timeline event Five</h5>
                  <p class="text-muted">
                    Itaque earum rerum hic tenetur a sapiente delectus maiores
                    alias consequatur aut
                  </p>
                </li>
              </ul>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
<style scoped>
.timeline-slider-btn {
  border-color: transparent !important;
}
</style>
