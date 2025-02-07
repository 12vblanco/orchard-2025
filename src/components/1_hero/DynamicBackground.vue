<template>
  <div class="dynamic-background">
    <div class="background-image" :style="{ backgroundImage: `url(${currentImage})` }"></div>
  </div>
</template>

<script>
// Import both WebP and JPG versions
import img1Jpg from '../../assets/images/home1.jpg';
import img1Webp from '../../assets/images/home1.webp';
import img3Jpg from '../../assets/images/home3.jpg';
import img3Webp from '../../assets/images/home3.webp';
import img4Jpg from '../../assets/images/home4.jpg';
import img4Webp from '../../assets/images/home4.webp';
import img5Jpg from '../../assets/images/home5.jpg';
import img5Webp from '../../assets/images/home5.webp';

export default {
  name: 'DynamicBackground',
  data() {
    return {
      images: [
        { webp: img4Webp, jpg: img4Jpg },
        { webp: img5Webp, jpg: img5Jpg },
        { webp: img1Webp, jpg: img1Jpg },
        { webp: img3Webp, jpg: img3Jpg },
      ],
      currentIndex: 0,
      supportsWebP: false,
    };
  },
  computed: {
    currentImage() {
      const currentImageSet = this.images[this.currentIndex];
      return this.supportsWebP ? currentImageSet.webp : currentImageSet.jpg;
    },
  },
  mounted() {
    this.checkWebPSupport();
    this.setRandomInitialImage();
    this.startImageRotation();
  },
  methods: {
    async checkWebPSupport() {
      // Check if browser supports WebP
      const webP = new Image();
      webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
      webP.onload = () => {
        this.supportsWebP = true;
      };
    },
    setRandomInitialImage() {
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