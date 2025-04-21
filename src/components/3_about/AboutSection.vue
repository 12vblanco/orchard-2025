<template>
  <section id="AboutSection" class="AboutSection">
    <div class="inner-section">
    <h2 class="about-title">BOok a Table</h2>
    <div class="about-container">
      
      <!-- Contact Details Section -->
      <div class="text-section">
        <img src="../../assets/images/front.jpg" alt="About Us Image" />
        <div class="text"><h3>Contact Details:</h3>
        <p>1-2 Howard Place, Canonmills</p>
        <p>Edinburgh, EH3 5JZ</p>
        <a href="https://www.google.com/maps" target="_blank" class="map-link">
          (Click to find us on the map)
        </a><br/><br/>
        <p><strong>Phone:</strong> 0131 550 0850</p>
        <p><strong>Email:</strong> <a href="mailto:theorchardbar@gmail.com">theorchardbar@gmail.com</a></p></div>
      </div>
      <!-- Image Section -->
      <div class="booking-section" id="booking">
        <iframe
          src="https://booking.tablesense.com/organisation/2096cf8b-3ec7-4e08-9394-eb84a9d04a3d/business/e09741e3-14c8-4b31-9c06-64b197b16a9b/venue/06c3abe8-2ce4-4535-a07f-1c65d6836104/launcher?dm=true"
          allowtransparency="true"
          style="border:none; width: 280px; height: 362px; color: white;"
        >
        </iframe>
        
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
    @import '@/styles/styles.scss';
/* Main About Section */
.AboutSection {
  background-color: $color-background-dark;
  color: $color-text-light;
  height: 100%;
  width: 100vw;
  position: relative;
  overflow: hidden;
  padding: 3rem 4rem 3rem 2rem;
  border-top: 2px solid $color-secondary;
  @media (max-width: 800px) {
    padding: 1rem;
    max-width: 100%;
    min-width: 100%;
    }
}

.inner-section {
    max-width: 1400px;
    margin: 0 auto;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
      padding: .4rem ;
      max-width: 100%;
      min-width: 100%;
    }
    } 

/* Title Styling */
.about-title {
  text-transform: uppercase;
  font-size: $font-xxl;
  letter-spacing: 8px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
  @media (max-width: 880px) {
      margin-bottom: 0;
    }
}

/* Container for image and text */
.about-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 966px) {
      flex-direction: column-reverse;
    }
}

/* Image Section */
.booking-section {
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: 0 auto;
  background: black;
  width: 50%;

  // max-width: fit-content;
  border-radius: 12px;
  @media (max-width: 966px) {
    margin-top: 2rem;
      padding: 1rem;
    }
}


 img {
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2rem;
  margin-left: 6rem;
  @media (max-width: 966px) {
      max-width: 100%;
    }
}

/* Contact Details Section */
.text-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  text-align: left;
  // margin-left:8%;

  @media (max-width: 966px) {
      margin-top: 2rem;
      margin-left: 0rem;
      padding: 0 1rem;
    }
}

iframe {
  color-scheme: light;
  @media (max-width: 800px) {
      width: 100%;
    }
}



.text{
  text-align: left;
  // margin-left: -6rem;
  @media (max-width: 800px) {
      margin: 0 1rem;
      text-align: center;

    }
}

.text-section h3 {
  font-size: $font-xl;
  margin-bottom: 1rem;
}

.text-section p {
  font-size: $font-medium;
  line-height: 1.6;
  color: $color-text-light;
}

.map-link {
  font-size: $font-medium;
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
