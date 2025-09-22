<template>
<div class="v-services-page" id="dop-page">
  <img class="gallery" src="@/images/Services.jpg"/>
  <div v-for="item in headers" :key="item">
    <div class="service-header"> {{item.name}} </div>
    <div class="price-table">
      <div v-for="price in item.data" :key="price">
        <div class="price-line" v-if="price.line != false"></div> 
        <div class="price-row">
          <div class="price-name">{{price.name}}
            <div class="price-name-desc"> {{price.desc1}} </div>
            <div class="price-name-desc"> {{price.desc2}} </div>
          </div>
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
          name: 'Индивидуальное парение от наших пармастеров',
          data: [
            {
              name: 'Медвежонок',
              price: '900 руб',
              desc1: '(8-10 мин)',
              desc2: 'Используется сенный матрас'
            },
            {
              name: 'Медведь',
              price: '1 400 руб',
              desc1: '(10-12 мин)',
              desc2: 'Используется сенный матрас'
            },
            {
              name: 'Гризли',
              price: '1 800 руб',
              desc1: '(20 мин с выходом на контраст)',
              desc2: 'Используется сенный матрас, пихтовые лапы, лед'
            },
            {
              name: 'Фирменное "Берлога"',
              price: '2 200 руб',
              desc1: '(35 мин с выходом на контраст + растяжка связок тела после парения)',
              desc2: 'Используется сенный матрас, пихтовые лапы, лед'
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
              price: '2 000 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '18 000 руб'
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
              price: '1 200 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '11 000 руб'
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
              price: '2 200 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '20 000 руб'
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
              price: '3 500 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '33 000 руб'
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
              price: '3 000 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '28 000 руб'
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
              price: '1000 руб'
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
              price: '1 500 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '13 000 руб'
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
              price: '3 500 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '33 000 руб'
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
              price: '2 000 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '18 000 руб'
            },
          ]
        },
        {
          name: 'Массаж ног и спины',
          data: [
            {
              name: 'Ноги, спина',
              line: false
            },
            {
              name: 'Время',
              price: '30 минут'
            },
            {
              name: 'Сеанс',
              price: '2 800 руб'
            },
            {
              name: 'Курс из 10 сеансов',
              price: '26 000 руб'
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
              price: '15-20 минут'
            },
            {
              name: 'Сеанс',
              price: '1 200 руб'
            },
            // {
            //   name: 'Курс из 10 сеансов',
            //   price: '10 000 руб'
            // },
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
.price-name-desc {
  width: 80%;
  color: white;
  opacity: 0.8;
  font-size: 14px;
  margin-top: 4px;
}
</style>
