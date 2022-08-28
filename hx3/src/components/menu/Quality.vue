<template>
  <div class="quality-dropdown-menu">
    <ul class="quality-list">
      <li>
        <img src="../../assets/quality/iso.jpeg" />
        <div class="desc"><a href="iso">ISO9001:2015 Certificate</a></div>
      </li>
      <li>
        <img src="../../assets/quality/sgs.png" />
        <div class="desc"><a href="pdf2">Stainless Steel 316L Square Pipe Inpeection Report</a></div>
      </li>
      <li>
        <img src="../../assets/quality/sgs.png" />
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
  margin: 3rem auto 0;
  display: flex;
  padding: 0;
  text-align: center;
  justify-content: space-between;
  /* border: 1px solid green; */
  background: #fff;
  padding-bottom: 3rem;
}

.quality-list>li {
  flex: 33%;
  /* margin: 0 0 5rem 0; */
  /* cursor: pointer; */
}

.quality-list>li>img {
  height: 18rem;
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
  width: 24rem;
  display: inline-block;
}

.desc a:hover {
  color: #1e88e5;
}
</style>