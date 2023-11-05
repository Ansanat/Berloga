<template>
  <swiper
    :slidesPerView="1"
    :spaceBetween="0"
    :keyboard="{
      enabled: true,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
        <img class="block-background" src="@/images/head-block/block1.jpg"/>
        <div class="block-container anim">
            <div class="block-text">Добро пожаловать в современную общественную баню</div>
            <div class="block-text">Берлога</div>
            <!-- <div class="block-text">г. Новосибирск, Трикотажный 5-й переулок 23</div>
            <div class="block-text">292-07-09</div> -->
            <div class="info-button">Подробнее</div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <img class="block-background" src="@/images/head-block/block2.jpg"/>
    </swiper-slide><swiper-slide>
        <img class="block-background" src="@/images/head-block/block3.jpg"/>
    </swiper-slide>
    <swiper-slide>
        <img class="block-background" src="@/images/head-block/block3.jpg"/>
    </swiper-slide>
        <swiper-slide>
        <img class="block-background" src="@/images/head-block/block5.jpg"/>
        <div class="menu-container">
            <div class="menu-text">Кто парится, тот ест</div>
            <div class="info-button">Меню</div>
        </div>
    </swiper-slide>
    <swiper-slide>
        <img class="block-background" src="@/images/head-block/block6.jpg"/>
        <div class="loyal-container" style="top:63%;">
            <div class="loyal-text">Система лояльности</div>
            <div class="info-button">Подробнее</div>
        </div>
    </swiper-slide>

  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
// import Slider from "@/components/v-slider";

export default {
    name: 'v-header-block',
        props: {
        text: String,
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Keyboard, Pagination, Navigation],
      };
    },
}
</script>

<style>
.swiper-pagination-bullet, .swiper-pagination-bullet-active {
    background-color: #121820;
    width: 13px;
    height:13px;
}
.swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    color: #121820;
}
.swiper-button-next:hover{
    color: white;
    opacity:0.4;
}

.swiper-button-prev:after, .swiper-container-rtl .swiper-button-prev:after {
    color: #121820;
}
.swiper-button-prev:hover{
    color: white;
    opacity:0.4;
}
.v-header-block {
    border: 4px solid #121820;
    position: relative;
    width: 100%;
    box-sizing: border-box;
}
.block-background {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
}

.block-container{
    width: 1100px;
    font-size: 60px;
    color: white;
    position: absolute;
    left: 50%;
    top: 73%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.block-text {
    -webkit-text-stroke: 2.5px black;
    text-stroke: 2.5px #121820;
    font-weight: bold;
    margin-top: 5px;
    text-shadow: 2px 2px 5px black;
}

.menu-container{
    width: 900px;
    font-size: 30px;
    color: white;
    position: absolute;
    left: 51%;
    top: 70%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.menu-text{
    -webkit-text-stroke: 5px black;
    text-stroke: 5px #121820;
    font-weight: bold;
    margin-top: 5px;
    text-shadow: 2px 2px 5px black;
    font-size:100px;
    width: 900px;
}

.loyal-container{
    width: 1500px;
    font-size: 30px;
    color: white;
    position: absolute;
    left: 51%;
    top: 63%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.loyal-text{
    -webkit-text-stroke: 5px black;
    text-stroke: 5px #121820;
    font-weight: bold;
    margin-top: 5px;
    text-shadow: 2px 2px 5px black;
    font-size:100px;
    width: 1500px;
}

.info-button{
    margin-top: 20px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
    line-height: 60px;
    display: inline-block;
    background-color: rgb(222, 222, 222);
    border-color: #121820;
    border-style: solid;
    height: 60px;
    width: 180px;
    font-size: 16px;
    color: #121820;
    font-weight: bold;
    font-style: italic;
}

.info-button:hover{
    background-color: #D2B48C;
}
.anim{
    animation: show 2s;
    animation-fill-mode: forwards;
    opacity:0;
}
@keyframes show{
    0%{
        opacity:0;
    }
    100% {
        opacity:1;
    }
}

@media screen and (max-width: 700px) {
    .block-background {
        aspect-ratio: 9 / 14;
    }
    .block-container{
        top: 65%;
        font-size: 30px;
        width: 350px;
    }
    .block-text {
        -webkit-text-stroke: 1px black;
        text-stroke: 1px #121820;
        margin-top: 5px;
        text-shadow: 2px 2px 5px black;
    }
    .swiper-button-prev:after, .swiper-container-rtl .swiper-button-prev:after {
        display: none;
    }
    .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
        display: none;
    }
    .menu-text{
        font-size: 50px;
        width:400px;
        -webkit-text-stroke: 2px black;
        text-stroke: 2px #121820;
    }
    .menu-container{
        width: 400px;
        top:55%;
    }

    .loyal-text{
        font-size: 50px;
        width:400px;
        -webkit-text-stroke: 2px black;
        text-stroke: 2px #121820;
    }
    .loyal-container{
        width: 400px;
        top:55%;
    }
}

</style>