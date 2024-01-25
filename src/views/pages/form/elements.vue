<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Elements component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Basic Elements",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Basic Elements",
          active: true
        }
      ],
      exManualSelected: null,
      checked: true,
      smchecked: true,
      lgchecked: true,
      selectedToogle: "A",
      selectedDefault: "a",
      rightcheck: "accepted",
      status: "accepted",
      textInput: "Artisanal kale",
      searchInput: "How do I shoot web",
      emailInput: "bootstrap@example.com",
      urlInput: "https://getbootstrap.com",
      telInput: "1-(555)-555-5555",
      passwordInput: "password",
      numberInput: 42,
      dateNTimeInput: "2019-08-19T13:45:00",
      dateInput: "2019-08-19",
      monthInput: "2019-08",
      weekInput: "2019-W33",
      timeInput: "13:45:00",
      colorInput: "#556ee6"
    };
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
            <BCardTitle>Textual inputs</BCardTitle>
            <p class="card-title-desc">
              Here are examples of
              <code>.form-control</code> applied to each textual HTML5
              <code>&lt;input&gt;</code>
              <code>type</code>.
            </p>

            <BRow>
              <BCol cols="12">
                <form class="form-horizontal" role="form">
                  <BFormGroup
                    class="mb-3"
                    id="example text"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Text"
                    label-for="text"
                  >
                    <BFormInput for="text" v-model="textInput"></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-search"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Search"
                    label-for="search"
                    class="mb-3"
                  >
                    <BFormInput
                      id="search"
                      v-model="searchInput"
                      type="search"
                      name="search"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-email"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Email"
                    label-for="email"
                    class="mb-3"
                  >
                    <BFormInput id="email" v-model="emailInput"></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-url"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="URL"
                    label-for="url"
                    class="mb-3"
                  >
                    <BFormInput
                      id="url"
                      v-model="urlInput"
                      type="url"
                      name="url"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-tel"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Telephone"
                    label-for="tele"
                    class="mb-3"
                  >
                    <BFormInput
                      id="tele"
                      v-model="telInput"
                      type="tel"
                      name="tel"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-password"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Password"
                    label-for="pwd"
                    class="mb-3"
                  >
                    <BFormInput
                      id="pwd"
                      type="password"
                      v-model="passwordInput"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-number"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Number"
                    label-for="number"
                    class="mb-3"
                  >
                    <BFormInput
                      id="number"
                      v-model="numberInput"
                      type="number"
                      name="number"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-date-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date and time"
                    label-for="date-time"
                    class="mb-3"
                  >
                    <BFormInput
                      id="date-time"
                      v-model="dateNTimeInput"
                      type="datetime-local"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-date"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date"
                    label-for="date"
                    class="mb-3"
                  >
                    <BFormInput
                      id="date"
                      v-model="dateInput"
                      type="date"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-month"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Month"
                    label-for="month"
                    class="mb-3"
                  >
                    <BFormInput
                      id="month"
                      v-model="monthInput"
                      type="month"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-week"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Week"
                    label-for="week"
                    class="mb-3"
                  >
                    <BFormInput
                      id="week"
                      v-model="weekInput"
                      type="week"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Time"
                    label-for="time"
                    class="mb-3"
                  >
                    <BFormInput
                      id="time"
                      v-model="timeInput"
                      type="time"
                    ></BFormInput>
                  </BFormGroup>

                  <BFormGroup
                    id="example-color"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Color"
                    label-for="color"
                    class="mb-3"
                  >
                    <BFormInput
                      id="color"
                      type="color"
                      name="color"
                      v-model="colorInput"
                      class="form-control form-control-color"
                    ></BFormInput>
                  </BFormGroup>

                  <BRow class="mb-3">
                    <label class="col-md-2 col-form-label">Select</label>
                    <BCol md="10">
                      <select class="form-select">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </BCol>
                  </BRow>

                  <BRow>
                    <label for="exampleDataList" class="col-md-2 col-form-label"
                      >Datalists</label
                    >
                    <BCol md="10">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                      </datalist>
                    </BCol>
                  </BRow>
                </form>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Form layouts</BCardTitle>

            <BRow>
              <BCol lg="5">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    groups
                  </h5>
                  <form>
                    <BFormGroup
                      label="First name"
                      label-for="formrow-firstname-input"
                      class="mb-3"
                    >
                      <BFormInput
                        type="text"
                        id="formrow-firstname-input"
                        placeholder="Enter your full name"
                      >
                      </BFormInput>
                    </BFormGroup>

                    <BRow>
                      <BCol md="6">
                        <BFormGroup
                          label="Email"
                          label-for="formrow-email-input"
                          class="mb-3"
                        >
                          <BFormInput
                            id="formrow-email-input"
                            type="email"
                            placeholder="Enter your email address"
                          >
                          </BFormInput>
                        </BFormGroup>
                      </BCol>
                      <BCol md="6">
                        <BFormGroup
                          label="Password"
                          label-for="formrow-password-input"
                          class="mb-3"
                        >
                          <BFormInput
                            id="formrow-password-input"
                            type="password"
                            placeholder="Enter your password"
                          >
                          </BFormInput>
                        </BFormGroup>
                      </BCol>
                    </BRow>
                    <div class="form-group">
                      <div class="form-check">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="formrow-customCheck"
                        />
                        <label
                          class="form-check-label"
                          for="formrow-customCheck"
                          >Check me out</label
                        >
                      </div>
                    </div>
                    <div class="mt-4">
                      <BButton type="submit" variant="primary">Submit</BButton>
                    </div>
                  </form>
                </div>
              </BCol>
              <BCol lg="6" class="ms-lg-auto">
                <div class="mt-5 mt-lg-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    Horizontal form
                  </h5>

                  <form>
                    <BRow class="form-group mb-4">
                      <label
                        for="horizontal-firstname-input"
                        class="col-sm-3 col-form-label"
                        >First name</label
                      >
                      <BCol sm="9">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your full name"
                          id="horizontal-firstname-input"
                        />
                      </BCol>
                    </BRow>
                    <BRow class="form-group mb-4">
                      <label
                        for="horizontal-email-input"
                        class="col-sm-3 col-form-label"
                        >Email</label
                      >
                      <BCol sm="9">
                        <input
                          type="email"
                          class="form-control"
                          id="horizontal-email-input"
                          placeholder="Enter your email address"
                        />
                      </BCol>
                    </BRow>
                    <BRow class="form-group mb-4">
                      <label
                        for="horizontal-password-input"
                        class="col-sm-3 col-form-label"
                        >Password</label
                      >
                      <BCol sm="9">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Enter your password"
                          id="horizontal-password-input"
                        />
                      </BCol>
                    </BRow>

                    <BRow class="justify-content-end">
                      <BCol sm="9">
                        <div class="form-check mb-4">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="horizontal-customCheck"
                          />
                          <label
                            class="form-check-label"
                            for="horizontal-customCheck"
                            >Remember me</label
                          >
                        </div>

                        <div>
                          <button type="submit" class="btn btn-primary w-md">
                            Submit
                          </button>
                        </div>
                      </BCol>
                    </BRow>
                  </form>
                </div>
              </BCol>
            </BRow>

            <div class="mt-4">
              <h5 class="font-size-14 mb-4">
                <i class="mdi mdi-arrow-right text-primary me-1"></i> Inline
                forms layout
              </h5>
              <form class="row row-cols-lg-auto gx-3 gy-2 align-items-center">
                <BCol cols="12">
                  <label class="visually-hidden" for="specificSizeInputName"
                    >Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="specificSizeInputName"
                    placeholder="Enter Name"
                  />
                </BCol>
                <BCol cols="12">
                  <label
                    class="visually-hidden"
                    for="specificSizeInputGroupUsername"
                    >Username</label
                  >
                  <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input
                      type="text"
                      class="form-control"
                      id="specificSizeInputGroupUsername"
                      placeholder="Username"
                    />
                  </div>
                </BCol>
                <BCol cols="12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="autoSizingCheck2"
                    />
                    <label class="form-check-label" for="autoSizingCheck2">
                      Remember me
                    </label>
                  </div>
                </BCol>
                <BCol cols="12">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </BCol>
              </form>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body class="mb-5">
          <BCardBody>
            <BCardTitle>Sizing</BCardTitle>
            <p class="card-title-desc">
              Set heights using size like
              <code>lg</code> and <code>sm</code>.
            </p>

            <form>
              <BRow>
                <BCol lg="6">
                  <div class="form-group">
                    <label for="default-input">Default input</label>
                    <BFormInput
                      id="default-input"
                      placeholder="Default input"
                    ></BFormInput>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="form-group mt-3">
                    <label for="form-sm-input">Form Small input</label>
                    <BFormInput
                      id="form-sm-input"
                      size="sm"
                      placeholder=".form-control-sm"
                    ></BFormInput>
                  </div>
                </BCol>

                <BCol lg="6">
                  <div class="form-group mt-3 mb-0">
                    <label for="form-lg-input">Form Large input</label>
                    <BFormInput
                      id="form-lg-input"
                      size="lg"
                      placeholder=".form-control-lg"
                    ></BFormInput>
                  </div>
                </BCol>
              </BRow>
            </form>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Checkboxes</BCardTitle>

            <BRow>
              <BCol md="5">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    Default Checkboxes
                  </h5>
                  <BFormCheckbox
                    value="accepted"
                    unchecked-value="not_accepted"
                    class="mb-3 form-check-input"
                    checked
                    plain
                  >
                    <label class="ms-2 form-check-label">Form Checkbox</label>
                  </BFormCheckbox>

                  <BFormCheckbox
                    value="accepted"
                    unchecked-value="not_accepted"
                    v-model="rightcheck"
                    class="form-check-input"
                    plain
                    ><label class="ms-2 form-check-label"
                      >Form Checkbox checked</label
                    ></BFormCheckbox
                  >
                </div>
              </BCol>
              <BCol md="6" class="ms-auto">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    <label>Form Checkboxes Right</label>
                  </h5>
                  <div class="form-check form-check-right mb-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="formCheckRight1"
                    />
                    <label class="form-check-label" for="formCheckRight1">
                      Form Checkbox Right
                    </label>
                  </div>

                  <div class="form-check form-check-right">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="formCheckRight2"
                      checked=""
                    />
                    <label class="form-check-label" for="formCheckRight2">
                      Form Checkbox Right checked
                    </label>
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol cols="xl-6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Radios</BCardTitle>

            <BRow>
              <BCol md="5">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>Default
                    Radios
                  </h5>
                  <div class="form-check">
                    <BFormRadio
                      v-model="selectedDefault"
                      class="mb-3 form-check-input"
                      value="a"
                      plain
                      ><label class="form-check-label"
                        >Form Radio</label
                      ></BFormRadio
                    >
                    <BFormRadio
                      v-model="selectedDefault"
                      class="custom-radio form-check-input mb-3"
                      value="A"
                      plain
                      ><label class="form-check-label"
                        >Form Radio checked</label
                      ></BFormRadio
                    >
                  </div>
                </div>
              </BCol>

              <BCol md="6" class="ms-auto">
                <div class="form-check-right">
                  <h5 class="font-size-14 mb-3">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>Custom
                    Radios
                  </h5>
                  <div class="form-check form-check-right">
                    <BFormRadio
                      v-model="selectedToogle"
                      class="form-check-input"
                      value="A"
                      plain
                    >
                      Form Radio Right</BFormRadio
                    >
                  </div>
                  <BFormRadio
                    v-model="selectedToogle"
                    class="form-check-input"
                    value="B"
                    plain
                  >
                    Form Radio Right checked</BFormRadio
                  >
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Switches</BCardTitle>
            <p class="card-title-desc">
              A switch has the markup of a custom checkbox but uses the
              <code>.custom-switch</code> class to render a toggle switch.
              Switches also support the <code>disabled</code> attribute.
            </p>

            <BRow>
              <BCol md="6">
                <div>
                  <h5 class="font-size-14 mb-3">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>Switch
                    examples
                  </h5>
                  <div class="form-check form-switch mb-3" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitch1"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitch1"
                      >Toggle this switch element</label
                    >
                  </div>
                  <div class="form-check form-switch" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      disabled=""
                      id="customSwitch2"
                    />
                    <label class="form-check-label" for="customSwitch2"
                      >Disabled switch element</label
                    >
                  </div>
                </div>
              </BCol>
              <BCol md="6">
                <div class="mt-4 mt-md-0">
                  <h5 class="font-size-14 mb-3">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>Switch
                    sizes
                  </h5>

                  <div class="form-check form-switch mb-3" dir="ltr">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizesm"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitchsizesm"
                      >Small Size Switch</label
                    >
                  </div>

                  <div
                    class="form-check form-switch form-switch-md mb-3"
                    dir="ltr"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizemd"
                    />
                    <label class="form-check-label" for="customSwitchsizemd"
                      >Medium Size Switch</label
                    >
                  </div>

                  <div
                    class="form-check form-switch form-switch-lg mb-3"
                    dir="ltr"
                  >
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="customSwitchsizelg"
                      checked=""
                    />
                    <label class="form-check-label" for="customSwitchsizelg"
                      >Large Size Switch</label
                    >
                  </div>
                </div>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
