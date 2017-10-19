<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4">Hello World! I was wondering if after all theses years you'd like to meet.</div>
        <div class="col-sm-4">Hello World! I was wondering if after all theses years you'd like to meet.</div>
        <div class="col-sm-4">Hello World! I was wondering if after all theses years you'd like to meet.</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
