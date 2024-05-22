import axios from "axios";
import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    categories: {},
    header: {
      header_category: "Что такое госключ?",
      header_sub_category: "",
    },
  }),
  getters: {},
  actions: {
    async getCategories() {
      await axios
        .get("http://127.0.0.1:8000/api/v1/categories")
        .then((response) => {
          this.categories = response.data.data;
        });
    },
    showCategory(id, text) {
      if (id === 7 || id === 8) {
        this.header.header_category = "Получение государственных услуг";
        this.header.header_sub_category = text;
      } else if (id === 9) {
        this.header.header_category = "Получение инных услуг";
        this.header.header_sub_category = text;
      }
    },
  },
});
