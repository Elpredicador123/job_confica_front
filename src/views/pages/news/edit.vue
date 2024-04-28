<template>
  <!-- Modal de edición -->
  <BModal v-model="isOpen" size="xl" hide-footer>
      <BRow>
          <BCol cols="12">
              <BCard no-body>
                  <BCardBody>
                      <strong><h1>Editar Noticias</h1></strong>
                      <form class="needs-validation" @submit.prevent="submit">
                        <BRow>                          
                            <BCol cols="6">
                              <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                                  <BRow>
                                      <BCol sm="7">
                                          <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Titulo
                                      </BCol>
                                  </BRow>
                              </BCardHeader>
                                <BCard no-body>
                                    <BCardBody>
                                        <ckeditor v-model="news.title" :editor="editor_title"></ckeditor>
                                    </BCardBody>
                                </BCard>
                            </BCol>
                          <BCol cols="6">
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
                          <BCol lg="4">
                              Seleccionar para eliminar
                              <ul class="list-unstyled mb-0" id="dropzone-preview2">
                                <li class="mt-2" id="dropzone-preview-list2">
                                  <div
                                    class="border rounded mb-1"
                                    v-for="(file, index) of galleryFilesEdit"
                                    :key="index"
                                  >
                                    <div class="d-flex p-2">
                                      <div class="flex-shrink-0 me-3">
                                        <div class="avatar-sm bg-light rounded">
                                          <img
                                            class="img-fluid rounded d-block"
                                            :src="storage + file.url"
                                            alt="Dropzone-Image"
                                          />
                                        </div>
                                      </div>
                                      <div class="flex-shrink-0 ms-3">
                                        <input type="checkbox" v-model="file.estado" :value="index">
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </BCol>
                          <BCol lg="8">
                              <BCard no-body>
                                <BCardBody>
                                  <BCardTitle class="mb-1">Cargar Archivo</BCardTitle>
                                  <p class="text-muted">
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
                                </BCardBody>
                              </BCard>
                            </BCol>
                            <BCol>
                                <BButton type="submit" variant="primary">Submit</BButton>

                            </BCol>
                            
                        </BRow>
                        </form>
                  </BCardBody>
              </BCard>
          </BCol>
      </BRow>
  </BModal>
</template>

<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DropZone from "@/components/custom/Dropzone.vue";
import moment from 'moment';

export default {
  components: {
        ckeditor: CKEditor.component,
        DropZone,
    },
  data() {
      return {
          title: "NUEVA INFOGRAFÍA",
          isOpen: false,
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
          news: {},
          dPDefaultDate: null,
            galleryDropzoneFile: "",
            galleryFiles: [],
            DropFile : [],
            galleryFilesEdit : [],
            editor_title: ClassicEditor,
            editor_description: ClassicEditor,
      };
  },
  methods: {
      open(item) {
          // Abrir el modal y establecer los datos del elemento seleccionado
          const user = JSON.parse(localStorage.getItem('user')); // Convertir los datos del usuario a JSON
          console.log(item)
          this.storage = this.$storageURL + "/"
          this.isOpen = true;
          this.news.title = item.title;
          this.news.description = item.description;
          this.news.date = moment().format('YYYY-MM-DD HH:mm:ss'),
          this.news.id = item.id;
          this.news.user_id = user.id;
          this.galleryFilesEdit = item.images.map(image => ({
            ...image,
            estado: false // Aquí puedes asignar el valor que desees para el campo "estado"
          }));
          console.log(this.galleryFilesEdit)
      },
      close() {
          // Cerrar el modal y restablecer los datos
          this.isOpen = false;
          this.selectedItem = null;
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
          Object.keys(this.news).forEach(key => {
              formData.append(key, this.news[key]);
          });

          // Agrega los archivos
          console.log(this.DropFile)
          if (this.DropFile && this.DropFile.length > 0) {
              for (let i = 0; i < this.DropFile.length; i++) {
                  formData.append("files[]", this.DropFile[i][0]);
              }
          }
          const activeImageIds = this.galleryFilesEdit
            .filter(image => image.estado === true)
            .map(image => image.id);

          activeImageIds.forEach(id => {
            formData.append("images[]", id);
          });


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

              }
          }).catch(error => {
                this.$swal({
                  icon: "error",
                  title: "Oops...",
                  text: error,
                });
          });
      }
  },
}
</script>
