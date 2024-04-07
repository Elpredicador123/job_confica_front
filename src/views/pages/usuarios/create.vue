<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
/**
 * Register component
 */
export default {
  components: { 
        Multiselect,
        Layout,
        PageHeader
    },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      user: {
        username: "user.name",
        password: "",
        role_id : "",
      },
      roles: [],
      submitted: false,
      tryingToRegister: false,
      isRegisterError: false,
      title: "NUEVO USUARIO"
    };
  },
  validations: {
    user: {
      username: {
        required
      },
      password: {
        required
      },
      role_id: { 
        required
      }
    }
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
    notificationAutoCloseDuration() {
      return this.$store && this.$store.state.notification ? 5 : 0;
    }
  },
  mounted() {
    this.getRol();
  },
  methods: {
    async getRol(){
      try {
        const response = await this.$http.get(this.$apiURL + 'role/all');
        const rolesData = response.data.data;
            rolesData.forEach(role => {
                this.roles.push(role);
            });
            console.log(this.roles)
    } catch (error) {
        console.error('Error fetching roles:', error);
    }
    },
    // Try to register the user in with the email, username
    // and password they provided.
    tryToRegisterIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
          const { username, password } = this.user;
          if (username && password) {
            this.$http.post(this.$apiURL+'user/store', this.user, {
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
          
      }
    }
  }
};
</script>

<template>
    <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
        <BCol cols="12">
            <BCard no-body>
                <BCardBody>
                    <BCardTitle>Registrar usuario</BCardTitle>
                        <form autocomplete="off"
                            class="row no-gutters"
                            @submit.prevent="submit">
                        <BRow>
                            <BCol lg="4">
                                <div class="mt-4">
                                    <BFormGroup
                                        id="email-group"
                                        label="Usuario"
                                        class="mb-3"
                                        label-for="username">
                                        <BFormInput
                                            id="username"
                                            v-model="user.username"
                                            type="text"
                                            placeholder="Ingresar usuario"
                                            :class="{
                                            'is-invalid': submitted && v$.user.username.$error
                                            }"
                                        ></BFormInput>
                                        <div v-if="submitted && v$.user.username.required.$invalid"
                                            class="invalid-feedback">
                                            Usuario es requerido.
                                        </div>
                                    </BFormGroup>
                                </div>
                            </BCol>
                            <BCol lg="4">
                                <div class="mt-4">
                                    <BFormGroup
                                        id="password-group"
                                        label="Contraseña"
                                        class="mb-3"
                                        label-for="password"
                                        >
                                        <BFormInput
                                            id="password"
                                            v-model="user.password"
                                            type="password"
                                            placeholder="Ingresar contraseña"
                                            :class="{
                                            'is-invalid': submitted && v$.user.password.$error
                                            }"
                                        ></BFormInput>
                                        <div
                                            v-if="submitted && v$.user.password.required.$invalid"
                                            class="invalid-feedback"
                                        >
                                            Contraseña es requerida.
                                        </div>
                                    </BFormGroup>
                                </div>
                            </BCol>
                            <BCol lg="4">
                                <div class="mt-4">
                                    <BFormGroup
                                        label="Rol"
                                        label-for="formrow-firstname-input"
                                        class="mb-12">
                                        <Multiselect
                                            v-model="user.role_id"
                                            required
                                            :options="roles.map(role => ({ value: role.id, label: role.description }))"
                                            class="form-control p-0"
                                        />
                                    </BFormGroup>
                                </div>
                            </BCol>
                        </BRow>
                        <div class="mt-3 text-end">
                            <BButton
                                variant="primary"
                                class="w-sm"
                                @click="tryToRegisterIn"
                                >Register
                            </BButton>
                        </div>
                    </form>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</Layout>
</template>