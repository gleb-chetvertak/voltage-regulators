<template lang="pug">
  .s-cart-total
    h2.s-cart-total__headline Итого:
    .s-cart-total__par-wrapper
      p {{ CARTED_PRODUCTS_COUNT }} продуктов на сумму:
      p ${{ CARTED_PRODUCTS_SUM }}
    .s-cart-total__par-wrapper
      p К оплате:
      p ${{ CARTED_PRODUCTS_SUM }}
    fieldset
      label.s-cart-total__label
        | Имя:
      input.s-cart-total__input
    fieldset
      label.s-cart-total__label
        | Телефон:
        span.s-cart-total__required-sign  *
      input.s-cart-total__input
    fieldset
      label.s-cart-total__label
        | Email:
      input.s-cart-total__input
    s-button(
      modifier="large"
    ).s-cart-total__btn
      template(
        v-slot:text
      ) Заказ подтверждаю

</template>

<script>

import sButton from '@/components/common/s-button.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'sCartTotal',
  components: {
    sButton,
  },
  computed: {
    ...mapGetters([
      'CARTED_PRODUCTS_COUNT',
      'CARTED_PRODUCTS_SUM',
    ]),
  },
};

</script>

<style lang="scss">

  .s-cart-total {
    display: flex;
    min-width: 300px;
    padding: 30px;
    flex-flow: column;
    justify-content: flex-start;
    background-color: $colWhite;
    box-shadow: $shadow-grid-tab;

    &__headline {
      margin-bottom: 15px;
      text-align: left;
      color: $colBlue;
    }

    &__par-wrapper {
      display: flex;
      margin-bottom: 20px;
      justify-content: space-between;
      color: $colBlue;
    }

    &__required-sign {
      @include required-field-sign;
    }

    &__input {
      @include form-input($w: 100%, $mb: 20px);
      margin-top: 10px;
    }

    &__btn {
      margin-top: 10px;
    }

  }

</style>
