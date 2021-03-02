<template lang="pug">
  .groups-page
    .groups-page__container
      //- s-breadcrumbs
      .groups-page__items
        div(
          v-for="g in GROUPS_BY_CATEGORY(categoryId)"
          :key="g.id"
        ).groups-page__item
          .groups-page__item-text
            h5.groups-page__item-headline {{ g.name }}
            p.groups-page__par {{ g.short_description }}
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
          ).groups-page__img

</template>

<script>

import sBreadcrumbs from '@/components/layout/s-breadcrumbs.vue';
import sButton from '@/components/common/s-button.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'GroupsPage',
  components: {
    sBreadcrumbs,
    sButton,
  },
  props: {
    categoryId: {
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
      'GROUPS_BY_CATEGORY',
      'ID_OF_YOUNGEST_PRODUCT_IN_GROUP',
    ]),
  },
};

</script>

<style lang="scss" scoped>

.groups-page {
  min-height: 100vh;
  padding-top: $headerHeight;
  background-color: $colGray;

  &__container {
    @include root-container;
    padding-bottom: 20px;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 30px;
  }

  &__item {
    display: flex;
    padding: 30px;
    align-items: flex-start;
    background-color: $colWhite;
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
