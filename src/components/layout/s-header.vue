<template lang="pug">
  div(
    @mouseleave="showCatalog = false"
    @click="showCatalog = false"
  ).s-header
    .s-header__navigation
      .s-header__navigation-container
        Logo.s-header__logo-image
        p.s-header__logo-text VOLTASERVICE

        .s-header__central-links
          router-link(
            :to="{ name: 'Home' }"
            exact-active-class="s-header__link--active"
          ).s-header__link.s-header__link--logo Главная
          .s-header__central-links-delimiter
          router-link(
            :to="{ name: 'CategoriesPage' }"
            :class="{'s-header__link--active': isInStore}"
            @mouseenter.native="showCatalog = true"
          ).s-header__link Оборудование

        router-link(
          :to="{ name: 'Home' }"
          exact-active-class="s-header__icon-wrapper--active"
        ).s-header__icon-wrapper.s-header__icon-wrapper--mobile
          icon-home.s-header__icon
        router-link(
          :to="{ name: 'CategoriesPage' }"
          exact-active-class="s-header__icon-wrapper--active"
        ).s-header__icon-wrapper.s-header__icon-wrapper--mobile
          icon-store.s-header__icon
        router-link(
          :to="{ name: 'ConfigPage' }"
          exact-active-class="s-header__icon-wrapper--active"
        ).s-header__icon-wrapper
          icon-cogs.s-header__icon
        router-link(
          :to="{ name: 'ComparePage' }"
        ).s-header__icon-wrapper
          s-menu-compare
        router-link(
          :to="{ name: 'CartPage' }"
          ).s-header__icon-wrapper
          s-menu-cart
        div(
          @click="handlePhoneClick()"
        ).s-header__icon-wrapper
          icon-phone.s-header__icon
        div(
          @click="showHeaderMobile = !showHeaderMobile"
          :class="{'s-header__icon-wrapper--expand-active': showHeaderMobile}"
        ).s-header__icon-wrapper.s-header__icon-wrapper--expand.s-header__icon-wrapper--mobile
          icon-arrow-left.s-header__icon
    s-header-catalog(
      :class="{'s-header__header-catalog--visible': showCatalog}"
    ).s-header__header-catalog
    s-header-mobile(
      :class="{'s-header__header-mobile--visible': showHeaderMobile}"
    ).s-header__header-mobile

      //- .s-header__icon-wrapper.s-header__icon-wrapper--menu
      //-   IconBars.s-header__icon

</template>

<script>

import Logo from '@/assets/img/svg/logo.svg?inline';
import IconHome from '@/assets/img/svg/icon-home.svg?inline';
import IconStore from '@/assets/img/svg/icon-store.svg?inline';
import sHeaderCatalog from '@/components/layout/s-header-catalog.vue';
import sHeaderMobile from '@/components/layout/s-header-mobile.vue';
import IconCogs from '@/assets/img/svg/icon-cogs.svg?inline';
import IconPhone from '@/assets/img/svg/icon-phone.svg?inline';
import sMenuCompare from '@/components/layout/s-menu-compare.vue';
import sMenuCart from '@/components/layout/s-menu-cart.vue';
import IconArrowLeft from '@/assets/img/svg/icon-arrow-left.svg?inline';
// import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'sHeader',
  components: {
    Logo,
    IconHome,
    IconStore,
    sHeaderCatalog,
    sHeaderMobile,
    IconCogs,
    IconPhone,
    sMenuCompare,
    sMenuCart,
    IconArrowLeft,
  },
  data() {
    return {
      showCatalog: false,
      showHeaderMobile: false,
      catalogPages: [
        'StorePage',
        'CategoriesPage',
        'GroupsPage',
        'SingleProductPage',
      ],
    };
  },
  computed: {
    isInStore() {
      return this.catalogPages.filter((p) => p === this.$route.name).length;
    },
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

  .s-header {
    width: $headerWidth;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;

    &__navigation {
      height: 100%;
      position: relative;
      z-index: 2;
      background-color: $colWhite;
      box-shadow: $shadowHeader;
    }

    &__navigation-container {
      display: flex;
      height: 100%;
      padding: 15px 5px 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    &__logo-image {
      height: 30px;
      margin-bottom: auto;
      flex-shrink: 0;
    }

    &__logo-text {
      display: none;
    }

    &__central-links {
      display: none;
    }

    &__icon-wrapper {
      display: inline-block;
      margin-top: 3vh;
      margin-bottom: 3vh;

      &--active .s-header__icon {
        fill: $colRed;
      }

      &--expand {
        margin-top: auto;
        margin-bottom: 9vh;
        transition: $anim-header-mobile;
      }

      &--expand-active {
        transform: rotate(-180deg);
      }
    }

    &__icon {
      display: inline-block;
      height: 18px;
      width: 24px;
      fill: $colBlue;
      cursor:pointer;
      transition: $animFill;
    }

    &__header-catalog {
      transform: translateY(0);
      z-index: 1;

      &--visible {
        transform: translateY(100%);
      }
    }

    &__header-mobile {
      transform: translateX(0);
      z-index: 1;

      &--visible {
        transform: translateX(-100%);
      }
    }

    &__header-catalog {
      display: none;
    }
  }

  @media screen and (min-width: $tablet) {

    .s-header {
      width: 100vw;
      height: $headerHeight;

      &__navigation-container {
        @include root-container;
        padding-top: 0;
        flex-direction: row;
      }

      &__logo-image {
        margin-top: -10px;
        margin-bottom: 0;
      }

      &__logo-text {
        display: block;
        margin-left: 10px;
        font-family: $ffMain;
        font-size: 18px;
        line-height: 18px;
        font-weight: 500;
        color: $colBlue;
        cursor: default;
      }

      &__central-links {
        display: flex;
        margin-right: auto;
        margin-left: auto;
        align-self: stretch;
        justify-content: center;
        align-items: center;
        column-gap: 10px;
      }

      &__central-links-delimiter {
        height: 14px;
        width: 2px;
        background-color: $colGrayDark;
      }

      &__link {
        padding: 10px 0;
        color: $colBlue;
        font-family: $ffMain;
        font-size: $fzNavLink;
        font-weight: 700;
        text-transform: uppercase;
        transition: $animLinks;

        &--active,
        &:hover {
          color: $colRed;
        }
      }

      &__icon-wrapper {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 20px;

        &--mobile {
          display: none;
        }
      }

      &__icon {

        &:hover {
          fill: $colRed;
        }
      }

      &__header-catalog {
        display: block;
      }
    }
  }

</style>
