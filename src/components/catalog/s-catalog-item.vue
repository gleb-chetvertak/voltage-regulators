<template lang="pug">
  .s-catalog-item
    .s-catalog-item__meta
      p.s-catalog-item__meta-text Код товара: {{ productId }}
      .s-catalog-item__meta-icons
        s-toggle-compare(
          :productId="productId"
        ).s-catalog-item__meta-icon
        s-toggle-cart(
          :productId="productId"
        )
    img(
      :src="image"
      alt="Image"
      ).s-catalog-item__img
    router-link(
      :to="{ name: 'SingleProductPage', params: { productId: productId } }"
    )
      h3.s-catalog-item__headline {{ name }}
    .s-catalog-item__props
      p.s-catalog-item__par
        span Цена:
        span {{ price }} USD
</template>

<script>

import sToggleCart from '@/components/common/s-toggle-cart.vue';
import sToggleCompare from '@/components/common/s-toggle-compare.vue';

export default {
  name: 'sCatalogItem',
  props: {
    productId: {
      type: Number,
      default() {
        return null;
      },
    },
    image: {
      type: String,
      default() {
        return '';
      },
    },
    name: {
      type: String,
      default() {
        return '';
      },
    },
    price: {
      type: Number,
      default() {
        return null;
      },
    },
  },
  components: {
    sToggleCart,
    sToggleCompare,
  },
};

</script>

<style lang="scss" scoped>

.s-catalog-item {
  display: flex;
  padding: 30px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 1;
  text-align: center;
  background-color: $colWhite;
  box-shadow: $shadow-grid-tab;
  transition: $animGridTabsProducts;

  &:hover {
    z-index: 10;
    box-shadow: $shadow-products-hover;
  }

  &__meta {
    width: 100%;
    display: flex;
    padding: 10px 15px 0;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__meta-text {
    font-size: 12px;
    color: $colBlue;
  }

  &__meta-icon {
    margin-bottom: 12px;
  }

  &__img {
    max-width: 100%;
    margin-bottom: 20px;
  }

  &__headline {
    margin-top: auto;
    margin-bottom: 30px;
    color: $colBlue;
    transition: $animLinks;

    &:hover {
      color: $colRed;
    }
  }

  &__par {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
    color: $colBlue;
  }
}

@media screen and (max-width: $largePhone) {
  .s-catalog-item {

    &__meta {
      padding-right: 25px;
    }
  }
}

</style>
