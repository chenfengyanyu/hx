<template>
  <div class="banner">
    <tabs @clicked="tabClicked" @changed="tabChanged">
      <tab name="Stainless Steel">
        <img src="../assets/tab/1.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Carbon Steel">
        <img src="../assets/tab/2.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Coated Steel">
        <img src="../assets/tab/3.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Pipe/ Tube">
        <img src="../assets/tab/4.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Bar">
        <img src="../assets/tab/5.jpeg" width="100%" height="100%">
      </tab>
      <tab name="Wire Rod">
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
    height: 7rem;
    line-height: 13rem;
    vertical-align: text-bottom;
}

.tabs-component-tab-a:hover {
  color: #1e88e5;
  filter: grayscale(0);
}

.tabs-component-tabs>li {
  cursor: pointer;

}

.tabs-component-tabs>li:hover {
  filter: grayscale(0) !important;
}

.tabs-component-tabs>li:nth-child(1) {
  background: url(/src/assets/tab/icon1.svg) no-repeat center 1rem;
  background-size: 25%;
  filter: grayscale(1);
}

.tabs-component-tabs>li:nth-child(2) {
  background: url(/src/assets/tab/icon2.svg) no-repeat center 1rem;
  background-size: 25%;
  filter: grayscale(1);
}

.tabs-component-tabs>li:nth-child(3) {
  background: url(/src/assets/tab/icon1.svg) no-repeat center 1rem;
  background-size: 25%;
  filter: grayscale(1);
}

.tabs-component-tabs>li:nth-child(4) {
  background: url(/src/assets/tab/icon2.svg) no-repeat center 1rem;
  background-size: 25%;
  filter: grayscale(1);
}

.tabs-component-tabs>li:nth-child(5) {
  background: url(/src/assets/tab/icon1.svg) no-repeat center 1rem;
  background-size: 25%;
  filter: grayscale(1);
}

.tabs-component-tabs>li:nth-child(6) {
  background: url(/src/assets/tab/icon2.svg) no-repeat center 1rem;
  background-size: 25%;
  filter: grayscale(1);
}

@media (max-width: 1024px) {
  .tabs-component-tabs>li {
    background-size: 38% !important;
  }
}
@media (min-width: 1024px) {
  .tabs-component-tabs>li {
    background-size: 34% !important;
  }
}
@media (min-width: 1200px) {
  .tabs-component-tabs>li {
    background-size: 32% !important;
  }
}
@media (min-width: 1300px) {
  .tabs-component-tabs>li {
    background-size: 28% !important;
  }
}
@media (min-width: 1400px) {
  .tabs-component-tabs>li {
    background-size: 26% !important;
  }
}
@media (min-width: 1500px) {
  .tabs-component-tabs>li {
    background-size: 24% !important;
  }
}
@media (min-width: 1600px) {
  .tabs-component-tabs>li {
    background-size: 22% !important;
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