<template lang="pug">
  nav.s-header-mobile
    .s-header-mobile__links-list
      p.s-header-mobile__logo VOLTASERVICE
      router-link(
        :to="{ name: 'Home' }"
        exact-active-class="s-header-mobile__link--active"
      ).s-header-mobile__link Главная
      router-link(
        :to="{ name: 'CategoriesPage' }"
        exact-active-class="s-header-mobile__link--active"
      ).s-header-mobile__link Оборудование
      router-link(
        :to="{ name: 'ConfigPage' }"
        exact-active-class="s-header-mobile__link--active"
      ).s-header-mobile__link Конфигурация
      router-link(
        :to="{ name: 'ComparePage' }"
        exact-active-class="s-header-mobile__link--active"
      ).s-header-mobile__link Сравнение
      router-link(
        :to="{ name: 'CartPage' }"
        exact-active-class="s-header-mobile__link--active"
      ).s-header-mobile__link Корзина
      div(
        @click="handlePhoneClick()"
      ).s-header-mobile__link Контакты
      .s-header-mobile__collapse-menu
    //-   li.s-header-mobile__link-wrapper
    //-     router-link(
    //-       :to="{ name: 'StorePage' }"
    //-       exact-active-class="s-header-mobile__link--active"
    //-     ).s-header-mobile__link Все оборудование

</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'sHeaderMobile',
  computed: {
    ...mapGetters([
      'CATEGORIES',
    ]),
  },
  methods: {
    handlePhoneClick() {
      if (this.$route.name === 'Home') {
        document.getElementById('contact-slide').scrollIntoView({ behavior: 'smooth' });
      } else {
        this.$router.push({ name: 'Home', params: { slideId: 6 } });
      }
    },
  },
};

</script>

<style lang="scss" scoped>

.s-header-mobile {
  width: calc(100vw - #{$headerWidth});
  height: 100vh;
  margin-right: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: $colWhite;
  box-shadow: $shadowHeader;
  transition: $anim-header-mobile;

  &__links-list {
    display: flex;
    height: 100%;
    padding: 15px 15px 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  &__logo {
    margin-bottom: auto;
    font-family: $ffMain;
    font-size: 18px;
    line-height: 30px;
    font-weight: 500;
    color: $colBlue;
    transform: translateY(5px);
    cursor: default;
  }

  &__link {
    width: 100%;
    margin-top: 3vh;
    margin-bottom: 3vh;
    position: relative;
    text-align: center;
    color: $colBlue;
    font-family: $ffMain;
    font-size: $fzNavLink;
    line-height: 20px;
    font-weight: 700;
    text-transform: uppercase;

    &--active {
      color: $colRed;
    }

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: -3vh;
      left: 0;
      background-color: $colGray;
    }

    &:nth-child(7) {

      &::after {
        display: none;
      }
    }
  }

  &__collapse-menu {
    width: 100%;
    height: 21px;
    margin-top: auto;
    margin-bottom: 9vh;
  }
}

@media screen and (min-width: $tablet) {

  .s-header-mobile {
    display: none;
  }
}

</style>
