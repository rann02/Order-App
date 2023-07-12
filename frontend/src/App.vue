<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<template>
  <div>
    <Navbar />
    <RouterView class="container" />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding-top: 75px;
}
</style>
