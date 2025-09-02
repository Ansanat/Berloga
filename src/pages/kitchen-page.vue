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
              name: 'Сёмга шеф посола',
              gr: '100/20гр',
              desc: '',
              price: '520 руб'
            },
            {
              name: 'Ростбиф',
              gr: '100/40/40гр',
              price: '750 руб'
            },
            {
              name: 'Язык говяжий отварной',
              gr: '100/40гр',
              price: '420 руб'
            },
            {
              name: 'Буженина домашняя',
              gr: '100/40гр',
              price: '380 руб'
            },
            {
              name: 'Рулет куриный',
              gr: '100/40гр',
              price: '360 руб'
            },
            {
              name: 'Грудинка копчёная',
              gr: '100/40гр',
              desc: '',
              price: '370 руб'
            },
            {
              name: 'Овощи свежие',
              gr: '180гр',
              price: '360 руб'
            },
            {
              name: 'Брускетка с лососем',
              gr: '180гр',
              price: '380 руб'
            },
            {
              name: 'Брускетка с ростбифом',
              gr: '180гр',
              price: '390 руб'
            },
            {
              name: 'Брускетка с томатами и сыром брынза',
              gr: '180гр',
              price: '320 руб'
            },
            {
              name: 'Селедка с картофелем и маринованным луком',
              gr: '100/100/20гр',
              price: '390 руб'
            },
            {
              name: 'Рыбное ассорти',
              gr: '70/70/70гр',
              desc: '(сёмга с.с., сельдь, масляная рыба, рулет с сёмгой, шпинатом и плавленным сыром)',
              price: '1 400 руб'
            },
            {
              name: 'Сырная коллекция',
              gr: '40/40/40/40/40гр',
              desc: '(4 вида сыра: пармезан, песто красный, зеленый, российский, крекер и орехи)',
              price: '900 руб'
            },
            {
              name: 'Мясное плато',
              gr: '70/70/70/70/70/40гр',
              desc: '(ростбиф, буженина, грудинка копченая, рулет куриный, язык отварной)',
              price: '1 450 руб'
            },
            {
              name: 'Разносолы',
              gr: '50/100/50/100гр',
              desc: '(опята маринованные, огурчики солёные, грудинка копчёная, помидоры маринованные)',
              price: '490 руб'
            },
          ]
        },
        {
          name: 'ГОРЯЧИЕ ЗАКУСКИ',
          data: [
            {
              name: 'Раки отварные со сметанно-чесночным соусом',
              gr: '1000/200гр',
              price: '3 700 руб'
            },
            {
              name: 'Креветки крупные отварные',
              gr: '1000/200гр',
              price: '3 700 руб'
            },
            {
              name: 'Луковые кольца',
              gr: '120/40гр',
              price: '270 руб'
            },
            {
              name: 'Кольца кальмара',
              gr: '120/40гр',
              price: '310 руб'
            },
            {
              name: 'Сырные палочки',
              gr: '120/40гр',
              price: '310 руб'
            },
            {
              name: 'Греннки чесночные',
              gr: '120/40гр',
              price: '310 руб'
            },
            {
              name: 'Креветки коктейльные отварные',
              gr: '220/40гр',
              price: '780 руб'
            },
            {
              name: 'Креветки темпура',
              gr: '100/40гр',
              price: '420 руб'
            },
            {
              name: 'Мойва фри',
              gr: '250/40гр',
              price: '420 руб'
            },
            {
              name: 'Крылышки куриные',
              gr: '240/40гр',
              price: '420 руб'
            },
            {
              name: 'Наггетсы куриные',
              gr: '120/40гр',
              price: '310 руб'
            },
            {
              name: 'Пельмени фри',
              gr: '200/40гр',
              price: '420 руб'
            },
            {
              name: 'Пивная тарелка на компанию',
              gr: '120/120/120/120/120/40/40гр',
              desc: '(кольца кальмара, наггетсы, луковые кольца, гренки, сырные палочки)',
              price: '1 300 руб'
            },
          ]
        },
        {
          name: 'СУПЫ',
          data: [
            {
              name: 'Крем-суп сырный с курицей',
              gr: '250/30гр',
              price: '260 руб'
            },
            {
              name: 'Крем-суп грибной',
              gr: '250/30гр',
              price: '260 руб'
            },
            {
              name: 'Солянка',
              gr: '250/40гр',
              price: '390 руб'
            },
            {
              name: 'Уха из сёмги',
              gr: '250/40гр',
              price: '390 руб'
            },
            {
              name: 'Борщ с салом',
              gr: '250/40/30гр',
              price: '390 руб'
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
              price: '390 руб'
            },
            {
              name: 'Карбонара',
              gr: '250гр',
              desc: '',
              price: '390 руб'
            },
            {
              name: 'Песто с креветками',
              gr: '250гр',
              desc: '',
              price: '390 руб'
            },
            {
              name: 'С телятиной и овощами в соусе терияки',
              gr: '250гр',
              desc: '',
              price: '390 руб'
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
              name: 'Спагетти с сыром',
              gr: '150гр',
              desc: '',
              price: '260 руб'
            },
            {
              name: 'Овощи гриль',
              gr: '150гр',
              desc: '',
              price: '290 руб'
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
              price: '580 руб'
            },
            {
              name: 'Свиная шея гриль',
              gr: '180/40гр',
              desc: '',
              price: '580 руб'
            },
            {
              name: 'Стейк из сёмги',
              gr: '150/40гр',
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
              name: 'Сендвич с ростбифом',
              gr: '250/40гр',
              desc: '',
              price: '410 руб'
            },
            {
              name: 'Сендвич с семгой',
              gr: '250/40гр',
              desc: '',
              price: '410 руб'
            },
            {
              name: 'Кесадилья с курицей/сырная',
              gr: '180/40гр',
              desc: '',
              price: '380 руб'
            },
            {
              name: 'Медальоны из телятины с перечным соусом',
              gr: '180/40гр',
              desc: '',
              price: '980 руб'
            },
            {
              name: 'Пельмени домашние',
              gr: '250гр',
              desc: '',
              price: '420 руб'
            },
            {
              name: 'Стейк из курицы',
              gr: '180/40гр',
              desc: '',
              price: '480 руб'
            },
            {
              name: 'Шницель куриный',
              gr: '220/40/40гр',
              desc: '',
              price: '520 руб'
            },
            {
              name: 'Скумбрия на гриле',
              gr: '300/40гр',
              desc: '',
              price: '550 руб'
            },
            {
              name: 'Креветки тигровые жареные в тайском стиле',
              gr: '150/40/40гр',
              desc: '',
              price: '890 руб'
            },
            {
              name: 'Язык гриль',
              gr: '150/40гр',
              desc: '',
              price: '910 руб'
            },
          ]
        },
        {
          name: 'САЛАТЫ',
          data: [
            {
              name: 'Цезарь с курицей',
              gr: '200гр',
              price: '420 руб'
            },
            {
              name: 'Цезарь с креветками',
              gr: '200гр',
              price: '490 руб'
            },
            {
              name: 'Салат с ростбифом',
              gr: '200гр',
              price: '490 руб'
            },
            {
              name: 'Грин салат с лососем и яйцом пашот',
              gr: '200гр',
              price: '490 руб'
            },
            {
              name: 'Салат греческий',
              gr: '200гр',
              price: '390 руб'
            },
            {
              name: 'Салат "сытый гость"',
              gr: '200гр',
              desc: '(свинина, картофель, яйцо, огурец, салат, сыр гауда)',
              price: '440 руб'
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
              price: '310 руб'
            },
            {
              name: 'Сыр копчёный',
              gr: '100гр',
              desc: '',
              price: '330 руб'
            },
            {
              name: 'Арахис солёный',
              gr: '100гр',
              desc: '',
              price: '270 руб'
            },
            {
              name: 'Сыр сливочный',
              gr: '100гр',
              desc: '',
              price: '310 руб'
            },
            {
              name: 'Филе минтая',
              gr: '100гр',
              desc: '',
              price: '330 руб'
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
          name: 'ДЕСЕРТЫ',
          data: [
            {
              name: 'Чизкейк в ассортименте',
              gr: '100гр',
              desc: '',
              price: '290 руб'
            },
            {
              name: 'Блинчики',
              gr: '3 шт',
              desc: '(варенье на выбор)',
              price: '300 руб'
            },
            {
              name: 'Фондан шоколадный с мороженым',
              gr: '140/40гр',
              desc: '',
              price: '410 руб'
            },
            {
              name: 'Мороженое',
              gr: '',
              desc: '(3 шарика с топингом)',
              price: '310 руб'
            },
            {
              name: 'Штрудель яблочный',
              gr: '120/40гр',
              desc: '',
              price: '360 руб'
            },
            {
              name: 'Таёжный десерт',
              gr: '150гр',
              desc: '',
              price: '410 руб'
            },
            {
              name: 'Мёд',
              gr: '50гр',
              desc: '',
              price: '120 руб'
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
              price: '120 руб'
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
              price: '160/420 руб'
            },
            {
              name: 'Лимонад в стекле',
              gr: '500мл',
              desc: '',
              price: '150 руб'
            },
            {
              name: 'Здоровье',
              gr: '500мл',
              desc: '',
              price: '240 руб'
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
          ]
        },
        {
          name: 'ПИВО',
          data: [
            {
              name: 'Фирменное разливное светлое/тёмное',
              gr: '500мл',
              desc: '',
              price: '330 руб'
            },
            {
              name: 'Бутылочное (Россия)',
              gr: '500мл',
              desc: '',
              price: '270 руб'
            },
            {
              name: 'Импортное',
              gr: '450мл',
              desc: '',
              price: '450 руб'
            },
            {
              name: 'Imperial',
              gr: '1000мл',
              desc: '',
              price: '550 руб'
            },
            {
              name: 'Пивная "Башня"',
              gr: '3000мл',
              desc: '',
              price: '1 600 руб'
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
              price: '270 руб'
            },
            {
              name: 'С чабрецом (черный)',
              gr: '900мл',
              desc: '',
              price: '270 руб'
            },
            {
              name: 'Таёжный (травяной)',
              gr: '900мл',
              desc: '',
              price: '270 руб'
            },
            {
              name: 'Фруктовый чай (красный)',
              gr: '900мл',
              desc: '',
              price: '270 руб'
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
              price: '480 руб'
            },
            {
              name: 'Клюквенный',
              gr: '900мл',
              desc: '',
              price: '480 руб'
            },
            {
              name: 'Штрудель яблочный',
              gr: '900мл',
              desc: '',
              price: '480 руб'
            },
          ]
        },
        {
          name: 'ФИРМЕННЫЕ ЛИМОНАДЫ',
          data: [
            {
              name: 'Цитрусовый',
              gr: '1000мл',
              desc: '',
              price: '450 руб'
            },
            {
              name: 'С мятой и лаймом',
              gr: '1000мл',
              desc: '',
              price: '450 руб'
            },
            {
              name: 'Бабл-гам',
              gr: '1000мл',
              desc: '',
              price: '450 руб'
            },
            {
              name: 'Молочный коктейль',
              gr: '500мл',
              desc: '(шоколад, клубника, ваниль)',
              price: '450 руб'
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

