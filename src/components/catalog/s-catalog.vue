<template lang="pug">
  .s-catalog
    s-catalog-item(
      v-for="(p, index) in PRODUCTS"
      :key="`p-${index}`"
      :productId="p.id"
      :image="p.image"
      :name="p.name"
      :price="p.price"
    )
</template>

<script>

import sCatalogItem from '@/components/catalog/s-catalog-item.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'sCatalog',
  components: {
    sCatalogItem,
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
    ]),
  },
};

</script>

<style lang="scss" scoped>

  .s-catalog {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1px;
  }
</style>
