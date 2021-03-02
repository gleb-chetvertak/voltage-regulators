<template lang="pug">
  .s-cart-page
    .s-cart-page__container
      //- sBreadcrumbs(:directory="directory")
      template(v-if="CARTED_PRODUCTS_COUNT")
        .s-cart-page__content
          .s-cart-page__items
            s-cart-item(
              v-for="(p, i) in CART"
              :key="p.id"
              :productId="p"
              )
          .s-cart-page-total-wrapper
            s-cart-total
      template(v-else)
        p.s-cart-page__no-items-par
          | Корзина пуста -
          router-link(
            :to="{ name: 'CategoriesPage' }"
          ).s-cart-page__no-items-link  перейдите в каталог
          | , чтобы ознакомиться с оборудованием Altek
</template>

<script>

// import sBreadcrumbs from '@/components/common/s-breadcrumbs';
import sCartItem from '@/components/cart/s-cart-item.vue';
import sCartTotal from '@/components/cart/s-cart-total.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'CartPage',
  components: {
    // sBreadcrumbs,
    sCartItem,
    sCartTotal,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'CARTED_PRODUCTS_COUNT',
      'CART',
    ]),
    directory() {
      const tree = [
        {
          name: 'Корзина',
          link: '/cart',
        },
      ];
      return tree;
    },
  },
};

</script>

<style lang="scss" scoped>

  .s-cart-page {
    min-height: 100vh;
    padding-top: $headerHeight;
    padding-bottom: 20px;
    background-color: $colGray;

    &__container {
      @include root-container;
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__no-items-par {
      padding-top: 20px;
      color: $colBlue;
    }

    &__no-items-link {
      color: $colBlue;
      font-weight: 700;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }
    }
  }

  .s-cart-page__items {
    display: flex;
    margin-right: 15px;
    flex: 1 auto;
    flex-flow: column;
    justify-content: flex-start;
  }

  .s-cart-page-total-wrapper {
    flex: 1 auto;
    max-width: 30%;
  }

</style>
