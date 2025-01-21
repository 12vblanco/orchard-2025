<template>
  <section id="HeroSection" class="HeroSection">
    <!-- Overlay -->
    <div class="overlay"></div>
    <!-- Hero Content -->
    <div class="hero-content">
      <NavbarWrapper 
        @toggleBooking="toggleBooking"
        :showBooking="showBooking"
      />
      <div class="hero-text">
        <p class="hero-paragraph">
          Welcome to The Orchard Bar. A casual, relaxed restaurant and bar
          located in Canonmills just a few minutes' walk from the botanic gardens.
            We offer a regularly changing menu with seasonal produce, providing classic meals with a modern twist and a wide range of drinks. <a href="#menus" class="inline-menus">See our menus</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import NavbarWrapper from './NavBarWrapper.vue';

export default {
  components: {
    NavbarWrapper,
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
  }
};
</script>


<style>
/* Hero Section */
.HeroSection {
  background: url('../../assets/images/home4.jpg') no-repeat center center;
  background-size: cover;
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
  background-color: rgba(0, 0, 0, 0.55); /* Black with 40% opacity */
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
  top: 8rem;
  color: white;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 1.2px;
  font-weight: 400;
  z-index: 1; 
  max-width: 540px;
  text-align: justify;
}

.inline-menus {
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
}
.inline-menus:hover {
  color: #f1c40f; }

/* Button Activation Styling (Optional CSS for JS toggle) */
.iframe-visible .iframe-container {
  display: flex; /* Show iframe when activated */
}

</style>
