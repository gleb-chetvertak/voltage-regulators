<template lang="pug">
  .s-cart-item
    img(
      :src="PRODUCT(productId).image",
      alt="Image"
      ).s-cart-item__img
    router-link(
      :to="{ name: 'SingleProductPage', params: { productId: productId } }"
    )
      h3.s-cart-item__headline
        | {{ PRODUCT(productId).name_prefix }}
        | {{ PRODUCT(productId).name }}
    p.s-cart-item__par {{ PRODUCT(productId).price }} USD
    .s-cart-item__qty.qty
    .s-cart-item__btns
    .s-cart-item__meta-icons
      s-toggle-compare(
        :productId="productId"
      ).s-cart-item__meta-icon
      s-toggle-cart(
        :productId="productId"
      )

</template>

<script>

import sToggleCompare from '@/components/common/s-toggle-compare.vue';
import sToggleCart from '@/components/common/s-toggle-cart.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'sCartItem',
  components: {
    sToggleCart,
    sToggleCompare,
  },
  props: {
    productId: {
      type: Number,
      default() {
        return '';
      },
    },
  },
  computed: {
    ...mapGetters([
      'PRODUCT',
    ]),
  },
};

</script>

<style lang="scss" scoped>

  .s-cart-item {
    display: flex;
    padding: 30px;
    position: relative;
    justify-content: space-between;
    align-items: center;
    row-gap: 1px;
    background-color: $colWhite;
    box-shadow: $shadow-grid-tab;

    &__img {
      max-width: 100px;
    }

    &__headline {
      color: $colBlue;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }
    }

    &__par {
      color: $colBlue;
    }

    &__meta-icons {
      text-align: right;
      position: absolute;
      top: 15px;
      right: 15px;
    }

    &__meta-icon {
      margin-bottom: 15px;
    }
  }
  .qty {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__svg {
      height: 12px;
      width: 12px;
      cursor: pointer;
      fill: $colBlue;
    }

    &__num {
      margin: 0 10px;
      color: $colBlue;
    }
  }

</style>
