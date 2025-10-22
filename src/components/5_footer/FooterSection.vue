<template>
  <footer class="FooterSection">
    <!-- Top Row: 4 Columns -->
    <div class="footer-top">
      <div class="footer-column">
        <FooterSocial /> <!-- Use the FooterSocial component here -->
      </div>
      <div class="footer-column">
        <h3>Opening Hours</h3>
        <ul class="opening-hours">
          <li class="opening-hours__item" v-for="(open, index) in opening" :key="index">{{ open.opening }}</li>
        </ul>
      </div>
      <div class="footer-column">
        <FooterContact/>
      </div>
    </div>

    <!-- Bottom Row: Copyright -->
    <div class="footer-bottom">
      <p class="copy">
         <a href="https://www.victorblancoweb.com" target="_blank" class="vic-copy">Victor Blanco Website</a>          <img src="./icons/heart.svg" alt="Heart Icon" class="heart-icon" /> <span class="copy-orchard">&copy; {{ currentYear }} The Orchard Bar</span>
        
      </p>
    </div>
  </footer>
</template>

<script>
import FooterContact from './FooterContact.vue';
import FooterSocial from './FooterSocial.vue';
import { opening } from './opening_times';

export default {
  name: 'FooterSection',
  components: {
    FooterSocial, 
    FooterContact,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(), 
      opening, 
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

.FooterSection {
  background-color: $color-background-dark;
  color: $color-text-light;
  padding-top: 3rem;
  padding-bottom: .8rem;
  text-align: center;
  border-top: 2px solid $color-secondary;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem; 
}

.footer-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-width: 223px;
  // padding: 0 1rem;

  h3 {
    font-size: $font-large;
    margin-bottom: 1rem;
    color: $color-text-light;
  }

  p, ul {
    font-size: $font-small;
    line-height: 1.6;
    letter-spacing: 2px;
    font-weight: 600;
    font-size: $font-small;
  }

  ul.opening-hours {
    list-style: none;
    padding: 0;

    &__item {
      margin-bottom: 0.5rem;
    }
  }
}

.footer-bottom {
  padding-top: 1rem;
  border-top: 1px solid $color-secondary;
  margin-top: 3rem;

  p {
    font-size: $font-small;
    font-weight: 500;
    margin: 0;
  }

  .vic-copy {
    color: $color-text-light;
    // font-size: 16px;
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 600;

    &:hover {
      color: $color-primary;
    }
  }
}

@media (max-width: 781px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-column {
    margin-bottom: 2rem;
  }
}

@media (max-width: 540px) {
  .copy-orchard{
    display: block;
  }
}

.heart-icon{
  margin: 0 4px;
  margin-bottom: -2px;
}
</style>