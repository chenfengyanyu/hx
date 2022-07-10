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
    margin: 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
    border-radius: 0.5rem;
}
.list li {
    width: 15rem;
    height: 15rem;
    border: 1px solid green;
    margin: 0 1.5rem 0 0;
    flex: 1;
}
</style>