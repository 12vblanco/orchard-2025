<template>
    <div class="footer-contact">
      <div class="footer-row">
        <img :src="logo" alt="The Orchard Bar Logo" class="logo" />
      </div>
      <div class="contact-text">1-2 Howard Place, Canonmills</div>
      <div class="contact-text">Edinburgh, EH3 5JZ</div>
      <div class="contact-telf">
        <a class="contact-telf" href="tel:0131 550 0850">0131 550 0850</a>
      </div>
      <div class="contact-text">
        <a href="mailto:theorchardbar@gmail.com">theorchardbar@gmail.com</a>
      </div>
      <router-link to="/terms">
        <div class="terms">Terms & Conditions</div>
      </router-link>
    </div>
  </template>
  
  <script>
  import logo from "../../assets/logo_wht.png";
  

  export default {
    name: "FooterContact",
    data() {
      return {
        logo,
        currentYear: new Date().getFullYear(),
      };
    },
    components: {
    },
  };
  </script>
  
  <style lang="scss" scoped>
    @import '@/styles/styles.scss';

  .footer-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-right: .6rem;
    @media (max-width: 640px){
      margin-right: 0;
    }
  }
  
  .footer-row {
    display: flex;
    font-size: 32px;
    padding-bottom: 1rem;
  }
  
  .contact-text a{
    color: inherit;
    text-decoration: none;
    font-size: 17px;
    margin: 4px 0;
  }

  .terms{
    text-decoration: none;
  }
  
  .contact-telf {
    font-size: 18px;
    color: #ed4e4e;
    margin: 4px 0;
    text-decoration: none;
  }
  
  .copy-text {
    font-size: 11px;
    margin-top: 3rem;
  }
  
  .logo {
    width: 200px;
    height: auto;
  }
  
  .heart {
    position: relative;
    top: 3px;
    left: 1px;
    font-size: 12px;
    color: red;
  }
  
  .terms {
    font-size: $font-medium;
    margin-top: 1rem;
    color: $color-primary;
    cursor: pointer;
    font-weight: 600;
  }
  
  .terms:hover {
    color: $color-primary;
  }
  </style>