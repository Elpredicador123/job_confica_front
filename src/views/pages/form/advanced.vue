<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

import Multiselect from "@vueform/multiselect";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import NumberInputSpinner from "@/components/custom/NumberInputSpinner.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
/**
 * Advanced-form component
 */
export default {
  components: {
    Layout,
    PageHeader,
    Multiselect,
    flatPickr,
    VueDatePicker,
    NumberInputSpinner
  },
  data() {
    return {
      title: "Form Advanced",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Form Advanced",
          active: true
        }
      ],
      enabled: true,
      enabled1: true,
      enabled2: true,
      enabled3: true,
      enabled4: true,
      enabled5: true,
      small: true,
      small1: true,
      small2: true,
      small3: true,
      danger: false,
      info: false,
      success: false,
      primary: false,
      secondary: false,
      customColor: false,
      customColor1: false,
      customColor2: false,
      customColor3: false,
      value: null,
      value1: null,
      options: [
        "Alaska",
        "Hawaii",
        "California",
        "Nevada",
        "Oregon",
        "Washington",
        "Arizona",
        "Colorado",
        "Idaho",
        "Montana",
        "Nebraska",
        "New Mexico",
        "North Dakota",
        "Utah",
        "Wyoming",
        "Alabama",
        "Arkansas",
        "Illinois",
        "Iowa"
      ],
      maxlen: "",
      data: "",
      option: "",
      textarea: "",
      defaultNull: null,
      defaultspinval: 1,
      flatpickerSimple: new Date(),
      config: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "Y-m-d"
      },
      datetimepicker: new Date(),
      datetimeconfig: {
        dateFormat: "Y-m-dTH:i"
      },
      humanfriendlydate: new Date(),
      humanFriendlyOption: {
        altInput: true,
        convertModelValue: true
      },
      disabledOption: {
        onReady: function () {
          this.jumpToDate("2025-01");
        },
        disable: [
          "2025-01-30",
          "2025-02-21",
          "2025-03-08",
          new Date(2025, 4, 9)
        ],
        dateFormat: "Y-m-d",
        defaultDate: new Date()
      },
      disabledate: new Date(),
      multipleOption: {
        mode: "multiple"
      },
      multipledate: new Date(),
      modeOption: {
        mode: "range"
      },
      modedate: new Date(),
      timepickerOption: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i"
      },
      timepicker: new Date(),
      postFixVal: 2.5,
      customStepVal: 4,
      customVal: -2,

      // Date picker models
      dPDefaultDate: null,
      dPDateRange: [],
      dPMonth: null,
      dPYear: null,
      dpTime: null
    };
  },
  computed: {
    isDarkMode() {
      return this.$store?.state?.layout?.mode === "dark" || false;
    }
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Select2</BCardTitle>
            <p class="card-title-desc">
              A mobile and touch friendly input spinner component for Bootstrap
            </p>
            <div class="col-sm-8">
              <label>Single Select</label>
              <Multiselect
                v-model="value"
                :options="options"
                class="form-control p-0"
                placeholder="Select option"
              />

              <label class="mt-3">Multiple Select</label>
              <Multiselect
                v-model="value1"
                :options="options"
                mode="tags"
                :close-on-select="false"
                :searchable="true"
                :create-option="true"
                class="form-control p-0"
                placeholder="Select option"
              />
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Css Switch</BCardTitle>
            <p>Here are a few types of switches.</p>
            <div class="d-flex">
              <BFormGroup class="form-radio-secondary">
                <BFormCheckbox
                  v-model="enabled"
                  switch
                  variant="secondary"
                  size="lg"
                >
                </BFormCheckbox>
              </BFormGroup>

              <BFormGroup class="form-radio-warning">
                <BFormCheckbox
                  v-model="enabled1"
                  switch
                  variant="warning"
                  size="lg"
                >
                </BFormCheckbox>
              </BFormGroup>

              <BFormGroup class="form-radio-danger">
                <BFormCheckbox
                  v-model="enabled2"
                  switch
                  variant="danger"
                  size="lg"
                >
                </BFormCheckbox>
              </BFormGroup>
              <BFormGroup class="form-radio-primary">
                <BFormCheckbox
                  v-model="enabled3"
                  switch
                  variant="primary"
                  size="lg"
                >
                </BFormCheckbox>
              </BFormGroup>
              <BFormGroup class="form-radio-success">
                <BFormCheckbox
                  v-model="enabled4"
                  switch
                  variant="success"
                  size="lg"
                >
                </BFormCheckbox>
              </BFormGroup>
              <BFormGroup class="form-radio-info">
                <BFormCheckbox
                  v-model="enabled5"
                  switch
                  variant="info"
                  size="lg"
                >
                </BFormCheckbox>
              </BFormGroup>
            </div>

            <h5 class="mt-4 font-size-14 mb-2">Small switch</h5>

            <div class="d-flex">
              <BFormGroup class="form-radio-secondary">
                <BFormCheckbox
                  v-model="small"
                  switch
                  variant="secondary"
                  size="sm"
                >
                </BFormCheckbox>
              </BFormGroup>

              <BFormGroup class="form-radio-warning">
                <BFormCheckbox
                  v-model="small1"
                  switch
                  variant="warning"
                  size="sm"
                >
                </BFormCheckbox>
              </BFormGroup>

              <BFormGroup class="form-radio-danger">
                <BFormCheckbox
                  v-model="small2"
                  switch
                  variant="danger"
                  size="sm"
                >
                </BFormCheckbox>
              </BFormGroup>

              <BFormGroup class="form-radio-success">
                <BFormCheckbox
                  v-model="small3"
                  switch
                  variant="success"
                  size="sm"
                >
                </BFormCheckbox>
              </BFormGroup>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Date Picker</BCardTitle>
            <p class="card-title-desc">Examples of bootstrap datepicker.</p>

            <div class="vuePicDatePicker">
              <div class="form-group mb-3">
                <label>Default Date Picker</label>
                <br />
                <VueDatePicker
                  v-model="dPDefaultDate"
                  :dark="isDarkMode"
                  model-type="dd/MM/yyyy"
                />
              </div>

              <div class="form-group mb-3">
                <label>Date Range</label>
                <br />
                <VueDatePicker
                  v-model="dPDateRange"
                  :dark="isDarkMode"
                  range
                  model-type="dd/MM/yyyy"
                />
              </div>

              <div class="form-group mb-3">
                <label>Month View</label>
                <br />

                <VueDatePicker
                  v-model="dPMonth"
                  :dark="isDarkMode"
                  month-picker
                />
              </div>

              <div class="form-group mb-3">
                <label>Year View</label>
                <br />
                <VueDatePicker
                  v-model="dPYear"
                  :dark="isDarkMode"
                  year-picker
                />
              </div>

              <div class="form-group mb-3">
                <label>Time View</label>
                <br />
                <VueDatePicker
                  v-model="dpTime"
                  :dark="isDarkMode"
                  time-picker
                />
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Bootstrap TouchSpin</BCardTitle>
            <p class="card-title-desc">
              A mobile and touch friendly input spinner component for Bootstrap
            </p>
            <div class="form-group">
              <label>Using data attributes</label>
              <NumberInputSpinner
                :min="0"
                :max="10"
                isBlock
                v-model="defaultspinval"
                @input="defaultspinval = $event"
              />
            </div>

            <div class="form-group">
              <label class="mt-3">Example with postfix</label>
              <NumberInputSpinner
                :min="0.5"
                :max="100.5"
                :step="0.5"
                isBlock
                v-model="postFixVal"
                @input="postFixVal = $event"
              />
            </div>
            <div class="form-group">
              <label class="mt-3">Init with empty value:</label>
              <NumberInputSpinner
                :min="1"
                :max="100"
                :step="1"
                isBlock
                v-model="defaultNull"
                @input="defaultNull = $event"
              />
            </div>
            <div class="form-group">
              <label class="mt-3">Custom step:</label>
              <NumberInputSpinner
                :min="1"
                :max="100"
                :step="2"
                isBlock
                v-model="customStepVal"
                @input="customStepVal = $event"
              />
            </div>
            <div class="form-group">
              <label class="mt-3">Custom Value:</label>
              <NumberInputSpinner
                :min="-90"
                :max="90"
                isBlock
                v-model="customVal"
                @input="customVal = $event"
              />
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Bootstrap MaxLength</BCardTitle>
            <p class="card-title-desc">
              Uses the HTML5 attribute "maxlength" to work.
            </p>

            <label class="mb-1 fw-medium">Default usage</label>
            <p class="text-muted font-13">
              The badge will show up by default when the remaining chars are 10
              or less:
            </p>
            <input
              v-model="maxlen"
              type="text"
              class="form-control"
              :maxlength="10"
            />
            <div v-if="maxlen" class="text-center">
              <p
                class="badge position-absolute"
                :class="{
                  'badge-success': maxlen.length !== 10,
                  'badge-danger': maxlen.length === 10
                }"
              >
                {{ maxlen.length }} / 10
              </p>
            </div>

            <div>
              <label class="mb-1 mt-3 fw-medium">Threshold value</label>
              <p class="text-muted font-13">
                Do you want the badge to show up when there are 20 chars or
                less? Use the
                <code>threshold</code>
                option:
              </p>
              <input
                v-model="data"
                type="text"
                :maxlength="25"
                class="form-control"
              />
              <div class="text-center">
                <p
                  v-if="data"
                  class="badge position-absolute"
                  :class="{
                    'badge-success': data.length !== 25,
                    'badge-danger': data.length === 25
                  }"
                >
                  {{ data.length }} / 25
                </p>
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 fw-medium">All the options</label>
              <p class="text-muted font-13">
                Please note: if the
                <code>alwaysShow</code> option is enabled, the
                <code>threshold</code> option is ignored.
              </p>
              <input
                v-model="option"
                type="text"
                class="form-control"
                :maxlength="25"
              />
              <div class="text-center">
                <p
                  v-if="option"
                  class="badge position-absolute"
                  :class="{
                    'badge-success': option.length !== 25,
                    'badge-danger': option.length === 25
                  }"
                >
                  You typed
                  {{ option.length }} out of 25 chars available.
                </p>
              </div>
            </div>

            <div>
              <label class="mb-1 mt-3 fw-medium">Textareas</label>
              <p class="text-muted font-13">
                Bootstrap maxlength supports textarea as well as inputs. Even on
                old IE.
              </p>
              <textarea
                v-model="textarea"
                class="form-control"
                :maxlength="225"
                rows="3"
                placeholder="This textarea has a limit of 225 chars."
              ></textarea>
              <div class="text-center">
                <p
                  v-if="textarea"
                  class="badge position-absolute"
                  :class="{
                    'badge-success': textarea.length !== 225,
                    'badge-danger': textarea.length === 225
                  }"
                >
                  {{ textarea.length }} / 225
                </p>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Flatpickr Datepicker</BCardTitle>
            <p class="card-title-desc">
              Flatpickr is a lightweight and powerful datetime picker.
            </p>
            <div class="mb-3">
              <label class="form-label">Basic</label>
              <flat-pickr
                v-model="flatpickerSimple"
                :config="config"
                class="form-control flatpickr-input"
                name="date"
              />
            </div>

            <div class="mb-3">
              <label class="form-label">DateTime</label>
              <flat-pickr
                v-model="datetimepicker"
                :config="datetimeconfig"
                class="form-control"
                name="date"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Human-friendly Dates</label>
              <flat-pickr
                class="form-control flatpickr-input"
                v-model="humanfriendlydate"
                :config="humanFriendlyOption"
              ></flat-pickr>
            </div>

            <div class="mb-3">
              <label class="form-label">Disabling Dates</label>
              <flat-pickr
                class="form-control flatpickr-input"
                v-model="disabledate"
                :config="disabledOption"
              ></flat-pickr>
            </div>

            <div class="mb-3">
              <label class="form-label">Selecting multiple dates</label>
              <flat-pickr
                class="form-control flatpickr-input"
                v-model="multipledate"
                :config="multipleOption"
              ></flat-pickr>
            </div>
            <div class="mb-3">
              <label class="form-label">Range</label>
              <flat-pickr
                class="form-control flatpickr-input"
                v-model="modedate"
                :config="modeOption"
              ></flat-pickr>
            </div>

            <div class="mb-3">
              <label class="form-label">Timepicker</label>
              <flat-pickr
                class="form-control flatpickr-input"
                v-model="timepicker"
                :config="timepickerOption"
              ></flat-pickr>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
