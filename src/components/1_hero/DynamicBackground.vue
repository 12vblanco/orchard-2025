<template>
    <div class="dynamic-background">
      <div class="background-image" :style="{ backgroundImage: `url(${currentImage})` }"></div>
    </div>
  </template>
  
  <script>
//   import img0 from '../../assets/images/home0.jpg';
  import img1 from '../../assets/images/home1.jpg';
import img3 from '../../assets/images/home3.jpg';
import img4 from '../../assets/images/home4.jpg';
import img5 from '../../assets/images/home5.jpg';
//   import img7 from '../../assets/images/home7.jpg';
  
  export default {
    name: 'DynamicBackground',
    data() {
      return {
        images: [img4, img5, img1, img3], // Array of image URLs
        currentIndex: 0,
      };
    },
    computed: {
      currentImage() {
        return this.images[this.currentIndex];
      },
    },
    mounted() {
      this.setRandomInitialImage(); // Set a random initial image
      this.startImageRotation(); // Start the image rotation
    },
    methods: {
      setRandomInitialImage() {
        // Generate a random index between 0 and the length of the images array
        this.currentIndex = Math.floor(Math.random() * this.images.length);
      },
      startImageRotation() {
        setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 32000); // Change image every 32 seconds
      },
    },
  };
  </script>
  
  <style scoped>
  .dynamic-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  
  .background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: background-image 1s ease-in-out; /* Smooth transition */
  }
  </style>