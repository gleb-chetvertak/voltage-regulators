<template lang="pug">
  .s-compare-specs
    .s-compare-specs__header
      h3.s-compare-specs__headline Категория:
      h6.s-compare-specs__category {{ CATEGORY(categoryId).name }}
      div(
        @click="showOtherCategories = !showOtherCategories"
      ).s-compare-specs__change-category
        p.s-compare-specs__change-text Другие категории
        icon-chevron-right(
          :class="{'s-compare-specs__change-icon--active': showOtherCategories}"
        ).s-compare-specs__change-icon
      transition(name="fade")
        ul(
          v-show="showOtherCategories"
        ).s-compare-specs__change-block
          li(
            v-for="c in CATEGORY_IDS_OF_COMPARED"
            :key="c"
            :class="{'s-compare-specs__change-option--active': c === categoryId}"
            @click="$emit('changeCategory', c)"
          ).s-compare-specs__change-option {{ CATEGORY(c).name }}
      h3.s-compare-specs__headline Характеристики:
    .s-compare-specs__props
      p.s-compare-specs__prop(
        v-for="s in SPECS(categoryId)"
        :class="{'s-compare-specs__prop--hovered': hoveredSpecId === s.id}"
        @mouseenter="$emit('hoveredSpec', s.id)"
      ) {{ s.name }}

</template>

<script>

import IconChevronRight from '@/assets/img/svg/icon-chevron-right.svg?inline';
import { mapGetters } from 'vuex';

export default {
  name: 's-compare-specs',
  components: { IconChevronRight },
  props: {
    categoryId: {
      type: Number,
      default() {
        return 0;
      },
    },
    hoveredSpecId: {
      type: Number,
      default() {
        return null;
      },
    },
  },
  data() {
    return {
      showOtherCategories: false,
    };
  },
  computed: {
    ...mapGetters([
      'CATEGORY',
      'CATEGORY_IDS_OF_COMPARED',
      'SPECS',
    ]),
  },
  // methods: {
  //   processText(specId, specName) {
  //     const el = document.getElementById(`s-compare-specs__prop--${specId}`);
  //     // if (el.scrollWidth() > el.innerWidth()) {
  //     //   console.log(specName);
  //     // }
  //     console.log(el.scrollWidth);
  //     return specName;
  //   },
  // },
};

</script>

<style lang="scss" scoped>

  .s-compare-specs {
    min-width: 310px;
    flex-shrink: 0;
    border: 1px solid $col-border-grid-tab;
    border-right: none;
    background-color: $colWhite;
    box-shadow: $shadowCompareSpecs;

    &__header {
      display: flex;
      height: 260px;
      padding: 15px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__headline {
      color: $colBlue;
    }

    &__category {
      margin: 10px 0 0 10px;
      color: $colRed;
    }

    &__change-category {
      display: flex;
      margin-bottom: auto;
      position: relative;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;

      &:hover {

        & .s-compare-specs__change-text {
          color: $colRed;
        }

        & .s-compare-specs__change-icon path {
          fill: $colRed;
        }
      }
    }

    &__change-text {
      margin-left: 10px;
      margin-top: 5px;
      font-size: 12px;
      font-weight: 500;
      color: $colBlue;
      transition: $animLinks;
    }

    &__change-icon {
      height: 10px;
      margin-top: 5px;
      margin-left: 8px;
      transform: rotate(90deg);
      transition: #{$animFill}, #{$anim-header-catalog};

      & path {
        fill: $colBlue;
      }

      &--active {
        transform: rotate(-90deg);
      }
    }

    &__change-block {
      @include no-scrollbar;
      padding: 10px 10px 5px;
      margin: 5px 10px 10px;
      flex-grow: 1;
      align-self: stretch;
      background-color: $colWhite;
      box-shadow: $shadow-grid-tab;
      overflow-y: scroll;
    }

    &__change-option {
      margin-bottom: 5px;
      font-size: 12px;
      font-weight: 700;
      color: $colBlue;
      transition: $animLinks;
      cursor: pointer;

      &--active,
      &:hover {
        color: $colRed;
      }
    }

    &__props {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      overflow-x: hidden;
      cursor: default;
    }

    &__prop {
      @include no-scrollbar;
      display: flex;
      height: 48px;
      padding: 5px 10px;
      position: relative;
      justify-content: flex-start;
      align-items: center;
      line-height: 20px;
      color: $colBlue;
      overflow-y: scroll;

      &:nth-of-type(odd) {
        background-color: $colGray;
      }

      &--hovered {
        z-index: 10;
        box-shadow: $shadow-compare-specs-hover;
      }
    }
  }

</style>
