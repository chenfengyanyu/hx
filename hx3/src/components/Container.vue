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

.tabs-component-tab {
  height: 8rem;
  text-align: center;
  width: 25%;
  border: 1px solid green;
  background: url(../assets/tab/1.svg);
}

.tabs-component-panel {
  height: 40rem;
}

.tabs-component-panel>img {
  width: 100%;
  height: 100%;
}
</style>