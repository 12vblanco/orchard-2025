<template>
    <div class="policies-container" v-if="show">
      <div class="policies-content">
        <div class="row-div">
          <p class="close-text" @click="$emit('close')">CLOSE</p>
          <span class="close-icon" @click="$emit('close')">×</span>
        </div>
        <div class="text-blocks">
          <div class="text-block">
            <h3>Children in The Orchard</h3>
            <p>
              Children and young persons are only
permitted on the premises in the company of
an adult. They are allowed in the side room or
snug area when consuming a meal between
our opening hours and 10pm.
They must be supervised at all times and
escorted through the main bar area when
entering and leaving the premises or using
the toilets.
            </p>
          </div>
          <div class="text-block">
            <h3>Dogs in The Orchard</h3>
            <p>
              Dogs are not permitted on these premises
unless they are assistance dogs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PoliciesComp',
    props: {
      show: Boolean
    }
  };
  </script>
  
  <style lang="scss" scoped>
  @import '@/styles/styles.scss';
  
  .policies-container {
    position: absolute;
    top: 150px;
    right: 0; 
    width: 420px;
    height: fit-content;
    background: $color-overlay-light;
    border-radius: 0 8px 0 8px;
    padding: 1rem 2px 2rem 0;
    z-index: 9900;
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
    margin-right: 8px;
    margin-bottom: -1.78rem;
  }
  
  .close-icon {
    color: $color-text-light;
    font-size: $font-xxl;
    margin-right: 22px;
    margin-bottom: -.9rem;
    cursor: pointer;
  }
  
  .text-blocks {
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0 1rem;
  }
  
  .text-block {
    background: $color-overlay-light;
    padding: .5rem 0 .5rem 0;
    border-radius: 8px;
    text-align: left;
  }
  
  .text-block h3 {
    color: $color-primary;
    font-size: 20px;
    padding: 0 1rem;
    // margin-bottom: 10px;
  }
  
  .text-block p {
    color: $color-text-light;
    font-size: 17px;
    line-height: 1.5;
    background: black;
    padding: .8rem;
    border-radius: 12px;
  }
  
  @media (max-width: 640px) {
    .policies-container {
      width: 100%;
      height: 100%;
      top: 0;
      border-radius: 0;
    }
  }
  </style>