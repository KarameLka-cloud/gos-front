<script setup>
const props = defineProps({
  toggleMemo: Function
})
</script>

<template>
  <div class="main-memo">
    <div class="main-block-memo">
      <div class="main-memo-content">
        <h2 class="memo-header">Получение сертификата УНЭП в МП Госключ</h2>
        <h3 class="memo-step">Шаг 1</h3>
        <p>
          Удостоверьтесь в полученном статусе учетной записи на портале Госуслуг – «Подтвержденная учетная запись».
        </p>
        <p>
          Можно проверить одним из способов:
        </p>
        <ul>
          <li>
            в мобильном приложении «Госуслуги» Раздел «Профиль» Информация будет указана рядом с ФИО гражданина;
          </li>
          <li>
            на портале Госуслуг (<a href="https://gosuslugi.ru">gosuslugi.ru</a>) Нажать на иконку пользователя (правый
            верхний угол экрана) Раздел
            «Профиль» Информация будет указана рядом с ФИО гражданина.
          </li>
        </ul>
        <p>
          При отсутствии личного кабинета или подтвержденной учетной записи на портале Госуслуг, это можно исправить:
        </p>
        <ul>
          <li>
            - лично обратившись в ГАУ «МФЦ ИО» с документом, удостоверяющим личность и СНИЛС;
          </li>
          <li>
            - самостоятельно, предварительно ознакомившись с информацией по ссылке <a href="https://mfc38.ru/el-uslugi">https://mfc38.ru/el-uslugi</a>
          </li>
        </ul>

        <h3 class="memo-step">Шаг 2</h3>
        <p>
          Установите МП Госключ
          <br>
          Скачайте мобильное приложение в магазине приложений AppStore, AppGallery, PlayMarket или RuStore
        </p>

        <h3 class="memo-step">Шаг 3</h3>
        <p>
          Пройдите регистрацию в МП Госключ и получите УНЭП, предварительно ознакомившись с инструкцией (страницы 1-5)
          по ссылке <a href="https://gu-st.ru/content/Other/doc/client_path_goskey.pdf">gu-st.ru/content/Other/doc/client_path_goskey.pdf</a>
        </p>

        <h2 class="memo-header">Получение сертификата УКЭП в МП Госключ</h2>
        <h3 class="memo-step">Шаг 1</h3>
        <p>Сначала получите сертификат УНЭП в МП Госключ, более подробно как это сделать указано выше.</p>

        <h3 class="memo-step">Шаг 2</h3>
        <p>
          Отправьте запрос на создание УКЭП в МП Госключ, предварительно ознакомившись с инструкцией (страница 6) по
          ссылке <a href="https://gu-st.ru/content/Other/doc/client_path_goskey.pdf">gu-st.ru/content/Other/doc/client_path_goskey.pdf</a>
        </p>

        <h3 class="memo-step">Шаг 3</h3>
        <p>
          Пройдите идентификацию, одним из нижеуказанных способов:
        </p>
        <ol>
          <li>
            Очная идентификация (страницы 7-9 инструкции на шаге 2);
          </li>
          <li>
            По заграничному паспорту (страницы 10-11, 14 инструкции на шаге 2);
          </li>
          <li>
            По биометрии (страницы 12-14 инструкции на шаге 2).
          </li>
        </ol>
      </div>
      <img src="../assets/close.svg" alt="" class="memo-close-icon" @click.prevent="toggleMemo"/>
    </div>
  </div>
</template>

<style scoped>
.main-memo {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(197, 147, 104, 0.7);
}

.main-block-memo {
  display: flex;
  align-items: start;
  justify-content: space-between;
  max-width: 60%;
  height: fit-content;
  margin: auto;
  padding: 20px;
  background-color: #efefef;
  border-radius: 15px;
}

.main-memo-content {
  width: 100%;
}

.memo-header,
.memo-step {
  text-align: center;
  font-weight: bold;
}

.memo-step {
  margin: 10px 0;
}

.memo-close-icon {
  width: 20px;
  margin-left: 10px;
  cursor: pointer;
}

p {
  margin-bottom: 10px;
}
</style>
