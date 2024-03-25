<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Multiselect from "@vueform/multiselect";
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
    methods: {
        async getTecnicos(){
            try {
                this.$nextTick(async () => {
                    console.log(this.form.cf_tecnico )
                    const response = await this.$http.get(this.$apiURL+'technical/carnet/'+this.form.cf_tecnico);
                    console.log(response)
                    if(response.data.data){
                        this.form.tecnico = response.data.data.Nombre_Completo
                    }
                    else{
                        this.form.tecnico = null
                    }
                });
            } catch (error) {
                console.error(error);
            }
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
        <Layout>
        <PageHeader :title="title" :items="items" />
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Registro de ordenes</BCardTitle>
                        <form>
                            <BRow>
                                <BCol lg="4">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Codigo de requerimiento"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    type="text"
                                                    v-model="form.codigo"
                                                    placeholder = "CÒDIGO SIN ESPACIOS"
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
                                                    v-model="form.requerimiento"
                                                    :options="requerimientos"
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
                                                    v-model="form.cierre"
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
                                                    v-model="form.cf_tecnico"
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
                                                    v-model="form.nummero_referencia"
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
                                <BButton type="submit" variant="primary">Guardar</BButton>
                            </div>
                        </form>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>