<template>
  <div>
    <!-- Burger Icon -->
    <div class="burger-icon" :class="{ 
      open: isOpen,
      'scrolled': isScrolled 
    }" @click="$emit('toggleMenu')">
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
    </div>

    <!-- Overlay Menu -->
    <div class="overlay-menu" :class="{ open: isOpen }">
      <ul class="menu-list">
        <li><a href="javascript:void(0);" @click="handleClick('MenusSection')">Food & Drinks</a></li>
        <li><a href="javascript:void(0);" @click="handleClick('booking')">Book A Table</a></li>
        <li><a href="javascript:void(0);" @click="handleClick('AboutSection')">Contact</a></li>
        <li><a href="javascript:void(0);" @click="handleClick('ExhibitionsSection')">Art</a></li>
        <li><a href="javascript:void(0);" @click="handleClick('Policies')">Policies</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BurgerMenu",
  
  props: {
    scrollToSection: {
      type: Function,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      isScrolled: false,
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  
  methods: {
  handleClick(section) {
    this.$emit('toggleMenu');
    if (section === "Policies") {
      this.$emit("togglePolicies");
    } else {
      this.scrollToSection(section);
    }
  }
}
};
</script>
  
  <style lang="scss" scoped>
@import '@/styles/styles.scss';

  .burger-icon {
    position: fixed;
    top: 36px;
    right: 32px;
    width: 36px;
    cursor: pointer;
    z-index: 1000;
    width: 44px;
    padding: 0px 4px;
    border-radius: 18px;
    display: none; 
  border-radius: 8px;  
  transition: background-color 0.3s ease;  
  
  &.scrolled {
    background-color: rgba(0, 0, 0, 0.4);  
  }

    @media (max-width: 420px){
      top: 36px;
  }
  }
  
  .burger-icon.open .line-1 {
    transform: rotate(45deg) translate(5px, 7px);
  }
  
  .burger-icon.open .line-2 {
    opacity: 0;

  }
  
  .burger-icon.open .line-3 {
    transform: rotate(-45deg) translate(5px, -7px);
  }
  
  .line {
    display: block;
    width: 100%;
    height: 4px;
    background-color: white;
    margin: 5px 0;
    transition: all 0.3s ease;
    border-radius: 2px;
  }
  
  .overlay-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 999;
    transition: right 0.3s ease;
  }
  
  .overlay-menu.open {
    right: 0;
  }
  
  .menu-list {
    list-style: none;
    padding: 0;
    margin: 180px 0 0 0;
    text-align: center;
  }
  
  .menu-list li {
    cursor: pointer;
    width: fit-content;
    margin: 20px auto;
  }
  
  .menu-list a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }
  
  .menu-list a:hover {
    color: #ffcc00;
  }
  
  @media (max-width: 759px) {
    .burger-icon {
      display: block; 
    }
  }
  </style>