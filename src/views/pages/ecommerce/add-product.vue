<script>
import Multiselect from "@vueform/multiselect";
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import DropZone from "@/components/custom/Dropzone.vue";

/**
 * Add-product component
 */
export default {
  components: {
    DropZone,
    Multiselect,
    Layout,
    PageHeader
  },
  data() {
    return {
      title: "Add Product",
      items: [
        {
          text: "Ecommerce"
        },
        {
          text: "Add Product",
          active: true
        }
      ],
      value1: null,
      options: [
        "High Quality",
        "Leather",
        "Notifications",
        "Sizes",
        "Different Color"
      ],
      galleryFiles: [],
      galleryDropzoneFile: ""
    };
  },
  methods: {
    deleteRecord(ele) {
      if (ele.id) {
        this.galleryFiles = this.galleryFiles.filter((item) => {
          return item.id != ele.id;
        });
      }
    },
    galleryDrop(e) {
      this.galleryDropzoneFile = e.dataTransfer.files;
      this.galleryFiles.push(this.galleryDropzoneFile);
    },
    gallerySelectedFile() {
      this.galleryDropzoneFile = document.querySelector(
        ".galleryDropzoneFile"
      ).files;

      const finalFile = Object.values(this.galleryDropzoneFile).map((file) => {
        return {
          name: file.name,
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          webkitRelativePath: file.webkitRelativePath,
          size: file.size
        };
      });
      this.galleryFiles.push(...finalFile);
      this.galleryFiles = this.galleryFiles.map((data, index) => {
        return {
          id: index + 1,
          ...data
        };
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
      <BCol lg="12">
        <div id="addproduct-accordion" class="custom-accordion">
          <BCard no-body>
            <a
              href="javascript: void(0);"
              class="text-dark"
              data-toggle="collapse"
              aria-expanded="true"
              aria-controls="addproduct-billinginfo-collapse"
              v-b-toggle.accordion-1
            >
              <div class="p-4">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar-xs">
                      <div
                        class="avatar-title rounded-circle bg-primary-subtle text-primary"
                      >
                        01
                      </div>
                    </div>
                  </div>
                  <div class="media-body flex-grow-1 overflow-hidden">
                    <h5 class="font-size-16 mb-1">Billing Info</h5>
                    <p class="text-muted text-truncate mb-0">
                      Fill all information below
                    </p>
                  </div>
                  <i
                    class="mdi mdi-chevron-up accor-down-icon font-size-24"
                  ></i>
                </div>
              </div>
            </a>

            <b-collapse
              data-parent="#addproduct-accordion"
              id="accordion-1"
              visible
              accordion="my-accordion"
            >
              <div class="p-4 border-top">
                <form>
                  <div class="mb-3">
                    <label for="productname">Product Name</label>
                    <input
                      id="productname"
                      name="productname"
                      type="text"
                      class="form-control"
                      placeholder="Enter your Product Name"
                    />
                  </div>
                  <BRow>
                    <BCol lg="4">
                      <div class="mb-3">
                        <label for="manufacturername">Manufacturer Name</label>
                        <input
                          id="manufacturername"
                          name="manufacturername"
                          type="text"
                          class="form-control"
                          placeholder="Enter your Manufacturer Name"
                        />
                      </div>
                    </BCol>
                    <BCol lg="4">
                      <div class="mb-3">
                        <label for="manufacturerbrand"
                          >Manufacturer Brand</label
                        >
                        <input
                          id="manufacturerbrand"
                          name="manufacturerbrand"
                          type="text"
                          class="form-control"
                          placeholder="Enter your Manufacturer Brand"
                        />
                      </div>
                    </BCol>
                    <BCol lg="4">
                      <div class="mb-3">
                        <label for="price">Price</label>
                        <input
                          id="price"
                          name="price"
                          type="text"
                          class="form-control"
                          placeholder="Enter your Price"
                        />
                      </div>
                    </BCol>
                  </BRow>
                  <BRow>
                    <BCol md="6">
                      <div class="mb-3">
                        <label class="control-label">Category</label>
                        <select class="form-control select2">
                          <option>Select</option>
                          <option value="EL">Electronic</option>
                          <option value="FA">Fashion</option>
                          <option value="FI">Fitness</option>
                        </select>
                      </div>
                    </BCol>
                    <BCol md="6">
                      <div class="mb-3">
                        <label class="control-label">Specifications</label>
                        <Multiselect
                          v-model="value1"
                          :options="options"
                          mode="tags"
                          class="form-control p-0"
                          :close-on-select="false"
                        ></Multiselect>
                      </div>
                    </BCol>
                  </BRow>

                  <div class="mb-3 mb-0">
                    <label for="productdesc">Product Description</label>
                    <textarea
                      class="form-control"
                      id="productdesc"
                      rows="4"
                      placeholder="Enter your Product Description"
                    ></textarea>
                  </div>
                </form>
              </div>
            </b-collapse>
          </BCard>

          <BCard no-body>
            <a
              href="javascript: void(0);"
              class="text-dark collapsed"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="addproduct-img-collapse"
              v-b-toggle.accordion-2
            >
              <div class="p-4">
                <div class="d-flex align-items-center">
                  <div class="me-3">
                    <div class="avatar-xs">
                      <div
                        class="avatar-title rounded-circle bg-primary-subtle text-primary"
                      >
                        02
                      </div>
                    </div>
                  </div>
                  <div class="media-body flex-grow-1 overflow-hidden">
                    <h5 class="font-size-16 mb-1">Product Image</h5>
                    <p class="text-muted text-truncate mb-0">
                      Fill all information below
                    </p>
                  </div>
                  <i
                    class="mdi mdi-chevron-up accor-down-icon font-size-24"
                  ></i>
                </div>
              </div>
            </a>

            <BCollapse
              id="accordion-2"
              accordion="my-accordion"
              data-parent="#addproduct-accordion"
            >
              <div class="p-4 border-top">
                <DropZone
                  files="files"
                  cloudIcon="remix"
                  dropzoneFile="galleryDropzoneFile"
                  :isMultiple="true"
                  @drop.prevent="galleryDrop"
                  @change="gallerySelectedFile"
                />
                <ul class="list-unstyled mb-0" id="dropzone-preview2">
                  <li class="mt-2" id="dropzone-preview-list2">
                    <div
                      class="border rounded mb-1"
                      v-for="(file, index) of galleryFiles"
                      :key="index"
                    >
                      <div class="d-flex p-2">
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar-sm bg-light rounded">
                            <img
                              class="img-fluid rounded d-block"
                              src="@/assets/images/new-document.png"
                              alt="Dropzone-Image"
                            />
                          </div>
                        </div>
                        <div class="flex-grow-1">
                          <div class="pt-1">
                            <h5 class="fs-md mb-1">
                              &nbsp;
                              {{ file.name }}
                            </h5>
                            <p class="fs-sm text-muted mb-0">
                              <strong>{{ file.size / 1024 }}</strong> KB
                            </p>
                            <strong class="error text-danger"></strong>
                          </div>
                        </div>
                        <div class="flex-shrink-0 ms-3">
                          <BButton
                            size="sm"
                            variant="danger"
                            @click="() => deleteRecord(file)"
                            >Delete</BButton
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </BCollapse>
          </BCard>

          <BCard no-body>
            <a
              href="javascript: void(0);"
              class="text-dark collapsed"
              v-b-toggle.accordion-3
            >
              <div class="p-4">
                <div class="d-flex align-items-center">
                  <div class="me-3">
                    <div class="avatar-xs">
                      <div
                        class="avatar-title rounded-circle bg-primary-subtle text-primary"
                      >
                        03
                      </div>
                    </div>
                  </div>
                  <div class="media-body flex-grow-1 overflow-hidden">
                    <h5 class="font-size-16 mb-1">Meta Data</h5>
                    <p class="text-muted text-truncate mb-0">
                      Fill all information below
                    </p>
                  </div>
                  <i
                    class="mdi mdi-chevron-up accor-down-icon font-size-24"
                  ></i>
                </div>
              </div>
            </a>

            <BCollapse
              id="accordion-3"
              accordion="my-accordion"
              data-parent="#addproduct-accordion"
            >
              <div class="p-4 border-top">
                <form>
                  <BRow>
                    <BCol sm-="6">
                      <div class="mb-3">
                        <label for="metatitle">Meta title</label>
                        <input
                          id="metatitle"
                          name="metatitle"
                          type="text"
                          class="form-control"
                          placeholder="Enter your Meta title"
                        />
                      </div>
                    </BCol>

                    <BCol sm="6">
                      <div class="mb-3">
                        <label for="metakeywords">Meta Keywords</label>
                        <input
                          id="metakeywords"
                          name="metakeywords"
                          type="text"
                          class="form-control"
                          placeholder="Enter your Meta Keywords"
                        />
                      </div>
                    </BCol>
                  </BRow>

                  <div class="mb-3 mb-0">
                    <label for="metadescription">Meta Description</label>
                    <textarea
                      class="form-control"
                      id="metadescription"
                      rows="4"
                      placeholder="Enter your Meta Description"
                    ></textarea>
                  </div>
                </form>
              </div>
            </BCollapse>
          </BCard>
        </div>
      </BCol>
    </BRow>
    <BRow class="mb-4">
      <BCol class="ms-1">
        <a href="#" class="btn btn-danger">
          <i class="uil uil-times me-1"></i> Cancel
        </a>
        <a href="#" class="btn btn-success ms-1">
          <i class="uil uil-file-alt me-1"></i> Save
        </a>
      </BCol>
      <!-- end col -->
    </BRow>
  </Layout>
</template>
