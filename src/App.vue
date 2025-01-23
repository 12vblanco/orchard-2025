<template>
  <div>
    <HeroSection :scrollToSection="scrollToSection" />
    <MenuSection />
    <AboutSection />
    <ExhibitionSection />
  </div>
</template>

<script>
import HeroSection from './components/1_hero/HeroSection.vue';
import MenuSection from './components/2_menus/MenuSection.vue';
import AboutSection from './components/3_about/AboutSection.vue';
import ExhibitionSection from './components/4_exhibition/ExhibitionSection.vue';

export default {
  name: 'App',
  components: {
    HeroSection,
    MenuSection,
    AboutSection,
    ExhibitionSection,
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-family-primary;
}

html, body {
  scroll-behavior: smooth;
  font-family: $font-family-primary;
  background: $color-background-black;
  font-family: $font-family-primary;
  font-size: $font-base;
}
</style>