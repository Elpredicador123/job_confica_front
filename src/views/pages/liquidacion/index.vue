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
            options: [
                "Alaska",
                "Iowa"
            ],
            form: {}
        }
    },
    middleware: "authentication"
}
</script>
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
                                                    :options="options"
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
                                                    :options="options"
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
                                                    disabled>
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
                                                    :options="options"
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
                                                    :options="options"
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
                                                    :options="options"
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