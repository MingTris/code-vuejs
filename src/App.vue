<script>
import NavBar from "../src/components/NavBar.vue";
import Footer from "../src/components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>
