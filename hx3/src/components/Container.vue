<template>
  <div class="banner">
    <tabs @clicked="tabClicked" @changed="tabChanged">
      <tab name="Stainless Steel">
        <img src="../assets/tab/1.svg">
      </tab>
      <tab name="Carbon Steel">
        2 tab content
      </tab>
      <tab name="Coated Steel">
        3 tab content
      </tab>
      <tab name="Pipe/ Tube">
        4 tab content
      </tab>
      <tab name="Bar">
        5 tab content
      </tab>
      <tab name="Wire Rod">
        6 tab content
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
.tabs-component-panel{
  height: 40rem;
}
</style>