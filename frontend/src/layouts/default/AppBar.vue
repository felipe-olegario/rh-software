<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div class="d-flex justify-space-between mx-2">
        <div>
          <p class="font-weight-light">
            Felipe Olegario - Dev. Full Stack - Sistema de Agendamentos
          </p>
          <CreateUser ref="modalRef" />
        </div>
        <v-btn @click="openModal" prepend-icon="mdi-plus" color="green" variant="flat">
          Usuário
        </v-btn>
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script>

export default {
  methods: {
    openModal() {
      this.$router.push('/create-user')
    },
  },
};
</script>
