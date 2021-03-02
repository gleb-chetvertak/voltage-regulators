<template lang="pug">
  div(
    @click="TOGGLE_PRODUCT_IN_COMPARE(productId)"
  ).s-toggle-compare
    icon-scales(
      :class="{'s-toggle-compare__icon--active': IS_PRODUCT_COMPARED(productId)}"
    ).s-toggle-compare__icon
    icon-minus-circle(
      v-if="IS_PRODUCT_COMPARED(productId)"
    ).s-toggle-compare__sign.s-toggle-compare__sign--minus
    icon-plus-circle(
      v-else
    ).s-toggle-compare__sign.s-toggle-compare__sign--plus

</template>

<script>

import IconScales from '@/assets/img/svg/icon-scales.svg?inline';
import IconPlusCircle from '@/assets/img/svg/icon-plus-circle.svg?inline';
import IconMinusCircle from '@/assets/img/svg/icon-minus-circle.svg?inline';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'sToggleCompare',
  components: {
    IconScales,
    IconPlusCircle,
    IconMinusCircle,
  },
  props: {
    productId: {
      type: Number,
      default() {
        return null;
      },
    },
  },
  computed: {
    ...mapGetters([
      'IS_PRODUCT_COMPARED',
    ]),
  },
  methods: {
    ...mapActions([
      'TOGGLE_PRODUCT_IN_COMPARE',
    ]),
  },
};

</script>

<style lang="scss" scoped>

.s-toggle-compare {
  position: relative;
  cursor:pointer;

  &__icon {
    height: 18px;
    width: 24px;
    fill: $colBlue;
    transition: $animFill;

    &--active {
      fill: $colRed;
      transition: $animFill;
    }
  }

  &__sign {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    position: absolute;
    right: -2px;
    bottom: -7px;
    background-color: $colWhite;
    transition: $animFill;

    &--plus {
      fill: $colRed;
    }

    &--minus {
      fill: $colBlue;
    }
  }
}

</style>
