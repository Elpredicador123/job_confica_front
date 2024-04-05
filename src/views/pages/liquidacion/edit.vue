<template>
    <!-- Modal de edición -->
    <BModal v-model="isOpen" size="xl" hide-footer>
        <BRow>
            <BCol cols="12">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Editar Orden</BCardTitle>
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
                                <BButton type="submit" variant="primary"  @submit.prevent="submit">Actualizar</BButton>
                            </div>
                        </form>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </BModal>
</template>

<script>
import moment from 'moment'
import Multiselect from "@vueform/multiselect";
export default {
    components: { 
        Multiselect
    },
    data() {
        return {
            isOpen: false,
            selectedItem: null,
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
        };
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
                id: null
            }
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
            this.$http.put(this.$apiURL+'order/update/'+this.form.id, this.form, {
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
    }
}
</script>
