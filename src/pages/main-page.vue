<template>
<div class="v-main-page">
  <Gallery />
  <div class="text-container">
      <img src="@/images/banya/banyaLogo.png" width="100px"/>
      <div class="zagolovok" id="zagolovok">Банный комплекс "Берлога"</div>
  </div>
  <div class="help-background">
      <div class="help" style="padding-top: 20px;">Современная общественная баня, место где можно расслабиться, восстановить свое физическое и психоэмоциональное состояние. Комплекс рассчитан на комфортное пребывание 50 человек. На территории комплекса большой зал отдыха с мягкой мебелью и возможностью просмотра телевизионных программ. Для любителей банной культуры Русская парная объем которой 70м.куб. Температура в парной 85 градусов, отапливается парная газом что позволяет создать благоприятный климат и мягкий пар. Для любителей мягкого влажного пара работает хаммам, в моечном отделении есть бассейн с комнатной температурой воды, для любителей экстрима имеется купель с ледяной водой. Клиентам комплекса предлагается бар и кухня.</div>
  </div>
  <CardGallery />
  <div class="text-container">
      <div class="zagolovok" id="zagolovok">Общий пар</div>
  </div>
  <div class="help-background">
      <div class="help" style="padding-top: 20px;">Общее отделение банного комплекса Берлога рассчитано на одновременное посещение пятидесяти человек. Каждому клиенту предоставляется отдельный шкафчик с электронным замком, номер на шкафчике соответствует посадочному месту. В моечном отделении находится бассейн размерами 3*6 метра температура воды 28 градусов. Русская парная рассчитанная на 20 человек. Турецкий хамам в котором могут комфортно расположиться 10 человек. Для любителей экстрима есть купель с температурой воды 12 градусов. Для клиентов бани работает кухня.</div>
  </div>
  <div class="cards">
    <div class="male-time-card">
      <div class="time-card-header">Мужское время</div>
      <MaleTime class="MaleTime"/>
    </div>
    <div class="male-time-card">
      <div class="time-card-header">Женское время</div>
      <MaleTime class="MaleTime"/>
    </div>
  </div>
  <div class="text-container">
      <div class="zagolovok" id="zagolovok">UDS???</div>
  </div>
</div>
</template>

<script>
import MaleTime from '@/components/v-male.vue'
import Gallery from '@/components/v-gallery.vue'
import CardGallery from '@/components/v-card-gallery'

export default {
  name: 'main-page',
  components: {
    Gallery,
    CardGallery,
    MaleTime
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.cards{
  width: 100%;
}
.MaleTime{
  width:500px;
  height: 230px;
  background-color:#f5f8fc;
  border-radius: 20px;
  border: 1px solid #121820
}
.male-time-card{
  display: inline-block;
  width: 49%;
  margin-top: 30px;
  margin-bottom: 30px;
}
.time-card-header{
  margin-top: 30px;
  text-align: center;
      font-size: 40px;
  margin-bottom:20px;
      margin-left: 40px;
  left: 20%;
}
.v-main-page{
    border: 5px solid #121820;
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
    font-size: 40px;
    display:inline-block; 
    text-align: center;
}
.cursiv-text{
    width: 25%;
    font-size: 15px;
    font-style: italic;
    display: inline-block;
    margin-left: 40px;
}

.help-background{
    background-color: #f5f8fc;
    height: 300px;
    margin-top: 60px;
}

.help{
    text-indent: 1.5em;
    margin-left: auto;
    margin-right: auto;
    text-align: justify;
    font-style: italic;
    font-size: 20px;
    width: 50%;
}

.spisok{
    margin-top: 60px;
    font-family: Helvetica;
    text-align: center;
    margin: 0 auto;
}
@media screen and (max-width: 700px) {
  .male-time-card{
    display: block;
    width: 100%;
  }
  .help-background{
    background-color: #f5f8fc;
    height: 670px;
    margin-top: 60px;
  }
  .time-card-header{
    margin-left: 0px;
  }
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
    .MaleTime{
      width:300px;
      height: 230px;
      background-color:#f5f8fc;
      border-radius: 20px;
      border: 1px solid #121820
    }
}
</style>
