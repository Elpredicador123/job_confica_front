<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Buttons component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Buttons",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Buttons",
          active: true
        }
      ],
      selected: "radio1",
      options: [
        {
          text: "Radio 1",
          value: "radio1"
        },
        {
          text: "Radio 2",
          value: "radio2"
        },
        {
          text: "Radio 3",
          value: "radio3"
        }
      ],
      selectedCheck: ["checked-1"], // Must be an array reference!
      optionsCheck: [
        {
          text: "Checkbox 1",
          value: "checked-1"
        },
        {
          text: "Checkbox 2",
          value: "checked-2"
        },
        {
          text: "Checkbox 3",
          value: "checked-3"
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
      <BCol cols="xl-12">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Default buttons</h4>
            <p class="card-title-desc">
              Bootstrap includes six predefined button styles, each serving its
              own semantic purpose.
            </p>
            <div class="button-items d-flex flex-wrap gap-3">
              <BButton variant="primary">Primary</BButton>
              <BButton variant="light">Light</BButton>
              <BButton variant="success">Success</BButton>
              <BButton variant="info">Info</BButton>
              <BButton variant="warning">Warning</BButton>
              <BButton variant="danger">Danger</BButton>
              <BButton variant="dark">Dark</BButton>
              <BButton variant="link">Link</BButton>
              <BButton variant="secondary">Secondary</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Outline buttons</h4>
            <p class="card-title-desc">
              Replace the default modifier classes with the
              <code class="highlighter-rouge">outline-*</code> ones to remove
              all background images and colors on any button.
            </p>
            <div class="button-items d-flex flex-wrap gap-2">
              <BButton variant="outline-primary">Primary</BButton>
              <BButton variant="outline-light">Light</BButton>
              <BButton variant="outline-success">Success</BButton>
              <BButton variant="outline-info">Info</BButton>
              <BButton variant="outline-warning">Warning</BButton>
              <BButton variant="outline-danger">Danger</BButton>
              <BButton variant="outline-dark">Dark</BButton>
              <BButton variant="outline-secondary">Secondary</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Rounded buttons</h4>
            <p class="card-title-desc">
              Use
              <code>pill</code> for button round border.
            </p>
            <div class="button-items d-flex flex-wrap gap-2">
              <BButton pill variant="primary">Primary</BButton>
              <BButton pill variant="light">Light</BButton>
              <BButton pill variant="success">Success</BButton>
              <BButton pill variant="info">Info</BButton>
              <BButton pill variant="warning">Warning</BButton>
              <BButton pill variant="danger">Danger</BButton>
              <BButton pill variant="dark">Dark</BButton>
              <BButton pill variant="link">Link</BButton>
              <BButton pill variant="secondary">Secondary</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Soft background buttons</h4>
            <p class="card-title-desc">
              Add
              <code>.btn-soft-*</code> class with <code>.btn-*</code> color
              button for a Soft background buttons.
            </p>
            <div class="button-items d-flex flex-wrap gap-2">
              <BButton variant="primary" class="btn-soft-primary"
                >Primary</BButton
              >
              <BButton variant="success" class="btn-soft-success"
                >Success</BButton
              >
              <BButton variant="info" class="btn-soft-info">Info</BButton>
              <BButton variant="warning" class="btn-soft-warning"
                >Warning</BButton
              >
              <BButton variant="danger" class="btn-soft-danger">Danger</BButton>
              <BButton variant="dark" class="btn-soft-dark">Dark</BButton>
              <BButton variant="secondary" class="btn-soft-secondary"
                >Secondary</BButton
              >
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Buttons with icon</h4>
            <p class="card-title-desc">Add icon in button.</p>

            <div class="button-items d-flex flex-wrap gap-2">
              <BButton variant="primary">
                Primary
                <i class="uil uil-arrow-right ms-2"></i>
              </BButton>
              <BButton variant="success">
                <i class="uil uil-check me-2"></i>
                Success
              </BButton>
              <BButton variant="warning">
                <i class="uil uil-exclamation-triangle me-2"></i>
                Warning
              </BButton>
              <BButton variant="danger">
                <i class="uil uil-exclamation-octagon me-2"></i>
                Danger
              </BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Buttons Sizes</h4>
            <p class="card-title-desc">
              Add
              <code>lg</code> or <code>sm</code> for additional sizes.
            </p>

            <div class="button-items d-flex flex-wrap gap-2 align-items-center">
              <BButton size="lg" variant="primary">Large button</BButton>
              <BButton size="lg" variant="light">Large button</BButton>
              <BButton size="sm" variant="primary">Small button</BButton>
              <BButton size="sm" variant="light">Small button</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Buttons width</h4>
            <p class="card-title-desc">
              Add
              <code>.w-xs</code>, <code>.w-sm</code>, <code>.w-md</code> and
              <code>.w-lg</code> class for additional buttons width.
            </p>

            <div class="button-items d-flex flex-wrap gap-2">
              <BButton variant="primary" class="w-xs">Xs</BButton>
              <BButton variant="danger" class="w-sm ms-1">Small</BButton>
              <BButton variant="warning" class="w-md ms-1">Medium</BButton>
              <BButton variant="success" class="w-lg">Large</BButton>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Button tags</h4>
            <p class="card-title-desc">
              The
              <code class="highlighter-rouge">.btn</code>
              classes are designed to be used with the
              <code class="highlighter-rouge">&lt;button&gt;</code> element.
              However, you can also use these classes on
              <code class="highlighter-rouge">&lt;a&gt;</code> or
              <code class="highlighter-rouge">&lt;input&gt;</code> elements
              (though some browsers may apply a slightly different rendering).
            </p>

            <div class="button-items d-flex flex-wrap gap-2">
              <a
                class="btn btn-primary"
                href="javascript: void(0);"
                role="button"
                >Link</a
              >
              <BButton class="btn btn-success" type="submit">Button</BButton>
              <input class="btn btn-info" type="button" value="Input" />
              <input class="btn btn-danger" type="submit" value="Submit" />
              <input class="btn btn-warning" type="reset" value="Reset" />
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Toggle states</h4>
            <p class="card-title-desc">
              Add
              <code class="highlighter-rouge">data-toggle="button"</code>
              to toggle a button’s
              <code class="highlighter-rouge">active</code>
              state. If you’re pre-toggling a button, you must manually add the
              <code class="highlighter-rouge">.active</code> class
              <strong>and</strong>
              <code class="highlighter-rouge">aria-pressed="true"</code> to the
              <code class="highlighter-rouge">&lt;button&gt;</code>.
            </p>

            <div class="button-items">
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="button"
                aria-pressed="false"
              >
                Single toggle
              </button>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Block Buttons</h4>
            <p class="card-title-desc">
              Create block level buttons—those that span the full width of a
              parent—by adding
              <code class="highlighter-rouge">.btn-block</code>.
            </p>

            <div class="d-grid gap-2">
              <BButton block variant="primary" size="lg"
                >Block Level Button</BButton
              >
              <BButton block variant="light" size="sm"
                >Block Level Button</BButton
              >
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Checkbox & Radio Buttons</h4>
            <p class="card-title-desc">
              Bootstrap’s
              <code class="highlighter-rouge">.button</code> styles can be
              applied to other elements, such as
              <code class="highlighter-rouge">&lt;label&gt;</code>s, to provide
              checkbox or radio style button toggling. Add
              <code class="highlighter-rouge">data-toggle="buttons"</code> to a
              <code class="highlighter-rouge">.btn-group</code> containing those
              modified buttons to enable toggling in their respective styles.
            </p>

            <BRow>
              <BCol cols="xl-6">
                <BFormCheckboxGroup
                  class="custom-check"
                  v-model="selectedCheck"
                  button-variant="primary"
                  :options="optionsCheck"
                  name="buttons-1"
                  buttons
                ></BFormCheckboxGroup>
              </BCol>
              <BCol cols="xl-6">
                <BFormRadioGroup
                  class="custom-check"
                  id="btn-radios-1"
                  button-variant="light"
                  v-model="selected"
                  :options="options"
                  buttons
                  name="radios-btn-default"
                ></BFormRadioGroup>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol cols="lg-6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Button Group</h4>
            <p class="card-title-desc">
              Wrap a series of buttons with
              <code class="highlighter-rouge">.btn</code> in
              <code class="highlighter-rouge">.btn-group</code>.
            </p>

            <BRow>
              <BCol md="6">
                <div class="d-flex flex-wrap gap-2">
                  <BButtonGroup>
                    <BButton variant="primary">Left</BButton>
                    <BButton variant="primary">Middle</BButton>
                    <BButton variant="primary">Right</BButton>
                  </BButtonGroup>

                  <BButtonGroup>
                    <BButton variant="outline-primary active">Left</BButton>
                    <BButton variant="outline-primary">Middle</BButton>
                    <BButton variant="outline-primary">Right</BButton>
                  </BButtonGroup>
                </div>
              </BCol>

              <BCol md="6">
                <div class="d-flex flex-wrap gap-3 mt-4 mt-md-0">
                  <BButtonGroup class="mt-4 mt-md-0">
                    <BButton variant="light">
                      <i class="bx bx-menu-alt-right"></i>
                    </BButton>
                    <BButton variant="light">
                      <i class="bx bx-menu"></i>
                    </BButton>
                    <BButton variant="light">
                      <i class="bx bx-menu-alt-left"></i>
                    </BButton>
                  </BButtonGroup>

                  <BButtonGroup class="mt-4 mt-md-0">
                    <BButton variant="outline-secondary">
                      <i class="bx bx-menu-alt-right"></i>
                    </BButton>
                    <BButton variant="outline-secondary">
                      <i class="bx bx-menu"></i>
                    </BButton>
                    <BButton variant="outline-secondary">
                      <i class="bx bx-menu-alt-left"></i>
                    </BButton>
                  </BButtonGroup>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Button Toolbar</h4>
            <p class="card-title-desc">
              Combine sets of button groups into button toolbars for more
              complex components. Use utility classes as needed to space out
              groups, buttons, and more.
            </p>

            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div class="btn-group me-2" role="group" aria-label="First group">
                <BButton type="button" variant="light">1</BButton>
                <BButton type="button" variant="light">2</BButton>
                <BButton type="button" variant="light">3</BButton>
                <BButton type="button" variant="light">4</BButton>
              </div>
              <div
                class="btn-group me-2"
                role="group"
                aria-label="Second group"
              >
                <BButton type="button" variant="light">5</BButton>
                <BButton type="button" variant="light">6</BButton>
                <BButton type="button" variant="light">7</BButton>
              </div>
              <div class="btn-group" role="group" aria-label="Third group">
                <BButton type="button" variant="light">8</BButton>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Button Group Sizing</h4>
            <p class="card-title-desc">
              Instead of applying button sizing classes to every button in a
              group, just add
              <code class="highlighter-rouge">.btn-group-*</code> to each
              <code class="highlighter-rouge">.btn-group</code>, including each
              one when nesting multiple groups.
            </p>

            <div class="d-flex flex-wrap gap-3 align-items-center">
              <div
                class="btn-group btn-group-lg"
                role="group"
                aria-label="Basic example"
              >
                <BButton type="button" variant="primary">Left</BButton>
                <BButton type="button" variant="primary">Middle</BButton>
                <BButton type="button" variant="primary">Right</BButton>
              </div>
              <div class="btn-group" role="group" aria-label="Basic example">
                <BButton type="button" variant="light">Left</BButton>
                <BButton type="button" variant="light">Middle</BButton>
                <BButton type="button" variant="light">Right</BButton>
              </div>
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <BButton type="button" variant="danger">Left</BButton>
                <BButton type="button" variant="danger">Middle</BButton>
                <BButton type="button" variant="danger">Right</BButton>
              </div>
            </div>

            <div class="d-flex flex-wrap gap-3 align-items-center mt-3">
              <div
                class="btn-group btn-group-lg"
                role="group"
                aria-label="Basic example"
              >
                <BButton type="button" variant="outline-primary">
                  Left
                </BButton>
                <BButton type="button" variant="outline-primary">
                  Middle
                </BButton>
                <BButton type="button" variant="outline-primary">
                  Right
                </BButton>
              </div>
              <div class="btn-group" role="group" aria-label="Basic example">
                <BButton type="button" variant="outline-secondary">
                  Left
                </BButton>
                <BButton type="button" variant="outline-secondary">
                  Middle
                </BButton>
                <BButton type="button" variant="outline-secondary">
                  Right
                </BButton>
              </div>
              <div
                class="btn-group btn-group-sm"
                role="group"
                aria-label="Basic example"
              >
                <BButton type="button" variant="outline-danger"> Left </BButton>
                <BButton type="button" variant="outline-danger">
                  Middle
                </BButton>
                <BButton type="button" variant="outline-danger">
                  Right
                </BButton>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <h4 class="card-title">Vertical variation</h4>
            <p class="card-title-desc">
              Make a set of buttons appear vertically stacked rather than
              horizontally. Split button dropdowns are not supported here.
            </p>
            <div class="d-flex flex-wrap gap-3 align-items-center">
              <BButtonGroup vertical>
                <BButton variant="light">Button</BButton>
                <BDropdown variant="light">
                  <template #button-content>
                    Dropdown
                    <i class="mdi mdi-chevron-down"></i>
                  </template>
                  <BDropdownItem href="#">Dropdown Link</BDropdownItem>
                  <BDropdownItem href="#">Dropdown Link</BDropdownItem>
                </BDropdown>
                <BButton variant="light">Button</BButton>
              </BButtonGroup>

              <div
                class="btn-group-vertical"
                role="group"
                aria-label="Vertical radio toggle button group"
              >
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio1"
                  autocomplete="off"
                  checked=""
                />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio1"
                  >Radio 1</label
                >
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio2"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio2"
                  >Radio 2</label
                >
                <input
                  type="radio"
                  class="btn-check"
                  name="vbtn-radio"
                  id="vbtn-radio3"
                  autocomplete="off"
                />
                <label class="btn btn-outline-danger mb-0" for="vbtn-radio3"
                  >Radio 3</label
                >
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <!-- end row -->
  </Layout>
</template>
