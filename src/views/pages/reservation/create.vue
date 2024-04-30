<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

export default {
    components: { 
        Layout,
        PageHeader,
    },
    data( ){
        return{
            value: null,
            form: {}
        }
    },
    mounted(){
        this.initForm();
    },
    methods: {
        initForm (){
          const user = JSON.parse(localStorage.getItem('user')); // Convertir los datos del usuario a JSON
            this.form = {
                title : null,
                date : null,
                start_time: null,
                end_time: null,
                user_id : user.id,
                description: "desc",
                number_of_people : 0
            }
        },
        async submit(){
            this.$http.post(this.$apiURL+'reservation/store', this.form, {
            }).then(response => {
                if(response.status == 200){                  
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
                                <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;RESERVAR SALA
                            </BCol>
                        </BRow>
                    </BCardHeader>
                    <BCardBody>
                            <form autocomplete="off"
                                class="row no-gutters"
                                @submit.prevent="submit">
                            <BRow>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Motivo de Reserva"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    type="text"
                                                    v-model="form.title"
                                                    placeholder = "Motivo"
                                                    required
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Fecha Reserva"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    type="date"
                                                    v-model="form.date"
                                                    placeholder = "Número de documento"
                                                    required
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Hora de Inicio"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.start_time"
                                                    required
                                                    type="time"
                                                    id="formrow-firstname-input">
                                                </BFormInput>
                                            </BFormGroup>
                                    </div>
                                </BCol>
                                <BCol lg="3">
                                    <div class="mt-4">
                                            <BFormGroup
                                                label="Hora Fin"
                                                label-for="formrow-firstname-input"
                                                class="mb-12">
                                                <BFormInput
                                                    v-model="form.end_time"
                                                    required
                                                    type="time"
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
    </Layout>
</template>