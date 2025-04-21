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
        <li><a href="javascript:void(0);" @click="scrollToSection('AboutSection')">Book A Table</a></li>
        <li><a href="javascript:void(0);" @click="scrollToSection('contact')">Contact</a></li>
        <li><a href="javascript:void(0);" @click="scrollToSection('ExhibitionsSection')">Art</a></li>
        <li><a href="javascript:void(0);" @click="showPoliciesModal">Policies</a></li>
      </ul>
    </div>

    <!-- Burger Menu -->
    <BurgerMenu
      :scrollToSection="scrollToSection"
      :isOpen="isBurgerOpen"
      @toggleMenu="handleBurgerToggle"
      @togglePolicies="showPoliciesModal"
    />

    <!-- Policies modal -->
    <PoliciesComp :show="showPolicies" @close="handlePoliciesToggle" />
  </nav>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue';
import PoliciesComp from './PoliciesComp.vue';

export default {
  name: "NavbarWrapper",
  components: {
    PoliciesComp,
    BurgerMenu,
  },
  data() {
    return {
      showPolicies: false,
      isBurgerOpen: false,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      this.$nextTick(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset =0; // 2rem offset
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      });
    },
    showPoliciesModal() {
      this.scrollToSection('HeroSection');
      this.handlePoliciesToggle();
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
    },
    closeOtherModals(except) {
      if (except !== 'policies') this.showPolicies = false;
      if (except !== 'burger') this.isBurgerOpen = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

.NavbarWrapper {
  font-family: $font-family-primary;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.navbarTop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.logo-container {
  max-width: 274px;
  padding-left: 1.4rem;
  @media (max-width: 420px) {
    width: 200px;
    padding-left: 1rem;
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
    display: none;
  }
}
</style>