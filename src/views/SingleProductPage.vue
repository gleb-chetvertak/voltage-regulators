<template lang="pug">
  .s-single-product-page
    .s-single-product-page__container
      //- s-breadcrumbs
      .s-single-product-page__row
        .s-single-product-page__col
          .s-single-product-page__selectors
            h4.s-single-product-page__selector(
              :class="{'s-single-product-page__selector--selected': isConfigActive}"
              @click="isConfigActive = true"
            ) Запрос на подбор оборудования
            h4.s-single-product-page__selector(
              :class="{'s-single-product-page__selector--selected': !isConfigActive}"
              @click="isConfigActive = false"
            ) Модельный ряд
          s-request-config(
            v-if="isConfigActive"
          ).s-single-product-page__config
          s-single-product-modify(
            v-else
            :productId="id"
            @updateSelectedProduct="updateSelectedProduct"
          )
        .s-single-product-page__col
          s-single-product(
            :productId="id"
          )

</template>

<script>

import sBreadcrumbs from '@/components/layout/s-breadcrumbs.vue';
import sSingleProductModify from '@/components/singleProduct/s-single-product-modify.vue';
import sRequestConfig from '@/components/common/s-request-config.vue';
import sSingleProduct from '@/components/singleProduct/s-single-product.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'SingleProductPage',
  components: {
    sBreadcrumbs,
    sSingleProductModify,
    sRequestConfig,
    sSingleProduct,
  },
  props: {
    productId: {
      type: Number,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      id: this.productId,
      isConfigActive: false,
    };
  },
  watch: {
    '$props.productId': function (newVal) {
      this.id = newVal;
    },
  },
  computed: {
    ...mapGetters([
      'GROUP_OF_PRODUCT',
      'PRODUCT',
    ]),
  },
  methods: {
    updateSelectedProduct(productId) {
      this.id = productId;
    },
  },
};

</script>

<style lang="scss" scoped>

.s-single-product-page {
  min-height: 100vh;
  padding-top: $headerHeight;
  padding-bottom: 20px;
  background-color: $colGray;

  &__container {
    @include root-container;
  }

  &__row {
    @include flex-row(30px);
  }

  &__col {
    @include flex-col-equal;
  }

  &__selectors {
    @include flex-row;
    margin-bottom: 1px;
  }

  &__selector {
    @include flex-col-equal;
    display: flex;
    padding: 20px 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: $colBlue;
    background-color: $colGrayTr;
    box-shadow: $shadow-grid-tab;
    cursor: pointer;
    transition: $animGridTabsSingleItem;

    &:hover {
      background-color: $colWhite;
    }

    &--selected {
      background-color: $colWhite;
      cursor: auto;
    }
  }

  &__config {
    box-shadow: $shadow-grid-tab;
  }
}

</style>
