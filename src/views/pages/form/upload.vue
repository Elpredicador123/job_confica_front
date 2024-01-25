<script>
import DropZone from "@/components/custom/Dropzone.vue";
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
export default {
  data() {
    return {
      title: "Form File Upload",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Form File Upload",
          active: true
        }
      ],
      galleryFiles: [],
      galleryDropzoneFile: ""
    };
  },
  methods: {
    deleteRecord(ele) {
      console.log("call Delet");
      if (ele.id) {
        this.galleryFiles = this.galleryFiles.filter((item) => {
          return item.id != ele.id;
        });
      }
    },
    galleryDrop(e) {
      e.preventDefault();
      // this.galleryDropzoneFile = e.dataTransfer.files;
      // this.galleryFiles.push(this.galleryDropzoneFile);
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
  components: {
    Layout,
    PageHeader,
    DropZone
  },
  middleware: "authentication"
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div>
      <BRow>
        <BCol lg="12">
          <BCard no-body>
            <BCardBody>
              <BCardTitle class="mb-1">Dropzone</BCardTitle>
              <p class="text-muted">
                DropzoneJS is an open source library that provides drag’n’drop
                file uploads with image previews.
              </p>
              <div>
                <DropZone
                  files="files"
                  cloudIcon="remix"
                  dropzoneFile="galleryDropzoneFile"
                  :isMultiple="true"
                  @drop.prevent="galleryDrop($event)"
                  @change="gallerySelectedFile"
                  @dragenter.prevent
                  @dragover.prevent
                />
              </div>

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
              <div class="text-center mt-4">
                <BButton variant="primary"> Send files </BButton>
              </div>
            </BCardBody>
          </BCard>
        </BCol>
      </BRow>
    </div>
  </Layout>
</template>
