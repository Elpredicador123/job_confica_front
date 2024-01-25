<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * FAQs component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "FAQs",
      items: [
        {
          text: "Utility",
          href: "/"
        },
        {
          text: "FAQs",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BRow class="justify-content-center mt-4">
              <BCol lg="5">
                <div class="text-center">
                  <h5>Can't find what you are looking for?</h5>
                  <p class="text-muted">
                    If several languages coalesce, the grammar of the resulting
                    language is more simple and regular than that of the
                    individual
                  </p>

                  <div>
                    <BButton
                      type="button"
                      variant="primary"
                      class="mt-2 me-2 waves-effect waves-light"
                    >
                      Email Us
                    </BButton>
                    <BButton
                      type="button"
                      variant="success"
                      class="mt-2 waves-effect waves-light"
                    >
                      Send us a tweet
                    </BButton>
                  </div>
                </div>
              </BCol>
            </BRow>

            <BRow class="mt-5">
              <BCol sm="5" cols="xl-3 mx-auto">
                <div>
                  <img
                    src="@/assets/images/faqs-img.png"
                    alt=""
                    class="img-fluid mx-auto d-block"
                  />
                </div>
              </BCol>

              <BCol cols="xl-8">
                <div id="faqs-accordion" class="custom-accordion mt-5 mt-xl-0">
                  <BCard no-body class="border shadow-none">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.faqs-gen-ques-collapse
                      class="text-dark"
                      data-toggle="collapse"
                      aria-expanded="true"
                      aria-controls="faqs-gen-ques-collapse"
                    >
                      <div class="bg-light p-3">
                        <div class="media d-flex align-items-center">
                          <div class="me-3">
                            <div class="avatar-xs">
                              <div
                                class="avatar-title rounded-circle font-size-22"
                              >
                                <i class="uil uil-question-circle"></i>
                              </div>
                            </div>
                          </div>
                          <div class="media-body flex-grow-1 overflow-hidden">
                            <h5 class="font-size-16 mb-1">General Questions</h5>
                            <p class="text-muted text-truncate mb-0">
                              General Questions
                            </p>
                          </div>
                          <i
                            class="mdi mdi-chevron-up accor-down-icon font-size-16"
                          ></i>
                        </div>
                      </div>
                    </a>

                    <BCollapse
                      id="faqs-gen-ques-collapse"
                      visible
                      accordion="faqs-accordion"
                      data-parent="#faqs-accordion"
                    >
                      <div class="p-4">
                        <BRow>
                          <BCol md="6">
                            <div>
                              <div class="media d-flex align-items-start mt-4">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar-xs">
                                    <div
                                      class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-22"
                                    >
                                      <i class="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="media-body">
                                  <h5 class="font-size-16 mt-1">
                                    What is Lorem Ipsum ?
                                  </h5>
                                  <p class="text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting language is more simple
                                  </p>
                                </div>
                              </div>

                              <div class="media d-flex align-items-start mt-4">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar-xs">
                                    <div
                                      class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-22"
                                    >
                                      <i class="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="media-body">
                                  <h5 class="font-size-16 mt-1">
                                    Where does it come from ?
                                  </h5>
                                  <p class="text-muted">
                                    Everyone realizes why a new common language
                                    would be desirable one could refuse to pay
                                    expensive translators.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </BCol>

                          <BCol md="6">
                            <div>
                              <div class="media d-flex align-items-start mt-4">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar-xs me-3">
                                    <div
                                      class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-22"
                                    >
                                      <i class="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="media-body">
                                  <h5 class="font-size-16 mt-1">
                                    Why do we use it ?
                                  </h5>
                                  <p class="text-muted">
                                    Their separate existence is a myth. For
                                    science, music, sport, etc, Europe uses the
                                    same vocabulary.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </BCol>
                        </BRow>
                      </div>
                    </BCollapse>
                  </BCard>

                  <BCard no-body class="border shadow-none">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.faqs-privacy-policy-collapse
                      class="text-dark collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="faqs-privacy-policy-collapse"
                    >
                      <div class="bg-light p-3">
                        <div class="media d-flex align-items-center">
                          <div class="me-3">
                            <div class="avatar-xs">
                              <div
                                class="avatar-title rounded-circle font-size-22"
                              >
                                <i class="uil uil-shield-check"></i>
                              </div>
                            </div>
                          </div>
                          <div class="media-body flex-grow-1 overflow-hidden">
                            <h5 class="font-size-16 mb-1">Privacy Policy</h5>
                            <p class="text-muted text-truncate mb-0">
                              Privacy Policy Questions
                            </p>
                          </div>
                          <i
                            class="mdi mdi-chevron-up accor-down-icon font-size-16"
                          ></i>
                        </div>
                      </div>
                    </a>

                    <BCollapse
                      id="faqs-privacy-policy-collapse"
                      accordion="faqs-accordion"
                      data-parent="#faqs-accordion"
                    >
                      <div class="p-4">
                        <BRow>
                          <BCol md="6">
                            <div>
                              <div class="media d-flex align-items-start mt-4">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar-xs">
                                    <div
                                      class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-22"
                                    >
                                      <i class="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="media-body">
                                  <h5 class="font-size-16 mt-1">
                                    Where can I get some ?
                                  </h5>
                                  <p class="text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting language is more simple
                                  </p>
                                </div>
                              </div>

                              <div class="media d-flex align-items-start mt-4">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar-xs">
                                    <div
                                      class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-22"
                                    >
                                      <i class="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="media-body">
                                  <h5 class="font-size-16 mt-1">
                                    Why do we use it ?
                                  </h5>
                                  <p class="text-muted">
                                    Their separate existence is a myth. For
                                    science, music, sport, etc, Europe uses the
                                    same vocabulary.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </BCol>

                          <BCol md="6">
                            <div>
                              <div class="media d-flex align-items-start mt-4">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar-xs">
                                    <div
                                      class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-22"
                                    >
                                      <i class="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="media-body">
                                  <h5 class="font-size-16 mt-1">
                                    Where does it come from ?
                                  </h5>
                                  <p class="text-muted">
                                    Everyone realizes why a new common language
                                    would be desirable one could refuse to pay
                                    expensive translators.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </BCol>
                        </BRow>
                      </div>
                    </BCollapse>
                  </BCard>

                  <BCard no-body class="border shadow-none">
                    <a
                      href="javascript: void(0);"
                      v-b-toggle.faqs-pricing-plans-collapse
                      class="text-dark collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="faqs-pricing-plans-collapse"
                    >
                      <div class="bg-light p-3">
                        <div class="media d-flex align-items-center">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar-xs">
                              <div
                                class="avatar-title rounded-circle font-size-22"
                              >
                                <i class="uil uil-pricetag-alt"></i>
                              </div>
                            </div>
                          </div>
                          <div class="media-body flex-grow-1 overflow-hidden">
                            <h5 class="font-size-16 mb-1">Pricing & Plans</h5>
                            <p class="text-muted text-truncate mb-0">
                              Pricing & Plans Questions
                            </p>
                          </div>
                          <i
                            class="mdi mdi-chevron-up accor-down-icon font-size-16"
                          ></i>
                        </div>
                      </div>
                    </a>

                    <b-collapse
                      id="faqs-pricing-plans-collapse"
                      accordion="faqs-accordion"
                      data-parent="#faqs-accordion"
                    >
                      <div class="p-4">
                        <BRow>
                          <BCol md="6">
                            <div>
                              <div class="media d-flex align-items-start mt-4">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar-xs">
                                    <div
                                      class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-22"
                                    >
                                      <i class="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="media-body">
                                  <h5 class="font-size-16 mt-1">
                                    Where does it come from ?
                                  </h5>
                                  <p class="text-muted">
                                    Everyone realizes why a new common language
                                    would be desirable one could refuse to pay
                                    expensive translators.
                                  </p>
                                </div>
                              </div>

                              <div class="media d-flex align-items-start mt-4">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar-xs">
                                    <div
                                      class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-22"
                                    >
                                      <i class="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="media-body">
                                  <h5 class="font-size-16 mt-1">
                                    What is Lorem Ipsum ?
                                  </h5>
                                  <p class="text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting language is more simple
                                  </p>
                                </div>
                              </div>
                            </div>
                          </BCol>

                          <BCol md="6">
                            <div>
                              <div class="media d-flex align-items-start mt-4">
                                <div class="flex-shrink-0 me-3">
                                  <div class="avatar-xs">
                                    <div
                                      class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-22"
                                    >
                                      <i class="uil uil-question-circle"></i>
                                    </div>
                                  </div>
                                </div>

                                <div class="media-body">
                                  <h5 class="font-size-16 mt-1">
                                    Why do we use it ?
                                  </h5>
                                  <p class="text-muted">
                                    Their separate existence is a myth. For
                                    science, music, sport, etc, Europe uses the
                                    same vocabulary.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </BCol>
                        </BRow>
                      </div>
                    </b-collapse>
                  </BCard>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
  </Layout>
</template>
