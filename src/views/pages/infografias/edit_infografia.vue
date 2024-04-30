<template>
    <!-- Modal de edición -->
    <BModal v-model="isOpen" size="xl" hide-footer>
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                        <BRow>
                            <BCol sm="7">
                                <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Editar Infografía
                            </BCol>
                            <BCol sm="5">
                            </BCol>
                        </BRow>
                    </BCardHeader>
                    <BCardBody>
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
                                            <BCol lg="3">
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
                                            <BCol lg="3">
                                                Imagen
                                                <ul class="list-unstyled mb-0" id="dropzone-preview2">
                                                    <li class="mt-2" id="dropzone-preview-list2">
                                                    <div class="border rounded mb-1">
                                                        <div class="d-flex p-2">
                                                        <div class="flex-shrink-0 me-3">
                                                            <div class="avatar-sm bg-light rounded">
                                                            <img
                                                                class="img-fluid rounded d-block"
                                                                :src="storage + form.url"
                                                                alt=""
                                                            />
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </li>
                                                </ul>
                                            </BCol>
                                        </BRow>
                                        </BCardBody>
                                    </BCard>
                                </BCol>
                            <BCol lg="12">
                                <BCard no-body>
                                    <BCardBody>
                                    <div v-if="galleryFiles2.length ==0">
                                        <DropZone
                                        files="files"
                                        cloudIcon="remix"
                                        dropzoneFile="galleryDropzoneFile2"
                                        :isMultiple="true"
                                        @drop.prevent="galleryDrop($event)"
                                        @change="gallerySelectedFile2"
                                        @dragenter.prevent
                                        @dragover.prevent
                                        />
                                    </div>

                                    <ul class="list-unstyled mb-0" id="dropzone-preview2">
                                        <li class="mt-2" id="dropzone-preview-list2">
                                        <div
                                            class="border rounded mb-1"
                                            v-for="(file, index) of galleryFiles2"
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
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </BModal>
</template>

<script>
import DropZone from "@/components/custom/Dropzone.vue";

import "flatpickr/dist/flatpickr.css";
export default {
    components: {
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
            form: {},
            dPDefaultDate: null,
            galleryDropzoneFile2: "",
            galleryFiles2: [],
            DropFile2 : [],
        };
    },
    async created(){
        this.initForm();
    },
    
    methods: {
        open(item) {
            this.storage = this.$storageURL + "/"
            // Abrir el modal y establecer los datos del elemento seleccionado
            this.isOpen = true;
            this.form = {...item};
        },
        close() {
            // Cerrar el modal y restablecer los datos
            this.isOpen = false;
            this.selectedItem = null;
        },
        initForm(){
          const user = JSON.parse(localStorage.getItem('user')); // Convertir los datos del usuario a JSON
          console.log(user)
          this.form = {};
            this.dPDefaultDate = null;
            this.galleryDropzoneFile2 = "";
            this.galleryFiles2 = [];
            this.DropFile2 = [];
        },
        deleteRecord(ele) {
            console.log("call Delet");
            if (ele.id) {
                this.galleryFiles2 = this.galleryFiles2.filter((item) => {
                return item.id != ele.id;
                });
            }
        },
        galleryDrop(e) {
            e.preventDefault();
            this.galleryDropzoneFile2 = e.dataTransfer.files;
            this.galleryFiles2.push(this.galleryDropzoneFile2);
            
        },
        gallerySelectedFile2() {
            this.galleryDropzoneFile2 = document.querySelector(".galleryDropzoneFile2").files;
          this.DropFile2.push(this.galleryDropzoneFile2)
            const finalFile = Object.values(this.galleryDropzoneFile2).map((file) => {
                return {
                    name: file.name,
                    lastModified: file.lastModified,
                    lastModifiedDate: file.lastModifiedDate,
                    webkitRelativePath: file.webkitRelativePath,
                    size: file.size
                };
            });
            this.galleryFiles2.push(...finalFile);
            this.galleryFiles2 = this.galleryFiles2.map((data, index) => {
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

            if (this.DropFile2 && this.DropFile2.length > 0) {
                for (let i = 0; i < this.DropFile2.length; i++) {
                    formData.append("file", this.DropFile2[i][0]);
                }
            }
            // Realiza la petición con Axios
            console.log(formData)
            this.$http.post(this.$apiURL+'infographic/store', formData, {
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
}
</script>
