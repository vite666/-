<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style>
@import 'style/ResetScss.css';
#app {
  min-width: 110rem;
  height: 100%;
  font-family: arial;
  background-color: #efefef;
  overflow: auto;
}
</style>
