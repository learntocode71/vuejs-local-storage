<template>
  <div id="app">
    <Navbar />
    <main class="my-3">
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>
