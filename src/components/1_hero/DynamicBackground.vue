<template>
  <div class="dynamic-background">
    <!-- Current and next background images -->
    <div 
      class="background-image current" 
      :style="{ backgroundImage: `url(${currentImage})` }"
    ></div>
    <div 
      class="background-image next" 
      :style="{ backgroundImage: `url(${nextImage})` }"
      :class="{ loaded: nextImageLoaded }"
    ></div>
    
    <!-- Loading progress indicator -->
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    
    <!-- Image indicator dots -->
    <div class="loading-indicator">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="dot" 
        :class="{ active: currentIndex === index }"
      ></div>
    </div>
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
        { webp: img4Webp, jpg: img4Jpg, loaded: false },
        { webp: img5Webp, jpg: img5Jpg, loaded: false },
        { webp: img1Webp, jpg: img1Jpg, loaded: false },
        { webp: img3Webp, jpg: img3Jpg, loaded: false },
      ],
      currentIndex: 0,
      nextIndex: 1,
      supportsWebP: false,
      nextImageLoaded: false,
      progress: 0,
      rotationInterval: null,
      progressInterval: null,
    };
  },
  computed: {
    currentImage() {
      const currentImageSet = this.images[this.currentIndex];
      return this.supportsWebP ? currentImageSet.webp : currentImageSet.jpg;
    },
    nextImage() {
      const nextImageSet = this.images[this.nextIndex];
      return this.supportsWebP ? nextImageSet.webp : nextImageSet.jpg;
    },
  },
  mounted() {
    this.checkWebPSupport();
    this.setRandomInitialImage();
    this.preloadInitialImages();
    this.startImageRotation();
  },
  beforeUnmount() {
    // Clean up intervals when component is destroyed
    if (this.rotationInterval) clearInterval(this.rotationInterval);
    if (this.progressInterval) clearInterval(this.progressInterval);
  },
  methods: {
    async checkWebPSupport() {
      return new Promise((resolve) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          this.supportsWebP = (webP.height === 2);
          resolve();
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      });
    },
    setRandomInitialImage() {
      this.currentIndex = Math.floor(Math.random() * this.images.length);
      this.nextIndex = (this.currentIndex + 1) % this.images.length;
    },
    preloadInitialImages() {
      // Preload the next image immediately
      this.preloadImage(this.nextIndex);
      
      // Preload the image after next for smoother transitions
      const nextNextIndex = (this.nextIndex + 1) % this.images.length;
      this.preloadImage(nextNextIndex);
    },
    preloadImage(index) {
      return new Promise((resolve) => {
        const imageSet = this.images[index];
        const imageUrl = this.supportsWebP ? imageSet.webp : imageSet.jpg;
        
        const img = new Image();
        img.onload = () => {
          this.images[index].loaded = true;
          // If this is the next image, mark it as loaded for transition
          if (index === this.nextIndex) {
            this.nextImageLoaded = true;
          }
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${imageUrl}`);
          resolve();
        };
        img.src = imageUrl;
      });
    },
    startImageRotation() {
      // Start progress bar animation
      this.startProgressBar();
      
      // Set interval for image rotation
      this.rotationInterval = setInterval(() => {
        this.transitionToNextImage();
      }, 32000); // Change image every 32 seconds
    },
    startProgressBar() {
      this.progress = 0;
      
      // Reset progress bar
      this.progressInterval = setInterval(() => {
        this.progress += (100 / 320) * 0.1; // Increment progress based on 32s interval
        
        if (this.progress >= 100) {
          this.progress = 0;
        }
      }, 100);
    },
    async transitionToNextImage() {
      // Reset progress
      this.progress = 0;
      
      // Update indices
      this.currentIndex = this.nextIndex;
      this.nextIndex = (this.currentIndex + 1) % this.images.length;
      
      // Reset next image loaded state
      this.nextImageLoaded = false;
      
      // Preload the next image if not already loaded
      if (!this.images[this.nextIndex].loaded) {
        await this.preloadImage(this.nextIndex);
      } else {
        // If already loaded, we can show it immediately
        this.nextImageLoaded = true;
      }
      
      // Preload the image after next for future transitions
      const nextNextIndex = (this.nextIndex + 1) % this.images.length;
      if (!this.images[nextNextIndex].loaded) {
        this.preloadImage(nextNextIndex);
      }
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
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 1.5s ease-in-out;
}

.background-image.current {
  opacity: 1;
  z-index: 1;
}

.background-image.next {
  opacity: 0;
  z-index: 2;
}

.background-image.next.loaded {
  opacity: 1;
}

/* Progress bar */
.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.8);
  z-index: 3;
  transition: width 0.1s linear;
}

/* Loading indicator */
.loading-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  transform: scale(1.2);
}
</style>