<script setup>
import {ref} from "vue";
import ServiceBlock from "./ServiceBlock.vue";

const props = defineProps({
  services: Object
});

let isVisibleList = ref(false);

function toggleList() {
  isVisibleList.value = !isVisibleList.value;
}
</script>

<template>
  <div class="service-block service-block-drop" @click="toggleList">
    <p>{{ services.title }}</p>
    <a href="#" class="button-block-drop">
      <img src="../../assets/minus.svg" alt="" v-if="isVisibleList" class="button-block-drop-img"/>
      <img src="../../assets/plus.svg" alt="" v-else class="button-block-drop-img"/>
    </a>
  </div>

  <div class="left-line">
    <div v-for="service in props.services.children" v-show="isVisibleList">
      <ServiceBlock v-if="service.link" :service="service"/>
    </div>
  </div>
</template>

<style scoped>
.service-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 15px;
  color: #efefef;
  background-color: #C59368;
}

.service-block-drop {
  cursor: pointer;
  background-color: #562212;
}

.button-block-drop-img {
  height: 30px;
}

.left-line {
  border-left: 4px dotted #562212;
  padding-left: 10px;
}
</style>
