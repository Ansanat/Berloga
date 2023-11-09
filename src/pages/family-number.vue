<template>
<div class="v-main-page">
  <FamilyGallery/>
  <div class="text-container">
      <img src="@/images/banya/banyaLogo.png" width="100px"/>
      <div class="zagolovok" id="zagolovok">Семейный номер</div>
  </div>
  <div class="help-background">
      <div class="help" style="padding-top: 20px;">Большой просторный номер в котором могут комфортно расположиться двенадцать человек. Номер площадью 150 м. кв. включает в себя большой зал отдыха который поделен на две зоны, в каждой зоне есть телевизор, одна зона предназначена для застолья, вторая зона отдыха. Моечное отделение с двумя душевыми, парная рассчитанная на 12 человек, контрастный бассейн размерами 3*3 метра.</div>
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
    <div class="discont" style="margin-top: 10px;"><b>Новый год:</b></div>
    <div class="discont" style="margin-bottom: 20px;">СТОИМОСТЬ ОДНОГО ЧАСА С 
25 декабря по 8 января 3000 РУБ (на 10 чел.) <br>
ДОПЛАТА СВЫШЕ 10 ЧЕЛОВЕК 200 РУБ ЗА ЧЕЛОВЕКА ЗА 1 ЧАС. <br>
Минимальное количество часов - 3.<br>
Номер бронируется только по предоплате.<br>
Акции на новогодние праздники не работают!</div>
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
.discont{
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;
}
.dop{
  top: 20%;
  transform: translate(0, -60%);
  margin-bottom: 0;
}
</style>
