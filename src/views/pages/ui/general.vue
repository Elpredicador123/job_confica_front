<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * General component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "General",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "General",
          active: true
        }
      ],
      defaultvalue: 3,
      currentpage: 3
    };
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
            <BRow>
              <BCol lg="6">
                <div>
                  <BCardTitle>Badges</BCardTitle>
                  <p class="card-title-desc">
                    Add any of the below mentioned modifier classes to change
                    the appearance of a badge.
                  </p>
                  <div>
                    <span class="badge bg-primary">Primary</span>
                    <span class="badge bg-success ms-1">Success</span>
                    <span class="badge bg-info ms-1">Info</span>
                    <span class="badge bg-warning ms-1">Warning</span>
                    <span class="badge bg-danger ms-1">Danger</span>
                    <span class="badge bg-dark ms-1">Dark</span>
                  </div>

                  <div class="mt-1">
                    <BBadge variant="primary-subtle">Primary</BBadge>
                    <BBadge variant="success-subtle" class="ms-1"
                      >Success</BBadge
                    >
                    <BBadge variant="info-subtle" class="ms-1">Info</BBadge>
                    <BBadge variant="warning-subtle" class="ms-1"
                      >Warning</BBadge
                    >
                    <BBadge variant="danger-subtle" class="ms-1">Danger</BBadge>
                    <BBadge variant="dark-subtle" class="ms-1">Dark</BBadge>
                  </div>
                </div>
              </BCol>
              <BCol lg="6">
                <div class="mt-4 mt-lg-0">
                  <BCardTitle>Pill badges</BCardTitle>
                  <p class="card-title-desc">
                    Use the
                    <code>.rounded-pill</code> modifier class to make badges
                    more rounded (with a larger
                    <code>border-radius</code>
                    and additional horizontal
                    <code>padding</code>). Useful if you miss the badges from
                    v3.
                  </p>

                  <div>
                    <span class="badge bg-primary rounded-pill">Primary</span>
                    <span class="badge bg-success ms-1 rounded-pill"
                      >Success</span
                    >
                    <span class="badge bg-info ms-1 rounded-pill">Info</span>
                    <span class="badge bg-warning ms-1 rounded-pill"
                      >Warning</span
                    >
                    <span class="badge bg-danger ms-1 rounded-pill"
                      >Danger</span
                    >
                    <span class="badge bg-dark ms-1 rounded-pill">Dark</span>
                  </div>

                  <div class="mt-1">
                    <BBadge variant="primary-subtle" pill>Primary</BBadge>
                    <BBadge variant="success-subtle" pill class="ms-1"
                      >Success</BBadge
                    >
                    <BBadge variant="info-subtle" pill class="ms-1"
                      >Info</BBadge
                    >
                    <BBadge variant="warning-subtle" pill class="ms-1"
                      >Warning</BBadge
                    >
                    <BBadge variant="danger-subtle" pill class="ms-1"
                      >Danger</BBadge
                    >
                    <BBadge variant="dark-subtle" pill class="ms-1"
                      >Dark</BBadge
                    >
                  </div>
                </div>
              </BCol>
            </BRow>
            <!-- end row -->
          </BCardBody>
        </BCard>
        <!-- end card -->
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Popovers</BCardTitle>
            <p class="card-title-desc">
              Add small overlay content, like those found in iOS, to any element
              for housing secondary information.
            </p>

            <div class="button-items">
              <BButton
                v-b-popover.top="
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                "
                variant="secondary"
                class="me-2"
                >Popover on top</BButton
              >

              <BButton
                v-b-popover.bottom="
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                "
                variant="secondary"
                class="me-2"
                >Popover on bottom</BButton
              >
              <BButton
                v-b-popover.right="
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                "
                variant="secondary"
                class="me-2"
                >Popover on right</BButton
              >
              <BButton
                v-b-popover.left="
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                "
                variant="secondary"
                class="me-2"
                >Popover on left</BButton
              >
              <BButton
                v-b-popover.right="
                  'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'
                "
                variant="danger"
                class="me-2"
                >Dismissible popover
              </BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Tooltips</BCardTitle>
            <p class="card-title-desc">
              Hover over the links below to see tooltips:
            </p>

            <div class="button-items">
              <BButton id="tooltip-top" variant="primary" class="me-2"
                >Tooltip on top</BButton
              >
              <BTooltip target="tooltip-top">Tooltip on top</BTooltip>
              <BButton id="tooltip-button" variant="primary" class="me-2"
                >Tooltip on bottom</BButton
              >
              <BTooltip target="tooltip-button" placement="bottom"
                >Tooltip on bottom</BTooltip
              >
              <BButton id="tooltip-left-button" variant="primary" class="me-2"
                >Tooltip on left</BButton
              >
              <BTooltip target="tooltip-left-button" placement="left"
                >Tooltip on left</BTooltip
              >
              <BButton id="tooltip-right-button" variant="primary" class="me-2"
                >Tooltip on right</BButton
              >
              <BTooltip target="tooltip-right-button" placement="right"
                >Tooltip on right</BTooltip
              >
              <BButton
                type="button"
                variant="secondary"
                v-BTooltip="'<em>Tooltip</em> <u>with</u> <b>HTML</b>'"
                data-bs-html="true"
                title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
              >
                Tooltip with HTML
              </BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Pagination</BCardTitle>

            <BRow>
              <BCol lg="6">
                <h5 class="font-size-14">Default Example</h5>
                <p class="card-title-desc">
                  Pagination links indicate a series of related content exists
                  across multiple pages.
                </p>
                <BPagination
                  v-model="defaultvalue"
                  :total-rows="50"
                  :per-page="10"
                  aria-controls="my-table"
                >
                </BPagination>
              </BCol>

              <BCol lg="6">
                <div class="mt-4">
                  <BCardTitle>Alignment</BCardTitle>
                  <p class="card-title-desc">
                    Change the alignment of pagination components with flexbox
                    utilities.
                  </p>

                  <BPagination
                    :total-rows="50"
                    prev-text="Previous"
                    next-text="Next"
                    align="center"
                  ></BPagination>

                  <BPagination
                    :total-rows="50"
                    prev-text="Previous"
                    next-text="Next"
                    align="right"
                  ></BPagination>
                </div>
              </BCol>
            </BRow>
            <!-- end row -->

            <BRow>
              <BCol lg="6">
                <div class="mt-4">
                  <h5 class="font-size-14">Sizing</h5>
                  <p class="card-title-desc">
                    Fancy larger or smaller pagination? Add
                    <code>.pagination-lg</code> or
                    <code>.pagination-sm</code> for additional sizes.
                  </p>
                  <BPagination
                    size="lg"
                    :total-rows="30"
                    :per-page="10"
                    aria-controls="my-table"
                  ></BPagination>

                  <BPagination
                    size="sm"
                    :total-rows="30"
                    :per-page="10"
                    aria-controls="my-table"
                  ></BPagination>
                </div>
              </BCol>
            </BRow>
            <!-- end row -->
          </BCardBody>
        </BCard>
        <!-- end card -->
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Border spinner</BCardTitle>
            <p class="card-title-desc">
              Use the border spinners for a lightweight loading indicator.
            </p>
            <div>
              <BSpinner class="m-2" variant="primary" role="status"></BSpinner>
              <BSpinner
                class="m-2"
                variant="secondary"
                role="status"
              ></BSpinner>
              <BSpinner class="m-2" variant="success" role="status"></BSpinner>
              <BSpinner class="m-2" variant="info" role="status"></BSpinner>
              <BSpinner class="m-2" variant="warning" role="status"></BSpinner>
              <BSpinner class="m-2" variant="danger" role="status"></BSpinner>
              <BSpinner class="m-2" variant="dark" role="status"></BSpinner>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Growing spinner</BCardTitle>
            <p class="card-title-desc">
              If you don’t fancy a border spinner, switch to the grow spinner.
              While it doesn’t technically spin, it does repeatedly grow!
            </p>
            <div>
              <BSpinner
                type="grow"
                class="m-2"
                variant="primary"
                role="status"
              ></BSpinner>
              <BSpinner
                type="grow"
                class="m-2"
                variant="secondary"
                role="status"
              ></BSpinner>
              <BSpinner
                type="grow"
                class="m-2"
                variant="success"
                role="status"
              ></BSpinner>
              <BSpinner
                type="grow"
                class="m-2"
                variant="info"
                role="status"
              ></BSpinner>
              <BSpinner
                type="grow"
                class="m-2"
                variant="warning"
                role="status"
              ></BSpinner>
              <BSpinner
                type="grow"
                class="m-2"
                variant="danger"
                role="status"
              ></BSpinner>
              <BSpinner
                type="grow"
                class="m-2"
                variant="dark"
                role="status"
              ></BSpinner>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
  </Layout>
</template>
