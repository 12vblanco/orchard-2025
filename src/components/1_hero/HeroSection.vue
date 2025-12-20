<template>
  <section id="HeroSection" class="HeroSection">
    <!-- Dynamic Background -->
    <DynamicBackground />
    <!-- Overlay -->
    <div class="overlay"></div>
    <!-- Hero Content -->
    <div class="hero-content">
      <NavbarWrapper 
        :show-booking="showBooking"
        @update:showBooking="showBooking = $event"
        :scrollToSection="scrollToSection" 
      />
      <!-- <div class="hero-text"> -->
      <div class="hero-xmas">
        <img class="xmas-img" src="@/assets/images/xmas-times-25.jpg" alt="xmas opening hours" />
        <!-- <p class="hero-paragraph">
          Welcome to <b>The Orchard Bar</b>. A casual, relaxed restaurant and bar
          located in Canonmills just a few minutes' walk from the botanic gardens.
          We offer a regularly changing menu with seasonal produce, providing classic meals with a modern twist and a wide range of drinks. 
          <a href="#menus" class="inline-menus" @click="scrollToSection('MenusSection')" ><b>See our menus</b>
            </a> <br/><br/>
            </p>-->
            <p class="hero-paragraph"><b style="text-transform: uppercase;">Please note <span>only assistance dogs</span> are allowed in The Orchard. </b></p> 
      </div>
      <!-- RUGBY INSERT -->
      <!-- <div class="hero-text-rugby">
        <div class="tnt-logo"> -->
          <!-- <div class="nations-flags">
            <img class="tnt-img" src="@/assets/images/tnt.png" alt="TNT Sports Logo" />
          <img src="@/assets/images/scot.png" alt="Scotland Flag" />
          <img src="@/assets/images/eng.png" alt="England Flag" />
          <img src="@/assets/images/ira.png" alt="Ireland Flag" />
          <img src="@/assets/images/wal.png" alt="Wales Flag" />
        </div> -->
        <!-- </div>
        <p class="hero-paragraph-rugby">
          <b>From the 1st of November, we show the Autumn Nations series with TNT Sports!! </b>
          </p> -->
      <!-- </div> -->

    </div>
  </section>
</template>

<script>
import DynamicBackground from './DynamicBackground.vue';
import NavbarWrapper from './NavBarWrapper.vue';

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
  top: 6rem;
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
/* Hero Text Rugby*/
/* .hero-text-rugby {
  position: relative;
  top: 6rem;
  z-index: 1; 
  max-width: 540px;
  text-align: justify;
  margin-top: 4rem;
  
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

.hero-paragraph-rugby {
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
} */

/* Hero Text */
.hero-text {
  position: relative;
  top: 2rem;
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

.xmas-img {
  width: 46vh;
  margin: 0 auto;
  text-align: center;
  border-radius: 12px;
  margin-top: 8rem;
  margin-bottom: 5rem;

  @media (max-width: 420px){
    width: 96vw;
    /* margin: 0  5rem; */
    /* padding: 0 1.4rem 0 .3rem; */
  }
}

  /* Nations Flags Container */
/* .nations-flags {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 88%;
  margin: 1rem auto 0;
  gap: 1rem;

  img {
    width: 80px;
    
    border-radius: 6px;
    height: auto;
    @media (max-width: 420px) {
      max-width: 80px;
    }
    @media (max-width: 620px) {
      max-width: 80px;
    }
  }
} */

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
span{
  color: $color-primary;
}

</style>