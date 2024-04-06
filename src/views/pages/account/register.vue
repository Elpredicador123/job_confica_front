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
        username: "",
        password: "",
        role_id : null,
      },
      roles: [],
      submitted: false,
      tryingToRegister: false,
      isRegisterError: false,
      title: "Register"
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
    document.body.classList.add("authentication-bg");
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
    <PageHeader :title="title"/>
        <BContainer>
          <BRow>
            <BCol lg="12">
              <div class="text-center">
                <router-link to="/" class="mb-5 d-block auth-logo">
                  <img
                    src="@/assets/images/logo-dark.png"
                    alt
                    height="22"
                    class="logo logo-dark"
                  />
                  <img
                    src="@/assets/images/logo-light.png"
                    alt
                    height="22"
                    class="logo logo-light"
                  />
                </router-link>
              </div>
            </BCol>
          </BRow>
          <BRow class="align-items-center justify-content-center">
            <BCol md="8" lg="6" class="col-xl-5">
              <BCard no-body>
                <BCardBody class="p-4">
                  <div class="text-center mt-2">
                    <h5 class="text-primary">Regístrate</h5>
                  </div>
                  <div class="p-2 mt-4">
                    <div
                      v-if="notification.message"
                      :class="'alert ' + notification.type"
                    >
                      {{ notification.message }}
                    </div>

                    <BForm>
                      <BFormGroup
                        id="email-group"
                        label="Usuario"
                        class="mb-3"
                        label-for="username"
                      >
                        <BFormInput
                          id="username"
                          v-model="user.username"
                          type="text"
                          placeholder="Ingresar usuario"
                          :class="{
                            'is-invalid': submitted && v$.user.username.$error
                          }"
                        ></BFormInput>
                        <div
                          v-if="submitted && v$.user.username.required.$invalid"
                          class="invalid-feedback"
                        >
                          Usuario es requerido.
                        </div>
                      </BFormGroup>

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
                      <div class="mt-3 text-end">
                        <BButton
                          variant="primary"
                          class="w-sm"
                          @click="tryToRegisterIn"
                          >Register</BButton
                        >
                      </div>

                      <div class="mt-4 text-center">
                        <p class="text-muted mb-0">
                          Already have an account ?
                          <router-link to="/login" class="fw-medium text-primary"
                            >Login</router-link
                          >
                        </p>
                      </div>
                    </BForm>
                  </div>
                  <!-- end card-body -->
                </BCardBody>
                <!-- end card -->
              </BCard>
            </BCol>
            <!-- end col -->
          </BRow>
        </BContainer>
  </Layout>
</template>
