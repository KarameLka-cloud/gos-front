<script setup>
import {ref} from "vue";
import ModalWindow from "../ModalWindow.vue";

const props = defineProps({
  service: Object
});

let isVisibleModal = ref(false);

function toggleModal() {
  isVisibleModal.value = !isVisibleModal.value;
}
</script>

<template>
  <ModalWindow :description="service.description" v-show="isVisibleModal" :toggleModal="toggleModal"/>
  <div class="service-block">
    <p>{{ props.service.title }}</p>
    <img src="../../assets/question.svg" alt="" v-if="service.description" class="modal-img" @click="toggleModal">
    <a :href="props.service.link" class="service-link">Получить услугу</a>
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

.service-link {
  height: fit-content;
  flex-shrink: 0;
  padding: 10px;
  margin-left: 20px;
  color: #efefef;
  border-radius: 15px;
  background-color: #562212;
  text-decoration: none;
}

.modal-img {
  height: 30px;
  margin-left: 20px;
  margin-right: auto;
  cursor: pointer;
}
</style>
