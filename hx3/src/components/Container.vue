<template>
  <div class="banner">
    <tabs @clicked="tabClicked" @changed="tabChanged">
      <tab name="Titanium">
        <img src="../assets/tab/1.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Stainless Steel">
        <img src="../assets/tab/2.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Nickel Alloy">
        <img src="../assets/tab/3.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Zirconium">
        <img src="../assets/tab/4.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Niobium">
        <img src="../assets/tab/5.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Tantalum">
        <img src="../assets/tab/6.jpeg" width="100%" height="100%">
      </tab>
    </tabs>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    tabClicked(selectedTab) {
      console.log('Current tab re-clicked:' + selectedTab.tab.name)
    },
    tabChanged(selectedTab) {
      console.log('Tab changed to:' + selectedTab.tab.name)
    }
  }
}
</script>

<style>
.tabs-component-tabs {
  height: 10rem;
  display: flex;
  list-style: none;
  margin: 0;
  list-style-type: none;
  padding: 0;
}

.tabs-component-tabs .is-active {
  color: #1e88e5;
  filter: grayscale(0) !important;
}

.tabs-component-tab {
  height: 8rem;
  text-align: center;
  width: 25%;
  background: url(../assets/tab/1.svg);
}

.tabs-component-panel {
  height: 40rem;
}

.tabs-component-panel>img {
  width: 100%;
  height: 100%;
}

.tabs-component-tab-a {
 text-decoration: none;
    display: inline-block;
    width: 100%;
    position: absolute;
    bottom: 1rem;
    left: 0;
    height: 5rem;
    line-height: 13rem;
    vertical-align: text-bottom;
}

.tabs-component-tab-a:hover {
  color: #1e88e5;
  filter: grayscale(0);
}
.tabs-component-tab-a:visited {
  color: #000;
  filter: grayscale(0);
}

.tabs-component-tabs>li {
  cursor: pointer;

}

.tabs-component-tabs>li:hover {
  filter: grayscale(0) !important;
}

.tabs-component-tabs>li:nth-child(1) {
  background: url(/src/assets/tab/11.jpeg) no-repeat center 1rem;
  background-size: 25%;
  /* filter: grayscale(1); */
  filter: opacity(0.6);
}

.tabs-component-tabs>li:nth-child(2) {
  background: url(/src/assets/tab/12.jpg) no-repeat center 1rem;
  background-size: 25%;
  /* filter: grayscale(1); */
  filter: opacity(0.6);
}

.tabs-component-tabs>li:nth-child(3) {
  background: url(/src/assets/tab/13.jpg) no-repeat center 1rem;
  background-size: 25%;
  /* filter: grayscale(1); */
  filter: opacity(0.6);
}

.tabs-component-tabs>li:nth-child(4) {
  background: url(/src/assets/tab/14.jpg) no-repeat center 1rem;
  background-size: 25%;
  /* filter: grayscale(1); */
  filter: opacity(0.6);
}

.tabs-component-tabs>li:nth-child(5) {
  background: url(/src/assets/tab/15.webp) no-repeat center 1rem;
  background-size: 25%;
  /* filter: grayscale(1); */
  filter: opacity(0.6);
}

.tabs-component-tabs>li:nth-child(6) {
  background: url(/src/assets/tab/16.jpg) no-repeat center 1rem;
  background-size: 25%;
  /* filter: grayscale(1); */
  filter: opacity(0.6);
}

@media (max-width: 1024px) {
  .tabs-component-tabs>li {
    background-size: 88% !important;
  }
}
@media (min-width: 1025px) {
  .tabs-component-tabs>li {
    background-size: 78% !important;
  }
}
@media (min-width: 1200px) {
  .tabs-component-tabs>li {
    background-size: 78% !important;
  }
}
@media (min-width: 1300px) {
  .tabs-component-tabs>li {
    background-size: 68% !important;
  }
}
@media (min-width: 1400px) {
  .tabs-component-tabs>li {
    /* background-size: 26% !important; */
    background-size: 65% !important;
  }
}
@media (min-width: 1500px) {
  .tabs-component-tabs>li {
    background-size: 60% !important;
  }
}
@media (min-width: 1600px) {
  .tabs-component-tabs>li {
    background-size: 55% !important;
  }
}
/* @media (min-width: 1700px) {
  .tabs-component-tabs>li {
    background-size: 20% !important;
  }
}
@media (min-width: 1800px) {
  .tabs-component-tabs>li {
    background-size: 18% !important;
  }
} */
</style>