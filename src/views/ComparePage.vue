<template lang="pug">
  .s-compare-page
    .s-compare-page__container
      //- sBreadcrumbs(
      //-   :directory="directory"
      //- )
      div(
        v-if="COMPARED_PRODUCTS_COUNT"
      ).s-compare-page__wrapper
        s-compare-specs(
          :categoryId="categoryId || LAST_ADDED_TO_COMPARE_CATEGORY_ID"
          :hoveredSpecId="hoveredSpecId"
          @hoveredSpec="hoveredSpecId = $event"
          @changeCategory="categoryId = $event"
        ).s-compare-page__specs
        div.s-compare-page__slider-wrapper
          vue-slick-carousel(
            ref="carousel"
            v-bind="carouselSettings"
          ).s-compare-page__slider
            s-compare-item(
              v-for="(p, i) in COMPARED_BY_CATEGORY(categoryId\
                || LAST_ADDED_TO_COMPARE_CATEGORY_ID)",
              :key="p.id",
              :productId="p",
              :categoryId="categoryId || LAST_ADDED_TO_COMPARE_CATEGORY_ID"
              :hoveredSpecId="hoveredSpecId"
              @hoveredSpec="hoveredSpecId = $event"
            )
        div(
          v-show="COMPARED_BY_CATEGORY_COUNT(categoryId\
            || LAST_ADDED_TO_COMPARE_CATEGORY_ID) > 4"
        ).s-compare-page__slider-controls
          div(
            @click="$refs.carousel.next()"
          ).s-compare-page__slider-control.s-compare-page__slider-control--next
            icon-chevron-right.s-compare-page__slider-control-icon
          div(
            @click="$refs.carousel.prev()"
          ).s-compare-page__slider-control.s-compare-page__slider-control--prev
            icon-chevron-left.s-compare-page__slider-control-icon
      template(
        v-else
      )
        p.s-compare-page__no-items-par
          | Список сравнения пуст -
          router-link(
            :to="{ name: 'CategoriesPage' }"
          ).s-compare-page__no-items-link  перейдите в каталог
          | , чтобы ознакомиться с оборудованием Altek

</template>

<script>

// import sBreadcrumbs from '@/components/common/s-breadcrumbs';
import sCompareSpecs from '@/components/compare/s-compare-specs.vue';
import sCompareItem from '@/components/compare/s-compare-item.vue';
import VueSlickCarousel from 'vue-slick-carousel';
import IconChevronRight from '@/assets/img/svg/icon-chevron-right.svg?inline';
import IconChevronLeft from '@/assets/img/svg/icon-chevron-left.svg?inline';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import { mapGetters } from 'vuex';

export default {
  name: 'sComparePage',
  components: {
    // sBreadcrumbs,
    sCompareSpecs,
    sCompareItem,
    VueSlickCarousel,
    IconChevronRight,
    IconChevronLeft,
  },
  data() {
    return {
      lastScrollPosition: 0,
      carouselSettings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
          {
            breakpoint: 1281,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 475,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
      categoryId: null,
      hoveredSpecId: null,
    };
  },
  computed: {
    ...mapGetters([
      'COMPARED_PRODUCTS_COUNT',
      'COMPARED_BY_CATEGORY',
      'COMPARED_BY_CATEGORY_COUNT',
      'LAST_ADDED_TO_COMPARE_CATEGORY_ID',
    ]),
    breadH() {
      return this.$refs.carousel.offsetHeight;
    },
    directory() {
      const tree = [
        {
          name: 'Сравнение товаров',
          link: '/compare',
        },
        {
          name: 'Тепловые насосы',
          link: '/compare',
        },
      ];
      return tree;
    },
  },
};

</script>

<style lang="scss" scoped>

  .s-compare-page {
    min-height: 100vh;
    background-color: $colGray;
    padding-top: $headerHeight;

    &__container {
      @include root-container;
      padding-bottom: 20px;
    }

    &__no-items-par {
      padding-top: 20px;
      color: $colBlue;
    }

    &__no-items-link {
      color: $colBlue;
      font-weight: 700;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }
    }

    &__wrapper {
      display: flex;
      position: relative;
    }

    &__specs {
      flex-basis: 310px;
      margin-right: 20px;
    }

    &__slider-wrapper {
      width: calc(100% - 371px);
    }

    &__slider {
      margin-right: 20px;
    }

    &__slider-controls {
      width: 41px;
      height: calc(100vh - #{$headerHeight} - 30px - 20px);
      position: sticky;
      top: calc(#{$headerHeight} + 30px);
      background-color: $colWhite;
      box-shadow: $shadowCompareControls;
      transform: translateX(-25px);
    }

    &__slider-control {
      display: flex;
      height: 50%;
      border-left: none;
      z-index: 2;
      justify-content: center;
      row-gap: 1px;
      cursor: pointer;
      box-shadow: $shadow-grid-tab;

      &:hover {

        & .s-compare-page__slider-control-icon {
          fill: $colRed;
        }
      }

      &--next {
        padding-bottom: 50px;
        align-items: flex-end;
      }

      &--prev {
        padding-top: 50px;
        align-items: flex-start;
      }
    }

    &__slider-control-icon {
      width: 30px;
      margin: 0 5px;
      fill: $colBlue;
      transition: $animFill;
    }
  }

</style>
