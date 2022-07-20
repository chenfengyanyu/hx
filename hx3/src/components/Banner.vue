
  <template>
    <swiper class="swiper" :style="{
        '--swiper-navigation-color': '#000000cf',
        '--swiper-pagination-color': '#000000cf'
    }" :modules="modules" :speed="600" :parallax="true" :navigation="true" :pagination="{ clickable: true }" autoplay>
        <template #container-start>
            <div class="parallax-bg" data-swiper-parallax="-23%"
                :style="{ backgroundImage: 'url(../src/assets/banner/3.jpg)' }"></div>
        </template>
        <swiper-slide class="slide">
            <h1 class="title" data-swiper-parallax="-300">WE DELIVER VALUES</h1>
            <!-- <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2> -->
            <div class="text" data-swiper-parallax="-100">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis
                    velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor
                    porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac
                    laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                    libero. Aenean feugiat non eros quis feugiat.
                </p>
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <h1 class="title" data-swiper-parallax="-300">WE OFFER PROFESSIONAL SERVICE</h1>
            <!-- <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2> -->
            <div class="text" data-swiper-parallax="-100">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis
                    velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor
                    porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac
                    laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                    libero. Aenean feugiat non eros quis feugiat.
                </p>
            </div>
        </swiper-slide>
        <swiper-slide class="slide">
            <h1 class="title" data-swiper-parallax="-300">WE KNOW METAL</h1>
            <!-- <h2 class="subtitle" data-swiper-parallax="-200">Subtitle</h2> -->
            <div class="text" data-swiper-parallax="-100">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis
                    velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor
                    porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac
                    laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                    libero. Aenean feugiat non eros quis feugiat.
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
    width: 130%;
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
    background: rgb(0 0 0 / 40%);
    font-size: 4rem;
    padding: 2rem 2rem 0;
    border-radius: 0.5rem 0.5rem 0 0;
}

.slide p {
    background: rgb(0 0 0 / 40%);
    font-size: 1.4rem;
    padding: 0 2rem 3rem;
    border-radius: 0 0 0.5rem 0.5rem;
    text-align: justify;
}
</style>