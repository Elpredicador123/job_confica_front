<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DropZone from "@/components/custom/Dropzone.vue";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import "flatpickr/dist/flatpickr.css";
import moment from 'moment';
import Multiselect from "@vueform/multiselect";

/**
 * Editor component
 */
export default {
    components: {
        ckeditor: CKEditor.component,
        Layout,
        PageHeader,
        DropZone,
        Multiselect
    },
    data() {
        return {
            title: "NUEVA NOTICIA",
            items: [
                    {
                        text: "Noticias",
                        href: "/news/create"
                    },
                    {
                        text: "Nueva Noticia",
                        active: true
                    }
            ],
            dPDefaultDate: null,
            galleryDropzoneFile: "",
            galleryFiles: [],
            categories: [
                "RECURSOS HUMANOS",
                "MASIVOS",
                "PLANTA EXTERNA",
                "CONTABILIDAD",
                "FLM",
            ],
            DropFile : [],
            editor_title: ClassicEditor,
            editor_description: ClassicEditor,
            news: {}
        };
  },
  async created(){
    this.initForm()
  },
    methods: {
        initForm(){
          const user = JSON.parse(localStorage.getItem('user')); // Convertir los datos del usuario a JSON
          this.news = {
                title:"",
                description :"",
                date : moment().format('YYYY-MM-DD HH:mm:ss'),
                user_id : user.id,
                category : null,
            };
            this.dPDefaultDate = null;
            this.galleryDropzoneFile = "";
            this.galleryFiles = [];
            this.DropFile = [];
        },
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
            this.galleryDropzoneFile = e.dataTransfer.files;
            this.galleryFiles.push(this.galleryDropzoneFile);
            
        },
        gallerySelectedFile() {
            this.galleryDropzoneFile = document.querySelector(
                ".galleryDropzoneFile"
            ).files;
            this.DropFile.push(this.galleryDropzoneFile)
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
        },
        async submit(){
            let formData = new FormData();
            // Agrega los datos del formulario al objeto FormData
            Object.keys(this.news).forEach(key => {
                formData.append(key, this.news[key]);
            });

            // Agrega los archivos

            if (this.DropFile && this.DropFile.length > 0) {
                for (let i = 0; i < this.DropFile.length; i++) {
                    formData.append("files[]", this.DropFile[i][0]);
                }
            }          

            // Realiza la petición con Axios
            console.log(formData)
            this.$http.post(this.$apiURL+'news/store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                if(response.status == 200){
                  console.log(response);
                  this.$swal({
                      title: 'Completado!',
                      text:  response.data.message,
                      icon: 'success',
                      confirmButtonColor: '#6457A2', // Cambiar el color del botón de confirmación
                  });
                  setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }
            }).catch(error => {
                console.error(error);
                  this.$swal({
                    icon: "error",
                    title: "Oops...",
                    text: error,
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
    <form class="needs-validation" @submit.prevent="submit">

    <BRow>
        <BCol lg="6">
            <BCard no-body>
              <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                  <BRow>
                      <BCol sm="7">
                          <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Titulo
                      </BCol>
                  </BRow>
              </BCardHeader>
                <BCardBody>
                    <!-- Editor -->
                    <ckeditor v-model="news.title" :editor="editor_title"></ckeditor>
                </BCardBody>
            </BCard>
        </BCol>
      <BCol lg="6">
        <BCard no-body>
          <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
              <BRow>
                  <BCol sm="7">
                      <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Descripción
                  </BCol>
              </BRow>
          </BCardHeader>
          <BCardBody>
            <ckeditor v-model="news.description" :editor="editor_description"></ckeditor>
          </BCardBody>
        </BCard>
      </BCol>
      <BCol lg="3">
        <BCard no-body>
              <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                  <BRow>
                      <BCol sm="7">
                          <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Titulo
                      </BCol>
                  </BRow>
              </BCardHeader>
                <BCardBody>
                    <!-- Editor -->
                    <Multiselect
                          v-model="news.category"
                          :options="categories"
                          required
                          class="form-control p-0"
                      />
                </BCardBody>
            </BCard>
          <div class="mt-4">

                      
          </div>
      </BCol>
      <BCol lg="9">
          <BCard no-body>
            <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
              <BRow>
                  <BCol sm="7">
                      <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Cargar imagen
                  </BCol>
              </BRow>
            </BCardHeader>
            <BCardBody>
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
            </BCardBody>
          </BCard>
        </BCol>
        <BCol>
            <BButton type="submit" variant="primary">Submit</BButton>

        </BCol>
        
    </BRow>
    </form>
  </Layout>
</template>
