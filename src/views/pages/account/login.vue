<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

/**
 * Login component
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "admin@themesbrand.com",
      password: "123456",
      submitted: false,
      authError: null,
      tryingToLogIn: false,
      isAuthError: false
    };
  },
  validations: {
    email: {
      required,
      
    },
    password: {
      required
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
  },
  methods: {
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {

          const { email, password } = this;
          if (email && password) {
            this.$store.dispatch("authfack/login", {
              email,
              password
            });
          }
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="account-pages my-5 pt-sm-5">
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
                  <h5 class="text-primary">Bienvenido</h5>
                  <p class="text-muted">Ingresa para continuar.</p>
                </div>
                <div class="p-2 mt-4">
                  <div
                    v-if="isAuthError"
                    class="alert alert-danger mt-4 alert-dismissible"
                    role="alert"
                  >
                    {{ authError }}
                  </div>
                  <div
                    v-if="notification.message"
                    class="alert mt-4"
                    :class="'alert-' + notification.type"
                    role="alert"
                  >
                    {{ notification.message }}
                  </div>
                  <BForm>
                    <BFormGroup
                      id="input-group-1"
                      class="mb-3"
                      label="Usuario"
                      label-for="input-1"
                    >
                      <BFormInput
                        id="input-1"
                        v-model="email"
                        type="text"
                        placeholder="Ingresa usuario"
                        :class="{ 'is-invalid': submitted && v$.email.$error }"
                      ></BFormInput>
                      <div
                        v-if="submitted && v$.email.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="v$.email.required.$invalid"
                          >Usuario es requerido.</span
                        >
                        <span v-if="v$.email.email.$invalid"
                          >Ingresa un usuario valido.</span
                        >
                      </div>
                    </BFormGroup>

                    <BFormGroup id="input-group-2" class="mb-3">
                      <div class="float-end">
                        <router-link
                          to="/forgot-password"
                          class="text-muted"
                          >Olvidaste tu contraseña?</router-link
                        >
                      </div>
                      <label for="input-2">Contraseña</label>
                      <BFormInput
                        id="input-2"
                        v-model="password"
                        type="password"
                        placeholder="Ingresa contraseña"
                        :class="{
                          'is-invalid': submitted && v$.password.$error
                        }"
                      ></BFormInput>
                      <div
                        v-if="submitted && v$.password.required.$invalid"
                        class="invalid-feedback"
                      >
                        Contraseña es requerido.
                      </div>
                    </BFormGroup>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="auth-remember-check"
                      />
                      <label class="form-check-label" for="auth-remember-check"
                        >Recuérdame</label
                      >
                    </div>
                    <div class="mt-3 text-end">
                      <BButton
                        variant="primary"
                        class="w-sm"
                        @click="tryToLogIn"
                        >Ingresar</BButton
                      >
                    </div>
                  </BForm>
                </div>
                <!-- end card-body -->
              </BCardBody>
              <!-- end card -->
            </BCard>
            <!-- end row -->
          </BCol>
          <!-- end col -->
        </BRow>
        <!-- end row -->
      </BContainer>
    </div>
  </div>
</template>

<style lang="scss" module></style>
