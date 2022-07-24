<template>
    <div id="imgBox">
        <div class="imggrid" v-for="item in imglist">
            <img :src="item" alt="" />
        </div>
    </div>
    <!-- <ImagesView v-model:visible="show" :images="srcArr" :src="imgSrc" /> -->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ImagesView from 'vue-imageview'
// import { data } from 'dom7';

export default defineComponent({
    components: {
        ImagesView
    },
    props: ['lists'],
    data() {
        // console.log('!!!!!',this.$props.lists)
        return {
            imglist: this.$props.lists
        }
    },
    setup() {
        console.log(111)

        const show = ref(false)
        const srcArr = ref([])
        const imgSrc = ref('');
        const getData = (imgBox: HTMLDivElement) => {
            const imgs = imgBox.querySelectorAll('img');
            srcArr.value = Array.from(imgs).map((el) => el.src);
        }

        onMounted(() => {
            const imgBox: HTMLDivElement = document.querySelector('#imgBox');
            getData(imgBox);
            imgBox.addEventListener('click', (e: any) => {
                if (e.target.nodeName == 'IMG') {
                    imgSrc.value = e.target.src;
                    show.value = true
                }
            })
        });

    }
})
</script>

<style scoped>
#imgBox {
    display: flex;
    flex-wrap: wrap;
}

#imgBox .imggrid {
    flex: 25%;
    padding: 0.5rem 1.5rem 1rem 0;
}

.imggrid img {
    width: 100%;
    height: 14rem;
    border: 1px solid #cccccc80;
    border-radius: 0.5rem;
    cursor: pointer;
}

.imggrid img:hover {
    box-shadow: 5px 6px 20px 3px #409effa3;
}
</style>
