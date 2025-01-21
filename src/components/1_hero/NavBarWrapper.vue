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
          <li><a href="#eat-drink">Eat & Drink</a></li>
          <li><a @click="$emit('toggleBooking')">BOOKINGS</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#art">Art</a></li>
          <li><a href="#policies">Policies</a></li>
        </ul>
      </div>
      <BookATable 
        :show="showBooking"
        @close="$emit('toggleBooking')"
      />
    </nav>
  </template>
  
  <script>
  import BookATable from './BookATable.vue';
  
  export default {
    name: "NavbarWrapper",
    components: {
      BookATable
    },
    props: {
      showBooking: Boolean
    }
  };
  </script>
  
  <style scoped>
  /* Wrapper for Navbar */
  .navbarWrapper {
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
    color: white;
    letter-spacing: 6px;
    font-size: 13px;    
    font-weight: 500;
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
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
    transition: color 0.3s ease;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
  }
  
  .navMenu a:hover {
    color: #f1c40f; }
  </style>
  