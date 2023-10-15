<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="12" v-if="!users.length" class="d-flex align-center justify-center">
        <v-card class="mb-3">
          <v-card-text>Nenhum cliente Encontrado</v-card-text>
        </v-card>
      </v-col>
      <v-col v-else v-for="user in users" :key="user.id" cols="12" sm="6" md="4" lg="3">
        <v-card :loading="false">
          <v-card-title>{{ user.name }}</v-card-title>
          <v-card-subtitle>{{ user.cpf }}</v-card-subtitle>
          <v-card-text>{{ user.email }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="flat" @click="goToDataTimeByCpf(user.cpf)">Agendamentos</v-btn>
            <v-btn color="red" variant="flat" @click="deleteUsers(user.cpf)">Remover</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApiService from '../service/ApiService';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data() {
    return {
      users: [],
    };
  },
  async created() {
    await this.getUsers()
  },
  methods: {
    async getUsers() {
      this.users = await ApiService.getUsers();
    },
    async deleteUsers(cpf) {
      await ApiService.deleteUser(cpf);
      await this.getUsers()
    },
    goToDataTimeByCpf(cpf) {
      this.$router.push(`/data-time/${cpf}`)
    }
  }
};
</script>
