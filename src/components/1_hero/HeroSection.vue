<template>
  <section id="HeroSection" class="HeroSection">
    <!-- Dynamic Background -->
    <DynamicBackground />
    <!-- Overlay -->
    <div class="overlay"></div>
    <!-- Hero Content -->
    <div class="hero-content">
      <NavbarWrapper 
        @toggleBooking="toggleBooking"
        :showBooking="showBooking"
        :scrollToSection="scrollToSection" 
      />
      <div class="hero-text">
        <p class="hero-paragraph">
          Welcome to <b>The Orchard Bar</b>. A casual, relaxed restaurant and bar
          located in Canonmills just a few minutes' walk from the botanic gardens.
          We offer a regularly changing menu with seasonal produce, providing classic meals with a modern twist and a wide range of drinks. <a href="#menus" class="inline-menus" @click="scrollToSection('MenusSection')"><b>See our menus</b></a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import NavbarWrapper from './NavBarWrapper.vue';
import DynamicBackground from './DynamicBackground.vue'; 

export default {
  components: {
    NavbarWrapper,
    DynamicBackground, 
  },
  props: {
    scrollToSection: Function 
  },
  data() {
    return {
      showBooking: false
    };
  },
  methods: {
    toggleBooking() {
      this.showBooking = !this.showBooking;
    }
  },
  mounted() {
    console.log('HeroSection.vue - scrollToSection:', this.scrollToSection);
  }
};
</script>

<style lang="scss" scoped>
/* Hero Section */
.HeroSection {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

/* Black Overlay */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-overlay; /* Black with 40% opacity */
  z-index: 1; /* Ensure it stays behind the content */
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Hero Text */
.hero-text {
  position: relative;
  top: 12rem;
  z-index: 1; 
  max-width: 540px;
  text-align: justify;
  @media (max-width: 420px){
    max-width: 100%;
    padding: 0 1.4rem 0 .3rem;
    text-align: center;
  }
  @media (max-width: 620px){
    max-width: 100%;
    padding: 0 1.4rem 0 .3rem;
    text-align: center;
  }
}

.hero-paragraph {
  color: $color-text-light;
  font-size: $font-medium;
  line-height: 1.5;
  letter-spacing: 1.2px;
  font-weight: 500;
  @media (max-width: 420px){
    font-size: $font-medium;
    line-height: 1.5;
    font-weight: 500;  
    font-size: 17px}
    @media (max-width: 620px){
    font-size: $font-medium;
    line-height: 1.5;
    font-weight: 500;  
    font-size: 17px}
}

.inline-menus {
  text-decoration: none;
  color: $color-text-light;
  transition: color 0.3s ease;
}
.inline-menus:hover {
  color: $color-primary; }

/* Button Activation Styling (Optional CSS for JS toggle) */
.iframe-visible .iframe-container {
  display: flex; /* Show iframe when activated */
}
</style>