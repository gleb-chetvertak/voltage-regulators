<template lang="pug">
  .s-single-item-modify
    h5.s-single-item-modify__headline Модели:
    ul.s-single-item-modify__models
      li(
        v-for="(p, index) in PRODUCT_SIBLINGS(productId)"
        :key="`p-${index}`"
        @click="updateSelectedProduct(p.id)"
      ).s-single-item-modify__model
        .s-single-item-modify__model-selector(
          :class="{'s-single-item-modify__model-selector--selected': p.id === productId}"
        )
        p {{ p.name }}
    h5.s-single-item-modify__headline Преимущества:
    ul.s-single-item-modify__descriptions
      li(
        v-for="(d, index) in GROUP_OF_PRODUCT(productId).description"
        :key="`d-${index}`"
      ).s-single-item-modify__description
        .s-single-item-modify__description-selector
        p {{ d }}
    template(
      v-if="GROUP_OF_PRODUCT(productId).files"
    )
      h5.s-single-item-modify__headline Файлы:
      ul.s-single-item-modify__files
        li(
          v-for="(f, index) in GROUP_OF_PRODUCT(productId).files"
          :key="`f-${index}`"
        ).s-single-item-modify__file
          a(
            :download="f"
            :href="`${publicPath}files/${f}.pdf`"
          )
            icon-file-download.s-single-item-modify__icon
          a(
            :href="`${publicPath}files/${f}.pdf`"
            target="_blank"
          )
            icon-eye.s-single-item-modify__icon
          p.s-single-item-modify__text {{ f }}

</template>

<script>

import IconFileDownload from '@/assets/img/svg/icon-file-download.svg?inline';
import IconEye from '@/assets/img/svg/icon-eye.svg?inline';
import { mapGetters } from 'vuex';

export default {
  name: 'sSingleProductModify',
  components: {
    IconFileDownload,
    IconEye,
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
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    ...mapGetters([
      'GROUP_OF_PRODUCT',
      'PRODUCT_SIBLINGS',
      'FILE_TYPES',
    ]),
  },
  methods: {
    updateSelectedProduct(productId) {
      this.$emit('updateSelectedProduct', productId);
    },
  },
};

</script>

<style lang="scss" scoped>
  .s-single-item-modify {
    padding: 5px 30px 20px;
    background-color: $colWhite;
    box-shadow: $shadow-grid-tab;

    &__headline {
      margin: 15px 0;
      color: $colBlue;
    }

    &__model {
      display: flex;
      width: fit-content;
      margin-bottom: 5px;
      margin-left: 10px;
      justify-content: flex-start;
      align-items: center;
      color: $colBlue;
      cursor: pointer;

      &:hover .s-single-item-modify__model-selector {
        background-color: $colRed;
      }
    }

    &__model-selector {
      height: 12px;
      width: 12px;
      border: 1px solid $colRed;
      margin-right: 10px;
      flex-shrink: 0;
      border-radius: 50%;

      &--selected {
        background-color: $colRed;
      }

    }

    &__description {
      display: flex;
      margin-bottom: 5px;
      margin-left: 10px;
      justify-content: flex-start;
      align-items: flex-start;
      color: $colBlue;
    }

    &__description-selector {
      height: 8px;
      width: 8px;
      margin-top: 7px;
      margin-right: 10px;
      flex-shrink: 0;
      border-radius: 50%;
      background-color: $colRed;
    }

    &__file {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      margin-left: 10px;
    }

    &__text {
      color: $colBlue;
    }

    &__icon {
      width: 20px;
      margin-right: 10px;
      fill: $colGrayDark;

      &:hover {
        fill: $colRed;
      }
    }
  }
</style>
