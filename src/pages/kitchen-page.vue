<template>
<div class="v-kitchen-page" id="kitchen-page">
  <img class="gallery" src="@/images/menu.jpg"/>
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
  name: 'kitchen-page',
  components: {
  },
  data() {
    return {
      headers: [
        {
          name: 'СТЕЙК ГРИЛЬ',
          data: [
            {
              name: 'Из сёмги',
              price: '850 руб'
            },
            {
              name: 'Из говядины',
              price: '650 руб'
            },
            {
              name: 'Из свинины',
              price: '550 руб'
            },
            {
              name: 'Из курицы',
              price: '450 руб'
            }
          ]
        },
        {
          name: 'ГОРЯЧИЕ БЛЮДА',
          data: [
            {
              name: 'Бульон куриный с сухариками',
              price: '250 руб'
            },
            {
              name: 'Пельмени домашние',
              price: '350 руб'
            },
            {
              name: 'Солянка сборная мясная',
              price: '350 руб'
            }
          ]
        },
        {
          name: 'БУРГЕРЫ, СЭНДВИЧИ',
          data: [
            {
              name: 'Гамбургер',
              price: '480 руб'
            },
            {
              name: 'Чизбургер',
              price: '480 руб'
            },
            {
              name: 'Сэндвич',
              price: '350 руб'
            }
          ]
        },
        {
          name: 'САЛАТЫ',
          data: [
            {
              name: 'Греческий',
              price: '380 руб'
            },
            {
              name: 'Из свежих овощей',
              price: '250 руб'
            },
            {
              name: 'Селедка с картофелем и луком',
              price: '350 руб'
            }
          ]
        },
        {
          name: 'ЗАКУСКИ',
          data: [
            {
              name: 'Ростбиф',
              price: '550 руб'
            },
            {
              name: 'Разносолы',
              price: '400 руб'
            },
            {
              name: 'Сырные палочки',
              price: '280 руб'
            },
            {
              name: 'Луковые кольца',
              price: '220 руб'
            },
            {
              name: 'Гренки чесночные',
              price: '260 руб'
            },
            {
              name: 'Крылышки фри',
              price: '380 руб'
            },
            {
              name: 'Мойва фри',
              price: '380 руб'
            },
            {
              name: 'Картофель фри',
              price: '260 руб'
            },
            {
              name: 'Куриные наггетсы',
              price: '260 руб'
            },
            {
              name: 'Картофельные дольки',
              price: '250 руб'
            },
            {
              name: 'Пивное плато',
              price: '850 руб'
            },
            {
              name: 'Креветки в панировке',
              price: '550 руб'
            },
          ]
        },
        {
          name: 'НА КОМПАНИЮ',
          data: [
            {
              name: 'Мясное ассорти',
              price: '700 руб'
            },
            {
              name: 'Рыбное ассорти',
              price: '750 руб'
            },
          ]
        },
        {
          name: 'СНЕКИ, СУШКА К ПИВУ',
          data: [
            {
              name: 'Карпаччо куриное',
              price: '270 руб'
            },
            {
              name: 'Пепперони',
              price: '270 руб'
            },
            {
              name: 'Свиные чипсы',
              price: '270 руб'
            },
            {
              name: 'Арахис солёный',
              price: '220 руб'
            },
            {
              name: 'Фисташки',
              price: '270 руб'
            },
            {
              name: 'Сыр копчёный спагетти',
              price: '250 руб'
            },
            {
              name: 'Филе минтая',
              price: '270 руб'
            },
            {
              name: 'Щука соломка',
              price: '270 руб'
            },
            {
              name: 'Анчоусы',
              price: '220 руб'
            },
          ]
        },
        {
          name: 'СОУСЫ',
          data: [
            {
              name: 'Чесночный/тартар',
              price: '80 руб'
            },
            {
              name: 'На выбор: томатный, кисло-сладкий, острый, сырный, горчица, кетчуп',
              price: '60 руб'
            },
            {
              name: 'Хлеб',
              price: '30 руб'
            },
          ]
        },
        {
          name: 'СЛАДКОЕ',
          data: [
            {
              name: 'Блинчики',
              price: '250 руб'
            },
            {
              name: 'Мороженое',
              price: '250 руб'
            },
            {
              name: 'Мёд',
              price: '100 руб'
            },
            {
              name: 'Варенье малиновое',
              price: '100 руб'
            },
            {
              name: 'Чизкейк NEW YORK',
              price: '250 руб'
            },
            {
              name: 'Десерт таёжный',
              price: '350 руб'
            },
          ]
        },
        {
          name: 'НАПИТКИ',
          data: [
            {
              name: 'Морс    (250/500/1000мл)',
              price: '80/130/250 руб'
            },
            {
              name: 'Квас	(500мл)',
              price: '130 руб'
            },
            {
              name: 'Лимонад ',
              price: '120 руб'
            },
            {
              name: 'Вода',
              price: '80 руб'
            },
            {
              name: 'Боржоми',
              price: '150 руб'
            },           
          ]
        },
        {
          name: 'ЧАЙ',
          data: [
            {
              name: 'Молочный улун (900мл)',
              price: '250 руб'
            },
            {
              name: 'Чёрный  (900мл)',
              price: '250 руб'
            },
            {
              name: 'С чебрецом (900мл)',
              price: '250 руб'
            },
            {
              name: 'Таёжный (900мл)',
              price: '250 руб'
            },
            {
              name: 'Фруктовый (900мл)',
              price: '250 руб'
            },
          ]
        },
        {
          name: 'ПИВО',
          data: [
            {
              name: 'Бутылочное (Россия)',
              price: '230 руб'
            },
            {
              name: 'Импортное',
              price: '330 руб'
            },
            {
              name: 'Фирменное разливное',
              price: '260 руб'
            },
            {
              name: 'Пивная «Башня»  3 литра',
              price: '1300 руб'
            },
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss">
$color: #f7f745;
.v-kitchen-page{
  background-image: url(@/images/wood.jpg) ;
  width: 100%;
  border: 5px solid #121820;
  box-sizing: border-box;
}
.service-header {
  padding-top: 20px;
  margin-left: 20px;
  font-size: 40px;
  color: $color;
  font-weight: bold;
}
.price-line{
  height: 2px;
  margin-bottom: 10px;
  background-color:$color;

}
.price-table{
  padding-top: 20px;
  width: 85%;
  height: auto;
  margin: auto;
  font-size: 18px;
}
.price-row{
  width: 100%;
  height: 50px;
  display: block;
}
.price-name{
  color:white;
  float: left;
  width: 49%;
}
.price-price{
  float: right;
  text-align: right;
  width: 49%;
  color:$color;
  font-weight: bold;
}
@media screen and (max-width: 700px) {
  .service-header {
    font-size: 27px;
  }
  .price-table{
    font-size: 16px;
  }
  .price-name{
    width: 100%;
  }
  .price-price{
    padding-top: 5px;
    width: 100%;
    font-size: 20px;
    text-align: right;
  }
  .price-row{
    height: 110px;
  }
  .price-line{
    display: block;
  }
}
@media screen and (min-width: 701px) and  (max-width: 1100px){
  .price-row{
    height: 90px;
  }
}
</style>

