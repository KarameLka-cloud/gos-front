import axios from "axios";
import {defineStore} from "pinia";

export const useServicesStore = defineStore("services", {
  state: () => ({
    services: {},
  }),
  getters: {},
  actions: {
    async getServices(id) {
      await axios
        .get(`/api/v1/services/${id}`)
        .then((response) => {
          this.services = response.data;
        });
    },
  },
});
