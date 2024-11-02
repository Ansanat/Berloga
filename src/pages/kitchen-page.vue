<template>
<div class="v-kitchen-page" id="kitchen-page">
  <img class="gallery" src="@/images/menu.jpg"/>
  <div v-for="item in headers" :key="item">
    <div class="service-header"> {{item.name}} </div>
    <div class="price-table">
      <div v-for="price in item.data" :key="price">
        <div class="price-line"></div> 
        <div class="price-row">
          <div class="price-name">
            <div class="price-name-title"> {{price.name}} </div>
            <div class="price-name-gr"> {{price.gr}} </div>
            <div class="price-name-desc"> {{price.desc}} </div>
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
  name: 'kitchen-page',
  components: {
  },
  data() {
    return {
      headers: [
        {
          name: 'ХОЛОДНЫЕ ЗАКУСКИ',
          data: [
            {
              name: 'Грудинка копчёная',
              gr: '100/40гр',
              desc: '',
              price: '350 руб'
            },
            {
              name: 'Ростбиф',
              gr: '100/40/40гр',
              price: '730 руб'
            },
            {
              name: 'Селедка с картофелем и луком',
              gr: '100/100/20гр',
              price: '380 руб'
            },
            {
              name: 'Рыбное ассорти',
              gr: '70/70/70гр',
              desc: '(кета, камбала и масляная рыба)',
              price: '850 руб'
            },
            {
              name: 'Сырная коллекция',
              gr: '40/40/40/40гр',
              desc: '(пармезан, песто красный, зеленый, российский, крекер и орехи)',
              price: '850 руб'
            },
            {
              name: 'Мясное плато',
              gr: '70/70/70/70гр',
              desc: '(карпаччо куриное, пепперони колбаски, свиные и куриные чипсы)',
              price: '850 руб'
            },
            {
              name: 'Разносолы',
              gr: '50/100/50/100гр',
              desc: '(опята маринованные, огурчики солёные, грудинка копчёная, помидоры маринованные)',
              price: '480 руб'
            },
          ]
        },
        {
          name: 'ГОРЯЧИЕ ЗАКУСКИ',
          data: [
            {
              name: 'Раки отварные со сметанно-чесночным соусом',
              gr: '1000/200гр',
              price: '3 500 руб'
            },
            {
              name: 'Луковые кольца',
              gr: '120/40гр',
              price: '250 руб'
            },
            {
              name: 'Креветки темпура',
              gr: '100/40гр',
              price: '400 руб'
            },
            {
              name: 'Сырные палочки',
              gr: '120/40гр',
              price: '290 руб'
            },
            {
              name: 'Сырные палочки с холопенью',
              gr: '120/40гр',
              price: '310 руб'
            },
            {
              name: 'Гренки чесночные',
              gr: '120/40гр',
              price: '290 руб'
            },
            {
              name: 'Креветки коктейльные отварные',
              gr: '220/40гр',
              price: '750 руб'
            },
            {
              name: 'Мойва фри',
              gr: '250/40гр',
              price: '390 руб'
            },
            {
              name: 'Крылья фри',
              gr: '240/40гр',
              price: '390 руб'
            },
            {
              name: 'Наггетсы куриные',
              gr: '120/40гр',
              price: '280 руб'
            },
            {
              name: 'Пельмени фри',
              gr: '200/40гр',
              price: '420 руб'
            },
            {
              name: 'Пивное плато',
              gr: '200/200/200/40гр',
              desc: '(крылья, мойва, гренки)',
              price: '950 руб'
            },
          ]
        },
        {
          name: 'САЛАТЫ',
          data: [
            {
              name: 'Цезарь с курицей',
              gr: '200гр',
              price: '390 руб'
            },
            {
              name: 'Цезарь с креветками',
              gr: '200гр',
              price: '470 руб'
            },
            {
              name: 'Салат с ростбифом',
              gr: '200гр',
              price: '490 руб'
            },
            {
              name: 'Салат из свежих овощей',
              gr: '200гр',
              price: '280 руб'
            },
            {
              name: 'Салат греческий',
              gr: '200гр',
              price: '380 руб'
            },
          ]
        },
        {
          name: 'СУПЫ',
          data: [
            {
              name: 'Бульон куриный с сухариками',
              gr: '250/20гр',
              price: '280 руб'
            },
            {
              name: 'Солянка',
              gr: '250/40гр',
              price: '380 руб'
            },
            {
              name: 'Уха из сёмги',
              gr: '250/40гр',
              price: '380 руб'
            },
            {
              name: 'Борщ с салом',
              gr: '250/40/30гр',
              price: '380 руб'
            },
          ]
        },
        {
          name: 'ПАСТА',
          data: [
            {
              name: 'С курицей и грибами в сливочном соусе',
              gr: '250гр',
              desc: '',
              price: '380 руб'
            },
            {
              name: 'Карбонара',
              gr: '250гр',
              desc: '',
              price: '380 руб'
            },
            {
              name: 'Песто с креветками',
              gr: '250гр',
              desc: '',
              price: '420 руб'
            },
          ]
        },
        {
          name: 'ГОРЯЧИЕ БЛЮДА',
          data: [
            {
              name: 'Бифштекс говяжий с яйцом',
              gr: '180/40гр',
              desc: '',
              price: '550 руб'
            },
            {
              name: 'Свиная шея гриль',
              gr: '180/40гр',
              desc: '',
              price: '550 руб'
            },
            {
              name: 'Стейк из сёмги',
              gr: '220/40гр',
              desc: '',
              price: '980 руб'
            },
            {
              name: 'Сендвич с курицей',
              gr: '250/40гр',
              desc: '',
              price: '380 руб'
            },
            {
              name: 'Кесадилья с курицей/сырная',
              gr: '18/40гр',
              desc: '',
              price: '380 руб'
            },
            {
              name: 'Медальон из телятины с перечным соусом',
              gr: '180/40гр',
              desc: '',
              price: '980 руб'
            },
            {
              name: 'Пельмени отварные',
              gr: '250гр',
              desc: '',
              price: '400 руб'
            },
            {
              name: 'Стейк из куриной грудки',
              gr: '180/40гр',
              desc: '',
              price: '480 руб'
            },
          ]
        },
        {
          name: 'ГАРНИРЫ',
          data: [
            {
              name: 'Дольки картофельные',
              gr: '150гр',
              desc: '',
              price: '260 руб'
            },
            {
              name: 'Картофель фри',
              gr: '150гр',
              desc: '',
              price: '260 руб'
            },
            {
              name: 'Овощи гриль',
              gr: '150гр',
              desc: '',
              price: '280 руб'
            },
          ]
        },
        {
          name: 'СНЕКИ. СУШКА К ПИВУ',
          data: [
            {
              name: 'Фисташки солёные',
              gr: '100гр',
              desc: '',
              price: '290 руб'
            },
            {
              name: 'Щука соломка',
              gr: '100гр',
              desc: '',
              price: '290 руб'
            },
            {
              name: 'Филе минтая',
              gr: '100гр',
              desc: '',
              price: '290 руб'
            },
            {
              name: 'Свиные чипсы',
              gr: '100гр',
              desc: '',
              price: '290 руб'
            },
            {
              name: 'Куриные чипсы',
              gr: '100гр',
              desc: '',
              price: '290 руб'
            },
            {
              name: 'Карпаччо куриные',
              gr: '100гр',
              desc: '',
              price: '290 руб'
            },
            {
              name: 'Пепперони колбаски',
              gr: '100гр',
              desc: '',
              price: '290 руб'
            },
            {
              name: 'Сыр копчёный',
              gr: '100гр',
              desc: '',
              price: '270 руб'
            },
            {
              name: 'Арахис солёный',
              gr: '100гр',
              desc: '',
              price: '250 руб'
            },
          ]
        },
        {
          name: 'СОУСЫ',
          data: [
            {
              name: 'Тар-тар',
              gr: '40гр',
              desc: '',
              price: '80 руб'
            },
            {
              name: 'Чесночный',
              gr: '40гр',
              desc: '',
              price: '80 руб'
            },
            {
              name: 'BBQ',
              gr: '40гр',
              desc: '',
              price: '80 руб'
            },
            {
              name: 'Аджика',
              gr: '40гр',
              desc: '',
              price: '80 руб'
            },
            {
              name: 'Сырный',
              gr: '40гр',
              desc: '',
              price: '80 руб'
            },
            {
              name: 'Кисло-сладкий',
              gr: '40гр',
              desc: '',
              price: '80 руб'
            },
            {
              name: 'Кетчуп',
              gr: '40гр',
              desc: '',
              price: '80 руб'
            },
            {
              name: 'Горчица',
              gr: '40гр',
              desc: '',
              price: '80 руб'
            },
            {
              name: 'Хлеб',
              gr: '',
              desc: '',
              price: '30 руб'
            },
          ]
        },
        {
          name: 'НАПИТКИ',
          data: [
            {
              name: 'Морс',
              gr: '250/500/1000мл',
              desc: '',
              price: '100/150/280 руб'
            },
            {
              name: 'Квас',
              gr: '500/1500мл',
              desc: '',
              price: '150/400 руб'
            },
            {
              name: 'Здоровье',
              gr: '500мл',
              desc: '',
              price: '220 руб'
            },
            {
              name: 'Лимонад в стекле',
              gr: '500мл',
              desc: '',
              price: '150 руб'
            },
            {
              name: 'Вода',
              gr: '500мл',
              desc: '',
              price: '150 руб'
            },
            {
              name: 'Боржоми',
              gr: '500мл',
              desc: '',
              price: '200 руб'
            },
            {
              name: 'Лимонад с лаймом и мятой',
              gr: '1000мл',
              desc: '',
              price: '450 руб'
            },
            {
              name: 'Лимонад бабл-гам',
              gr: '1000мл',
              desc: '',
              price: '450 руб'
            },
          ]
        },
        {
          name: 'ПИВО',
          data: [
            {
              name: 'Фирменное разливное светлое/тёмное',
              gr: '500мл',
              desc: '',
              price: '300 руб'
            },
            {
              name: 'Бутылочное (Россия)',
              gr: '500мл',
              desc: '',
              price: '250 руб'
            },
            {
              name: 'Импортное',
              gr: '450мл',
              desc: '',
              price: '400 руб'
            },
            {
              name: 'Imperial',
              gr: '1000мл',
              desc: '',
              price: '450 руб'
            },
            {
              name: 'Пивная "Башня"',
              gr: '3000мл',
              desc: '',
              price: '1 500 руб'
            },
          ]
        },
        {
          name: 'ФИРМЕННЫЙ ЧАЙ',
          data: [
            {
              name: 'Облепиха-апельсин',
              gr: '900мл',
              desc: '',
              price: '450 руб'
            },
            {
              name: 'Клюквенный',
              gr: '900мл',
              desc: '',
              price: '450 руб'
            },
            {
              name: 'Штрудель яблочный',
              gr: '900мл',
              desc: '',
              price: '450 руб'
            },
          ]
        },
        {
          name: 'ЧАЙ',
          data: [
            {
              name: 'Молочный улун',
              gr: '900мл',
              desc: '(зелёный)',
              price: '250 руб'
            },
            {
              name: 'Чёрный с чабрецом',
              gr: '900мл',
              desc: '(чёрный листовой чай, чабрец)',
              price: '250 руб'
            },
            {
              name: 'Таёжный чай',
              gr: '900мл',
              desc: '(зелёный травяной чай, красный корень, бадан, кипрей, смородина, малина, лапчатка)',
              price: '250 руб'
            },
            {
              name: 'Фруктовый чай',
              gr: '900мл',
              desc: '(чёрный чай, кусочки яблока, плоды шиповника, цедра апельсина)',
              price: '250 руб'
            },
          ]
        },
        {
          name: 'ДЕСЕРТЫ',
          data: [
            {
              name: 'Чизкейк в ассортименте',
              gr: '100гр',
              desc: '',
              price: '270 руб'
            },
            {
              name: 'Блинчики',
              gr: '3 шт',
              desc: '(варенье на выбор)',
              price: '280 руб'
            },
            {
              name: 'Фондан шоколадный',
              gr: '120гр',
              desc: '',
              price: '370 руб'
            },
            {
              name: 'Мороженое',
              gr: '120/20гр',
              desc: '',
              price: '270 руб'
            },
            {
              name: 'Таёжный десерт',
              gr: '150гр',
              desc: '',
              price: '370 руб'
            },
            {
              name: 'Штрудель яблочный',
              gr: '120/40гр',
              desc: '',
              price: '310 руб'
            },
            {
              name: 'Мёд',
              gr: '50гр',
              desc: '',
              price: '100 руб'
            },
            {
              name: 'Сгущёнка',
              gr: '50гр',
              desc: '',
              price: '100 руб'
            },
            {
              name: 'Варенье малиновое',
              gr: '50гр',
              desc: '',
              price: '100 руб'
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
.price-table {
  padding-top: 20px;
  width: 85%;
  height: auto;
  margin: auto;
  font-size: 18px;
}
.price-row {
  width: 100%;
  height: 80px;
  display: block;
}
.price-name {
  color: white;
  float: left;
  width: 49%;
}

.price-name-title {
  display: block;
}

.price-name-gr {
  display: inline;
  
  font-size: 15px;
  opacity: 0.8;
}

.price-name-desc {
  opacity: 0.8;
  font-size: 14px;
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

