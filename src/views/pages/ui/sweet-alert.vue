<script>
import Swal from "sweetalert2";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * SweetAlert 2 component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Sweet-Alert",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Sweet-Alert",
          active: true
        }
      ]
    };
  },
  computed: {
    isDarkMode() {
      return this.$store?.state?.layout?.mode === "dark" || false;
    }
  },
  methods: {
    showAlert() {
      Swal.fire("Any fool can use a computer!");
    },
    titleText() {
      Swal.fire("The Internet?", "That thing is still around?", "question");
    },
    successmsg() {
      Swal.fire("Good job!", "You clicked the button!", "success");
    },
    position() {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    },
    confirm() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    cancel() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger ms-2"
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          showCancelButton: true
        })
        .then((result) => {
          if (result.value) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    },
    imageHeader() {
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: this.isDarkMode
          ? require("@/assets/images/logo-light.png")
          : require("@/assets/images/logo-dark.png"),
        imageHeight: 20,
        confirmButtonColor: "#556ee6"
      });
    },
    timer() {
      let timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    },
    custom() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger ms-2"
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="//sweetalert2.github.io">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down"
      });
    },
    customBackground() {
      Swal.fire({
        title: "Custom width, padding, background.",
        width: 600,
        padding: 100,
        confirmButtonColor: "#556ee6",
        background:
          "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)"
      });
    },
    ajax() {
      Swal.fire({
        title: "Submit email to run ajax request",
        input: "email",
        showCancelButton: true,
        confirmButtonText: "Submit",
        showLoaderOnConfirm: true,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#f46a6a",
        preConfirm: (email) => {
          return new Promise(function (resolve, Error) {
            setTimeout(function () {
              if (email === "taken@example.com") {
                Promise.Error(new Error("This email is already taken."));
              } else {
                resolve();
              }
            }, 2000);
          });
        },
        allowOutsideClick: false
      }).then((email) => {
        Swal.fire({
          title: "Ajax request finished!",
          html: "Submitted email: " + email
        });
      });
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
            <BCardTitle>Examples</BCardTitle>
            <p class="card-title-desc">
              A beautiful, responsive, customizable and accessible (WAI-ARIA)
              replacement for JavaScript's popup boxes. Zero dependencies.
            </p>

            <BRow class="text-center">
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>A basic message</p>
                  <BButton type="button" variant="primary" @click="showAlert">
                    Click me
                  </BButton>
                </div>
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>A title with a text under</p>
                  <BButton type="button" variant="primary" @click="titleText">
                    Click me
                  </BButton>
                </div>
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>A success message!</p>
                  <BButton type="button" variant="primary" @click="successmsg">
                    Click me
                  </BButton>
                </div>
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>
                    A warning message, with a function attached to the
                    "Confirm"-button...
                  </p>
                  <BButton type="button" variant="primary" @click="confirm">
                    Click me
                  </BButton>
                </div>
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>
                    By passing a parameter, you can execute something else for
                    "Cancel".
                  </p>
                  <BButton type="button" variant="primary" @click="cancel">
                    Click me
                  </BButton>
                </div>
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>A message with custom Image Header</p>
                  <BButton type="button" variant="primary" @click="imageHeader">
                    Click me
                  </BButton>
                </div>
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>A message with auto close timer</p>
                  <BButton type="button" variant="primary" @click="timer">
                    Click me
                  </BButton>
                </div>
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>Custom HTML description and buttons</p>
                  <BButton type="button" variant="primary" @click="custom">
                    Click me
                  </BButton>
                </div>
              </BCol>

              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>A custom positioned dialog</p>
                  <BButton type="button" variant="primary" @click="position">
                    Click me
                  </BButton>
                </div>
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <div class="p-3">
                  <p>A message with custom width, padding and background</p>
                  <BButton
                    type="button"
                    variant="primary"
                    @click="customBackground"
                  >
                    Click me
                  </BButton>
                </div>
              </BCol>
              <BCol lg="4" sm="6" cols="xl-3 mb-2">
                <p>Ajax request example</p>
                <BButton type="button" variant="primary" @click="ajax">
                  Click me
                </BButton>
              </BCol>
            </BRow>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
