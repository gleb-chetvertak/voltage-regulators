<template lang="pug">
  .categories-page
    .categories-page__container
      //- s-breadcrumbs
      .categories-page__items
        div(
          v-for="c in CATEGORIES"
          :key="c.id"
        ).categories-page__item
          .categories-page__item-text
            h5.categories-page__item-headline {{ c.name }}
            p.categories-page__par {{ c.short_description }}
            s-button(
              :link="{ name: 'GroupsPage', params: { categoryId: c.id } }"
            )
              template(
                v-slot:text
              ) Детальнее
          img(
            :src="`${publicPath}img/categories/${c.image}`"
            :alt="c.name"
          ).categories-page__img

</template>

<script>

import sBreadcrumbs from '@/components/layout/s-breadcrumbs.vue';
import sButton from '@/components/common/s-button.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'CategoriesPage',
  components: {
    sBreadcrumbs,
    sButton,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    ...mapGetters([
      'CATEGORIES',
    ]),
  },
};

</script>

<style lang="scss" scoped>

.categories-page {
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
