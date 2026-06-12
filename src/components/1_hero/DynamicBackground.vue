<template>
  <div class="dynamic-background">
    <!-- Crossfading background images -->
    <transition name="bg-fade">
      <div
        :key="currentIndex"
        class="background-image"
        :style="{ backgroundImage: `url(${images[currentIndex]})` }"
      ></div>
    </transition>

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
import img1 from '../../assets/images/home1.webp';
import img3 from '../../assets/images/home3.webp';
import img4 from '../../assets/images/home4.webp';
import img5 from '../../assets/images/home5.webp';

const IMAGES = [img4, img5, img1, img3];
const ROTATION_MS = 32000; // Change image every 32 seconds

// Pick the initial image and start downloading it the moment the bundle
// executes, instead of waiting for the component to mount.
const initialIndex = Math.floor(Math.random() * IMAGES.length);
const initialImage = new Image();
initialImage.fetchPriority = 'high';
initialImage.src = IMAGES[initialIndex];

export default {
  name: 'DynamicBackground',
  data() {
    return {
      images: IMAGES,
      currentIndex: initialIndex,
      preloaded: IMAGES.map((url, index) => index === initialIndex),
      progress: 0,
      rotationInterval: null,
      progressInterval: null,
    };
  },
  mounted() {
    // The rest of the slideshow can wait: only fetch the next image once
    // the visible one has finished loading.
    const startSlideshow = () => {
      this.preloadImage((this.currentIndex + 1) % this.images.length);
      this.startImageRotation();
    };

    if (initialImage.complete) {
      startSlideshow();
    } else {
      initialImage.onload = initialImage.onerror = startSlideshow;
    }
  },
  beforeUnmount() {
    // Clean up intervals when component is destroyed
    if (this.rotationInterval) clearInterval(this.rotationInterval);
    if (this.progressInterval) clearInterval(this.progressInterval);
  },
  methods: {
    preloadImage(index) {
      if (this.preloaded[index]) return;

      const img = new Image();
      img.onload = () => {
        this.preloaded[index] = true;
      };
      img.onerror = () => {
        console.warn(`Failed to load image: ${this.images[index]}`);
      };
      img.src = this.images[index];
    },
    startImageRotation() {
      this.startProgressBar();

      this.rotationInterval = setInterval(() => {
        this.transitionToNextImage();
      }, ROTATION_MS);
    },
    startProgressBar() {
      this.progress = 0;

      this.progressInterval = setInterval(() => {
        this.progress = Math.min(this.progress + 100 / (ROTATION_MS / 100), 100);
      }, 100);
    },
    transitionToNextImage() {
      const next = (this.currentIndex + 1) % this.images.length;

      // If the next image hasn't finished downloading yet, stay on the
      // current one until the following rotation.
      if (!this.preloaded[next]) return;

      this.currentIndex = next;
      this.progress = 0;

      // Preload the image after next for the upcoming transition
      this.preloadImage((next + 1) % this.images.length);
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
}

/* Crossfade: the incoming image fades in on top while the outgoing one
   stays fully visible underneath until it is removed. */
.bg-fade-enter-active {
  transition: opacity 1.5s ease-in-out;
  z-index: 2;
}

.bg-fade-leave-active {
  transition: opacity 1.5s ease-in-out;
  z-index: 1;
}

.bg-fade-enter-from {
  opacity: 0;
}

.bg-fade-leave-to {
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
