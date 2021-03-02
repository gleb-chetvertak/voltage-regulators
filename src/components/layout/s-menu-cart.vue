<template lang="pug">
  div(
    :class="{'s-menu-cart--active': $route.name === 'CartPage'}"
  ).s-menu-cart
    icon-cart.s-menu-cart__icon
    p(
      v-show="CARTED_PRODUCTS_COUNT > 0"
    ).s-menu-cart__num {{ CARTED_PRODUCTS_COUNT }}

</template>

<script>

import IconCart from '@/assets/img/svg/icon-cart.svg?inline';
import { mapGetters } from 'vuex';

export default {
  name: 'sToggleCart',
  components: {
    IconCart,
  },
  computed: {
    ...mapGetters([
      'CARTED_PRODUCTS_COUNT',
    ]),
  },
};

</script>

<style lang="scss" scoped>

.s-menu-cart {
  position: relative;
  cursor: pointer;

  &:hover,
  &--active {

    & .s-menu-cart__icon {
      fill: $colRed;
    }

    & .s-menu-cart__num {
      color: $colBlue;
    }
  }

  &__icon {
    height: 18px;
    width: 24px;
    fill: $colBlue;
    transition: $animFill;
  }

  &__num {
    position: absolute;
    right: -6px;
    bottom: -12px;
    color: $colRed;
    font-weight: bold;
  }
}

</style>
