<script setup>
import {useCategoriesStore} from '../stores/categories';
import {useServicesStore} from '../stores/services';
import ServiceBlock from './ui/ServiceBlock.vue';
import ServiceList from './ui/ServiceList.vue';
import MemoInfo from "./MemoInfo.vue";
import {ref} from "vue";

const categoriesStore = useCategoriesStore();
const servicesStore = useServicesStore();

let isVisibleMemo = ref(false);

function toggleMemo() {
  isVisibleMemo.value = !isVisibleMemo.value;
}
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
          <div class="main-info" v-if="!Object.keys(servicesStore.services).length">
            <MemoInfo v-show="isVisibleMemo" :toggleMemo="toggleMemo"/>
            <p class="main-info-content"><b>Госключ</b> — это мобильное приложение, разработанное государством для
              подписания юридически значимых
              документов в электронном виде. С помощью <b>Госключа</b> можно бесплатно получить сертификат усиленной
              неквалифицированной электронной подписи (далее - <b>УНЭП</b>) и усиленной квалифицированной электронной
              подписи
              (далее - <b>УКЭП</b>).
            </p>
            <p class="main-info-content">
              С информацией как получить сертификаты <b>УНЭП</b> и <b>УКЭП</b> в Госключе, можно ознакомиться
              подробнее
              <a href="#" @click.prevent="toggleMemo">здесь</a>.
            </p>
            <p class="main-info-content main-info-dangerous">
              <b>! В случае удаления МП Гоа, сертификаты УНЭН и УКЭП, которые были выпущены с его помощью, становятся
                больше не доступны для использования.</b>
              <br>
              <b>В этом случае вы можете получить новые сертификаты УНЭП и УКЭП, а старые отозвать через Госуслуги
                выполнив следующие шаги:</b> личный кабинет портала Госуслуг раздел «<b>Профиль</b>» вкладку «<b>Электронная
              подпись</b>» нажать
              кнопку "<b>Отозвать</b>" напротив нужного сертификата электронной подписи.
            </p>
            <p class="main-info-content">
              Со всей информацией о <b>Госключе</b> вы можете ознакомиться на <a
                href="https://www.gosuslugi.ru/goskey?ref=goskey.ru">госуслугах</a> или <a
                href="https://t.me/goskey_goskey">телеграм
              канале</a>.
            </p>
          </div>
          <div v-else v-for="service in servicesStore.services.service">
            <ServiceBlock v-if="service.link" :service="service"/>
            <ServiceList v-else :services="service"/>
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
  line-height: 1.6;
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

.main-info-content {
  font-size: 1.15rem;
  color: #562212;
}

.main-info-content:not(:last-child) {
  margin-bottom: 20px;
}

.main-info-dangerous {
  color: red;
}
</style>
