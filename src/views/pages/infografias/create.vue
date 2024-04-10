<script>
import DropZone from "@/components/custom/Dropzone.vue";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import "flatpickr/dist/flatpickr.css";
import moment from 'moment'

/**
 * Editor component
 */
export default {
    components: {
        Layout,
        PageHeader,
        DropZone,
    },
    data() {
        return {
            title: "NUEVA INFOGRAFÍA",
            items: [
                    {
                        text: "Infografías",
                        href: "/infografias/create"
                    },
                    {
                        text: "Nueva Inforgrafía",
                        active: true
                    }
            ],
            form: {},
            dPDefaultDate: null,
            galleryDropzoneFile: "",
            galleryFiles: [],
            DropFile : [],
            is_video : false,
            url_envio : ""
        };
  },
  async created(){
    this.initForm();

  },
    methods: {
        initForm(){
          const user = JSON.parse(localStorage.getItem('user')); // Convertir los datos del usuario a JSON
          console.log(user)
          this.form = {
                title: null,
                Autor : user.username,
                date : moment().format('YYYY-MM-DD HH:mm:ss'),
                url : "aa",
                
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
            Object.keys(this.form).forEach(key => {
                formData.append(key, this.form[key]);
            });

            // Agrega los archivos
            console.log(this.DropFile)
            if (this.DropFile && this.DropFile.length > 0) {
                for (let i = 0; i < this.DropFile.length; i++) {
                    formData.append("file", this.DropFile[i][0]); // Utiliza "files" en lugar de "files[]"
                }
            }          

            // Realiza la petición con Axios
            console.log(formData)
            if(this.is_video == true){
              this.url_envio = "video/store"
            }
            else{
              this.url_envio = "infographic/store"
            }
            this.$http.post(this.$apiURL+this.url_envio, formData, {
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
                  this.$swal('Completado!', response.data.message, 'success');
                  this.initForm()
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
        <BCol cols="12">
            <BCard no-body>
                <BCardBody>
                  <BRow>
                    <BCol lg="6">
                      <BFormGroup
                          label="Nombre de Infografía"
                          label-for="formrow-firstname-input"
                          class="mb-12">
                          <BFormInput
                              type="text"
                              v-model="form.title"
                              placeholder = "NOMBRE DE INFOGRAFÍA"
                              required
                              id="formrow-firstname-input">
                          </BFormInput>
                      </BFormGroup>
                    </BCol>
                    <BCol lg="6">
                      <BFormGroup
                          label="Autor"
                          label-for="formrow-firstname-input"
                          class="mb-12">
                          <BFormInput
                              v-model="form.Autor"
                              required
                              type="text"
                              id="formrow-firstname-input"
                              disabled="">
                          </BFormInput>
                      </BFormGroup>
                    </BCol>
                  </BRow>
                </BCardBody>
            </BCard>
        </BCol>
        <BCol lg="2">
          <BCard no-body>
            <BCardBody>
              <p>Es video?</p>
              <BFormGroup class="form-radio-secondary">
                <BFormCheckbox
                  v-model="is_video"
                  switch
                  variant="secondary"
                  size="lg"
                >
                </BFormCheckbox>
              </BFormGroup>
            </BCardBody>
          </BCard>
        </BCol>
      <BCol lg="12">
          <BCard no-body>
            <BCardBody>
              <div v-if="galleryFiles.length ==0">
                <DropZone
                  files="files"
                  cloudIcon="remix"
                  dropzoneFile="galleryDropzoneFile"
                  :isMultiple="false"
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
            <BButton type="submit" variant="primary">Guardar</BButton>
        </BCol>
        
    </BRow>
    </form>
  </Layout>
</template>
