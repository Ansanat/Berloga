<template>
  <Gallery />
  <div class="text-container">
      <img src="@/images/banya/banyaLogo.png" width="100px"/>
      <div class="zagolovok" id="zagolovok">Общественная баня</div>
      <div class="cursiv-text">Банный комплекс <b>"Берлога"</b> – современная общественная баня, место где можно расслабиться, восстановить свое физическое и психоэмоциональное состояние.</div>
  </div>
  <div class="help-background" id="helpBlock">
      <div class="help" style="padding-top: 20px;" id="helpText">Общее отделение банного комплекса Берлога рассчитано на одновременное посещение пятидесяти человек. Каждому клиенту предоставляется отдельный шкафчик с электронным замком, номер на шкафчике соответствует посадочному месту.</div>
      <div class="help" style="padding-top: 20px;" id="helpUl1">- Бассейн 3х6 метров с температурой 28 градусов</div>
      <div class="help" id="helpUl2">- Русская парная на 20 человек</div>
      <div class="help" id="helpUl3">- Турецкий хамам на 10 человек</div>
      <div class="help" id="helpUl4">- Купель с температурой воды 12 градусов</div>
      <div class="help" id="helpUl5">- Работает кухня</div>
  </div>
  <div class="text-container">
      <div class="zagolovok" id="zagolovok">Мужское время</div>
  </div>
</template>

<script>
import Gallery from '@/components/v-gallery.vue'

export default {
  name: 'main-page',
  components: {
    Gallery
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.text-container {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.zagolovok{
    margin-top: 0;
    margin-left: 40px;
    font-family: Helvetica;
    font-size: 40px;
    display:inline-block; 
    text-align: center;
}
.cursiv-text{
    width: 25%;
    font-size: 15px;
    font-style: italic;
    font-family: Helvetica;
    display: inline-block;
    margin-left: 40px;
}

.help-background{
    background-color: #f5f8fc;
    height: 300px;
    margin-top: 60px;
}

.help{
    font-family: Helvetica;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;
    font-style: italic;
    width: 50%;
}

.spisok{
    margin-top: 60px;
    font-family: Helvetica;
    text-align: center;
    margin: 0 auto;
}
@media screen and (max-width: 700px) {
    .zagolovok{
        margin-left: 2px;
        font-size: 30px;
    }
    .cursiv-text{
        display: none;
    }
    .help{
        width: 90%;
    }
}
</style>
