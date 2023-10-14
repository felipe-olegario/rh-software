<template>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      scrollable
      width="auto"
    >
      <template>
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Registro de ponto</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <p v-if="!timeCard.length">Nenhum Registro encontrado</p>
          <v-list :items="timeCard"></v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="backToHome"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="backToHome"
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
    data () {
      return {
        showModal: true,
        timeCard: []
      }
    },
    async created() {
      this.timeCard = await ApiService.getTimeCardByCpf(this.$route.params)
    },
    methods: {
      backToHome() {
        this.$router.push('/')
      }
    }
  }
</script>
