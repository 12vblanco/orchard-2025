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
    <BookATable 
      :show="showBooking"
      @close="$emit('toggleBooking')"
    />
    <PoliciesComp 
      :show="showPolicies"
      @close="togglePolicies"
    />
  </nav>
</template>

<script>
import BookATable from './BookATable.vue';
import PoliciesComp from './PoliciesComp.vue';

export default {
  name: "NavbarWrapper",
  components: {
    BookATable,
    PoliciesComp
  },
  props: {
    showBooking: Boolean,
    scrollToSection: Function // Define scrollToSection as a prop
  },
  data() {
    return {
      showPolicies: false
    };
  },
  methods: {
    togglePolicies() {
      this.showPolicies = !this.showPolicies;
    }
  },
  mounted() {
  console.log('NavbarWrapper.vue - scrollToSection:', this.scrollToSection);
}
};



</script>
  
  <style lang="scss" scoped>
  @import '@/styles/styles.scss';
  /* Wrapper for Navbar */
  .NavbarWrapper {
    font-family: $font-family-primary;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  /* Top Div: Logo */
  .navbarTop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
  }
  
.logo-container{
    max-width: 340px;
    padding-left: 1.8rem;
}

  .logo {
    height: auto;
    width: 280px;
    margin-top: 1rem;
    border-radius: 125px;
  }

  .logo-sub {
    color: $color-text-light;
    letter-spacing: 6px;
    font-size: $font-small;    
    font-weight: 500;
    margin: 0;
  }
  
  /* Bottom Div: Navigation Menu */
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
  }
  
  .navMenu li {
    display: inline-block;
    background-color: rgba(0,0,0,.1);
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
    color: $color-primary; }
  </style>
  