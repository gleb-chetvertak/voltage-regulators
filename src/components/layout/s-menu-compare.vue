<template lang="pug">
  div(
    :class="{'s-menu-compare--active': $route.name === 'ComparePage'}"
  ).s-menu-compare
    icon-scales.s-menu-compare__icon
    p(
      v-show="COMPARED_PRODUCTS_COUNT > 0"
    ).s-menu-compare__num {{ COMPARED_PRODUCTS_COUNT }}

</template>

<script>

import IconScales from '@/assets/img/svg/icon-scales.svg?inline';
import { mapGetters } from 'vuex';

export default {
  name: 'sToggleCompare',
  components: {
    IconScales,
  },
  computed: {
    ...mapGetters([
      'COMPARED_PRODUCTS_COUNT',
    ]),
  },
};

</script>

<style lang="scss" scoped>

.s-menu-compare {
  position: relative;

  &:hover,
  &--active {

    & .s-menu-compare__icon {
      fill: $colRed;
    }

    & .s-menu-compare__num {
      color: $colBlue;
    }
  }

  &__icon {
    height: 18px;
    width: 24px;
    fill: $colBlue;
    transition: $animFill;
  }

  &__num {
    position: absolute;
    right: -6px;
    bottom: -12px;
    color: $colRed;
    font-weight: bold;
    transition: $animLinks;
  }
}

</style>
