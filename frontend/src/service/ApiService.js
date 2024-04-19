import axios from 'axios';

const ApiService = {
  baseURL: 'http://localhost:3001',

  getUsers() {
    return axios.get(`${this.baseURL}/users`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(`Erro ao fazer a solicitação ${error}`);
      });
  },
  createUser(user) {
    return axios.post(`${this.baseURL}/users`, user)
      .then(response => response.data)
      .catch(error => {
        throw new Error(`Erro ao fazer a solicitação ${error}`);
      });
  },
  deleteUser(cpf) {
    return axios.delete(`${this.baseURL}/users/${cpf}`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(`Erro ao fazer a solicitação ${error}`);
      });
  },
  getTimeCardByCpf(cpf) {
    return axios.get(`${this.baseURL}/users/${cpf}/time-card`)
      .then(response => response.data)
      .catch(error => {
        throw new Error(`Erro ao fazer a solicitação ${error}`);
      });
  },
  createTimeCardByCpf(cpf, timeCard) {
    return axios.post(`${this.baseURL}/users/${cpf}/time-card`, timeCard)
      .then(response => response.data)
      .catch(error => {
        throw new Error(`Erro ao fazer a solicitação ${error}`);
      });
  },
};

export default ApiService;
