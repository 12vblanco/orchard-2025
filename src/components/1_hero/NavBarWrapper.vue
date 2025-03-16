<template>
  <nav class="NavbarWrapper" role="navigation" aria-label="Main navigation">   
      <div class="navbarTop">
        <div class="logo-container">
          <img src="../../assets/logo_wht.png" alt="Logo" class="logo" />
          <p class="logo-sub">&#10020; Edinburgh &#10020;</p>
        </div>
      </div>
  
      <!-- Bottom Div: Navigation Menu -->
      <div class="navbarBottom">
        <ul class="navMenu">
          <li><a href="javascript:void(0);" @click="scrollToSection('MenusSection')">Food & Drinks</a></li>
          <li><a @click="handleBookingToggle">Book A Table</a></li>
          <li><a href="javascript:void(0);" @click="scrollToSection('AboutSection')">Contact</a></li>
          <li><a href="javascript:void(0);" @click="scrollToSection('ExhibitionsSection')">Art</a></li>
          <li><a href="javascript:void(0);" @click="handlePoliciesToggle">Policies</a></li>
        </ul>
      </div>
  
      <!-- Burger Menu -->
      <BurgerMenu
        @toggleBooking="handleBookingToggle"
        @togglePolicies="handlePoliciesToggle"
        @scrollToSection="scrollToSection"
        :scrollToSection="scrollToSection"
        :isOpen="isBurgerOpen"
        @toggleMenu="handleBurgerToggle"
      />
  
      <!-- Modals -->
      <BookATable :show="showBooking" @close="handleBookingToggle"/>
      <PoliciesComp :show="showPolicies" @close="handlePoliciesToggle" />
    </nav>
  </template>
  
  <script>
  import BookATable from './BookATable.vue';
import BurgerMenu from './BurgerMenu.vue';
import PoliciesComp from './PoliciesComp.vue';
  
  export default {
    name: "NavbarWrapper",
    components: {
      BookATable,
      PoliciesComp,
      BurgerMenu,
    },
    props: {
      showBooking: Boolean,
      scrollToSection: Function,
    },
    data() {
      return {
        showPolicies: false,
        isBurgerOpen: false,
        localShowBooking: false
      };
    },
    watch: {
      showBooking(newVal) {
        this.localShowBooking = newVal;
        if (newVal) {
          this.closeOtherModals('booking');
        }
      }
    },
    methods: {
      closeOtherModals(except) {
        if (except !== 'booking') this.localShowBooking = false;
        if (except !== 'policies') this.showPolicies = false;
        if (except !== 'burger') this.isBurgerOpen = false;
        
        // Emit booking state change if necessary
        if (this.localShowBooking !== this.showBooking) {
          this.$emit('update:showBooking', this.localShowBooking);
        }
      },
      handleBookingToggle() {
        this.localShowBooking = !this.localShowBooking;
        this.$emit('update:showBooking', this.localShowBooking);
        if (this.localShowBooking) {
          this.closeOtherModals('booking');
        }
      },
      handlePoliciesToggle() {
        this.showPolicies = !this.showPolicies;
        if (this.showPolicies) {
          this.closeOtherModals('policies');
        }
      },
      handleBurgerToggle() {
        this.isBurgerOpen = !this.isBurgerOpen;
        if (this.isBurgerOpen) {
          this.closeOtherModals('burger');
        }
      }
    },
  };
  </script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

.NavbarWrapper {
  font-family: $font-family-primary;
  width: 100%; /* Changed from 100vw */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box; /* Ensure padding and borders are included in width */
}

.navbarTop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Changed from 100vw */
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.logo-container {
  max-width: 274px;
  padding-left: 1.4rem;
  @media (max-width: 420px) {
    width: 200px;
    padding-left: 1rem; /* Reduced padding for mobile */
  }
}

.logo {
  height: auto;
  width: 250px;
  margin-top: 1rem;
  border-radius: 125px;
  @media (max-width: 420px) {
    width: 180px;
    margin-top: 1.4rem;
  }
}

.logo-sub {
  color: $color-text-light;
  letter-spacing: 6px;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
}

.navbarBottom {
  position: absolute;
  top: 120px;
  left: 0;
  width: 100%;
  height: fit-content;
  text-align: center;
  padding: 0;
}

.navMenu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 50px;
  @media (max-width: 759px) {
    gap: 20px; 
  }
}

.navMenu li {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 22px;
  letter-spacing: 3px;
}

.navMenu a {
  text-decoration: none;
  color: $color-text-light;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s ease;
  font-weight: 500;
  font-size: $font-small;
  cursor: pointer;
}

.navMenu a:hover {
  color: $color-primary;
}

@media (max-width: 759px) {
  .navbarBottom {
    display: none; /* Hide regular menu on small screens */
  }
}
</style>