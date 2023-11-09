<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <div
      slot="container-start"
      class="parallax-bg mytest"
      data-swiper-parallax="-23%"
    ></div>
      <swiper-slide>
        <div class="title time-header" data-swiper-parallax="-300">Понедельник</div>
        <div class="text" data-swiper-parallax="-100">
            <p class="time">
                с 9:00 до 18:00 - 1200р/час
            </p>
            <p class="time">
                с 18:00 до 9:00 - 1600р/час
            </p>
        </div> 
      </swiper-slide>
      <swiper-slide>
        <div class="title time-header" data-swiper-parallax="-300">Вторник</div>
        <div class="text" data-swiper-parallax="-100">
            <p class="time">
                с 9:00 до 18:00 - 1200р/час
            </p>
            <p class="time">
                с 18:00 до 9:00 - 1600р/час
            </p>
        </div> 
      </swiper-slide>
    <swiper-slide>
        <div class="title time-header" data-swiper-parallax="-300">Среда</div>
        <div class="text" data-swiper-parallax="-100">
            <p class="time">
                с 9:00 до 18:00 - 1200р/час
            </p>
            <p class="time">
                с 18:00 до 9:00 - 1600р/час
            </p>
        </div> 
      </swiper-slide>
    <swiper-slide>
        <div class="title time-header" data-swiper-parallax="-300">Четверг</div>
        <div class="text" data-swiper-parallax="-100">
            <p class="time">
                с 9:00 до 18:00 - 1200р/час
            </p>
            <p class="time">
                с 18:00 до 9:00 - 1600р/час
            </p>
        </div> 
      </swiper-slide>
    <swiper-slide>
        <div class="title time-header" data-swiper-parallax="-300">Пятница</div>
        <div class="text" data-swiper-parallax="-100">
            <p class="time">
                с 9:00 до 18:00 - 1600р/час
            </p>
            <p class="time">
                с 18:00 до 9:00 - 2000р/час
            </p>
        </div> 
      </swiper-slide>
      <swiper-slide>
        <div class="title time-header" data-swiper-parallax="-300">Суббота</div>
        <div class="text" data-swiper-parallax="-100">
            <p class="time">
               2000р/час
            </p>
        </div> 
      </swiper-slide>
      <swiper-slide>
        <div class="title time-header" data-swiper-parallax="-300">Воскресенье</div>
        <div class="text" data-swiper-parallax="-100">
            <p class="time">
               2000р/час
            </p>
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
  import { Parallax, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Parallax, Pagination, Navigation],
      };
    },
  };
</script>
<style>
.time-header{
    text-align: center;
    margin-top: 5px;
    font-weight: 900;
}
.time{
    text-align: center;
}
</style>
