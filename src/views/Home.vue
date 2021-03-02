<template lang="pug">
  .s-home
    sIntroSlide
    sManufacturerSlide
    sPumpVsGasSlide
    sInvestSlide
    sWorkflowSlide
    s-contact-slide#contact-slide

</template>

<script>

import sIntroSlide from '@/components/home-slides/s-intro-slide.vue';
import sManufacturerSlide from '@/components/home-slides/s-manufacturer-slide.vue';
import sPumpVsGasSlide from '@/components/home-slides/s-pump-vs-gas-slide.vue';
import sInvestSlide from '@/components/home-slides/s-invest-slide.vue';
import sWorkflowSlide from '@/components/home-slides/s-workflow-slide.vue';
import sContactSlide from '@/components/home-slides/s-contact-slide.vue';

export default {
  name: 'Home',
  components: {
    sIntroSlide,
    sManufacturerSlide,
    sPumpVsGasSlide,
    sInvestSlide,
    sWorkflowSlide,
    sContactSlide,
  },
  props: {
    slideId: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  data() {
    return {
      scrollPosition: 0,
      isScrollActive: true,
      homeControlsStyles: {},
    };
  },
  methods: {
    scrollToContacts() {
      if (this.slideId === 6) {
        document.getElementById('contact-slide').scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  mounted() {
    this.scrollToContacts();
  },
};

</script>

<style lang="scss" scoped>

.s-home {
  height: 100vh;
  padding-right: $headerWidth;
}

@media screen and (min-width: $tablet) {

  .s-home {
    padding-top: $headerHeight;
    padding-right: 0;
  }
}

</style>
