<template>
    <div class="booking-container" v-if="show">
      <div class="booking-content">
        <div class="row-div">
          <p class="close-text" @click="$emit('close')">CLOSE</p>
          <span class="close-icon" @click="$emit('close')">×</span>
        </div>
        <div class="iframe-wrapper" :class="{ 'loading': loading }">
          <div class="spinner-container" v-if="loading">
            <div class="spinner"></div>
            <p class="loading-text">Loading booking system...</p>
          </div>
          <iframe
            title="book"
            class="iframe"
            :src="iframeSrc"
            @load="iframeLoaded"
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BookATable',
    props: {
      show: Boolean
    },
    data() {
      return {
        loading: true,
        iframeSrc: "https://tableagent.com/iframe/the-orchard-bar-restaurant/v/medium/"
      }
    },
    methods: {
      iframeLoaded() {
        setTimeout(() => {
          this.loading = false;
        }, 500); // Small delay to ensure smooth transition
      }
    },
    watch: {
      show(newVal) {
        if (newVal) {
          this.loading = true;
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
    @import '@/styles/styles.scss';

  .booking-container {
    position: absolute;
    top: 150px;
    left: 0;
    width: 340px;
    height: 580px;
    background: $color-overlay-light;
    border-radius: 0 0 8px 0;
    padding: 1rem 20px 3rem 0;
    z-index: 100;
  }

  @media (max-width: 640px) {
    .booking-container {
      width: 100%;
      height: 100%;
      top: 100px;
      padding: 0;
    }
  }
  
  .row-div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  
  .close-text {
    font-size: $font-small;
    color: $color-text-light;
    cursor: pointer;
    margin-right: 6px;
    margin-top: 14px;
  }
  
  .close-icon {
    color: $color-text-light;
    font-size: $font-xxl;
    margin-right: 12px;
    cursor: pointer;
  }
  
  .iframe-wrapper {
    position: relative;
    height: 490px;
    background: center center no-repeat;
  }
  
  .iframe-wrapper.loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
  }
  
  .spinner-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .loading-text {
    color: $color-primary;
    font-size: $font-base;
    text-align: center;
    margin: 0;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid $color-primary;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  .iframe {
    width: 100%;
    height: 450px;
    border: none;
    border-radius: 8px;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  .loading .iframe {
    opacity: 0;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  </style>