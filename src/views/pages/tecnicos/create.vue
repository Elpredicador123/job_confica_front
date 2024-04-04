<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Multiselect from "@vueform/multiselect";
import moment from 'moment'

export default {
    components: { 
        Layout,
        PageHeader,
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
            form: {}
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
            this.$http.post(this.$apiURL+'order/store', this.form, {
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
}
</script>
<style>
.form-control:disabled {
    background-color: #e9ecef;
    opacity: 1;
}
</style>
<template>
        <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Registro de técnicos</BCardTitle>
                            <form autocomplete="off"
                                class="row no-gutters"
                                @submit.prevent="submit">
                            <BRow>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Nota NPS"
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
                                                label="Codigo de requerimiento"
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
                                                label="CF Técnico"
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
                                                label="Técnico"
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
                                                label="Zonal"
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
                                                label="Número de referencia"
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
                                                label="Efectividad"
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
                                                label="Número de referencia"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.Cargo"
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
                                                label="Efectividad"
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
                                                label="Número de referencia"
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
                                                label="Efectividad"
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
                                                label="Número de referencia"
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
                                                label="Tipo de cierre"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <textarea
                                                    id="message"
                                                    v-model="form.Zonal"
                                                    class="form-control"
                                                ></textarea>
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
    </Layout>
</template>