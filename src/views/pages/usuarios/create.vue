<script>
import { useVuelidate } from "@vuelidate/core";
import Multiselect from "@vueform/multiselect";
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import { required } from "@vuelidate/validators";
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
        Nombres : null,
        Apellido_Paterno: null,
        Apellido_Materno : null,
        Dni: null,
        password: "",
        role_id : "",
        email : null,
      },
      passwordGenerated: false,
      roles: [],
      showPassword: false,
      submitted: false,
      tryingToRegister: false,
      isRegisterError: false,
      title: "NUEVO USUARIO"
    };
  },
  validations() {
    return {
      user: {
        username: { required },
        password: { required, strongPassword: this.strongPassword },
        // Valida la nueva contraseña solo si la contraseña fue generada automáticamente
        // ... Resto de tus validaciones
      }
    };
  },
  mounted() {
    this.getRol();
  },
  methods: {
    generateUsername() {
      if (this.user.Nombres && this.user.Apellido_Paterno && this.user.Dni) {
        const firstLetter = this.user.Nombres.charAt(0);
        const surname = this.user.Apellido_Paterno;
        const dniDigits = this.user.Dni.slice(0, 2);
        this.user.username = `${firstLetter}${surname}${dniDigits}`.toLowerCase();
      }
    },
    generatePassword() {
      // Separar los caracteres por tipo
      const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numericChars = '0123456789';
      const specialChars = '!@#$%^&*';
      let password = '';

      // Garantizar al menos un carácter de cada tipo
      password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
      password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
      password += numericChars[Math.floor(Math.random() * numericChars.length)];
      password += specialChars[Math.floor(Math.random() * specialChars.length)];

      // Completar la longitud de la contraseña hasta 10 caracteres
      const allChars = lowerCaseChars + upperCaseChars + numericChars + specialChars;
      for (let i = password.length; i < 10; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
      }

      // Mezclar la contraseña para que los caracteres obligatorios no estén al principio
      password = password.split('').sort(() => 0.5 - Math.random()).join('');

      this.user.password = password;
      this.passwordGenerated = true; // Indicar que se generó una contraseña
    },

    strongPassword(value) {
      // Asegurarse de que la contraseña tenga al menos 8 caracteres, un número, una mayúscula y un símbolo
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return pattern.test(value);
    },
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
              <BCardHeader style="padding: 1em; background-color: #5b73e8;color : #ffff !important">
                <BRow>
                    <BCol sm="7">
                        <i class="bx bx-check-circle"></i>&nbsp;&nbsp;&nbsp;Registrar usuario
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
                                        id="email-group"
                                        label="Nombre Completo"
                                        class="mb-3"
                                        label-for="name">
                                        <BFormInput
                                            id="name"
                                            v-model="user.Nombres"
                                            type="text"
                                            required
                                            placeholder="Ingresar Nombres"
                                            @input="generateUsername()"
                                        ></BFormInput>
                                    </BFormGroup>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="mt-4">
                                    <BFormGroup
                                        id="email-group"
                                        label="Apellido Paterno"
                                        class="mb-3"
                                        label-for="paterno">
                                        <BFormInput
                                            id="paterno"
                                            v-model="user.Apellido_Paterno"
                                            type="text"
                                            required
                                            placeholder="Ingresar Apellido Paterno"
                                            @input="generateUsername()"
                                        ></BFormInput>
                                    </BFormGroup>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="mt-4">
                                    <BFormGroup
                                        id="email-group"
                                        label="Apellido Materno"
                                        class="mb-3"
                                        label-for="materno">
                                        <BFormInput
                                            id="materno"
                                            v-model="user.Apellido_Materno"
                                            type="text"
                                            required
                                            placeholder="Ingresar Apellido Materno"
                                        ></BFormInput>
                                    </BFormGroup>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="mt-4">
                                    <BFormGroup
                                        id="email-group"
                                        label="DNI"
                                        class="mb-3"
                                        label-for="dni">
                                        <BFormInput
                                            id="dni"
                                            v-model="user.Dni"
                                            type="text"
                                            placeholder="Ingresar DNI"
                                            required
                                            @input="generateUsername()"
                                        ></BFormInput>
                                    </BFormGroup>
                                </div>
                            </BCol>
                            <BCol lg="3">
                                <div class="mt-4">
                                    <BFormGroup
                                        label="Correo"
                                        label-for="formrow-firstname-input"
                                        class="mb-12">
                                        <BFormInput
                                            id="email"
                                            v-model="user.email"
                                            type="email"
                                            placeholder="Ingresar Correo"
                                            required
                                        ></BFormInput>
                                    </BFormGroup>
                                </div>
                            </BCol>
                            <BCol lg="3">
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
                                            required
                                        ></BFormInput>

                                    </BFormGroup>
                                </div>
                            </BCol>
                            <BCol lg="3">
                              <div class="mt-4">
                                <BFormGroup id="password-group" label="Contraseña" class="mb-3" label-for="password">
                                  <div class="input-group">
                                    <BFormInput
                                      id="password"
                                      v-model="user.password"
                                      :type="showPassword ? 'text' : 'password'"
                                      placeholder="Ingresar contraseña"
                                      :class="{'is-invalid': submitted && v$.user.password.$error}"
                                    ></BFormInput>
                                    <BInputGroupAppend>
                                      <BButton variant="outline-secondary" @click="showPassword = !showPassword">
                                        <i :class="`bx ${showPassword ? 'bx-show' : 'bx-hide'}`"></i>
                                      </BButton>
                                    </BInputGroupAppend>
                                  </div>
                                  <BButton variant="secondary" @click="generatePassword">Generar Contraseña</BButton>
                                </BFormGroup>
                              </div>
                            </BCol>
                            <BCol lg="3">
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
                                >Registrar
                            </BButton>
                        </div>
                    </form>
                </BCardBody>
            </BCard>
        </BCol>
    </BRow>
</Layout>
</template>