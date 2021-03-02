<template lang="pug">
  .s-compare-item
    .s-compare-item__header
      .s-compare-item__meta-icons
        s-toggle-compare(
          :productId="productId"
        ).s-compare-item__meta-icon
        s-toggle-cart(
          :productId="productId"
        )
      img(
        :src="PRODUCT(productId).image",
        alt="Image"
      ).s-compare-item__img
      router-link(
        :to="{ name: 'SingleProductPage', params: { productId: productId } }"
      )
        h3.s-compare-item__headline {{ PRODUCT(productId).name }}
    .s-compare-item__props
      p(
        v-for="(s, index) in SPECS(categoryId)"
        :key="`s-${index}`"
        :class="{'s-compare-item__prop--hovered': hoveredSpecId === s.id}"
        @mouseenter="$emit('hoveredSpec', s.id)"
      ).s-compare-item__prop.
        {{ PRODUCT_SINGLE_SPEC(productId, s.id)
          ? PRODUCT_SINGLE_SPEC(productId, s.id).value
          : '-' }}

</template>

<script>

import sToggleCart from '@/components/common/s-toggle-cart.vue';
import sToggleCompare from '@/components/common/s-toggle-compare.vue';
import { mapGetters } from 'vuex';

export default {
  name: 's-compare-item',
  components: {
    sToggleCart,
    sToggleCompare,
  },
  props: {
    productId: {
      type: Number,
      default() {
        return null;
      },
    },
    categoryId: {
      type: Number,
      default() {
        return 0;
      },
    },
    hoveredSpecId: {
      type: Number,
      default() {
        return null;
      },
    },
  },
  computed: {
    ...mapGetters([
      'PRODUCT',
      'SPECS',
      'PRODUCT_SINGLE_SPEC',
    ]),
  },
};

</script>

<style lang="scss" scoped>

  .s-compare-item {
    min-width: 198px;
    border: 1px solid $col-border-grid-tab;
    text-align: center;
    background-color: $colWhite;
    flex-shrink: 0;
    box-shadow: $shadow-grid-tab;

    &__header {
      display: flex;
      height: 260px;
      padding: 15px;
      position: relative;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
    }

    &__meta-icons {
      text-align: right;
      position: absolute;
      top: 8px;
      right: 12px;
    }

    &__meta-icon {
      margin-bottom: 12px;
    }

    &__img {
      max-width: 100%;
      max-height: 170px;
    }

    &__headline {
      color: $colBlue;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }
    }

    &__props {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      overflow-x: hidden;
      cursor: default;
    }

    &__prop {
      @include no-scrollbar;
      display: flex;
      height: 48px;
      padding: 5px 10px;
      position: relative;
      justify-content: center;
      align-items: center;
      color: $colBlue;
      line-height: 20px;
      overflow-y: scroll;

      &:nth-of-type(odd) {
        background-color: $colGray;
      }

      &--hovered {
        z-index: 10;
        box-shadow: $shadow-compare-specs-hover;
      }
    }
  }

</style>
