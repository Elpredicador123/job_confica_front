<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Dropdowns component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Dropdowns",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Dropdowns",
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
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Single button dropdowns</BCardTitle>
            <p class="card-title-desc">
              Any single
              <code class="highlighter-rouge">.btn</code> can be turned into a
              dropdown toggle with some markup changes. Here’s how you can put
              them to work with either
              <code class="highlighter-rouge">&lt;button&gt;</code>
              elements:
            </p>

            <BRow>
              <BCol cols="auto">
                <BDropdown variant="primary">
                  <template v-slot:button-content>
                    Dropdown button
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another Action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                </BDropdown>
              </BCol>

              <BCol cols="auto">
                <BDropdown variant="light">
                  <template v-slot:button-content>
                    Dropdown link
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                </BDropdown>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Variant</BCardTitle>
            <p class="card-title-desc mb-3">
              The best part is you can do this with any button variant, too:
            </p>
            <div class="d-flex gap-1">
              <div class="btn-group me-1 mt-2">
                <BDropdown variant="primary">
                  <template v-slot:button-content>
                    Primary
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group me-1 mt-2">
                <BDropdown variant="light">
                  <template v-slot:button-content>
                    Light
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group me-1 mt-2">
                <BDropdown variant="success">
                  <template v-slot:button-content>
                    Success
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group me-1 mt-2">
                <BDropdown variant="info">
                  <template v-slot:button-content>
                    Info
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group me-1 mt-2">
                <BDropdown variant="warning">
                  <template v-slot:button-content>
                    Warning
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
              <!-- /btn-group -->
              <div class="btn-group me-1 mt-2">
                <BDropdown variant="danger">
                  <template v-slot:button-content>
                    Danger
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem>Action</BDropdownItem>
                  <BDropdownItem>Another action</BDropdownItem>
                  <BDropdownItem>Something else here</BDropdownItem>
                  <BDropdownDivider></BDropdownDivider>
                  <BDropdownItem>Separated link</BDropdownItem>
                </BDropdown>
              </div>
              <!-- /btn-group -->
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
            <BCardTitle>Split button dropdowns</BCardTitle>
            <p class="card-title-desc mb-3">
              The best part is you can do this with any button variant, too:
            </p>
            <BDropdown
              split
              text="Primary"
              variant="primary"
              class="me-1 mt-2 split-dropdown"
            >
              <BDropdownItem>Action</BDropdownItem>
              <BDropdownItem>Another action</BDropdownItem>
              <BDropdownItem>Something else here...</BDropdownItem>
            </BDropdown>
            <BDropdown
              split
              text="Light"
              variant="light"
              class="me-1 mt-2 split-dropdown"
            >
              <BDropdownItem>Action</BDropdownItem>
              <BDropdownItem>Another action</BDropdownItem>
              <BDropdownItem>Something else here...</BDropdownItem>
            </BDropdown>
            <BDropdown
              split
              text="Success"
              variant="success"
              class="me-1 mt-2 split-dropdown"
            >
              <BDropdownItem>Action</BDropdownItem>
              <BDropdownItem>Another action</BDropdownItem>
              <BDropdownItem>Something else here...</BDropdownItem>
            </BDropdown>
            <BDropdown split text="Info" variant="info" class="me-1 mt-2">
              <BDropdownItem>Action</BDropdownItem>
              <BDropdownItem>Another action</BDropdownItem>
              <BDropdownItem>Something else here...</BDropdownItem>
            </BDropdown>
            <BDropdown
              split
              text="Warning"
              variant="warning"
              class="me-1 mt-2 split-dropdown"
            >
              <BDropdownItem>Action</BDropdownItem>
              <BDropdownItem>Another action</BDropdownItem>
              <BDropdownItem>Something else here...</BDropdownItem>
            </BDropdown>
            <BDropdown
              split
              text="Danger"
              variant="danger"
              class="me-1 mt-2 split-dropdown"
            >
              <BDropdownItem>Action</BDropdownItem>
              <BDropdownItem>Another action</BDropdownItem>
              <BDropdownItem>Something else here...</BDropdownItem>
            </BDropdown>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol cols="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Sizing</BCardTitle>
            <p class="card-title-desc mb-3">
              Button dropdowns work with buttons of all sizes, including default
              and split dropdown buttons.
            </p>
            <div>
              <!-- Large button groups (default and split) -->
              <BDropdown variant="primary" size="lg" class="me-1 mt-2">
                <template v-slot:button-content>
                  Large button
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
              </BDropdown>
              <BDropdown
                split
                text="Large button"
                size="lg"
                variant="light"
                class="me-1 mt-2 split-dropdown"
              >
                <BDropdownItem>Action</BDropdownItem>
                <BDropdownItem>Another action</BDropdownItem>
                <BDropdownItem>Something else here...</BDropdownItem>
              </BDropdown>
              <BDropdown variant="primary" size="sm" class="me-1 mt-2">
                <template v-slot:button-content>
                  Small button
                  <i class="mdi mdi-chevron-down"></i>
                </template>
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
              </BDropdown>
              <BDropdown
                split
                text="Small button"
                size="sm"
                variant="light"
                class="me-1 mt-2 split-dropdown"
              >
                <BDropdownItem>Action</BDropdownItem>
                <BDropdownItem>Another action</BDropdownItem>
                <BDropdownItem>Something else here...</BDropdownItem>
              </BDropdown>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <!-- end col -->
    </BRow>

    <BRow>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Drop variation</BCardTitle>
            <p class="card-title-desc mb-3">
              Trigger dropdown menus at the right of the elements by adding
              <code>dropleft</code> and <code>dropright</code> to the parent
              element.
            </p>

            <div class="dropdown mt-1">
              <BDropdown dropend variant="success" class="me-1 mt-2">
                <template v-slot:button-content>
                  Drop-right
                  <i class="mdi mdi-chevron-right"></i>
                </template>
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
              </BDropdown>

              <BDropdown dropstart variant="info" class="me-1 mt-2">
                <template v-slot:button-content>
                  <i class="mdi mdi-chevron-left"></i>
                  Drop-left
                </template>
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
              </BDropdown>

              <BDropdown dropup variant="light" class="me-1 mt-2">
                <template v-slot:button-content>
                  Dropup
                  <i class="mdi mdi-chevron-up"></i>
                </template>
                <BDropdownItemButton>Action</BDropdownItemButton>
                <BDropdownItemButton>Another action</BDropdownItemButton>
                <BDropdownItemButton>Something else here</BDropdownItemButton>
              </BDropdown>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Menu alignment</BCardTitle>
            <p class="card-title-desc">
              Add
              <code class="highlighter-rouge">right</code>
              to a
              <code class="highlighter-rouge">dropdown</code> to right align the
              dropdown menu.
            </p>

            <BDropdown end variant="secondary">
              <template v-slot:button-content>
                Menu is right-aligned
                <i class="mdi mdi-chevron-down"></i>
              </template>

              <BDropdownItem>Action</BDropdownItem>
              <BDropdownItem>Another action</BDropdownItem>
              <BDropdownItem>Something else here</BDropdownItem>
            </BDropdown>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
  </Layout>
</template>

<style lang="scss">
.split-dropdown {
  .dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.5em;
    vertical-align: 0.25em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }
}
</style>
