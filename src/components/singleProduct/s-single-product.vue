<template lang="pug">
  .s-single-item
    .s-single-item__meta
      p.s-single-item__meta-text Код товара: {{ PRODUCT(productId).id }}
      .s-single-item__meta-icons
        s-toggle-compare(
          :productId="productId"
        ).s-single-item__meta-icon
        s-toggle-cart(
          :productId="productId"
        )
    img(
      :src="PRODUCT(productId).image"
      alt="Image"
      ).s-single-item__img
    h3.s-single-item__headline
      | {{ PRODUCT(productId).name_prefix }} {{ PRODUCT(productId).name }}
    .s-single-item__props
      template(
        v-for="(s, index) in PRODUCT(productId).specs"
      )
        p(
          :key="`s-name-${index}`"
        ).s-single-item__prop.s-single-item__prop--name
          | {{ getPropName(s.specs_id) }}
        p(
          :key="`s-value-${index}`"
        ).s-single-item__prop {{ s.value }}

</template>

<script>

import sToggleCompare from '@/components/common/s-toggle-compare.vue';
import sToggleCart from '@/components/common/s-toggle-cart.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'sSingleProduct',
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
  },
  computed: {
    ...mapGetters([
      'PRODUCT',
      'SPEC',
      'CATEGORIES',
    ]),
  },
  methods: {
    getPropName(specsId) {
      return `${this.SPEC(this.productId, specsId).name}${this.SPEC(this.productId, specsId).unit
        ? `, ${this.SPEC(this.productId, specsId).unit}`
        : ''
      }`;
    },
  },
};

</script>

<style lang="scss" scoped>

  .s-single-item {
    padding: 60px 30px 30px;
    text-align: center;
    position: relative;
    background-color: $colWhite;
    box-shadow: $shadow-grid-tab;

    &__meta {
      width: 100%;
      display: flex;
      padding: 30px;
      position: absolute;
      top: 0;
      left: 0;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__meta-text {
      font-size: 12px;
      line-height: 12px;
      color: $colBlue;
    }

    &__meta-icon {
      margin-bottom: 15px;
    }

    &__img {
      max-width: 100%;
    }

    &__headline {
      max-width: 80%;
      margin: 30px auto 20px;
      color: $colBlue;
    }

    &__props {
      display: grid;
      grid-template-columns: 5fr 3fr;
      grid-gap: 1px;
    }

    &__prop {
      display: flex;
      padding: 5px 10px;
      justify-content: center;
      align-items: center;
      color: $colBlue;
      box-shadow: $shadow-grid-tab;

      &--name {
        justify-content: flex-start;
        text-align: left;
      }
    }
  }

</style>
