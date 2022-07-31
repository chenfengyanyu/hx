<template>
  <div class="quality-dropdown-menu">
    <ul class="quality-list">
      <li>
        <img src="../../assets/quality/iso1.png" />
        <div class="desc"><a href="iso">SGS Inspection Report</a></div>
      </li>
      <li>
        <img src="../../assets/quality/sgs.avif" />
        <div class="desc"><a href="pdf2">Stainless Steel 316L Square Pipe Inpeection Report</a></div>
      </li>
      <li>
        <img src="../../assets/quality/sgs.avif" />
        <div class="desc"><a href="pdf">Stainless Steel 316L Square Pipe UT Testing Report</a></div>
      </li>

    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "QualityDropdownMenu"
};
</script>

<style scoped>
.quality-list {
  list-style: none;
  margin: 3rem auto;
  display: flex;
  padding: 0;
  text-align: center;
  justify-content: space-between;
}

.quality-list>li {
  flex: 33%;
  /* margin: 0 0 5rem 0; */
  /* cursor: pointer; */
}

.quality-list>li>img {
  height: 12rem;
  width: 18rem;
  border-radius: 0.5rem;
  filter: opacity(0.9);
}

.quality-list .desc {
  color: #000;
  font-size: 1.5rem;
}

.desc a {
  color: #525253;
  text-decoration: none;
}

.desc a:hover {
  color: #1e88e5;
}
</style>