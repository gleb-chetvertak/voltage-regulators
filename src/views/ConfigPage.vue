<template lang="pug">
  .config-page
    .config-page__container
      //- s-breadcrumbs(
      //-   :directory="directory"
      //- )
      .config-page__row
        .config-page__col
          s-request-config.config-page__config
        .config-page__col
          s-config-catalog

</template>

<script>

// import sBreadcrumbs from '@/components/common/s-breadcrumbs.vue';
import sRequestConfig from '@/components/common/s-request-config.vue';
import sConfigCatalog from '@/components/config/s-config-catalog.vue';

export default {
  name: 'ConfigPage',
  components: {
    // sBreadcrumbs,
    sRequestConfig,
    sConfigCatalog,
  },
  computed: {
    directory() {
      const tree = [
        {
          name: 'Запрос на подбор оборудования',
          link: '/config',
        },
      ];
      return tree;
    },
  },
};

</script>

<style lang="scss" scoped>

.config-page {
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

  &__config {
    box-shadow: $shadow-grid-tab;
  }
}

</style>
