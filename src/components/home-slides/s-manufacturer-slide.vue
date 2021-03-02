<template lang="pug">
  section.s-manufacturer-slide
    .s-manufacturer-slide__container
      h2.s-manufacturer-slide__headline Почему оборудование Altek?

      .s-manufacturer-slide__text-blocks
        .s-manufacturer-slide__text-col
          .text-block
            h3.text-block__headline Проверенный временем производитель
            p.
              Сегодня ALTEK – не просто оператор рынка альтернативной энергетики.
              Это крупнейшая компания, которая занимается поставками для отрасли качественного
              оборудования, в том числе, собственной разработки и сборки.

          .text-block
            h3.text-block__headline Инновационные решения
            p.
              Оборудование ALTEK адаптировано под требования украинского
              рынка и особенности украинских электросетей. Такой подход
              к организации производства позволяет учитывать обратную
              связь и рекомендации непосредственно от пользователей
              продукцией ALTEK, оперативно воплощать самые инновационные
              решения и создавать модели, соответствующие требованиям времени.

        .s-manufacturer-slide__text-col
          .text-block
            h3.text-block__headline Популярность
            p.
              ALTEK обеспечивает полным комплектом оборудования
              проекты солнечных электростанций и систем нагрева
              воды для частных домовладений и промышленные станции.
              Сегодня инверторы и фотомодули от ALTEK входят
              в состав каждой третьей солнечной электростанции,
              а гелиосистемы ALTEK обеспечивают нагрев воды
              в 70-80% курортных объектов на юге Украины.

          .text-block
            h3.text-block__headline Широкий ассортимент и доступный сервис
            p.
              Широкий ассортимент оборудования, доступностьсервиса для оборудования
              ALTEK по сравнению с агрегатами других производителей делают ALTEK лучшим
              партнером в сегменте B2B и стандартом качества в сегменте розничных продаж.

      sButton(
        :link="{ name: 'CategoriesPage' }"
      )
        template(v-slot:text) Тепловые насосы Altek

</template>

<script>

import sButton from '@/components/common/s-button.vue';

export default {
  name: 'sManufacturerSlide',
  components: {
    sButton,
  },
};

</script>

<style lang="scss" scoped>

.s-manufacturer-slide {
  position: relative;
  z-index: 1;
  text-align: center;
  background-image: url('../../assets/img/backgrounds/bg-home.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background: rgba(0, 0, 0, 0.5);
  }

  &__container {
    @include root-container;
    @include home-slide-container;
    position: relative;
    z-index: 3;
  }

  &__headline {
    @include home-h2;
    color: $colWhite;
  }

  &__text-blocks {
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
    color: $colWhite;
  }
}

.text-block {
  margin-bottom: 15px;

  &__headline {
    margin-bottom: 5px;
  }
}

@media screen and (min-width: $largePhone) {

  .s-manufacturer-slide {

    &__text-blocks {
      @include flex-row($cg: 40px);
    }

    &__text-col {
      @include flex-col-equal(2, 40px);
    }
  }
}

@media screen and (min-width: $tablet) {

  .text-block {
    margin-bottom: 35px;

    &__headline {
      margin-bottom: 10px;
    }
  }
}

</style>
