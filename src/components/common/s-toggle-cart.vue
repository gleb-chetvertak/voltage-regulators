<template lang="pug">
  div(
    @click="TOGGLE_PRODUCT_IN_CART(productId)"
  ).s-toggle-cart
    icon-cart(
      :class="{'s-toggle-cart__icon--active': IS_PRODUCT_CARTED(productId)}"
    ).s-toggle-cart__icon
    icon-minus-circle(
      v-if="IS_PRODUCT_CARTED(productId)"
    ).s-toggle-cart__sign.s-toggle-cart__sign--minus
    icon-plus-circle(
      v-else
    ).s-toggle-cart__sign.s-toggle-cart__sign--plus

</template>

<script>

import IconCart from '@/assets/img/svg/icon-cart.svg?inline';
import IconPlusCircle from '@/assets/img/svg/icon-plus-circle.svg?inline';
import IconMinusCircle from '@/assets/img/svg/icon-minus-circle.svg?inline';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'sToggleCart',
  components: {
    IconCart,
    IconPlusCircle,
    IconMinusCircle,
  },
  props: {
    productId: {
      type: Number,
      default() {
        return null;
      },
    },
  },
  computed: {
    ...mapGetters([
      'IS_PRODUCT_CARTED',
    ]),
  },
  methods: {
    ...mapActions([
      'TOGGLE_PRODUCT_IN_CART',
    ]),
  },
};

</script>

<style lang="scss" scoped>

.s-toggle-cart {
  position: relative;
  cursor:pointer;

  &__icon {
    height: 18px;
    width: 24px;
    fill: $colBlue;
    transition: $animFill;

    &--active {
      fill: $colRed;
    }
  }

  &__sign {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    position: absolute;
    right: -2px;
    bottom: -7px;
    background-color: $colWhite;
    transition: $animFill;

    &--plus {
      fill: $colRed;
    }

    &--minus {
      fill: $colBlue;
    }
  }
}

</style>
