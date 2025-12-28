<template>
<div class="v-main-page">
  <div class="numbers-head" id="family-page"> Бронирование номеров производится по предоплате в размере 10% от суммы заказа. (Предоплата не возвращается)</div>
  <FamilyGallery />
  <div class="text-container">
      <img src="@/images/banya/banyaLogo.png" width="100px"/>
      <div class="zagolovok" id="zagolovok">Семейный номер</div>
  </div>
  <div class="help-background">
      <div class="help" style="padding-top: 20px;">Большой просторный номер в котором могут комфортно расположиться двенадцать человек. Номер площадью 150 м. кв. включает в себя большой зал отдыха который поделен на две зоны, в каждой зоне есть телевизор, одна зона предназначена для застолья, вторая зона отдыха. Моечное отделение с двумя душевыми, парная рассчитанная на 12 человек, контрастный бассейн размерами 3*3 метра.</div>
  </div>
  <div class="alert">
    <div class="alert-header" style="font-size: 28px; margin-bottom: 10px;">
      <b>Прейскурант цен</b>
    </div>
    <div class="alert-header" style="font-size: 24px; margin-bottom: 15px;">
      <b>22.12.2025 -<br>11.01.2026</b>
    </div>
    
    <div class="alert-section">
      <div class="alert-price-bar">22.12.2025 - 26.12.2025</div>
      <div class="alert-text" style="font-size: 24px; font-weight: bold; margin-top: 10px;">2500 руб./час</div>
    </div>

    <div class="alert-section" style="margin-top: 20px;">
      <div class="alert-price-bar">24.12.2025 - 11.01.2026</div>
      <div class="alert-text" style="font-size: 24px; font-weight: bold; margin-top: 10px;">3200 руб./час</div>
    </div>

    <div class="alert-conditions">
      <div class="alert-text" style="font-size: 18px; margin-top: 20px;">
        <div style="margin-bottom: 5px;">*Акции не действуют</div>
        <div style="margin-bottom: 5px;">*Минимальное время заказа 3 часа</div>
        <div style="margin-bottom: 5px;">*Номер рассчитан на 10 человек</div>
        <div>(свыше 10 человек 200 руб/час)</div>
      </div>
    </div>
  </div>
  <div class="cards" style="margin-bottom: 20px;">
    <div class="male-time-card">
      <MaleTime class="MaleTime"/>
    </div>
    <div class="male-time-card dop">
      <div class="discont"><b>Акции:</b></div>
      <div class="discont">4+1(при заказе 4х часов 5 в подарок)</div>
      <div class="discont">День рождение: -10% +/-3дня</div>
      <div class="discont">Подарочные сертификаты</div>
    </div>
  </div>
</div>
</template>

<script>
import MaleTime from '@/components/v-family-time.vue'
import FamilyGallery from '@/components/v-family-gallery.vue'
export default {
  name: 'family-number',
  components: {
    MaleTime,
    FamilyGallery
  }
}
</script>

<style>
.alert {
  box-sizing: border-box;
  padding-right: 10px;
  width: 100%;
  padding-bottom: 20px;
  border-top: 3px solid #121820;
  border-bottom: 3px solid #121820;
  background-color: #f5f8fc;
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

.alert-price-bar {
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto;
  max-width: 600px;
}

.alert-conditions {
  border-top: 1px solid #121820;
  margin-top: 20px;
  padding-top: 15px;
}

.discont{
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;
}
.numbers-head {
  padding-top: 10px;
  padding-bottom: 10px;
  overflow: hidden;
  border-bottom: 5px solid #121820;
  color: black;
  background-color: white;
  margin: auto;
  text-align: center;
  font-size: 22px;
}
.dop{
  margin-top: 0px;
  top: 20%;
  transform: translate(0, -60%);
  margin-bottom: 0;
}
@media screen and (max-width: 700px) {
  .dop {
      top: 20%;
      transform: translate(0, -20%);
  }
}

@media screen and (min-width: 701px) and  (max-width: 1100px){
  .dop {
      top: 20%;
      transform: translate(0, -20%);
  }
}
</style>
