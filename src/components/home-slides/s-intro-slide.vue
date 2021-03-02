<template lang="pug">
  section.s-intro-slide
    .s-intro-slide__container
      h1.s-intro-slide__headline Энергоэффективные системы отопления
      p.s-intro-slide__subheadline
        | Комплексные решения для систем отопления
      sButton(
        @click.native="scrollToContacts()"
      )
        template(v-slot:text) Получить консультацию

</template>

<script>

import sButton from '@/components/common/s-button.vue';

export default {
  name: 'sIntroSlide',
  components: {
    sButton,
  },
  methods: {
    scrollToContacts() {
      document.getElementById('contact-slide').scrollIntoView({ behavior: 'smooth' });
    },
  },
};

</script>

<style lang="scss" scoped>

.s-intro-slide {
  display: flex;
  height: 100%;
  position: relative;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('../../assets/img/backgrounds/bg-home.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background: $headerGradient;
    transform: matrix(1, 0, 0, -1, 0, 0);
    opacity: 0.8;
  }

  &__container {
    @include root-container;
    display: flex;
    position: relative;
    z-index: 3;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  &__headline {
    margin-top: -100px;
    color: $colWhite;
  }

  &__subheadline {
    margin-top: 15px;
    margin-bottom: 30px;
    font-size: 1.5rem;
    line-height: 2rem;
    color: $colWhite;
  }
}

@media screen and (min-width: $tablet) {

  .s-intro-slide {

    &__subheadline {
      margin-top: 30px;
      margin-bottom: 50px;
    }
  }
}

</style>
