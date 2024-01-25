<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import DismissibleAlert from "./dismissibleAlerts";

/**
 * Alerts component
 */
export default {
  components: { Layout, PageHeader, DismissibleAlert },
  data() {
    return {
      title: "Alerts",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Alerts",
          active: true
        }
      ],
      dismissSecs: 5000,
      dismissCountDown: 0,
      countdown: 0
    };
  },
  methods: {
    onCloseCountDown(event) {
      this.dismissCountDown = event;
      this.countdown = event;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <BRow>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Default Alerts</h4>
            <p class="card-title-desc">
              Alerts are available for any length of text, as well as an
              optional dismiss button. For proper styling, use one of the four
              <strong>required</strong> contextual classes (e.g.,
              <code class="highlighter-rouge">success</code>).
            </p>

            <div class="">
              <BAlert variant="primary" :model-value="true">A simple primary alert—check it out!</BAlert>
              <BAlert variant="secondary" :model-value="true">A simple secondary alert—check it out!</BAlert>
              <BAlert variant="success" :model-value="true">A simple success alert—check it out!</BAlert>
              <BAlert variant="danger" :model-value="true">A simple danger alert—check it out!</BAlert>
              <BAlert variant="warning" :model-value="true">A simple warning alert—check it out!</BAlert>
              <BAlert variant="info" :model-value="true" class="mb-0">A simple info alert—check it out!</BAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->

      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Link color</h4>
            <p class="card-title-desc">
              Use the <code class="highlighter-rouge">.alert-link</code> utility
              class to quickly provide matching colored links within any alert.
            </p>

            <div class="">
              <BAlert :model-value="true" variant="primary">
                A simple primary alert with<a href="#" class="alert-link">
                  an example link</a>. Give it a click if you like.</BAlert>
              <BAlert :model-value="true" variant="secondary">
                A simple secondary alert with<a href="#" class="alert-link">
                  an example link</a>. Give it a click if you like.</BAlert>
              <BAlert :model-value="true" variant="success">
                A simple success alert with<a href="#" class="alert-link">
                  an example link</a>. Give it a click if you like.</BAlert>
              <BAlert :model-value="true" variant="danger">
                A simple danger alert with<a href="#" class="alert-link">
                  an example link</a>. Give it a click if you like.</BAlert>
              <BAlert :model-value="true" variant="warning">
                A simple warning alert with<a href="#" class="alert-link">
                  an example link</a>. Give it a click if you like.</BAlert>
              <BAlert :model-value="true" variant="info" class="mb-0">
                A simple warning alert with<a href="#" class="alert-link">
                  an example link</a>. Give it a click if you like.</BAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Dismissing</h4>
            <p class="card-title-desc">
              Add a dismiss button and the
              <code>.alert-dismissible</code> class, which adds extra padding to
              the right of the alert and positions the
              <code>.close</code> button.
            </p>

            <div class="">
              <DismissibleAlert>
                A simple primary alert—check it out!
              </DismissibleAlert>
              <DismissibleAlert variant="primary" >A simple primary alert—check it out!</DismissibleAlert>
              <DismissibleAlert variant="secondary">A simple secondary alert—check it out!</DismissibleAlert>
              <DismissibleAlert variant="success">A simple success alert—check it out!</DismissibleAlert>
              <DismissibleAlert variant="danger">A simple danger alert—check it out!</DismissibleAlert>
              <DismissibleAlert variant="warning">A simple warning alert—check it out!</DismissibleAlert>
              <DismissibleAlert variant="info">A simple info alert—check it out!</DismissibleAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->

      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title mb-4">With Icon</h4>

            <div class="">
              <DismissibleAlert variant="primary">
                <i class="uil uil-user-circle me-2"></i>A simple primary
                alert—check it out!
              </DismissibleAlert>

              <DismissibleAlert variant="secondary">
                <i class="uil uil-pen me-2"></i>A simple secondary alert—check
                it out!
              </DismissibleAlert>

              <DismissibleAlert variant="success">
                <i class="uil uil-check me-2"></i>A simple success alert—check
                it out!
              </DismissibleAlert>
              <DismissibleAlert variant="danger">
                <i class="uil uil-exclamation-octagon me-2"></i>A simple danger
                alert—check it out!
              </DismissibleAlert>
              <DismissibleAlert variant="warning">
                <i class="uil uil-exclamation-triangle me-2"></i>A simple
                warning alert—check it out!
              </DismissibleAlert>
              <DismissibleAlert variant="info">
                <i class="uil uil-question-circle me-2"></i>A simple info
                alert—check it out!
              </DismissibleAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Alert Border Examples</h4>
            <p class="card-title-desc">
              Add <code>alert-border</code> class for Alert Border Examples and
              add <code>alert-border-*</code> color classes for border color
              variant
            </p>

            <div class="">
              <DismissibleAlert variant="border-primary" dismissible class="alert-border">
                <i class="uil uil-user-circle text-primary font-size-16 me-2"></i>
                A simple border primary alert
              </DismissibleAlert>
              <DismissibleAlert variant="border-secondary" dismissible class="alert-border alert-border-secondary">
                <i class="uil uil-pen font-size-16 text-secondary me-2"></i>
                A simple border secondary alert
              </DismissibleAlert>
              <DismissibleAlert variant="border-success" dismissible class="alert-border alert-border-success">
                <i class="uil uil-check font-size-16 text-success me-2"></i>
                A simple border success alert
              </DismissibleAlert>
              <DismissibleAlert variant="border-danger" dismissible class="alert-border alert-border-danger">
                <i class="uil uil-exclamation-octagon font-size-16 text-danger me-2"></i>
                A simple border danger alert
              </DismissibleAlert>
              <DismissibleAlert variant="border-warning" dismissible class="alert-border alert-border-warning">
                <i class="uil uil-exclamation-triangle font-size-16 text-warning me-2"></i>
                A simple border warning alert
              </DismissibleAlert>
              <DismissibleAlert variant="border-info" dismissible class="alert-border alert-border-info mb-0">
                <i class="uil uil-question-circle font-size-16 text-info me-2"></i>
                A simple border info alert
              </DismissibleAlert>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title mb-0">Alert Examples</h4>

            <BRow>
              <BCol sm="6">
                <DismissibleAlert variant="success" dismissible class="text-center mt-4 px-4 mb-0">
                  <i class="uil uil-check-circle d-block display-4 mt-2 mb-3 text-success"></i>
                  <h5 class="text-success">Success</h5>
                  <p>A simple success alert</p>
                </DismissibleAlert>
              </BCol>

              <BCol sm="6">
                <DismissibleAlert variant="danger" dismissible class="text-center mt-4 px-4 mb-0">
                  <i class="uil uil-exclamation-octagon d-block display-4 mt-2 mb-3 text-danger"></i>
                  <h5 class="text-danger">Error</h5>
                  <p>A simple danger alert</p>
                </DismissibleAlert>
              </BCol>

              <BCol sm="6">
                <DismissibleAlert variant="border-warning" dismissible
                  class="alert-border alert-border-warning text-center mt-4 px-4 mb-0">
                  <i class="uil uil-exclamation-triangle d-block display-4 mt-2 mb-3 text-warning"></i>
                  <h5 class="text-warning">Error</h5>
                  <p>A simple warning alert</p>
                </DismissibleAlert>
              </BCol>

              <BCol sm="6">
                <DismissibleAlert variant="border-info" dismissible show
                  class="alert-border text-center mt-4 px-4 mb-0">
                  <i class="uil uil-question-circle d-block display-4 mt-2 mb-3 text-info"></i>
                  <h5 class="text-info">Info</h5>
                  <p>A simple info alert</p>
                </DismissibleAlert>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Live Example</h4>
            <p class="card-title-desc">
              Click the button below to show an alert (hidden with inline styles
              to start), then dismiss (and destroy) it with the built-in close
              button.
            </p>
              <BAlert v-model="dismissCountDown" dismissible variant="warning" @close-countdown="onCloseCountDown">
                <p>
                  This alert will dismiss after
                  {{ countdown / 1000 }} seconds...
                </p>
                <BProgress variant="warning" :max="dismissCountDown" :value="countdown" height="4px" />
              </BAlert>
            <BButton @click="showAlert" variant="primary" class="m-1">
              Show alert with count-down timer
            </BButton>
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->

      <BCol cols="xl-6">
        <BCard>
          <BCardBody>
            <h4 class="card-title">Additional content</h4>
            <p class="card-title-desc">
              Alerts can also contain additional HTML elements like headings,
              paragraphs and dividers.
            </p>

            <BAlert :model-value="true" variant="success" show>
              <h4 class="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p class="mb-0">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </BAlert>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
