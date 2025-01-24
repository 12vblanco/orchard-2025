<template>
    <div class="footer-social">
      <div class="social-icons">
        <div class="footer-column">
          <a
            href="https://www.facebook.com/theorchardbar/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./icons/facebook.svg" alt="Facebook" class="icon" style="width: 42px; height: 42px; margin-bottom: 14px"/>
          </a>
          <a
            href="https://www.instagram.com/theorchardbar/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./icons/instagram.svg" alt="Instagram" class="icon" style="width: 40px; height: 40px;"/>
          </a>
        </div>
        <div class="footer-column">
          <a
            href="https://twitter.com/theorchardbar?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./icons/twitter.svg" alt="Twitter" class="icon" style="width: 40px; height: 40px; margin-bottom: 12px"/>
          </a>
          <a
            href="https://www.tripadvisor.co.uk/Restaurant_Review-g186525-d2102775-Reviews-The_Orchard-Edinburgh_Scotland.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./icons/tripadvisor.svg" alt="TripAdvisor" class="icon" style="width: 48px; height: 50px;"/>
          </a>
        </div>
      </div>
      <div class="follow-text">Follow Us!</div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterSocial",
  };
  </script>
  
  <style lang="scss" scoped>
    @import '@/styles/styles.scss';

  .footer-social {
    display: flex;
    flex-direction: column;
    align-items: center;
  
    @media (max-width: 768px) {
      margin-bottom: 0rem;
      flex-direction: column-reverse;
    }
  }
  
  .social-icons {
    display: flex;
    padding: 1rem;
  
    @media (max-width: 768px) {
      padding: 2rem;
      padding-bottom: 0;
    }
  }
  
  .footer-column {
    flex: 1;
  
    h3 {
      font-size: $font-large;
      margin-bottom: 1rem;
      color: $color-primary;
    }
  
    p,
    ul {
      font-size: $font-small;
      line-height: 1.6;
    }
  
    ul.opening-hours {
      list-style: none;
      padding: 0;
  
      &__item {
        margin-bottom: 0.5rem;
      }
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    @media (max-width: 400px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  
  .icon {
    width: 32px; 
    height: 32px; 
    margin: 0 1.8rem;
    color: $color-text-light; 
    transition: color 0.3s ease;
  
    &:hover {
      color: $color-primary; 
    }

    @media (max-width: 768px) {
      margin-bottom: 0 !important;
    }
    @media (max-width: 400px) {
      margin-bottom: 2rem !important;
    }
  }
  
  .follow-text {
    font-family: "Dancing Script", cursive;
    font-size: 42px;
  
    @media (max-width: 920px) {
      font-size: 34px;
    }
  }
  </style>