<template>
    <div class="product-dropdown-menu">
        <ul class="list">
            <li>
                <div class="title">
                    <ProductIcon class="icon" />
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol class="products">
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon" />
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol class="products">
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon" />
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol class="products">
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon" />
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol class="products">
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon" />
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol class="products">
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon" />
                    <span class="desc">Carbon Steel</span>
                </div>
                <ol class="products">
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
                    <li><a href="#">Stainless Steel Hot Rolled No.1 Coil</a></li>
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
    /* width: 100%; */
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

.title>.icon {
    color: #1e88e5;
    transform: scale(2.5);
    position: absolute;
    top: 3rem;
    left: 3rem;
}

.title>.desc {
    font-size: 1.5rem;
    color: #1e88e5;
    margin: 1rem 0 0 4.5rem;
    display: inline-block;
}

.products {
    margin: 0 auto;
    list-style: none;
    margin: 1.5rem 0.5rem;
    list-style: none;
    padding: 0;
    line-height: 1.8rem;
    background-color: #fff;
}

.products>li>a {
    text-decoration: none;
    color: #999;
}

.products>li>a:hover {
    color: #1e88e5;
}


.products>li::before {
    content: " ";
    margin: 0 0.5rem 0 -0.5rem;
    vertical-align: text-top;
    opacity: 1;
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    background: url(/src/assets/iconset.svg) no-repeat -32rem -7.25rem;
    background-size: auto 12.5rem;
}
</style>