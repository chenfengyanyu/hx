<template>
  <div class="package-dropdown-menu">
    <ul class="package-list">
      <li>
        <img src="../../assets/package/1.jpeg" />
        <div class="desc">Coil Exchange Center</div>
      </li>
      <li>
        <img src="../../assets/package/1.jpeg" />
        <div class="desc">Coil Exchange Center</div>
      </li>
      <li>
        <img src="../../assets/package/1.jpeg" />
        <div class="desc">Coil Exchange Center</div>
      </li>

    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "PackageDropdownMenu"
};
</script>

<style scoped>
.package-list {
  max-width: 1024px;
  list-style: none;
  margin: 3rem auto;
  display: flex;
  padding: 0;
  text-align: center;
  justify-content: space-between;
}

.package-list>li {
  /* flex: 25%; */
  cursor: pointer;
}
.package-list>li>img {
 width: 18rem;
}
.package-list .desc{
  color: #000;
  font-size: 1.5rem;
}
.package-list .desc:hover{
  color: #1e88e5;
}
</style>