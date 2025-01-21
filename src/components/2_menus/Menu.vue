<template>
    <div>
      <!-- Render Menu buttons -->
      <div class="menu-buttons">
        <button
          v-for="item in menuItems"
          :key="item.menu"
          @click="handleMenuChange(item.menu)"
          :class="{ active: selectedMenu === item.menu }"
        >
          {{ item.menu }}
        </button>
      </div>
  
      <!-- Render categories and items for the selected menu -->
      <div v-if="menuData" class="menu-content">
        <div v-for="(category, index) in menuData.categories" :key="index" class="category-section">
          <h3>{{ category.category }}</h3>
          <ul>
            <li v-for="(item, idx) in category.items" :key="idx">
              <div class="item-name">{{ item.name }}</div>
              <div class="item-description">{{ item.description }}</div>
              <div class="item-price">{{ item.price }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { menuItems } from "../../../public/menus/food_menus.js"; // Adjust path to your file
  
  export default {
    data() {
      return {
        selectedMenu: "Food Menu", // Default selected menu
        menuItems, // Importing the menuItems from foo_menu.js
      };
    },
    computed: {
      // Find the menu data based on the selected menu
      menuData() {
        return this.menuItems.find((item) => item.menu === this.selectedMenu);
      },
    },
    methods: {
      // Update selected menu
      handleMenuChange(menu) {
        this.selectedMenu = menu;
      },
    },
  };
  </script>
  
  <style scoped>
  .menu-buttons button {
    padding: 10px;
    margin: 5px;
    cursor: pointer;
  }
  
  .menu-content {
    margin-top: 20px;
  }
  
  .category-section {
    margin-top: 2rem;
  }
  
  .category-section h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 20px 0;
  }
  
  .category-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .category-section li {
    margin-bottom: 15px;
  }
  
  .item-name {
    font-weight: bold;
  }
  
  .item-description {
    font-size: 0.9rem;
    color: gray;
  }
  
  .item-price {
    font-weight: bold;
    color: green;
  }
  </style>
  