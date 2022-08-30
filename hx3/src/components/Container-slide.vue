<template>
  <div class="banner">
    <div class="thumb-example">
      <swiper class="top-swiper" :style="{
        '--swiper-navigation-color': '#000000cf',
        '--swiper-pagination-color': '#000000cf'
      }" :modules="modules" :space-between="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }">
        <swiper-slide class="slide" v-for="index in 8" :key="index">
          <img :src="`../src/assets/tab/${index}.jpeg`" />
        </swiper-slide>
      </swiper>
      <swiper class="thumbs-swiper" :modules="modules" :space-between="10" :slides-per-view="4"
        :watch-slides-progress="true" :prevent-clicks="false" :prevent-clicks-propagation="ture"
        @swiper="setThumbsSwiper">
        <swiper-slide class="slide" v-for="index in 8" :key="index">
          <img :src="`../src/assets/tab/${index}.jpeg`" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>
<style lang="scss" scoped>
.swiper {
    height: 32rem;
}
.thumb-example {
  height: 480px;
  // background-color: #000;
}

.top-swiper,
.thumbs-swiper {
  .slide {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.top-swiper {
  height: 80%;
  width: 100%;
}
.thumbs-swiper {
    height: 20%;
    box-sizing: border-box;
    padding: 0.5rem 0;

    .slide {
      width: 25%;
      height: 100%;
      opacity: 1;
      &:not(.swiper-slide-thumb-active) {
        opacity: 0.4;
      }
    }
  }
</style>