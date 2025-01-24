<template>
    <section id="ExhibitionsSection" class="ExhibitionsSection">
      <h2 class="exhibitions-title">Exhibitions</h2>
      <div class="exhibitions-container">
        <div class="image-section">
          <img src="../../assets/images/new9.jpg" alt="Exhibition Image" />
        </div>
        <div class="text-section">
          <h3>About Our Exhibitions:</h3>
          <p>
            In our side room, we hold regular art exhibitions across the year
            supporting local artists and art students to showcase their work. Since
            we are close to the Botanical Gardens in Edinburgh, we encourage natural
            art, Edinburgh city-scapes, & photography.
          </p>
          <p>
            If you would like to hold an exhibition at The Orchard, please email
            Lorraine <a
                href="mailto:theorchardbarAhTgmailDhOTcom"
                onclick="this.href=this.href
              .replace(/AhT/,'&#64;')
              .replace(/DhOT/,'&#46;')"
              >here</a> with
            your details.
          </p>
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
  .ExhibitionsSection {
    background-color: $color-background-black;
    color: $color-text-light;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 5rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-top: 2px solid $color-secondary;
    @media (max-width: 800px) {
    padding: 2rem 1rem 3rem 1rem;
    }
  }
  
  /* Title Styling */
  .exhibitions-title {
    text-transform: uppercase;
    font-size: $font-xxl;
    letter-spacing: 8px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 1rem;

  }
  
  .exhibitions-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
  
  .text-section {
    flex: 1;
    padding-left: 3rem;
    text-align: left;
    @media (max-width: 800px) {
      margin-top: 2rem;;
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
  
  .text-section a {
    color: $color-primary;
  }
  
  .text-section a:hover {
    text-decoration: underline;
  }
  
  .image-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
  }
  
  .image-section img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  

  </style>
  