<script setup>
const props = defineProps({
  description: Object,
  toggleModal: Function
});
</script>

<template>
  <div class="modal-block">
    <div class="modal-content-block">
      <p v-html="description" class="modal-content"></p>
      <img src="../assets/close.svg" class="modal-close" @click="toggleModal"/>
    </div>
  </div>
</template>

<style scoped>
.modal-block {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(197, 147, 104, 0.7);
}

.modal-content-block {
  display: flex;
  align-items: start;
  max-width: 60%;
  margin: auto;
  padding: 20px;
  background-color: #efefef;
  border-radius: 15px;
}

.modal-content {
  line-height: 26px;
}

.modal-close {
  width: 20px;
  margin-left: 20px;
  cursor: pointer;
}
</style>
