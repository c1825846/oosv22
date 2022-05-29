<template>
  <div class="app">
    <Header/>
    <div class="main">
      <MainMenu class="main-menu"/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from "@/components/Footer"
import MainMenu from "@/components/MainMenu";

export default {
  components: {
    Header,
    Footer,
    MainMenu,
  },
  created() {
    this.$store.dispatch('fetchItems')
    this.$store.dispatch('fetchCategories')
  }
}
</script>

<style lang="scss">
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.main {
}

.main-menu {
  margin-bottom: 10px;
}

.container {
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
}

.icon {
  width: 24px;
  height: 24px;
  svg {
    stroke-width: 1.5;
  }
}
</style>
