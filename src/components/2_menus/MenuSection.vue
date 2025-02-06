<template>
  <section id="MenusSection" class="MenusSection">
    <h2 class="menus-title">MENUS</h2>
    <div class="menus-options">
      <div class="menus-options_top">
        <a
          href="#food-menu"
          @click.prevent="setSelectedMenu('Food Menu')"
          :class="{ active: selectedMenu === 'Food Menu' }"
          >Food Menu</a>
        <span class="menu-divider">&#10020;</span>
        <a
          href="#sunday-roast"
          @click.prevent="setSelectedMenu('Sunday Roasts')"
          :class="{ active: selectedMenu === 'Sunday Roast' }"
          >Sunday Roast</a>
        <span class="menu-divider">&#10020;</span>
        <a
          href="#kids-menu"
          @click.prevent="setSelectedMenu('Kids Menu')"
          :class="{ active: selectedMenu === 'Kids Menu' }"
          >Kids Menu</a>
        <span class="menu-divider">&#10020;</span>
        <a
          href="#gluten-free"
          @click.prevent="setSelectedMenu('Gluten Free')"
          :class="{ active: selectedMenu === 'Gluten Free' }"
          >Gluten Free</a>
      </div>
      
      <div class="menus-options_bottom">
        <a
          href="#wine"
          @click.prevent="setSelectedMenu('Wine')"
          :class="{ active: selectedMenu === 'Wine' }"
          >Wine</a>
        <span class="menu-divider">&#10020;</span>
        <a
          href="#beers"
          @click.prevent="setSelectedMenu('Beers')"
          :class="{ active: selectedMenu === 'Beers' }"
          >Beers</a>
        <span class="menu-divider">&#10020;</span>
        <a
          href="#whisky"
          @click.prevent="setSelectedMenu('Whisky')"
          :class="{ active: selectedMenu === 'Whisky' }"
          >Whisky</a>
        <span class="menu-divider">&#10020;</span>
        <a
          href="#whisky-detailed"
          @click.prevent="setSelectedMenu('Whisky-Detailed')"
          :class="{ active: selectedMenu === 'Whisky-Detailed' }"
          >Whisky-Detailed</a>
        <span class="menu-divider">&#10020;</span>
        <a
          href="#rums"
          @click.prevent="setSelectedMenu('Rums')"
          :class="{ active: selectedMenu === 'Rums' }"
          >Rums</a>
        <span class="menu-divider">&#10020;</span>
        <a
          href="#gins"
          @click.prevent="setSelectedMenu('Gins')"
          :class="{ active: selectedMenu === 'Gins' }"
          >Gins</a>
        <span class="menu-divider">&#10020;</span>
        <a
          href="#tea-coffee-sherry"
          @click.prevent="setSelectedMenu('Tea, Coffee & Sherry')"
          :class="{ active: selectedMenu === 'Tea, Coffee & Sherry' }"
          >Tea Coffee & Sherry</a>
      </div>
    </div>

    <div class="menus-content">
      <div class="menus-content_square1"></div>
      <div class="menus-content_square2"></div>
      <div class="menus-content_square3"></div>
      <div class="menus-content_square4"></div>
      <div v-if="selectedMenu" class="menus-text">
        <!-- Dynamically render the content based on the selected menu -->
        <div v-for="(item, index) in menuItems" :key="index">
          <div v-if="item.menu === selectedMenu">
            <h3 class="menu-type">{{ item.menu }}</h3>
            <div v-for="(category, idx) in item.categories" :key="idx">
              <h4 class="menu-category">{{ category.category }}</h4>
              <ul>
                <li v-for="(menuItem, i) in category.items" :key="i">
                  <div class="menu-name">{{ menuItem.name }} <span class="menu-price">{{ menuItem.price }}</span></div>
                  <span class="menu-description">{{ menuItem.description }} </span><br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="menus-text"></p>
    </div>
  </section>
</template>
  
  <script>
  import { menuItems } from "../../../public/menus/food_menus.js"; // Ensure the correct path
  
  export default {
    data() {
      return {
        selectedMenu: 'Food Menu', 
        menuItems, 
      };
    },
    methods: {
      setSelectedMenu(menuName) {
        this.selectedMenu = menuName;
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
    @import '@/styles/styles.scss';
    
/* Main Menus Section */
.MenusSection {
  background-color: black;
  color: $color-text-light;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-top: 2px solid $color-secondary;

  @media (max-width: 940px) {
    padding: 2rem;
  }
  @media (max-width: 640px) {
    padding: 2rem 1rem;
  }
}

/* Title Styling */
.menus-title {
  font-size: $font-xxl;
  letter-spacing: 8px;
  font-weight: 500;
  text-align: left;
  text-transform: uppercase;
}

/* Menu Options */
.menus-options {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    padding: 2rem 1rem 3rem 1rem;
  }
  @media (max-width: 640px) {
    padding: 2rem 0;
  }
}

.menus-options a {
  text-decoration: none;
  font-size: $font-base;
  font-weight: 500;
  color: $color-text-light;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 0.5rem; /* Reduce horizontal spacing */

  @media (max-width: 940px) {
    font-size: $font-small;
  }
  @media (max-width: 640px) {
    font-size: 13px;
    margin: 0 0.3rem; /* Further reduce spacing */
  }
}

.menus-options a:hover {
  color: $color-primary;
}

/* Highlight Active Link */
.menus-options a.active {
  color: $color-primary;
}

/* Menu Divider */
.menu-divider {
  font-size: $font-small;
  font-weight: 300;

  @media (max-width: 420px) {
    font-size: 10px;
  }
}

/* Menu Content */
.menus-content {
  position: relative;
  background: $color-background-dark;
  border: 2px solid $color-secondary;
  border-radius: $border-radius;
  padding: 2rem;
  overflow: visible;
}

  .menus-content_square1,
.menus-content_square2,
.menus-content_square3,
.menus-content_square4 {
  position: absolute;
  border: 2px solid $color-secondary;
  width: 30px;
  height: 30px;
}

.menus-content_square1 {
  top: -15px;
  left: -15px;
  border-radius: 12px 0 0 0;
}

.menus-content_square2 {
  top: -15px;
  right: -15px;
  border-radius: 0 12px 0 0;
}

.menus-content_square3 {
  bottom: -15px;
  left: -15px;
  border-radius: 0 0 0 12px;
}

.menus-content_square4 {
  bottom: -15px;
  right: -15px;
  border-radius: 0 0 12px 0;
}

  .menus-text{
    text-align: center;
  }
  
  .menu-divider {
    font-size: $font-small;
    font-weight: 300;
    @media (max-width: 420px){
      display: none;
  }

  }
  
  .MenusSection li {
    list-style: none;
    line-height: 1.25;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  
  .menu-type {
    font-size: $font-xl;
    margin-bottom: 10px;
  }
  
  .menu-category {
    color: $color-accent;
    font-size: $font-large;
    margin-top: 12px;
    margin-bottom: 6px;
    font-weight: 500;
  }
  
  .menu-name {
    font-size: $font-large;
  }
  
  .menu-description {
    font-size: $font-base;
    font-weight: 300;
  }
  
  .menu-price {
    font-size: $font-medium;
    margin-bottom: 2rem;
  }
  </style>
  