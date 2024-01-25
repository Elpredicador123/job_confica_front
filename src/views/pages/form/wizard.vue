<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Step1 from "@/components/wizard/Step1.vue";
import Step2 from "@/components/wizard/Step2.vue";
import Step3 from "@/components/wizard/Step3.vue";

/**
 * Form wizard component
 */
export default {
  components: {
    PageHeader,
    Layout,
    Step1,
    Step2,
    Step3
  },
  data() {
    return {
      title: "Form Wizard",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Form Wizard",
          active: true
        }
      ],
      progressBarValue: 18,
      activeTab: 1,
      activeTabArrow: 2
    };
  },
  middleware: "authentication",
  methods: {
    toggleWizard(tab, value) {
      this.activeTab = tab;
      this.progressBarValue = value;
    },

    toggleTabWizard(tab) {
      this.activeTabArrow = tab;
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow class="wizard">
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-3">Basic Wizard</BCardTitle>
            <form action="#">
              <div id="custom-progress-bar" class="progress-nav mb-4">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="`width: ${progressBarValue}%;`"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <ul
                  class="nav nav-pills d-flex justify-content-around wizard-steps"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link wizard-step"
                      id="pills-gen-info-tab"
                      type="button"
                      role="tab"
                      :class="{ active: activeTab == 1, done: activeTab > 1 }"
                      @click="toggleWizard(1, 18)"
                    >
                      <i
                        class="wizard-icon mdi mdi-account-circle font-size-24"
                      ></i>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link wizard-step"
                      id="pills-info-desc-tab"
                      type="button"
                      role="tab"
                      :class="{ active: activeTab == 2, done: activeTab > 2 }"
                      @click="toggleWizard(2, 50)"
                    >
                      <i
                        class="wizard-icon mdi mdi-face-profile font-size-24"
                      ></i>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link wizard-step"
                      id="pills-success-tab"
                      type="button"
                      role="tab"
                      :class="{ active: activeTab == 3, done: activeTab > 3 }"
                      @click="toggleWizard(3, 100)"
                    >
                      <i
                        class="wizard-icon mdi mdi-checkbox-marked-circle-outline font-size-24"
                      ></i>
                    </button>
                  </li>
                </ul>
              </div>

              <div class="tab-content">
                <div
                  class="tab-pane fade"
                  :class="activeTab == 1 && 'show active'"
                  id="pills-gen-info"
                  role="tabpanel"
                  aria-labelledby="pills-gen-info-tab"
                >
                  <Step1 @onNext="toggleWizard(2, 50)" />
                </div>

                <div
                  class="tab-pane fade"
                  :class="activeTab == 2 && 'show active'"
                  id="pills-info-desc"
                  role="tabpanel"
                  aria-labelledby="pills-info-desc-tab"
                >
                  <Step2
                    @onBack="toggleWizard(1, 18)"
                    @onNext="toggleWizard(3, 100)"
                  />
                </div>

                <div
                  class="tab-pane fade"
                  :class="activeTab == 3 && 'show active'"
                  id="pills-success"
                  role="tabpanel"
                  aria-labelledby="pills-success-tab"
                >
                  <Step3 @onBack="toggleWizard(2, 50)" />
                </div>
              </div>
            </form>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-3">Tab Wizard</BCardTitle>
            <form action="#">
              <div class="step-arrow-nav mb-4">
                <ul
                  class="nav nav-pills custom-nav nav-justified"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="steparrow-gen-info-tab"
                      type="button"
                      :class="{
                        active: activeTabArrow == 1,
                        done: activeTabArrow > 1
                      }"
                      @click="toggleTabWizard(1)"
                    >
                      <i
                        class="wizard-icon mdi mdi-account-circle font-size-24"
                      ></i>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="steparrow-description-info-tab"
                      type="button"
                      :class="{
                        active: activeTabArrow == 2,
                        done: activeTabArrow > 2
                      }"
                      @click="toggleTabWizard(2)"
                    >
                      <i
                        class="wizard-icon mdi mdi-face-profile font-size-24"
                      ></i>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-experience-tab"
                      type="button"
                      :class="{
                        active: activeTabArrow == 3,
                        done: activeTabArrow > 3
                      }"
                      @click="toggleTabWizard(3)"
                    >
                      <i
                        class="wizard-icon mdi mdi-checkbox-marked-circle-outline font-size-24"
                      ></i>
                    </button>
                  </li>
                </ul>
              </div>

              <div class="tab-content">
                <div
                  class="tab-pane fade"
                  :class="activeTabArrow == 1 && 'show active'"
                  id="steparrow-gen-info"
                  role="tabpanel"
                  aria-labelledby="steparrow-gen-info-tab"
                >
                  <Step1 @onNext="toggleTabWizard(2)" />
                </div>

                <div
                  class="tab-pane fade"
                  :class="activeTabArrow == 2 && 'show active'"
                  id="steparrow-description-info"
                  role="tabpanel"
                  aria-labelledby="steparrow-description-info-tab"
                >
                  <Step2
                    @onBack="toggleTabWizard(1)"
                    @onNext="toggleTabWizard(3)"
                  />
                </div>

                <div
                  class="tab-pane fade"
                  :class="activeTabArrow == 3 && 'show active'"
                  id="pills-experience"
                  role="tabpanel"
                >
                  <Step3 @onBack="toggleTabWizard(2)" />
                </div>
              </div>
            </form>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
  </Layout>
</template>

<style lang="scss">
.progress-nav {
  position: relative;
  display: flex;
  align-items: center;
}
.progress {
  width: 100%;
  position: absolute;
  height: 4px;
}

.wizard-steps {
  position: relative;
  z-index: 3;
  width: 100%;

  .wizard-step {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 3px solid;
    display: flex;
    justify-content: center;
    z-index: 9;
    position: relative;
    background: white;
  }
}

.step-arrow-nav {
  .nav-link {
    background: #f3f2ee;
    padding: 4px 0;
    border-radius: 0 !important;
  }
}
.wizard {
  .nav-link:not(.active) {
    color: #f3f2ee;
    .wizard-icon {
      color: #a5a5a5;
    }
  }
}
[data-bs-theme="dark"] {
  .wizard-steps .wizard-step:not(.active) {
    background: var(--bs-input-bg);
  }

  .step-arrow-nav {
    .nav-link:not(.active) {
      background: var(--bs-input-bg);
    }
  }
}
</style>
