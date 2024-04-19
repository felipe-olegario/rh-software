<template>
  <div d-flex flex-column>
    <div class="d-flex">
      <v-text-field
        v-model="entryDate"
        label="Entrada"
        placeholder="DD/MM/YYYY"
        v-mask="'##/##/####'"
        maxlength="10"
      />
      <v-text-field
        v-model="entryHour"
        placeholder="00:00"
        v-mask="'##:##'"
        maxlength="5"
      />
    </div>
    <div class="d-flex">
      <v-text-field
        v-model="exitDate"
        label="Saída"
        placeholder="DD/MM/YYYY"
        v-mask="'##/##/####'"
        maxlength="10"
      />
      <v-text-field
        v-model="exitHour"
        placeholder="00:00"
        v-mask="'##:##'"
        maxlength="5"
      />
    </div>
    <v-btn
      variant="flat"
      color="green"
      @click="saveTimeCard"
    >
      Salvar
    </v-btn>
  </div>
</template>
<script>
import moment from 'moment'
import 'moment/locale/pt-br';
import ApiService from '../service/ApiService';

export default {
  data() {
    return {
      entryDate: '',
      entryHour: '',
      exitDate: '',
      exitHour: '',
    }
  },
  mounted() {
    // Define a data atual no formato DD/MM/YYYY
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();
    this.exitDate = `${day}/${month}/${year}`;
    this.entryDate = `${day}/${month}/${year}`;
  },
  created() {
    moment.locale('pt-br')
  },
  methods: {
    async saveTimeCard() {
      const entryDateSplited = this.entryDate.split('/');
      const exitDateSplited = this.exitDate.split('/');
      const formatedEntryDateHour = `${entryDateSplited[2]}-${entryDateSplited[1]}-${entryDateSplited[0]}T${this.entryHour}:00Z`
      const formatedExitDateHour = `${exitDateSplited[2]}-${exitDateSplited[1]}-${exitDateSplited[0]}T${this.exitHour}:00Z`
      await ApiService.createTimeCardByCpf(this.$route.params.cpf, {entryTime: formatedEntryDateHour, exitTime: formatedExitDateHour})
      this.$emit('getTimeCard')
    }
  },
}
</script>
