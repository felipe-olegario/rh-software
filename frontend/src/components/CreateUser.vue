<template>
  <v-row justify="center">
    <v-dialog
      v-model="showmodal"
      persistent
      width="1024"
    >
      <v-alert
        v-model="showAlert"
        type="error"
        closable="true"
        dismissible
        class="mb-2"
      >
        {{ textException }}
      </v-alert>
      <v-card>
        <v-card-title>
          <span class="text-h5">Criação de usuário</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Nome Completo*"
                  :rules="[rules.required]"
                  v-model="user.name"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  :rules="[rules.required]"
                  v-model="user.email"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="CPF*"
                  type="string"
                  v-model="user.cpf"
                  v-mask="'###-###-###-##'"
                  maxlength="14"
                  :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            to="/"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="saveUser"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  import ApiService from '../service/ApiService';

  export default {
    data: () => ({
      showAlert: false,
      showmodal: true,
      textException: 'É necessário preencher todos os campos!',
      rules: {
        required: value => !!value || 'Field is required'
      },
      user: {
        name: '',
        email: '',
        cpf: '',
      }
    }),
    methods: {
      changeStateModal(showmodal) {
        this.showmodal = showmodal
      },
      async saveUser() {
        if (!this.user.email || !this.user.name || !this.user.cpf) {
          this.textException = 'É necessário preencher todos os campos!'
          this.showAlert = true;
        } else {
          try {
            this.user.cpf = Number(this.user.cpf.replace(/-/g, ''))
            await ApiService.createUser(this.user)
            this.$router.push('/')
          } catch (error) {
            console.log(error);
            this.textException = error.message
            this.showAlert = true;
          }
        }
      },
    }
  }
</script>
