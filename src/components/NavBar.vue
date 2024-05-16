<script setup>
import {onMounted} from "vue";
import {useCategoriesStore} from "../stores/categories";
import {useServicesStore} from "../stores/services";

const categoriesStore = useCategoriesStore();
const servicesStore = useServicesStore();

function getServicesList(id) {
  servicesStore.getServices(id);
}

function showCategory(id, text) {
  categoriesStore.showCategory(id, text);
}

onMounted(() => {
  categoriesStore.getCategories();
});
</script>

<template>
  <div class="nav-section">
    <nav class="nav">
      <a href="https://mfc38.ru/">
        <img src="/src/assets/logo.svg" alt="Logo mfc" class="nav-logo">
      </a>

      <hr class="line">

      <div class="category-section">
        <h2 class="category-header">Где можно использовать электронную подпись, полученную с помощью Госключа?</h2>

        <div v-for="category in categoriesStore.categories" class="category-block">
          <p class="category">{{ category.title }}</p>
          <a href="#" v-for="sub_category in category.sub_category" class="sub-category"
             @click="getServicesList(sub_category.id); showCategory(sub_category.id, sub_category.title)">
            {{ sub_category.title }}
          </a>
        </div>
      </div>

      <hr class="line">
      <a href="../assets/Памятка_Госключ_для_сайта.docx" class="button" download>
        Что такое госключ?
      </a>
    </nav>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.line {
  margin: 25px 0 25px 0;
}

.nav-section {
  height: 100%;
  width: 330px;
  padding: 20px;
  flex-shrink: 0;
}

.nav {
  height: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background-color: #efefef;
  overflow-y: auto;
}

.nav-logo {
  width: 100%;
}

.category-header {
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.05rem;
}

.category,
.sub-category {
  display: block;
  margin-bottom: 6px;
  padding: 8px 8px 8px 12px;
  background-color: #C59368;
  color: #ffffff;
  text-decoration: none;
  border-radius: 15px;
  font-size: 1.05rem;
  transition: background-color 0.2s ease-in-out;
}

.category {
  background-color: #562212;
  cursor: default;
}

.sub-category:hover {
  background-color: #562212;
}

.button {
  display: flex;
  justify-content: center;
  text-decoration: none;
  background-color: #ED5338;
  color: #ffffff;
  padding: 8px;
  border-radius: 15px;
  transition: background-color 0.2s ease-in-out;
}

.button:hover {
  background-color: #562212;
}
</style>
