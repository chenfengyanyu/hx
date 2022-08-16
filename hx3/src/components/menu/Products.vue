<template>
    <div class="product-dropdown-menu">
        <ul class="list">
            <li>
                <div class="title">
                    <ProductIcon class="icon" />
                    <span class="desc">Titanium</span>
                </div>
                <ol class="products">
                    <li><a href="trb">Titanium Round Bar</a></li>
                    <li><a href="tps">Titanium Plate/Sheet</a></li>
                    <li><a href="tpt">Titanium Pipe/Tube</a></li>
                    <li><a href="tww">Titanium Welding wire</a></li>
                    <li><a href="tf">Titanium Forging</a></li>
                    <li><a href="tff">Titanium Fitting/Flange</a></li>
                    <li><a href="product">Ti & Ti Alloy Clad plate</a></li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon" />
                    <span class="desc">Stainless Steel</span>
                </div>
                <ol class="products">
                    <li><a href="product">Stainless Steel Pipe</a></li>
                    <li><a href="product">Stainless Steel Plate & Sheet</a></li>
                    <li><a href="product">Stainless Steel Round Bar</a></li>
                    <li><a href="product">Stainless Steel Flange/Fitting</a></li>
                    <li><a href="product">Stainless Steel Filler Wire</a></li>
                </ol>
            </li>
            <li>
                <div class="title">
                    <ProductIcon class="icon" />
                    <span class="desc">Other Metals</span>
                </div>
                <ol class="products">
                    <li><a href="product">Nickel Alloy</a></li>
                    <li><a href="product">Niobium </a></li>
                    <li><a href="product">Tantalum</a></li>
                    <li><a href="product">Tungsten</a></li>
                    <li><a href="product">Zirconium</a></li>
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
    padding: 2rem 4rem;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    flex-wrap: wrap;
    text-align: center;
    font-size: 1.1rem;
}

.list>li {
    /* flex: 0.25; */
    width: 33%;
    height: 18rem;
    margin: 0.5rem 0;
    border-left: 1px solid #cccccc69;
    text-align: left;
    padding-left: 5rem;
}

.list>li:nth-child(1) {
   border-left: none; 
}

/* .list>li:not(:nth-child(4n)) {
    margin-right: calc(4%/3)
} */

.title {
    position: relative;
}

.title>.icon {
    color: #1e88e5;
    transform: scale(2.5);
    position: absolute;
    top: 3rem;
    left: 3rem;
    z-index: -1;
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
    line-height: 2rem;
    background-color: #fff;
    z-index: 999;
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