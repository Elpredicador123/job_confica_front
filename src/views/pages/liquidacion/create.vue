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
            requerimientos: [
                "Alta",
                "Averia"
            ],
            cierres: [
                "Completado",
                "Suspendido",
                "Devuelto",
                "Pendiente",
            ],
            efectividades: [
                "Efectiva",
                "Inefectiva",
                "Inefectiva recuperada",
            ],
            notas: [
                "Detractor (0-5)",
                "Neutro (6-7)",
                "Promotor (8-9)",
                "No aplica",
            ],
            posibles: [
                "Si",
                "No",
                "No aplica",
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
                zonal : null,
                tecnico : null,
                cf: "",
                codigo_requerimiento: null,
                tipo_requerimiento: null,
                tipo_cierre : null,
                numero_referencia : null,
                efectividad : null,
                nota_nps : null,
                detractor : null,
                observaciones : null,
                contrata : "",
                usuario: "admin",
                fecha : moment().format('YYYY-MM-DD'),
            }
        },
        async getTecnicos(){
            try {
                this.$nextTick(async () => {
                    console.log(this.form.cf )
                    if(this.form.cf == ""){
                        this.form.tecnico = null;
                        this.form.zonal = null;
                        this.form.contrata = null;
                    }
                    else{
                        const response = await this.$http.get(this.$apiURL+'technical/carnet/'+this.form.cf);
                        if (response.data != null && response.data.data) {
                            this.form.tecnico = response.data.data.Nombre_Completo || null;
                            this.form.zonal = response.data.data.Zonal || null;
                            this.form.contrata = response.data.data.Contrata || null;
                        } else {
                            this.form.tecnico = null;
                            this.form.zonal = null;
                            this.form.contrata = null;
                        }
                    }
                });
            } catch (error) {
                console.error(error);
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
                    <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                        <BRow>
                            <BCol sm="7">
                                <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Registro de ordenes
                            </BCol>
                            <BCol sm="5">
                            </BCol>
                        </BRow>
                    </BCardHeader>
                    <BCardBody>
                            <form autocomplete="off"
                                class="row no-gutters"
                                @submit.prevent="submit">
                            <BRow>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Codigo de requerimiento"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    type="text"
                                                    v-model="form.codigo_requerimiento"
                                                    placeholder = "CÒDIGO SIN ESPACIOS"
                                                    required
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Tipo de requerimiento"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <Multiselect
                                                    v-model="form.tipo_requerimiento"
                                                    :options="requerimientos"
                                                    required
                                                    class="form-control p-0"
                                                />
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Tipo de cierre"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <Multiselect
                                                    v-model="form.tipo_cierre"
                                                    required
                                                    :options="cierres"
                                                    class="form-control p-0"
                                                />
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
                                                    v-model="form.cf"
                                                    required
                                                    type="text"
                                                    @input="getTecnicos()"
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
                                                    v-model="form.tecnico"
                                                    required
                                                    type="text"
                                                    id="formrow-firstname-input"
                                                    disabled="">
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
                                                    v-model="form.zonal"
                                                    id="formrow-firstname-input"
                                                    disabled>
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
                                                    v-model="form.numero_referencia"
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
                                                    v-model="form.efectividad"
                                                    :options="efectividades"
                                                    required
                                                    class="form-control p-0"
                                                />
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Nota NPS"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <Multiselect
                                                    v-model="form.nota_nps"
                                                    required
                                                    :options="notas"
                                                    class="form-control p-0"
                                                />
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Posible detractor"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <Multiselect
                                                    v-model="form.detractor"
                                                    required
                                                    :options="posibles"
                                                    class="form-control p-0"
                                                />
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="12">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Tipo de cierre"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <textarea
                                                    id="message"
                                                    v-model="form.observaciones"
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