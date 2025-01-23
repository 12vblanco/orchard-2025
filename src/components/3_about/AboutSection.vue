<template>
  <section id="AboutSection" class="AboutSection">
    <h2 class="about-title">About Us</h2>
    <div class="about-container">
      
      <!-- Contact Details Section -->
      <div class="text-section">
        <div class="text"><h3>Contact Details:</h3>
        <p>1-2 Howard Place, Canonmills</p>
        <p>Edinburgh, EH3 5JZ</p>
        <a href="https://www.google.com/maps" target="_blank" class="map-link">
          (Click to find us on the map)
        </a>
        <br /><br /><br />
        <p><strong>Phone:</strong> 0131 550 0850</p>
        <p><strong>Email:</strong> <a href="mailto:theorchardbar@gmail.com">theorchardbar@gmail.com</a></p></div>
      </div>
      <!-- Image Section -->
      <div class="image-section">
        <img src="../../assets/images/front.jpg" alt="About Us Image" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // Add any relevant logic if needed
};
</script>

<style lang="scss" scoped>
    @import '@/styles/styles.scss';
/* Main About Section */
.AboutSection {
  background-color: $color-background-dark;
  color: $color-text-light;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 3rem 6rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-top: 2px solid $color-secondary;
}

/* Title Styling */
.about-title {
  text-transform: uppercase;
  font-size: $font-xxl;
  letter-spacing: 8px;
  font-weight: 500;
  text-align: right;
  margin-bottom: 1rem;
}

/* Container for image and text */
.about-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

/* Image Section */
.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-section img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Contact Details Section */
.text-section {
  flex: 1;
  text-align: center;
  
}

.text{
  text-align: left;
  margin-left: 5rem;
}

.text-section h3 {
  font-size: $font-xl;
  margin-bottom: 1rem;
}

.text-section p {
  font-size: $font-large;
  line-height: 1.6;
  color: $color-text-light;
}

.map-link {
  font-size: $font-large;
  color: $color-primary;
  text-decoration: none;
}

.map-link:hover {
  color: #f7d44a;
}

.text-section a {
  color: $color-primary;
}
</style>
