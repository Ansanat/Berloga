<template>
  <swiper
    :spaceBetween="0"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><img src="@/images/family-number/Image1.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/family-number/Image2.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/family-number/Image4.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/family-number/Image5.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/family-number/Image6.jpg" class="card-gallery"></swiper-slide>
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
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    name: 'v-card-gallery',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style>
.card-gallery{
    width: 100%;
    aspect-ratio: 16 / 6;
    object-fit: cover;
}


@media screen and (max-width: 700px) {
    .card-gallery{
        aspect-ratio: 3 / 3;
        object-fit: cover;
    }
}
</style>
