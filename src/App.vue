<template>
  <div>
    <HeroSection />
    <MenuSection/>
  </div>
</template>


<script>
import HeroSection from './components/1_hero/HeroSection.vue';
import MenuSection from './components/2_menus/MenuSection.vue';

export default {
  name: 'App',
  components: {
    HeroSection,
    MenuSection
  }
}
</script>

<style>
#app {
  font-family: Plus Jakarta Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50
}
*{
  margin:0 ;
  padding: 0;
  box-sizing: border-box;
}
</style>
