<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Modals component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Modals",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Modals",
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
      <BCol cols="12">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Modals Examples</BCardTitle>
            <p class="card-title-desc">
              Modals are streamlined, but flexible dialog prompts powered by
              JavaScript. They support a number of use cases from user
              notification to completely custom content and feature a handful of
              helpful subcomponents, sizes, and more.
            </p>
            <div class="modal bs-example-modal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title mt-0">Modal title</h5>
                    <BButton
                      variant="secondary"
                      class="btn-close"
                      data-dismiss="modal"
                      aria-label="Close"
                    ></BButton>
                  </div>
                  <div class="modal-body">
                    <p>One fine body&hellip;</p>
                  </div>
                  <div class="modal-footer">
                    <BButton variant="primary"> Save changes </BButton>
                    <BButton variant="light" data-dismiss="modal">
                      Close
                    </BButton>
                  </div>
                </div>
                <!-- /.modal-content -->
              </div>
              <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
            <BRow class="d-flex mt-4">
              <BCol lg="6" cols="mt-4">
                <BCardTitle>Default Modal</BCardTitle>
                <p class="card-title-desc">
                  Toggle a working modal demo by clicking the button below. It
                  will slide down and fade in from the top of the page.
                </p>
                <BButton variant="primary" v-b-modal.modal-standard>
                  Standard modal
                </BButton>
                <BModal
                  cancelVariant="light"
                  id="modal-standard"
                  title="Modal Heading"
                  title-class="font-18"
                >
                  <h5>Overflowing text to show scroll behavior</h5>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Vivamus sagittis lacus vel augue laoreet
                    rutrum faucibus dolor auctor.
                  </p>
                  <p>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur et.
                    Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                    fringilla.
                  </p>
                  <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                    risus, porta ac consectetur ac, vestibulum at eros.
                  </p>
                </BModal>
              </BCol>

              <BCol lg="6" cols="mt-4">
                <BCardTitle>Optional sizes</BCardTitle>
                <p class="card-title-desc">
                  Modals have three optional sizes, available via modifier
                  classes to be placed on a <code>.modal-dialog</code>.
                </p>
                <div class="button-items">
                  <!-- Extra Large modal -->
                  <BButton
                    variant="primary"
                    class="waves-effect waves-light me-2"
                    v-b-modal.modal-xl
                  >
                    Extra large modal
                  </BButton>
                  <BModal
                    id="modal-xl"
                    size="xl"
                    title="Extra large modal"
                    title-class="font-18"
                    hide-footer
                  >
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>
                  <!-- Large modal -->
                  <BButton
                    variant="success "
                    class="waves-effect waves-light me-2"
                    v-b-modal.modal-lg
                  >
                    Large modal
                  </BButton>
                  <BModal
                    id="modal-lg"
                    size="lg"
                    title="Large modal"
                    title-class="font-18"
                    hide-footer
                  >
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>
                  <!-- Small modal -->
                  <BButton
                    variant="danger"
                    class="waves-effect waves-light"
                    v-b-modal.modal-sm
                  >
                    Small modal
                  </BButton>
                  <BModal
                    id="modal-sm"
                    size="sm"
                    title="Small modal"
                    title-class="font-18"
                    hide-footer
                  >
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>
                </div>
              </BCol>
            </BRow>

            <div class="mt-4">
              <BRow>
                <BCol md="6" cols="xl-4">
                  <div class="mt-4">
                    <BCardTitle>Vertically centered</BCardTitle>
                    <p class="card-title-desc">
                      Add <code>.modal-dialog-centered</code> to
                      <code>.modal-dialog</code> to vertically center the modal.
                    </p>
                  </div>
                  <BButton
                    variant="primary"
                    v-b-modal.modal-center
                    class="waves-effect waves-light"
                    data-toggle="modal"
                    data-target=".bs-example-modal-center"
                  >
                    Center modal
                  </BButton>
                  <BModal
                    id="modal-center"
                    centered
                    title="Center modal"
                    title-class="font-18"
                    hide-footer
                  >
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </p>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </p>
                    <p class="mb-0">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </p>
                  </BModal>
                </BCol>
                <BCol md="6" cols="xl-4">
                  <div class="mt-4">
                    <BCardTitle>Scrollable modal</BCardTitle>
                    <p class="card-title-desc">
                      You can also create a scrollable modal that allows scroll
                      the modal body by adding
                      <code>.modal-dialog-scrollable</code> to
                      <code>.modal-dialog</code>.
                    </p>
                    <BButton
                      variant="primary"
                      v-b-modal.modal-scrollable
                      class="waves-effect waves-light"
                      data-toggle="modal"
                      data-target="#exampleModalScrollable"
                    >
                      Scrollable modal
                    </BButton>
                    <BModal
                      cancelVariant="light"
                      id="modal-scrollable"
                      scrollable
                      title="Scrollable Modal"
                      title-class="font-18"
                    >
                      <p v-for="i in 15" :key="i">
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                    </BModal>
                  </div>
                </BCol>
              </BRow>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
