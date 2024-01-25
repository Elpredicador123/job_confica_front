<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Form-repeater Component
 */
export default {
  components: {
    Layout,
    PageHeader
  },
  data() {
    return {
      title: "Form Repeater",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Repeater",
          active: true
        }
      ],
      fields: [
        {
          id: 1
        }
      ],
      phoneData: [
        {
          id: 1
        }
      ]
    };
  },
  methods: {
    /**
     * Push the row in form
     */
    AddformData() {
      this.fields.push({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    /**
     * Delete the row
     */
    deleteRow(index) {
      if (confirm("Are you sure you want to delete this element?"))
        this.fields.splice(index, 1);
    },
    /**
     * Add the phone number in form
     */
    AddPhoneNo() {
      this.phoneData.push({
        phone: ""
      });
    },
    /**
     * Delete the row from form
     */
    deletePhone(index) {
      this.phoneData.splice(index, 1);
    }
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
            <BCardTitle class="mb-4">Example</BCardTitle>
            <BForm class="repeater" enctype="multipart/form-data">
              <div>
                <div
                  v-for="(field, index) in fields"
                  :key="field.id"
                  class="row"
                >
                  <BCol lg="2" class="mb-3">
                    <label for="name">Full Name:</label>
                    <input
                      id="name"
                      v-model="field.name"
                      type="text"
                      name="untyped-input"
                      class="form-control"
                      placeholder="Enter your full name"
                    />
                  </BCol>

                  <BCol lg="2" class="mb-3">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      v-model="field.email"
                      type="email"
                      class="form-control"
                      placeholder="Enter your email address"
                    />
                  </BCol>

                  <BCol lg="2" class="mb-3">
                    <label for="subject">Subject</label>
                    <input
                      id="subject"
                      v-model="field.subject"
                      type="text"
                      class="form-control"
                      placeholder="Enter your subject"
                    />
                  </BCol>

                  <BCol lg="2" class="mb-3">
                    <label for="resume">Resume</label>
                    <input id="resume" type="file" class="form-control" />
                  </BCol>

                  <BCol lg="2" class="mb-3">
                    <label for="message">Message</label>
                    <textarea
                      id="message"
                      v-model="field.message"
                      class="form-control"
                      placeholder="Enter your message"
                    ></textarea>
                  </BCol>

                  <BCol lg="2" class="align-self-center d-grid">
                    <input
                      type="button"
                      class="btn btn-primary btn-block"
                      value="Delete"
                      @click="deleteRow(index)"
                    />
                  </BCol>
                </div>
              </div>
              <input
                type="button"
                class="btn btn-success mt-3 mt-lg-0"
                value="Add"
                @click="AddformData"
              />
            </BForm>
          </BCardBody>
          <!-- end card-body -->
        </BCard>
        <!-- end card -->
      </BCol>
      <!-- end col -->
    </BRow>
    <!-- end row -->

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle class="mb-4">Nested</BCardTitle>
            <BForm class="outer-repeater">
              <div class="outer">
                <div class="outer">
                  <div class="mb-3">
                    <label for="formname">Name :</label>
                    <input
                      id="formname"
                      type="text"
                      class="form-control"
                      placeholder="Enter your Name..."
                    />
                  </div>

                  <div class="mb-3">
                    <label for="formemail">Email :</label>
                    <input
                      id="formemail"
                      type="email"
                      class="form-control"
                      placeholder="Enter your Email..."
                    />
                  </div>

                  <div class="inner-repeater mb-4">
                    <div class="inner mb-3">
                      <label>Phone no :</label>
                      <div
                        v-for="(data, index) in phoneData"
                        :key="data.id"
                        class="inner mb-3 row"
                      >
                        <BCol cols="8" md="10">
                          <input
                            v-model="data.phone"
                            type="text"
                            class="inner form-control"
                            placeholder="Enter your phone no..."
                          />
                        </BCol>
                        <BCol lg="2" class="align-self-center d-grid">
                          <input
                            type="button"
                            class="btn btn-primary btn-block inner"
                            value="Delete"
                            @click="deletePhone(index)"
                          />
                        </BCol>
                      </div>
                    </div>
                    <input
                      type="button"
                      class="btn btn-success inner"
                      value="Add Number"
                      @click="AddPhoneNo"
                    />
                  </div>

                  <div class="mb-2">
                    <label class="form-label d-block mb-3">Gender :</label>
                    <div class="custom-radio form-check form-check-inline">
                      <input
                        type="radio"
                        id="customRadioInline1"
                        name="outer-group[0][customRadioInline1]"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="customRadioInline1"
                        >Male</label
                      >
                    </div>
                    <div class="custom-radio form-check form-check-inline">
                      <input
                        type="radio"
                        id="customRadioInline2"
                        name="outer-group[0][customRadioInline1]"
                        class="form-check-input"
                      />
                      <label class="form-check-label" for="customRadioInline2"
                        >Female</label
                      >
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="formmessage">Message :</label>
                    <textarea
                      id="formmessage"
                      class="form-control"
                      rows="3"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <BButton variant="primary" type="submit">Submit</BButton>
                </div>
              </div>
            </BForm>
          </BCardBody>
          <!-- end card-body -->
        </BCard>
        <!-- end card -->
      </BCol>
      <!-- end col -->
    </BRow>
    <!-- end row -->
  </Layout>
</template>
