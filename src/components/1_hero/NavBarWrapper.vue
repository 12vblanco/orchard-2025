<template>
  <nav class="NavbarWrapper">
    <!-- Top Div: Logo -->
    <div class="navbarTop">
      <div class="logo-container">
        <img src="../../assets/logo_wht.png" alt="Logo" class="logo" />
        <p class="logo-sub">&#10020; Edinburgh &#10020;</p>
      </div>
    </div>

    <!-- Bottom Div: Navigation Menu -->
    <div class="navbarBottom">
      <ul class="navMenu">
        <li><a href="javascript:void(0);" @click="scrollToSection('MenusSection')">Eat & Drink</a></li>
        <li><a @click="$emit('toggleBooking')">BOOKINGS</a></li>
        <li><a href="javascript:void(0);" @click="scrollToSection('AboutSection')">About Us</a></li>
        <li><a href="javascript:void(0);" @click="scrollToSection('ExhibitionsSection')">Art</a></li>
        <li><a href="javascript:void(0);" @click="togglePolicies">Policies</a></li>
      </ul>
    </div>

    <!-- Burger Menu -->
    <BurgerMenu
      @toggleBooking="$emit('toggleBooking')"
      @togglePolicies="togglePolicies"
      @scrollToSection="scrollToSection"
    />

    <!-- Modals -->
    <BookATable :show="showBooking" @close="$emit('toggleBooking')" />
    <PoliciesComp :show="showPolicies" @close="togglePolicies" />
  </nav>
</template>

<script>
import BookATable from './BookATable.vue';
import BurgerMenu from './BurgerMenu.vue'; // Import the BurgerMenu component
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
    };
  },
  methods: {
    togglePolicies() {
      this.showPolicies = !this.showPolicies;
    },
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
  max-width: 240px;
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
    gap: 20px; /* Reduced gap for mobile */
  }
}

.navMenu li {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.1);
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