<template>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      persistent
      scrollable
      width="auto"
    >
      <v-card class="pa-5">
        <v-card-title>Registro de ponto</v-card-title>
        <v-divider></v-divider>
        <create-time-card @getTimeCard="getTimeCard"/>
        <v-card-text style="height: 300px;">
          <p v-if="!timeCards.length" class="mt-10">Nenhum Registro encontrado</p>
          <v-list>
            <v-list-item
              v-for="timeCard in timeCards"
              :key="timeCard"
            >
              <v-list-item-title>{{ 'Entrada: '+ timeCard.entryTime }}</v-list-item-title>
              <v-list-item-title>{{ 'Saída: '+ timeCard.exitTime }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="backToHome"
          >
            Sair
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import CreateTimeCard from '../components/CreateTimeCard.vue';
import ApiService from '../service/ApiService';
import moment from 'moment'

  export default {
  components: { CreateTimeCard },
    data () {
      return {
        showModal: true,
        timeCards: []
      }
    },
    async created() {
      this.getTimeCard()
    },
    methods: {
      backToHome() {
        this.$router.push('/')
      },
      async getTimeCard() {
        const response = await ApiService.getTimeCardByCpf(this.$route.params.cpf)
        this.timeCards = response.map((item) => {
          return {
            entryTime: moment(item.entryTime).format('DD/MM/YYYY HH:mm:ss'),
            exitTime: moment(item.exitTime).format('DD/MM/YYYY HH:mm:ss')
          }
        })
      }
    }
  }
</script>
