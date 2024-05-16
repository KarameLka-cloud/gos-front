<script setup>
import {useCategoriesStore} from '../stores/categories';
import {useServicesStore} from '../stores/services';
import ServiceBlock from './ui/ServiceBlock.vue';
import ServiceList from './ui/ServiceList.vue';

const categoriesStore = useCategoriesStore();
const servicesStore = useServicesStore();
</script>

<template>
  <main class="main">
    <div class="main-section">
      <div class="main-header">
        <h2 class="header-content">{{ categoriesStore.header.header_category }}</h2>
        <h2 class="header-content">{{ categoriesStore.header.header_sub_category }}</h2>
      </div>
      <div class="main-block">
        <div class="main-content">
          <img v-if="!servicesStore.services.length" src="../assets/services-d63e2e6c.svg" alt=""
               class="img-main-section">
          <div v-else v-for="service in servicesStore.services">
            <ServiceBlock v-if="service.link" :service="service"/>
            <ServiceList v-else :service="service"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.main {
  height: 100%;
  width: 100%;
  padding: 20px 20px 20px 0;
}

.main-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 20px;
  border: 4px dashed #C59368;
  border-radius: 15px;
}

.main-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background-color: #ED5338;
}

.header-content {
  color: #efefef;
  font-size: 1.8rem;
}

.header-content:not(:last-child) {
  margin-bottom: 20px;
}

.main-block {
  height: 75%;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  background-color: #efefef;
}

.main-content {
  height: 100%;
  overflow-y: auto;
}

.img-main-section {
  display: block;
  height: 100%;
  margin: 0 auto;
}
</style>
