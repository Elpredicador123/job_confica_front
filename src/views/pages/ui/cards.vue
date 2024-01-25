<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Cards component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Cards",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Cards",
          active: true
        }
      ]
    };
  },
  middleware: "authentication"
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol lg="6" cols="xl-3">
        <!-- Simple card -->
        <BCard
          :img-src="require('@/assets/images/small/img-1.jpg')"
          img-alt="Card image"
          img-top
        >
          <BCardTitle tag="h5"> Card title </BCardTitle>
          <BCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </BCardText>
          <BButton href="javascript:void(0);" variant="primary">Button</BButton>
        </BCard>
      </BCol>
      <!-- end col -->

      <BCol lg="6" cols="xl-3">
        <BCard
          no-body
          :img-src="require('@/assets/images/small/img-2.jpg')"
          img-alt="Card image"
          img-top
        >
          <BCardBody>
            <BCardTitle tag="h5"> Card title </BCardTitle>
            <BCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </BCardText>
          </BCardBody>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
          </ul>
          <div class="card-body">
            <a href="javascript:void(0);" class="card-link text-custom"
              >Card link</a
            >
            <a href="javascript:void(0);" class="card-link text-custom"
              >Another link</a
            >
          </div>
        </BCard>
      </BCol>
      <!-- end col -->

      <BCol lg="6" cols="xl-3">
        <BCard
          no-body
          :img-src="require('@/assets/images/small/img-3.jpg')"
          img-alt="Card image"
          img-top
        >
          <BCardBody>
            <BCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </BCardText>
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->

      <BCol lg="6" cols="xl-3">
        <BCard no-body>
          <BCardBody>
            <BCardTitle tag="h5"> Card title </BCardTitle>
            <b-card-sub-title>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6>
            </b-card-sub-title>
          </BCardBody>
          <img src="@/assets/images/small/img-4.jpg" class="img-fluid" />
          <BCardBody>
            <BCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </BCardText>
            <a href="javascript:void(0);" class="card-link text-custom"
              >Card link</a
            >
            <a href="javascript:void(0);" class="card-link text-custom"
              >Another link</a
            >
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Special title treatment</BCardTitle>
            <BCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </BCardText>
            <a href="javascript:void(0);" class="btn btn-primary btn-block"
              >Go somewhere</a
            >
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Special title treatment</BCardTitle>
            <BCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </BCardText>
            <a href="javascript:void(0);" class="btn btn-primary btn-block"
              >Go somewhere</a
            >
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
    <BRow>
      <BCol lg="4">
        <BCard no-body class="card-body">
          <BCardTitle>Special title treatment</BCardTitle>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary waves-effect waves-light"
            >Go somewhere</a
          >
        </BCard>
      </BCol>

      <BCol lg="4">
        <BCard no-body class="card-body text-center">
          <BCardTitle>Special title treatment</BCardTitle>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary waves-effect waves-light"
            >Go somewhere</a
          >
        </BCard>
      </BCol>

      <BCol lg="4">
        <BCard no-body class="card-body text-end">
          <BCardTitle>Special title treatment</BCardTitle>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary waves-effect waves-light"
            >Go somewhere</a
          >
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol md="4">
        <BCard no-body>
          <h4 class="card-header">Featured</h4>
          <BCardBody>
            <BCardTitle>Special title treatment</BCardTitle>
            <BCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </BCardText>
            <BButton href="javascript: void(0);" variant="primary"
              >Go somewhere</BButton
            >
          </BCardBody>
        </BCard>
      </BCol>
      <BCol cols="md-4">
        <BCard no-body header="Quote">
          <BCardBody>
            <BCardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </BCardText>
            <footer class="blockquote-footer mt-3 font-size-12">
              Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol md="4">
        <BCard no-body header="Featured" footer="2 days ago" class="text-left">
          <BCardBody>
            <BCardTitle>Special title treatment</BCardTitle>
            <BCardText>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="javascript: void(0);" class="btn btn-primary"
                >Go somewhere</a
              >
            </BCardText>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol md="4">
        <BCard
          no-body
          :img-src="require('@/assets/images/small/img-5.jpg')"
          img-alt="Card image"
          img-top
        >
          <BCardBody>
            <BCardTitle tags="h5">Card title</BCardTitle>
            <BCardText>
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </BCardText>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol md="4">
        <BCard
          no-body
          :img-src="require('@/assets/images/small/img-7.jpg')"
          img-alt="Card image"
          img-bottom
        >
          <BCardBody>
            <BCardTitle tags="h5">Card title</BCardTitle>
            <BCardText>
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </BCardText>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol md="4">
        <BCard
          overlay
          :img-src="require('@/assets/images/small/img-6.jpg')"
          img-alt="Card Image"
          text-variant="white"
        >
          <BCardTitle tags="h5" class="text-white">Card title</BCardTitle>
          <BCardText>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>
              <small class="text-white">Last updated 3 mins ago</small>
            </p>
          </BCardText>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BRow no-gutters class="align-items-center">
            <BCol md="4">
              <BCardImg
                :src="require('@/assets/images/small/img-2.jpg')"
                class="rounded-0"
              ></BCardImg>
            </BCol>
            <BCol md="8">
              <BCardBody title="Card title">
                <BCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </BCardText>
                <BCardText>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </BCardText>
              </BCardBody>
            </BCol>
          </BRow>
        </BCard>
      </BCol>
      <BCol>
        <BCard no-body>
          <BRow no-gutters class="align-items-center">
            <BCol md="8">
              <BCardBody title="Card title">
                <BCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </BCardText>
                <small class="text-muted">Last updated 3 mins ago</small>
              </BCardBody>
            </BCol>
            <BCol md="4">
              <BCardImg
                :src="require('@/assets/images/small/img-3.jpg')"
                class="rounded-0"
              ></BCardImg>
            </BCol>
          </BRow>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol md="4">
        <BCard bg-variant="primary" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="uil uil-user me-3"></i> Primary Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </BCard>
      </BCol>
      <BCol md="4">
        <BCard bg-variant="success" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="uil uil-check-circle me-3"></i> Success Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </BCard>
      </BCol>
      <BCol md="4">
        <BCard bg-variant="info" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="uil uil-question-circle me-3"></i> Info Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol md="4">
        <BCard bg-variant="warning" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="uil uil-exclamation-triangle me-3"></i> Warning Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </BCard>
      </BCol>
      <BCol md="4">
        <BCard bg-variant="danger" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="uil uil-exclamation-octagon me-3"></i> Danger Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </BCard>
      </BCol>
      <BCol md="4">
        <BCard bg-variant="dark" class="text-white-50">
          <h5 class="mt-0 mb-4 text-white">
            <i class="uil uil-arrow-circle-right me-3"></i> Dark Card
          </h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="4">
        <BCard
          header-class="bg-transparent border-primary"
          class="border border-primary"
        >
          <template v-slot:header>
            <h5 class="my-0 text-primary">
              <i class="uil uil-user me-3"></i>Primary outline Card
            </h5>
          </template>
          <h5 class="card-title mt-0">card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </BCard>
      </BCol>
      <BCol lg="4">
        <BCard
          header-class="bg-transparent border-danger"
          class="border border-danger"
        >
          <template v-slot:header>
            <h5 class="my-0 text-danger">
              <i class="uil uil-exclamation-octagon me-3"></i>Danger outline
              Card
            </h5>
          </template>
          <h5 class="card-title mt-0">card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </BCard>
      </BCol>
      <BCol lg="4">
        <BCard
          header-class="bg-transparent border-success"
          class="border border-success"
        >
          <template v-slot:header>
            <h5 class="my-0 text-success">
              <i class="uil uil-check-circle me-3"></i>Success outline Card
            </h5>
          </template>
          <h5 class="card-title mt-0">card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
    <BRow>
      <BCol cols="12">
        <h4 class="my-3">Card groups</h4>
        <div class="card-deck-wrapper">
          <BCardGroup>
            <BCard no-body class="mb-4">
              <img
                class="card-img-top img-fluid"
                src="@/assets/images/small/img-4.jpg"
                alt="Card image cap"
              />
              <BCardBody>
                <BCardTitle>Card title</BCardTitle>
                <BCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </BCardText>
                <BCardText>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </BCardText>
              </BCardBody>
            </BCard>
            <BCard no-body class="mb-4">
              <img
                class="card-img-top img-fluid"
                src="@/assets/images/small/img-5.jpg"
                alt="Card image cap"
              />
              <BCardBody>
                <BCardTitle>Card title</BCardTitle>
                <BCardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </BCardText>
                <BCardText>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </BCardText>
              </BCardBody>
            </BCard>
            <BCard no-body class="mb-4">
              <img
                class="card-img-top img-fluid"
                src="@/assets/images/small/img-6.jpg"
                alt="Card image cap"
              />
              <BCardBody>
                <BCardTitle>Card title</BCardTitle>
                <BCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </BCardText>
                <BCardText>
                  <small class="text-muted">Last updated 3 mins ago</small>
                </BCardText>
              </BCardBody>
            </BCard>
          </BCardGroup>
        </div>
      </BCol>
    </BRow>
  </Layout>
</template>
