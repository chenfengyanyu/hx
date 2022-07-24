<template>
    <div class="about">
        <img :src=imgsrc width="100%">
        <div class="title">{{title}}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import imgsrc from '../assets/bg.jpeg'

export default defineComponent({
    name: 'InfoboxComponent',
    data() {
        console.log(this.$props.imgsrc);
        return {
            defaultImg: imgsrc
        }
    },
    props: ['imgsrc','title']
})

</script>

<style scoped>
/* .about {
    min-height: 100vh;
} */

.about img {
    width: 100%;
}

.title {
    font-size: 2.5rem;
    margin: -6rem 0 0 1.5rem;
    color: #ffffffd4;
}
</style>
