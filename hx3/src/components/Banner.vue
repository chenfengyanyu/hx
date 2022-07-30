
  <template>
    <swiper class="swiper" :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff'
    }" :modules="modules" :speed="600" :parallax="true" :navigation="true" :pagination="{ clickable: true }" autoplay>
        <template #container-start>
            <div class="parallax-bg" data-swiper-parallax="-23%"
                :style="{ backgroundImage: 'url(../src/assets/banner/4.jpeg)'}"></div>
        </template>
        <swiper-slide class="slide">
            <h1 class="title" data-swiper-parallax="-300">PROFESSIONAL IN METALS</h1>
            <!-- <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2> -->
            <div class="text" data-swiper-parallax="-100">
                <p>
                   We know metals over 20 years. We control every step from raw material to the finished products. We supply the good quality products to our customers.
                </p>
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <h1 class="title" data-swiper-parallax="-300">DELIVEY IN TIME</h1>
            <!-- <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2> -->
            <div class="text" data-swiper-parallax="-100">
                <p>
                    We have the professional supply team and shipping Agent. We will delivery in time for every order.
                </p>
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <h1 class="title" data-swiper-parallax="-300">SUPPLY GOOD PACKAGE</h1>
            <!-- <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2> -->
            <div class="text" data-swiper-parallax="-100">
                <p>
                    We supply professional package. Avoid any damage during the shipping.
                </p>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/parallax ';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
        };
    },
};
</script>
<style>
.swiper {
    height: 52rem;
}

.parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 110%;
    height: 100%;
    background-size: cover;
    background-position: center;
}

.slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    box-sizing: border-box;
    padding: 0 8rem;
    background-color: transparent;
}

.slide .title {
    background: rgb(0 0 0 / 50%);
    font-size: 4rem;
    padding: 3rem 3rem 0;
    border-radius: 0.5rem 0.5rem 0 0;
}

.slide p {
    background: rgb(0 0 0 / 50%);
    font-size: 1.6rem;
    padding: 0 3rem 3rem;
    border-radius: 0 0 0.5rem 0.5rem;
    text-align: justify;
}
</style>