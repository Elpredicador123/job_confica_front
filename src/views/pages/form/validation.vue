<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  maxLength,
  minValue,
  maxValue,
  numeric,
  url,
  alphaNum,
  integer
} from "@vuelidate/validators";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Form validation component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      form: {
        fname: "Mark",
        lname: "Otto",
        city: "",
        state: "",
        zipcode: ""
      },
      tooltipform: {
        fname: "Make",
        lname: "Otto",
        username: "",
        city: "",
        state: ""
      },
      range: {
        minlen: "",
        maxlength: "",
        between: "",
        minval: "",
        maxval: "",
        rangeval: "",
        expr: ""
      },
      typeform: {
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        url: "",
        digit: "",
        number: "",
        alphanum: "",
        textarea: ""
      },
      submitted: false,
      submitform: false,
      submit: false,
      typesubmit: false
    };
  },
  validations: {
    form: {
      fname: {
        required
      },
      lname: {
        required
      },
      city: {
        required
      },
      state: {
        required
      },
      zipcode: {
        required
      },
      confirm: {
        required
      }
    },
    tooltipform: {
      fname: {
        required
      },
      lname: {
        required
      },
      username: {
        required
      },
      city: {
        required
      },
      state: {
        required
      }
    },
    range: {
      minlen: {
        required,
        minLength: minLength(6)
      },
      maxlength: {
        required,
        maxLength: maxLength(6)
      },
      between: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(10)
      },
      minval: {
        required,
        minValue: minValue(6),
        integer
      },
      maxval: {
        required,
        maxValue: maxValue(6),
        integer
      },
      rangeval: {
        required,
        minValue: minValue(6),
        maxValue: maxValue(100),
        integer
      },
      expr: {
        required
      }
    },
    typeform: {
      name: {
        required
      },
      password: {
        required,
        minLength: minLength(6)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      email: {
        required,
        email
      },
      url: {
        required,
        url
      },
      digit: {
        required,
        numeric
      },
      number: {
        required,
        numeric
      },
      alphanum: {
        required,
        alphaNum
      },
      textarea: {
        required
      }
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
    },

    tooltipForm() {
      this.submitform = true;
      this.v$.$touch();
    },

    /**
     * Range validation form submit
     */
    // eslint-disable-next-line no-unused-vars
    rangeform(e) {
      this.submit = true;
      // stop here if form is invalid
      this.v$.$touch();
    },
    /**
     * Validation type submit
     */
    // eslint-disable-next-line no-unused-vars
    typeForm(e) {
      this.typesubmit = true;
      // stop here if form is invalid
      this.v$.$touch();
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
            <BCardTitle>Bootstrap Validation - Normal</BCardTitle>
            <p class="card-title-desc">
              Provide valuable, actionable feedback to your users with HTML5
              form validation–available in all our supported browsers.
            </p>
            <form class="needs-validation" @submit.prevent="formSubmit">
              <BRow>
                <BCol md="6">
                  <div class="mb-3">
                    <label for="validationCustom01">First name</label>
                    <input
                      id="validationCustom01"
                      v-model="form.fname"
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      :class="{
                        'is-invalid': submitted && v$.form.fname.$error,
                        'is-valid': submitted && !v$.form.fname.$error
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.fname.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.fname.required.$invalid"
                        >This value is required.</span
                      >
                    </div>
                    <div v-else class="valid-feedback">It looks good</div>
                  </div>
                </BCol>
                <BCol md="6">
                  <div class="mb-3">
                    <label for="validationCustom02">Last name</label>
                    <input
                      id="validationCustom02"
                      v-model="form.lname"
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      :class="{
                        'is-invalid': submitted && v$.form.lname.$error,
                        'is-valid': submitted && !v$.form.lname.$error
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.lname.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.lname.required.$invalid"
                        >This value is required.</span
                      >
                    </div>
                    <div v-else class="valid-feedback">It looks good</div>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol md="4">
                  <div class="mb-3">
                    <label for="validationCustom03">City</label>
                    <input
                      id="validationCustom03"
                      v-model="form.city"
                      type="text"
                      class="form-control"
                      placeholder="City"
                      :class="{
                        'is-invalid': submitted && v$.form.city.$error,
                        'is-valid': submitted && !v$.form.city.$error
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.city.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.city.required.$invalid"
                        >This value is required.</span
                      >
                    </div>
                    <div v-else class="valid-feedback">It looks good</div>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mb-3">
                    <label for="validationCustom04">State</label>
                    <input
                      id="validationCustom04"
                      v-model="form.state"
                      type="text"
                      class="form-control"
                      placeholder="State"
                      :class="{
                        'is-invalid': submitted && v$.form.state.$error,
                        'is-valid': submitted && !v$.form.state.$error
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.state.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.state.required.$invalid"
                        >This value is required.</span
                      >
                    </div>
                    <div v-else class="valid-feedback">It looks good</div>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mb-3">
                    <label for="validationCustom05">Zip</label>
                    <input
                      id="validationCustom05"
                      v-model="form.zipcode"
                      type="text"
                      class="form-control"
                      placeholder="Zip"
                      :class="{
                        'is-invalid': submitted && v$.form.zipcode.$error,
                        'is-valid': submitted && !v$.form.zipcode.$error
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.zipcode.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.zipcode.required.$invalid"
                        >This value is required.</span
                      >
                    </div>
                    <div v-else class="valid-feedback">It looks good</div>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="12">
                  <div class="mb-3">
                    <div class="form-check">
                      <input
                        id="invalidCheck"
                        type="checkbox"
                        class="form-check-input"
                        :class="{
                          'is-invalid': submitted && v$.form.confirm.$error,
                          'is-valid': submitted && !v$.form.confirm.$error
                        }"
                      />
                      <label class="form-check-label" for="invalidCheck"
                        >Agree to terms and conditions</label
                      >
                      <div
                        v-if="submitted && v$.form.confirm.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="v$.form.confirm.required.$invalid"
                          >You must agree before submitting.</span
                        >
                      </div>
                      <div v-else class="valid-feedback">It looks good</div>
                    </div>
                  </div>
                </BCol>
              </BRow>
              <BButton variant="primary" type="submit">Submit form</BButton>
            </form>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Bootstrap Validation (Tooltips)</BCardTitle>
            <p class="card-title-desc">
              If your form layout allows it, you can swap the
              <code>.{valid|invalid}-feedback</code> classes for
              <code>.{valid|invalid}-tooltip</code> classes to display
              validation feedback in a styled tooltip.
            </p>
            <form class="needs-validation" @submit.prevent="tooltipForm">
              <BRow>
                <BCol md="4">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltip01">First name</label>
                    <input
                      id="validationTooltip01"
                      v-model="tooltipform.fname"
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      :class="{
                        'is-invalid': submitform && v$.tooltipform.fname.$error,
                        'is-valid': submitform && !v$.tooltipform.fname.$error
                      }"
                    />
                    <div
                      v-if="submitform && v$.tooltipform.fname.$error"
                      class="invalid-tooltip"
                    >
                      <span v-if="v$.tooltipform.fname.required.$invalid"
                        >Please provide valid First name.</span
                      >
                    </div>
                    <div v-else class="valid-tooltip">Looks good!</div>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltip02">Last name</label>
                    <input
                      id="validationTooltip02"
                      v-model="tooltipform.lname"
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      :class="{
                        'is-invalid': submitform && v$.tooltipform.lname.$error,
                        'is-valid': submitform && !v$.tooltipform.lname.$error
                      }"
                    />
                    <div
                      v-if="submitform && v$.tooltipform.lname.$error"
                      class="invalid-tooltip"
                    >
                      <span v-if="v$.tooltipform.lname.required.$invalid"
                        >Please provide valid Last name.</span
                      >
                    </div>
                    <div v-else class="valid-tooltip">Looks good!</div>
                  </div>
                </BCol>
                <BCol md="4">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltipUsername">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span
                          id="validationTooltipUsernamePrepend"
                          class="input-group-text"
                          >@</span
                        >
                      </div>
                      <input
                        id="validationTooltipUsername"
                        v-model="tooltipform.username"
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-describedby="validationTooltipUsernamePrepend"
                        :class="{
                          'is-invalid':
                            submitform && v$.tooltipform.username.$error,
                          'is-valid':
                            submitform && !v$.tooltipform.username.$error
                        }"
                      />
                      <div
                        v-if="submitform && v$.tooltipform.username.$error"
                        class="invalid-tooltip"
                      >
                        <span v-if="v$.tooltipform.username.required.$invalid"
                          >Please choose a unique and valid username.</span
                        >
                      </div>
                      <div v-else class="valid-tooltip">Looks good.</div>
                    </div>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol md="6">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltip03">City</label>
                    <input
                      id="validationTooltip03"
                      v-model="tooltipform.city"
                      type="text"
                      class="form-control"
                      placeholder="City"
                      :class="{
                        'is-invalid': submitform && v$.tooltipform.city.$error,
                        'is-valid': submitform && !v$.tooltipform.city.$error
                      }"
                    />
                    <div
                      v-if="submitform && v$.tooltipform.city.$error"
                      class="invalid-tooltip"
                    >
                      <span v-if="v$.tooltipform.city.required.$invalid"
                        >Please provide a valid city.</span
                      >
                    </div>
                    <div v-else class="valid-tooltip">Looks good!</div>
                  </div>
                </BCol>
                <BCol md="6">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltip04">State</label>
                    <input
                      id="validationTooltip04"
                      v-model="tooltipform.state"
                      type="text"
                      class="form-control"
                      placeholder="State"
                      :class="{
                        'is-invalid': submitform && v$.tooltipform.state.$error,
                        'is-valid': submitform && !v$.tooltipform.state.$error
                      }"
                    />
                    <div
                      v-if="submitform && v$.tooltipform.state.$error"
                      class="invalid-tooltip"
                    >
                      <span v-if="v$.tooltipform.state.required.$invalid"
                        >Please provide a valid state.</span
                      >
                    </div>
                    <div v-else class="valid-tooltip">Looks good!</div>
                  </div>
                </BCol>
              </BRow>
              <BButton variant="primary" type="submit">Submit form</BButton>
            </form>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Validation type</BCardTitle>
            <p class="card-title-desc">
              Parsley is a javascript form validation library. It helps you
              provide your users with feedback on their form submission before
              sending it to your server.
            </p>

            <form action="#" @submit.prevent="typeForm">
              <div class="mb-3">
                <label>Required</label>
                <input
                  v-model="typeform.name"
                  type="text"
                  class="form-control"
                  placeholder="Type something"
                  name="name"
                  :class="{
                    'is-invalid': typesubmit && v$.typeform.name.$error
                  }"
                />
                <div
                  v-if="typesubmit && v$.typeform.name.$error"
                  class="invalid-feedback"
                >
                  <span v-if="v$.typeform.name.required.$invalid"
                    >This value is required.</span
                  >
                </div>
              </div>

              <div class="mb-3">
                <label>Equal To</label>
                <div>
                  <input
                    v-model="typeform.password"
                    type="password"
                    name="password"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.password.$error
                    }"
                    placeholder="Password"
                  />
                  <div
                    v-if="typesubmit && v$.typeform.password.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.typeform.password.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-else-if="v$.typeform.password.minLength.$invalid"
                      >Password must be at least 6 characters.</span
                    >
                  </div>
                </div>
                <div class="mt-2">
                  <input
                    v-model="typeform.confirmPassword"
                    type="password"
                    name="confirmPassword"
                    class="form-control"
                    :class="{
                      'is-invalid':
                        typesubmit && v$.typeform.confirmPassword.$error
                    }"
                    placeholder="Re-Type Password"
                  />
                  <div
                    v-if="typesubmit && v$.typeform.confirmPassword.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.typeform.confirmPassword.required.$invalid"
                      >This value is required.</span
                    >
                    <span
                      v-else-if="
                        v$.typeform.confirmPassword.sameAsPassword.$invalid
                      "
                      >This value should be the same.</span
                    >
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label>E-Mail</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="email"
                    name="email"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.email.$error
                    }"
                    placeholder="Enter a valid e-mail"
                  />
                  <div
                    v-if="typesubmit && v$.typeform.email.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.typeform.email.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-else-if="v$.typeform.email.email.$invalid"
                      >This value should be a valid email.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>URL</label>
                <div>
                  <input
                    v-model="typeform.url"
                    type="url"
                    name="url"
                    class="form-control"
                    placeholder="URL"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.url.$error
                    }"
                  />
                  <div
                    v-if="typesubmit && v$.typeform.url.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.typeform.url.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-else-if="v$.typeform.url.url.$invalid"
                      >This value should be a valid url.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Digits</label>
                <div>
                  <input
                    v-model="typeform.digit"
                    type="text"
                    name="digit"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.digit.$error
                    }"
                    placeholder="Enter only digits"
                  />
                  <div
                    v-if="typesubmit && v$.typeform.digit.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.typeform.digit.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-else-if="v$.typeform.digit.numeric.$invalid"
                      >This value should be digits.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Number</label>
                <div>
                  <input
                    v-model="typeform.number"
                    type="text"
                    name="number"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.number.$error
                    }"
                    placeholder="Enter only numbers"
                  />
                  <div
                    v-if="typesubmit && v$.typeform.number.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.typeform.number.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-else-if="v$.typeform.number.numeric.$invalid"
                      >This value should be a valid number.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Alphanumeric</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.alphanum.$error
                    }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div
                    v-if="typesubmit && v$.typeform.alphanum.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.typeform.alphanum.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-else-if="v$.typeform.alphanum.alphaNum.$invalid"
                      >This value should be alphanumeric.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Textarea</label>
                <div>
                  <textarea
                    v-model="typeform.textarea"
                    class="form-control"
                    name="textarea"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.textarea.$error
                    }"
                    rows="5"
                  ></textarea>
                  <div
                    v-if="typesubmit && v$.typeform.textarea.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.typeform.textarea.required.$invalid"
                      >This value is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3 mb-0">
                <div>
                  <BButton type="submit" variant="primary me-2">
                    Submit
                  </BButton>
                  <BButton type="reset" variant="secondary m-l-5 ms-1">
                    Cancel
                  </BButton>
                </div>
              </div>
            </form>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Range validation</BCardTitle>
            <p class="card-title-desc">
              Parsley is a javascript form validation library. It helps you
              provide your users with feedback on their form submission before
              sending it to your server.
            </p>

            <form action="#" @submit.prevent="rangeform">
              <div class="mb-3">
                <label>Min Length</label>
                <div>
                  <input
                    v-model="range.minlen"
                    type="text"
                    name="minlen"
                    class="form-control"
                    :class="{ 'is-invalid': submit && v$.range.minlen.$error }"
                    placeholder="Min 6 chars."
                  />
                  <div
                    v-if="submit && v$.range.minlen.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.range.minlen.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-else-if="v$.range.minlen.minLength.$invalid"
                      >This value is too short. It should have 6 characters or
                      more.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Max Length</label>
                <div>
                  <input
                    v-model="range.maxlength"
                    type="text"
                    class="form-control"
                    name="maxlength"
                    :class="{
                      'is-invalid': submit && v$.range.maxlength.$error
                    }"
                    placeholder="Max 6 chars."
                  />
                  <div
                    v-if="submit && v$.range.maxlength.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.range.maxlength.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-if="v$.range.maxlength.maxLength.$invalid"
                      >This value is too long. It should have 6 characters or
                      fewer.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Range Length</label>
                <div>
                  <input
                    v-model="range.between"
                    type="text"
                    class="form-control"
                    name="between"
                    :class="{ 'is-invalid': submit && v$.range.between.$error }"
                    placeholder="Text between 5 - 10 chars length"
                  />
                  <div
                    v-if="submit && v$.range.between.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.range.between.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-else-if="v$.range.between.maxLength.$invalid"
                      >This value length is invalid. It should be between 5 and
                      10 characters long.</span
                    >
                    <span v-else-if="v$.range.between.minLength.$invalid"
                      >This value length is invalid. It should be between 5 and
                      10 characters long.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Min Value</label>
                <div>
                  <input
                    v-model="range.minval"
                    type="text"
                    name="minval"
                    class="form-control"
                    :class="{ 'is-invalid': submit && v$.range.minval.$error }"
                    placeholder="Min value is 6"
                  />
                  <div
                    v-if="submit && v$.range.minval.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.range.minval.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-if="v$.range.minval.minValue.$invalid"
                      >This value should be greater than or equal to 6.</span
                    ><span v-if="v$.range.minval.integer.$invalid"
                      >Value must be number.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Max Value</label>
                <div>
                  <input
                    v-model="range.maxval"
                    type="text"
                    class="form-control"
                    name="maxval"
                    :class="{ 'is-invalid': submit && v$.range.maxval.$error }"
                    placeholder="Max value is 6"
                  />
                  <div
                    v-if="submit && v$.range.maxval.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.range.maxval.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-if="v$.range.maxval.maxValue.$invalid"
                      >This value should be lower than or equal to 6.</span
                    >
                    <span v-if="v$.range.maxval.integer.$invalid"
                      >Value must be number.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Range Value</label>
                <div>
                  <input
                    v-model="range.rangeval"
                    type="text"
                    class="form-control"
                    name="rangeval"
                    :class="{
                      'is-invalid': submit && v$.range.rangeval.$error
                    }"
                    placeholder="Number between 6 - 100"
                  />
                  <div
                    v-if="submit && v$.range.rangeval.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.range.rangeval.required.$invalid"
                      >This value is required.</span
                    >
                    <span v-else-if="v$.range.rangeval.minValue.$invalid"
                      >This value should be between 6 and 100.</span
                    >
                    <span v-else-if="v$.range.rangeval.maxValue.$invalid"
                      >This value should be between 6 and 100.</span
                    >
                    <span v-else-if="v$.range.rangeval.integer.$invalid"
                      >This value should number.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Regular Exp</label>
                <div>
                  <input
                    v-model="range.expr"
                    type="text"
                    class="form-control"
                    name="expr"
                    :class="{ 'is-invalid': submit && v$.range.expr.$error }"
                    placeholder="Hex. Color"
                  />
                  <div
                    v-if="submit && v$.range.expr.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="v$.range.expr.required.$invalid"
                      >This value is required.</span
                    >
                  </div>
                </div>
              </div>

              <div class="mb-3 mb-0">
                <div>
                  <BButton type="submit" variant="primary me-2">
                    Submit
                  </BButton>
                  <BButton type="reset" variant="secondary m-l-5 ms-1">
                    Cancel
                  </BButton>
                </div>
              </div>
            </form>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
