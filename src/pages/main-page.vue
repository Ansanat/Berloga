<template>
<div class="v-main-page" id="main-page">
  <Gallery />
  <div class="text-container">
      <img src="@/images/banya/banyaLogo.png" id="berloga" width="100px"/>
      <div class="zagolovok">Банный комплекс "Берлога"</div>
  </div>
  <div class="help-background">
      <div class="help" style="padding-top: 20px;">Современная общественная баня, место где можно расслабиться, восстановить свое физическое и психоэмоциональное состояние. Комплекс рассчитан на комфортное пребывание 50 человек. На территории комплекса большой зал отдыха с мягкой мебелью и возможностью просмотра телевизионных программ. Для любителей банной культуры Русская парная объем которой 70м.куб. Температура в парной 85 градусов, отапливается парная газом что позволяет создать благоприятный климат и мягкий пар. Для любителей мягкого влажного пара работает хаммам, в моечном отделении есть бассейн с комнатной температурой воды, для любителей экстрима имеется купель с ледяной водой. Клиентам комплекса предлагается бар и кухня.</div>
  </div>
  <CardGallery />
  <div class="text-container">
      <div class="zagolovok" id="common">Общее отделение</div>
  </div>
  <div class="help-background">
      <div class="help" style="padding-top: 20px;">Общее отделение банного комплекса Берлога рассчитано на одновременное посещение пятидесяти человек. Каждому клиенту предоставляется отдельный шкафчик с электронным замком, номер на шкафчике соответствует посадочному месту. В моечном отделении находится бассейн размерами 3*6 метра температура воды 28 градусов. Русская парная рассчитанная на 20 человек. Турецкий хамам в котором могут комфортно расположиться 10 человек. Для любителей экстрима есть купель с температурой воды 12 градусов. Для клиентов бани работает кухня.</div>
  </div>
    <!--  -->
    <!-- <div class="alert">
      <div class="alert-header">Внимание!</div>
      <div class="alert-text" style="font-size: 25px;"><b>С 30.06.2025 - 29.07.2025</b> </div>
      <div class="alert-text" style="font-size: 25px;"><b><u>БК "Берлога" не работает</u></b> </div>
      <br>
      <div class="alert-text" style="font-size: 25px;"><b>Семейный номер работает круглосуточно!</b> </div>
      <div class="alert-text"><b>Номер для бронирования:</b></div>
      <div class="alert-text">+7 (913) 916-07-09 </div>
      <div class="alert-text" style="font-size: 25px;"><b>Прейскурант цен на посещение общего отделения БК "Берлога"</b> </div>
      <div class="alert-text" style="font-size: 25px;"><b>с 3.06.2025 - 1.09.2025</b> </div>
    </div> -->
    <!--  -->
    <!-- NEW YEAR SCHEDULE (commented out)
    <div class="alert">
      <div class="alert-header" style="font-size: 28px; margin-bottom: 15px;"><b>29.12.2025-13.01.2026</b></div>
      
      <div class="alert-section">
        <div class="alert-text" style="font-size: 22px; font-weight: bold; margin-bottom: 10px;">МУЖСКОЕ ВРЕМЯ</div>
        <div class="alert-text"><b>29.12.2025:</b> 17:00-23:00 - 1200 руб./2 ч.</div>
        <div class="alert-text"><b>30.12.2025:</b> 11:00-15:00 - 700 руб./2ч.; 15:00-23:00 - 1200 руб./2 ч.</div>
        <div class="alert-text"><b>31.12.2025:</b> С 11:00-20:00 - 1800 руб./2 ч.</div>
        <div class="alert-text"><b>1.01.2026:</b> НЕ РАБОТАЕМ</div>
        <div class="alert-text"><b>2.01.2026:</b> 16:00-23:00 - 1800 руб./2 ч.</div>
        <div class="alert-text"><b>3.01-11.01.2026:</b> 11:00-23:00 - 1800 руб./2 ч.</div>
      </div>

      <div class="alert-section" style="margin-top: 20px;">
        <div class="alert-text" style="font-size: 22px; font-weight: bold; margin-bottom: 10px;">ЖЕНСКОЕ ВРЕМЯ</div>
        <div class="alert-text"><b>7.01.2026:</b> 11:00-23:00 - 1500 руб./2 ч.</div>
      </div>

      <div class="alert-text" style="font-size: 20px; margin-top: 20px; font-weight: bold;">с 13.01.2026 работаем в обычном режиме</div>
    </div>
    -->
  <div class="cards">
    <div class="male-time-card">
      <div class="time-card-header" id="maleTime">Мужское время</div>
      <MaleTime class="MaleTime"/>
    </div>
    <div class="male-time-card">
      <div class="time-card-header" id="femaleTime">Женское время</div>
      <FemaleTime class="MaleTime"/>
    </div>
  </div>

  <div class="text-container">
      <div class="zagolovok" id="UDS">Система лояльности</div>
  </div>
  <div class="UDS">
    <img src="@/images/UDS1.jpg" class="UDS-image"/>
    <img src="@/images/UDS2.jpg" class="UDS-image"/>
  </div>
  <div class="uds-button-container">
    <a href="https://berlogansk.uds.app/c/join?ref=qfah2532" target="_blank" class="uds-button">Подключиться к UDS</a>
  </div>
</div>
</template>

<script>
import MaleTime from '@/components/v-male.vue'
import FemaleTime from '@/components/v-female.vue'
import Gallery from '@/components/v-gallery.vue'
import CardGallery from '@/components/v-card-gallery'

export default {
  name: 'main-page',
  components: {
    Gallery,
    CardGallery,
    MaleTime,
    FemaleTime,
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.alert {
  box-sizing: border-box;
  padding-right: 10px;
  width: 100%;
  padding-bottom: 20px;
  border-top: 3px solid #121820;
  border-bottom: 3px solid #121820;
}

.alert-header {
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.alert-text {
  margin: auto;
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
}

.alert-section {
  margin-top: 15px;
}

.UDS{
  width: 100%;
  margin-top: 20px;
}
.UDS-image{
  display: inline-block;
  width: 50%;
}
.uds-button-container {
  width: 100%;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
.uds-button {
  display: inline-block;
  padding: 15px 40px;
  background-color: #8b6fb8;
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
.uds-button:hover {
  background-color: #7a5fa3;
}
.cards{
  width: 100%;
}
.MaleTime{
  width:550px;
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
    padding-bottom: 20px;
    margin-bottom: 30px;
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
  .UDS-image{
    width: 100%;
    display: block;
  }
  .time-card-header{
    margin-left: 0px;
    font-size: 30px;
  }
    .zagolovok{
        margin-left: 2px;
        font-size: 30px;
    }
  .uds-button {
    padding: 12px 30px;
    font-size: 18px;
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

@media screen and (min-width: 701px) and  (max-width: 1100px){
  .male-time-card{
    display: block;
    width: 100%;
  }
  .time-card-header{
    margin-left: 0px;
    font-size: 20px;
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
