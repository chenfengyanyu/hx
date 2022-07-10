<template>
  <div class="product-dropdown-menu">
    <ul class="list">
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProductDropdownMenu"
};
</script>

<style scoped>
.list {
    width: 100%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.5rem;
    flex-wrap: row wrap;
}
.list>li {
    flex: 0.25;
    /* width: 15rem; */
    height: 15rem;
    border: 1px solid green;
    margin: 0 1.5rem 0 0;
    
}
.list>li:nth-of-type(4n+0) {
    margin-right: 0;
}
</style>