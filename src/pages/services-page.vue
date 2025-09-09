<template>
<div class="v-services-page" id="services-page">
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
              name: 'Веник дубовый ',
              price: '420 руб'
            },
            // {
            //   name: 'Веник березовый ',
            //   price: '300 руб'
            // },
            {
              name: 'Шапка фирменная',
              price: '1 300 руб'
            },
            {
              name: 'Халат фирменный',
              price: '3 500 руб'
            },
            // {
            //   name: 'Шапка банная «Берлога»',
            //   price: '800 руб'
            // },
            {
              name: 'Станок для бритья ',
              price: '70 руб'
            },
            {
              name: 'Тапочки резиновые ',
              price: '400 руб'
            },
            {
              name: 'Коврик для бани',
              price: '350 руб'
            },
            {
              name: 'Мыло',
              price: '150 руб'
            },
            {
              name: 'Мочалка ',
              price: '400 руб'
            },
            {
              name: 'Шампунь/гель для душа ',
              price: '80 руб'
            },
            {
              name: 'Простынь в аренду',
              price: '140 руб'
            },
            {
              name: 'Полотенце в аренду',
              price: '140 руб'
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

