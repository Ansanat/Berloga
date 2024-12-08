<template>
<div class="v-services-page" id="dop-page">
  <img class="gallery" src="@/images/Services.jpg"/>
  <div v-for="item in headers" :key="item">
    <div class="service-header"> {{item.name}} </div>
    <div class="price-table">
      <div v-for="price in item.data" :key="price">
        <div class="price-line" v-if="price.line != false"></div> 
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
          name: 'Индивидуальное парение',
          data: [
            {
              name: 'Экспресс',
              price: '700 руб',
            },
            {
              name: 'Классическое ',
              price: '900 руб'
            },
            {
              name: 'Контрастное ',
              price: '1 300 руб'
            },
            {
              name: 'Дополнительное коллективное парение (1 заход)',
              price: '1 500 руб'
            },
          ]
        },
        {
          name: 'Массаж спины',
          data: [
            {
              name: 'от затылка до крестца',
              line: false
            },
            {
              name: 'Время',
              price: '30 минут'
            },
            {
              name: 'Сеанс',
              price: '1 600 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '14 000 руб'
            },
          ]
        },
        {
          name: 'Массаж рук',
          data: [
            {
              name: 'От плечевого сустава до кончиков пальцев',
              line: false
            },
            {
              name: 'Время',
              price: '20 минут'
            },
            {
              name: 'Сеанс',
              price: '1 100 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '10 000 руб'
            },
          ]
        },
        {
          name: 'Антицеллюлитный массаж',
          data: [
            {
              name: 'Ягодицы, передняя и задняя поверхность бедра, живот',
              line: false
            },
            {
              name: 'Время',
              price: '35 минут'
            },
            {
              name: 'Сеанс',
              price: '1 800 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '17 000 руб'
            },
          ]
        },
        {
          name: 'Антицеллюлитный массаж',
          data: [
            {
              name: 'Ягодицы, передняя и задняя поверхность бедра, живот, спина, руки',
              line: false
            },
            {
              name: 'Время',
              price: '1 час 20 минут'
            },
            {
              name: 'Сеанс',
              price: '3 000 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '28 000 руб'
            },
          ]
        },
        {
          name: 'Общий массаж',
          data: [
            {
              name: 'Спина, руки, ноги',
              line: false
            },
            {
              name: 'Время',
              price: '60 минут'
            },
            {
              name: 'Сеанс',
              price: '2 600 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '24 000 руб'
            },
          ]
        },
        {
          name: 'Массаж головы',
          data: [
            {
              name: 'Волосистая часть головы',
              line: false
            },
            {
              name: 'Время',
              price: '20 минут'
            },
            {
              name: 'Сеанс',
              price: '900 руб'
            },
            // {
            //   name: 'Курс из 10 сеансов',
            //   price: '8 000 руб'
            // },
          ]
        },
        {
          name: 'Шейно-воротниковая зона',
          data: [
            {
              name: 'Шея, надплечия, верхняя часть груди и спины',
              line: false
            },
            {
              name: 'Время',
              price: '20 минут'
            },
            {
              name: 'Сеанс',
              price: '1 200 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '10 000 руб'
            },
          ]
        },
        // {
        //   name: 'Шейно-воротниковая зона + голова',
        //   data: [
        //     {
        //       name: 'Шея, надплечия, верхняя часть груди и спины + голова',
        //       line: false
        //     },
        //     {
        //       name: 'Время',
        //       price: '50 минут'
        //     },
        //     {
        //       name: 'Сеанс',
        //       price: '2 100 руб'
        //     },
        //     {
        //       name: 'Курс из 10 сеансов',
        //       price: '20 000 руб'
        //     },
        //   ]
        // },
        {
          name: 'Классический общий массаж',
          data: [
            {
              name: 'Спина, руки, ноги, живот',
              line: false
            },
            {
              name: 'Время',
              price: '1 час 30 минут'
            },
            {
              name: 'Сеанс',
              price: '3 000 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '28 000 руб'
            },
          ]
        },
        {
          name: 'Массаж ног',
          data: [
            {
              name: 'От бедра до пальцев ног',
              line: false
            },
            {
              name: 'Время',
              price: '30 минут'
            },
            {
              name: 'Сеанс',
              price: '1 500 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '14 000 руб'
            },
          ]
        },
        {
          name: 'Баночный массаж',
          data: [
            {
              name: '',
              line: false
            },
            {
              name: 'Время',
              price: '20 минут'
            },
            {
              name: 'Сеанс',
              price: '1 100 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '10 000 руб'
            },
          ]
        },
        {
          name: '8 (913) 923 30 07 Александр (предварительная запись)'
        }
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

