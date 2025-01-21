<template>
    <section id="MenusSection" class="MenusSection">
      <h2 class="menus-title">MENUS</h2>
      <div class="menus-options">
        <a href="#food-menu" @click.prevent="setSelectedMenu('Food Menu')">Food Menu</a>   
        <span class="menu-divider">&#10020;</span>
        <a href="#sunday-roast" @click.prevent="setSelectedMenu('Sunday Roast')">Sunday Roast</a>  
        <span class="menu-divider">&#10020;</span>
        <a href="#kids-menu" @click.prevent="setSelectedMenu('Kids Menu')">Kids Menu</a>  
        <span class="menu-divider">&#10020;</span>
        <a href="#gluten-free" @click.prevent="setSelectedMenu('Gluten Free')">Gluten Free</a>  
        <span class="menu-divider">&#10020;</span>
        <a href="#wine" @click.prevent="setSelectedMenu('Wine')">Wine</a>
        <span class="menu-divider">&#10020;</span>
        <a href="#beers" @click.prevent="setSelectedMenu('Beers')">Beers</a>
        <span class="menu-divider">&#10020;</span>
        <a href="#whisky" @click.prevent="setSelectedMenu('Whisky')">Whisky</a>
        <span class="menu-divider">&#10020;</span>
        <a href="#rums" @click.prevent="setSelectedMenu('Rums')">Rums</a>
        <span class="menu-divider">&#10020;</span>
        <a href="#gins" @click.prevent="setSelectedMenu('Gins')">Gins</a>
        <span class="menu-divider">&#10020;</span>
        <a href="#tea-coffee-sherry" @click.prevent="setSelectedMenu('Tea, Coffee & Sherry')">Tea Coffee & Sherry</a>
      </div>
  
      <div class="menus-content">
        <div v-if="selectedMenu" class="menus-text">
          <!-- Dynamically render the content based on the selected menu -->
          <div v-for="(item, index) in menuItems" :key="index">
            <div v-if="item.menu === selectedMenu">
              <h3>{{ item.menu }}</h3>
              <div v-for="(category, idx) in item.categories" :key="idx">
                <h4>{{ category.category }}</h4>
                <ul>
                  <li v-for="(menuItem, i) in category.items" :key="i">
                    <strong>{{ menuItem.name }}</strong>: {{ menuItem.description }} <br />
                    <span>{{ menuItem.price }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="menus-text">Please select a menu to view its content.</p>
      </div>
    </section>
  </template>
  
  <script>
  // Import menu data
  import { menuItems } from "../../../public/menus/food_menus.js"; // Ensure the correct path
  
  export default {
    data() {
      return {
        selectedMenu: null, // Tracks the selected menu
        menuItems, // Importing the menuItems from foo_menu.js
      };
    },
    methods: {
      // Set the selected menu when a link is clicked
      setSelectedMenu(menuName) {
        this.selectedMenu = menuName;
      },
    },
  };
  </script>
  
  <style>
  /* Main Menus Section */
  .MenusSection {
    background-color: black; 
    color: white; 
    width: 100%; 
    max-width: 1400px; 
    margin: 0 auto; 
    padding: 6rem 3rem; 
    display: flex;
    flex-direction: column;
    gap: 2rem; 
    border-top: 3px solid #8E7427;
  }
  
  /* Title Styling */
  .menus-title {
    font-size: 2rem; 
    letter-spacing: 8px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 1rem;
  }
  
.menus-options a{
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    color: white;
    text-transform:uppercase;
    letter-spacing: 3px;
    margin: 0 .8rem;
}

.menus-options a:hover{
    color: #f1c40f; }


  /* Subsection Styling */
  .menus-content {
    background: transparent; 
    border: 2px solid #8E7427; 
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content; 
    margin-top: 1rem;
  }

  .menu-divider{
    font-size: 16px;
    font-weight: 400;
  }
  </style>
  