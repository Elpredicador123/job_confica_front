<script>

/**
 * Login-1 component
 */

export default {
  mounted() {
    document.body.classList.add("authentication-bg");
  },
  data() {
    return {
      title: "Log in",
      form: {}
    };

  },
  methods: {
      async submit() {
        this.$http.post(this.$apiURL+'login', this.form, {
            }).then(response => {
              console.log(response)
              localStorage.setItem('user-token', response.data.token); // Almacenar el token
              this.$http.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
              this.$store.dispatch('auth/logIn', response.data.token);
              this.$router.push({ name: 'Listado' });
            }).catch(error => {
                console.error(error);
                  this.$swal({
                    icon: "error",
                    title: "Oops...",
                    text: error,
                  });
            });

        // try {
        //   const response = await axios.post(this.$apiURL+'login', this.form, {}).then(response => {
        //         console.log(response)
        //     });
        //   localStorage.setItem('user-token', response.data.token); // Almacenar el token
        //   axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        //   // Redirigir al usuario a la página de inicio o dashboard
        // } catch (error) {
        //   console.error(error.response.data);
        //   // Manejo de errores (mostrar mensaje al usuario)
        // }
      }
  },
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
                <img src="@/assets/images/logo-dark.png" alt="" height="22" class="logo logo-dark" />
                <img src="@/assets/images/logo-light.png" alt="" height="22" class="logo logo-light" />
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
                  <BForm @submit.prevent="submit">
                    <div class="mb-3">
                      <label for="username">Username</label>
                      <input type="text" class="form-control"  v-model="form.username" placeholder="Enter username" />
                    </div>

                    <div class="mb-3">
                      <div class="float-end">
                        <router-link to="/auth/recoverpwd" class="text-muted">
                          Forgot password?</router-link>
                      </div>
                      <label for="userpassword">Password</label>
                      <input type="password" class="form-control" v-model="form.password" id="userpassword" placeholder="Enter password" />
                    </div>

                    <div class="form-check">
                      <input type="checkbox" class="form-check-input" id="auth-remember-check" />
                      <label class="form-check-label" for="auth-remember-check">Remember me</label>
                    </div>

                    <div class="mt-3 text-end">
                      <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">
                        Log In
                      </button>
                    </div>

                    <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="font-size-14 mb-3 title">Sign in with</h5>
                      </div>

                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a href="javascript:void()" class="social-list-item bg-primary text-white border-primary">
                            <i class="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="javascript:void()" class="social-list-item bg-info text-white border-info">
                            <i class="mdi mdi-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="javascript:void()" class="social-list-item bg-danger text-white border-danger">
                            <i class="mdi mdi-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="mt-4 text-center">
                      <p class="mb-0">
                        Don't have an account ?
                        <router-link to="/auth/register-1" class="fw-medium text-primary">
                          Signup now</router-link>
                      </p>
                    </div>
                  </BForm>
                </div>
              </BCardBody>
            </BCard>

            <div class="mt-5 text-center">
              <p>
                © {{ new Date().getFullYear() }} Minible. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Themesbrand
              </p>
            </div>
          </BCol>
        </BRow>
        <!-- end row -->
      </BContainer>
      <!-- end container -->
    </div>
  </div>
</template>
