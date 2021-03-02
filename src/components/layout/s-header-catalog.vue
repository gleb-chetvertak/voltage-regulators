<template lang="pug">
  nav.s-header-catalog
    ol
      li(
        v-for="c in CATEGORIES"
        :key="c.id"
      ).s-header-catalog__link-wrapper
        router-link(
          :to="{ name: 'GroupsPage', params: { categoryId: c.id } }"
          exact-active-class="s-header-catalog__link--active"
          @click.native="$emit('selectedCategory')"
        ).s-header-catalog__link {{ c.name }}
      li.s-header-catalog__link-wrapper
        router-link(
          :to="{ name: 'StorePage' }"
          exact-active-class="s-header-catalog__link--active"
        ).s-header-catalog__link Все оборудование

</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'sHeaderCatalog',
  computed: {
    ...mapGetters([
      'CATEGORIES',
    ]),
  },
};

</script>

<style lang="scss" scoped>

.s-header-catalog {
  width: 100vw;
  padding: 0 30px;
  margin-top: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: $colWhite;
  transition: $anim-header-catalog;
  box-shadow: $shadowHeader;

  &__link-wrapper {
    padding: 15px;
    border-bottom: 1px solid $colGray;
    text-align: center;

    &:last-child {
      border-color: transparent;
    }
  }

  &__link {
    color: $colBlue;

    &--active,
    &:hover {
      color: $colRed;
    }
  }
}

</style>
