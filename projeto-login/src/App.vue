<template>
  <div id="app">
    <div class="content">
      <div class="container mt-4">
        <router-view>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  overflow-y: hidden;
  height: 100vh;
  background-image: url(./assets/futuro.jpg);
  background-repeat: no-repeat;
}
</style>
