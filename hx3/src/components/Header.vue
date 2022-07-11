<template>
    <div class="header">
        <ProductDropdownMenu/>
        <vsm-menu :menu="menu">
            <!-- <template #default="{ item }">
                <div style="width: 300px; padding: 30px">
                    Dropdown content - {{ item.title }}
                </div>
            </template> -->
            <template #default="data">
                <div style="width: 100vw;padding-right: 1.2rem;border-radius: 0.5rem;">
                    <!-- https://codesandbox.io/s/vq355?file=/src/App.vue:889-913 -->
                    <component :is="data.item.content" class="content" />
                    <component :is="data.item.secondaryContent" class="content--secondary" />
                </div>
            </template>
            <template #before-nav>
                <li class="vsm-mob-full">
                    <img class="vsm-logo-img" src="../assets/logo.svg" />
                </li>
            </template>
            <template #after-nav>
                <li class="vsm-mob-hide">
                    <!-- Right side -->
                </li>
                <vsm-mob>
                    <div style="min-height: 200px; padding: 30px">
                        <mobile-content />
                    </div>

                </vsm-mob>
            </template>
        </vsm-menu>
    </div>
</template>

<script lang="ts">
import ProductDropdownMenu from '@/components/menu/Products.vue'
import PackageDropdownMenu from '@/components/menu/Package.vue'
import ServiceDropdownMenu from '@/components/menu/Service.vue'
import MobileContent from "@/components/MobileContent.vue";
export default {
    components: {
        ProductDropdownMenu,
        PackageDropdownMenu,
        ServiceDropdownMenu,
        MobileContent
    },
    data() {
        return {
            menu: [
                { title: 'Home', attributes: { href: '/' } },
                { title: 'Products', dropdown: 'dropdown-1', content: ProductDropdownMenu },
                { title: 'Package', dropdown: 'dropdown-2', content: PackageDropdownMenu },
                { title: 'Service', dropdown: 'dropdown-3', content: ServiceDropdownMenu },
                { title: 'Contact', attributes: { href: '#contact' } },
            ]
        }
    }
}
</script>

<style lang="scss">
@import "vue-stripe-menu/src/scss/index";

.header {
    /* margin: 0 auto; */
    height: 6.5rem;
    z-index: 99999;
}

.vsm-menu {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}

.vsm-logo-img {
    height: 3rem;
    margin-top: 1rem;
}

.vsm-link {
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin: 3.2rem 0 0 0;
    padding: 0 25px;
    color: #000;
    transition: color 0.1s ease;
    font-size: 1.375rem;
    font-family: "Oswald", sans-serif;
    font-weight: 300;
    cursor: pointer !important;
}

.vsm-link :hover {
    color: #1e88e5;
}

.vsm-nav {
    // margin: 0 10px;
}

.vsm-link-container {
    display: flex;
    flex: 1 1 auto;
    justify-content: right;
}

@media screen and (max-width: 768px) {
    .vsm-mob-show {
        display: block;
    }

    .vsm-mob-hide {
        display: none;
    }

    .vsm-mob-full {
        flex-grow: 1;
    }
}
</style>