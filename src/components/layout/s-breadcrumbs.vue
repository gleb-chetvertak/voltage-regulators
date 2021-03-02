<template lang="pug">
  .s-breadcrumbs
    p(
      v-for="(d, index) in newTree"
      :key="`d-${index}`"
    ) {{ d }}
    //- div(
    //-   v-for="(d, index) in dirTree"
    //-   :key="`d-${index}`"
    //- ).s-breadcrumbs__wrapper
    //-   router-link(
    //-     :to="{ name: d.link }"
    //-   ).s-breadcrumbs__link {{ d.name }}
    //-   icon-chevron-right.s-breadcrumbs__icon

</template>

<script>

import IconChevronRight from '@/assets/img/svg/icon-chevron-right.svg?inline';

export default {
  name: 'sBreadcrumbs',
  components: {
    IconChevronRight,
  },
  props: {
    directory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    dirTree() {
      const tree = [
        {
          name: 'Оборудование Altek',
          link: 'StorePage',
        },
        ...this.directory];
      return tree;
    },
    newTree() {
      const tree = [
        {
          name: 'Оборудование Altek',
          link: { name: 'StorePage' },
        },
      ];
      const route = this.$route.fullPath.split('/');
      route.splice(0, 1);
      return tree;
    },
  },
};

</script>

<style lang="scss" scoped>

.s-breadcrumbs {
  display: flex;
  padding: 15px 0 15px;
  justify-content: flex-start;
  flex-wrap: wrap;

  &__wrapper {

    &:last-of-type {

      & .s-breadcrumbs__icon {
        display: none;
      }
    }
  }

  &__link {
    margin-right: 8px;
    font-family: $ffSec;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: $colBlue;
    cursor: pointer;

    &:hover {
      color: $colRed;
    }
  }

  &__icon {
    width: 7px;
    margin-right: 8px;
    fill: $colRed;
  }
}

// @media screen and (max-width: $largeTablet) {
//   .s-breadcrumbs {
//     padding: 15px;
//     border: $catalogItemBorder;
//     background-color: $colWhite;
//   }
// }

</style>
