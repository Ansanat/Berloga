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
    <swiper-slide><img src="@/images/card-gallery/Image1.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/card-gallery/Image2.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/card-gallery/Image4.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/card-gallery/Image5.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/card-gallery/Image6.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/card-gallery/Image7.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/card-gallery/Image8.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/card-gallery/Image9.jpg" class="card-gallery"></swiper-slide>
    <swiper-slide><img src="@/images/card-gallery/Image10.jpg" class="card-gallery"></swiper-slide>
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
