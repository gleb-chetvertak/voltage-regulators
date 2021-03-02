<template lang="pug">
  #app.app
    sHeader
    transition(name="fade" mode="out-in")
      router-view

</template>

<script>

import sHeader from '@/components/layout/s-header.vue';

export default {
  components: {
    sHeader,
  },
};

</script>

<style lang="scss">

@import '@/assets/styles/main.scss';

</style>
