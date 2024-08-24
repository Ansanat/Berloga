<template>
<div class="v-services-page" id="services-page">
  <img class="gallery" src="@/images/Services.jpg"/>
  <div v-for="item in headers" :key="item">
    <div class="service-header"> {{item.name}} </div>
    <div class="price-table">
      <div v-for="price in item.data" :key="price">
        <div class="price-line"></div> 
        <div class="price-row">
          <div class="price-name">{{price.name}}</div>
          <div class="price-price">{{price.price}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'v-services-page',
  components: {
  },
  data() {
    return {
      headers: [
        {
          name: 'ВСЁ ДЛЯ БАНИ',
          data: [
            {
              name: 'Веник дубовый',
              price: '300 руб'
            },
            {
              name: 'Веник берёзовый',
              price: '250 руб'
            },
            {
              name: 'Шапка фирменная',
              price: '800 руб'
            },
            {
              name: 'Шапка банная	',
              price: '400 руб'
            },
            {
              name: 'Варежка',
              price: '100 руб'
            },
            {
              name: 'Бритвенный набор',
              price: '50 руб'
            },
            {
              name: 'Тапочки резиновые',
              price: '350 руб'
            },
            {
              name: 'Тапочки одноразовые',
              price: '70 руб'
            },
            {
              name: 'Коврик многоразовый	',
              price: '150 руб'
            },
            {
              name: 'Коврик одноразовый',
              price: '50 руб'
            },
            {
              name: 'Мыло',
              price: '150 руб'
            },
            {
              name: 'Мочалка ',
              price: '150 руб'
            },
            {
              name: 'Простынь в аренду',
              price: '100 руб'
            },
            {
              name: 'Настойка для пара',
              price: '350 руб'
            },
            {
              name: 'Подарочный сертификат',
              price: 'от 500 руб'
            },
          ]
        },
      ]
    }
  }
}
</script>

<style>
.v-services-page{
  background-image: url(@/images/wood.jpg) ;
  width: 100%;
  border: 5px solid #121820;
  box-sizing: border-box;
}
</style>

