<template lang="pug">
  .store-page
    .store-page__container
      //- s-breadcrumbs
      s-catalog

</template>

<script>

import sBreadcrumbs from '@/components/layout/s-breadcrumbs.vue';
import sCatalog from '@/components/catalog/s-catalog.vue';

export default {
  name: 'StorePage',
  components: {
    sBreadcrumbs,
    sCatalog,
  },
};

</script>

<style lang="scss" scoped>

.store-page {
  min-height: 100vh;
  padding-top: $headerHeight;
  background-color: $colGray;

  &__container {
    @include root-container;
    padding-bottom: 20px;
  }
}

</style>
