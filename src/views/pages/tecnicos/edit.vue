<script>
import Multiselect from "@vueform/multiselect";

export default {
    components: { 
        Multiselect
    },
    data( ){
        return{
            value: null,
            tipo_documento: [
                "DNI",
                "RUC"
            ],
            nacionalidad: [
                "PERUANA",
                "EXTRANJERA"
            ],
            sexo: [
                "M",
                "F"
            ],
            estados: [
                "BAJA",
                "OK"
            ],
            form: {},
            isOpen: false,
        }
    },
    mounted(){
        this.initForm();
    },
    methods: {
        initForm (){
            this.form = {
                Documento : null,
                Nro_Documento : null,
                Apellido_paterno: null,
                Apellido_materno: null,
                Nombres: null,
                Fecha_Nacimiento : null,
                Nacionalidad : null,
                Cargo : null,
                Genero : null,
                Contrata : null,
                Estado : null,
                Carnet: null,
                Nombre_Completo: null,
                Zonal: null,
            }
        },
        async submit(){
            this.form.Nombre_Completo = this.form.Apellido_paterno + " " +this.form.Apellido_materno + " "+ this.form.Nombres
            this.$http.put(this.$apiURL+'technical/update/'+this.form.id, this.form, {
            }).then(response => {
                if(response.status == 200){
                    this.form = {}
                  this.initForm()
                  this.$swal({
                      title: 'Actualizado!',
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
        },
        open(item) {
            // Abrir el modal y establecer los datos del elemento seleccionado
            this.isOpen = true;
            this.form = item;
        },
        saveChanges() {
            // Lógica para guardar los cambios y emitir un evento con los datos actualizados
            // Por ejemplo:
            this.$emit("edit-complete", this.selectedItem);
            this.close();
        },
        close() {
            // Cerrar el modal y restablecer los datos
            this.isOpen = false;
            this.selectedItem = null;
        },
    },
    middleware: "authentication"
}
</script>
<style>
.form-control:disabled {
    background-color: #e9ecef;
    opacity: 1;
}
</style>
<template>
    <BModal v-model="isOpen" size="xl" hide-footer>
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Editar técnicos</BCardTitle>
                            <form autocomplete="off"
                                class="row no-gutters"
                                @submit.prevent="submit">
                            <BRow>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Tipo de Documento"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <Multiselect
                                                    v-model="form.Documento"
                                                    required
                                                    :options="tipo_documento"
                                                    class="form-control p-0"
                                                />
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Número de Documento"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    type="text"
                                                    v-model="form.Nro_Documento"
                                                    placeholder = "Número de documento"
                                                    required
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Apellido Paterno"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.Apellido_paterno"
                                                    required
                                                    type="text"
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Apellido Materno"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.Apellido_materno"
                                                    required
                                                    type="text"
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Nombres"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    type="text"
                                                    required
                                                    v-model="form.Nombres"
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Fecha de Nacimiento"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.Fecha_Nacimiento"
                                                    required
                                                    type="date"
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Nacionalidad"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <Multiselect
                                                    v-model="form.Nacionalidad"
                                                    :options="nacionalidad"
                                                    required
                                                    class="form-control p-0"
                                                />
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Cargo"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.Cargo"
                                                    required
                                                    type="text"
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Género"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <Multiselect
                                                    v-model="form.Genero"
                                                    :options="sexo"
                                                    required
                                                    class="form-control p-0"
                                                />
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Contrata"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.Contrata"
                                                    required
                                                    type="text"
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Estado"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <Multiselect
                                                    v-model="form.Estado"
                                                    :options="estados"
                                                    required
                                                    class="form-control p-0"
                                                />
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Carnet"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.Carnet"
                                                    required
                                                    type="text"
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Zonal"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.Zonal"
                                                    required
                                                    type="text"
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                            </BRow>
                            <div class="mt-4">
                                <BButton type="submit" variant="primary"  @submit.prevent="submit">Guardar</BButton>
                            </div>
                        </form>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </BModal>
</template>