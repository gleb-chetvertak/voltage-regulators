<template lang="pug">
  .s-config-catalog
    h4.s-config-catalog__headline
      | Категории оборудования:
    .s-config-catalog__items
      div(
        v-for="g in GROUPS"
        :key="g.id"
      ).s-config-catalog__item
        .s-config-catalog__item-text
          h5.s-config-catalog__item-headline {{ g.name }}
          p.s-config-catalog__par {{ g.short_description }}
          sButton(
            :link="{\
              name: 'SingleProductPage',\
              params: {\
                productId: ID_OF_YOUNGEST_PRODUCT_IN_GROUP(g.id)\
                }\
              }"
          )
            template(
              v-slot:text
            ) Детальнее
        img(
          :src="`${publicPath}img/groups/${g.image}`"
          :alt="g.name"
        ).s-config-catalog__img

</template>

<script>

import sButton from '@/components/common/s-button.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'sConfigCatalog',
  components: {
    sButton,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    ...mapGetters([
      'GROUPS',
      'ID_OF_YOUNGEST_PRODUCT_IN_GROUP',
    ]),
  },
};

</script>

<style lang="scss" scoped>

  .s-config-catalog {
    min-height: 650px;
    padding: 20px 30px;
    background-color: $colWhite;
    box-shadow: $shadow-grid-tab;

    &__headline {
      margin-bottom: 20px;
      color: $colBlue;
    }

    &__items {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      row-gap: 20px;
    }

    &__item {
      display: flex;
      padding: 15px;
      align-items: flex-start;
      box-shadow: $shadow-grid-tab;
    }

    &__img {
      width: 40%;
      margin-left: 15px;
    }

    &__item-headline {
      margin-bottom: 20px;
      color: $colBlue;
    }

    &__par {
      margin-bottom: 20px;
      color: $colBlue;
    }
  }

</style>
