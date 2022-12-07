<template>
  <main-header />
  <router-view />
  <footer-comp />
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import FooterComp from "./components/FooterComp.vue";
export default {
  name: "App",
  components: {
    MainHeader,
    FooterComp,
  },
};
</script>
