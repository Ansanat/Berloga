<template>
<div class="v-contacts">
    <iframe class="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A6008a3aa7b056afb52e4c45051ef9bd227c828e84ba14593a9c08814231b54d7&amp;source=constructor" frameborder="0"></iframe>
    <p>Контактный телефон: 292-07-09</p>
    <span><a href="https://t.me/ErchimBerloga"><img class="telegram" src="@/images/telegram_logo.png" /></a></span>
    <span><a href="https://vk.com/berlogansk"><img class="telegram" src="@/images/VK_logo.png" /></a></span>
    <span><a href="https://www.instagram.com/berlogansk/"><img class="telegram" src="@/images/Inst_logo.jpg" /></a></span>
</div>
</template>

<script>

export default {
  name: 'contacts-page',
  components: {
  }
}
</script>

<style>
.v-contacts{
  border: 5px solid #121820;
}
.telegram{
  width: 40px;
  margin-top: 5px;
  margin-right: 5px;
}
.contacts{
  width: 50%;
  position: absolute;
  top: 10%;
  transform: translate(0, -60%);
}
.map{
  display: block;
  width: 705px;
  height: 400px;
  margin: 10px;
}
@media screen and (max-width: 700px) {
  .map {
    width: 100%;
    margin: 0px;
  }
  .telegram{
    width: 100px;
  }
}
</style>
