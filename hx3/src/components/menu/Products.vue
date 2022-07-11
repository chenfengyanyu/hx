<template>
    <div class="product-dropdown-menu">
        <ul class="list">
            <li>
                <div class="title">
                    <ProductIcon class="icon"/>
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol>
                    <li>AAAA</li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon"/>
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol>
                    <li>AAAA</li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon"/>
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol>
                    <li>AAAA</li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon"/>
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol>
                    <li>AAAA</li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon"/>
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol>
                    <li>AAAA</li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon"/>
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol>
                    <li>AAAA</li>
                </ol>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import ProductIcon from '@/components/icons/IconEcosystem.vue'
export default {
    name: "ProductDropdownMenu",
    components: {
        ProductIcon
    },
};
</script>

<style scoped>
.list {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    flex-wrap: wrap;
}

.list>li {
    /* flex: 0.25; */
    width: 24%;
    height: 15rem;
    /* border: 1px solid green; */
    margin: 0.5rem 0;

}

.list>li:not(:nth-child(4n)) {
    margin-right: calc(4%/3)
}

.title {
    position: relative;
}

.title>.icon{
       color: #1e88e5;
    transform: scale(2.5);
    position: absolute;
    top: 3rem;
    left: 3rem;
}
.title>.desc{
    font-size: 1.5rem;
    color: #1e88e5;
    margin: 1rem 0 0 4.5rem;
    display: inline-block;
}
</style>