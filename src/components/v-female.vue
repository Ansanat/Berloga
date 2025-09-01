<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#000000',
      '--swiper-pagination-color': '#000000',
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
        <div class="title time-header" data-swiper-parallax="-300">Среда</div>
        <div class="text" data-swiper-parallax="-100">
            <p class="time">
                с 11:00 до 15:00 - 700р/2часа
            </p>
            <p class="time">
                с 15:00 до 23:00 - 1200р/2часа
            </p>
            <p class="time">
              после 23:00 - 50р/минута
            </p>
            <p class="time">
              Общий пар - 12:30, 14: 30, 16:30, 18:30, 20:30
            </p>
        </div> 
      </swiper-slide>
    <!-- <swiper-slide>
        <div class="title time-header" data-swiper-parallax="-300">Пятница</div>
        <div class="text" data-swiper-parallax="-100">
            <p class="time">
                с 11:00 до 14:00 - 500р/2часа
            </p>
            <p class="time">
                с 14:00 до 16:00 - 700р/2часа
            </p>
            <p class="time">
                Общий пар - 12:30, 14:30
            </p>
        </div> 
    </swiper-slide> -->
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
<style scoped>
.time-header{
    text-align: center;
    margin-top: 5px;
    font-weight: 900;
}
.time{
    text-align: center;
}
</style>
