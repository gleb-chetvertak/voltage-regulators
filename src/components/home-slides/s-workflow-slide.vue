<template lang="pug">
  section.s-workflow-slide
    .s-workflow-slide__container
      h2.s-workflow-slide__headline Как мы работаем?

      .s-workflow-slide__row
        .s-workflow-slide__col
          img(src="@/assets/img/png/form.png", alt="Контакт").s-workflow-slide__icon
          p.s-workflow-slide__text Вы оставляете заявку
        .s-workflow-slide__col
          img(src="@/assets/img/png/faq.png", alt="Контакт").s-workflow-slide__icon
          p.s-workflow-slide__text Специалист связывается с Вами
        .s-workflow-slide__col
          img(src="@/assets/img/png/measure.png", alt="Замеры").s-workflow-slide__icon
          p.s-workflow-slide__text Выезд на объект
        .s-workflow-slide__col
          img(src="@/assets/img/png/accounting.png", alt="Контакт").s-workflow-slide__icon
          p.s-workflow-slide__text Выбор оборудования
        .s-workflow-slide__col
          img(src="@/assets/img/png/repairing.png", alt="Контакт").s-workflow-slide__icon
          p.s-workflow-slide__text Монтаж оборудования
</template>

<script>

export default {
  name: 'sWorkflowSlide',
};

</script>

<style lang="scss" scoped>

.s-workflow-slide {
  position: relative;
  z-index: 1;
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
    background: rgba(0, 0, 0, 0.7);
  }

  &__container {
    @include root-container;
    @include home-slide-container;
    display: flex;
    position: relative;
    z-index: 3;
    flex-direction: column;
    justify-content: flex-start;
  }

  &__headline {
    @include home-h2;
    text-align: center;
    color: $colWhite;
  }

  &__row {
    @include flex-row($cg: 20px);
    margin-top: 20px;
    flex-wrap: wrap;
    row-gap: 30px;
  }

  &__col {
    @include flex-col-equal(1, 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  &__icon {
    width: 50px;
    height: 50px;
    fill: $colWhite;
  }

  &__text {
    margin-top: 20px;
    text-align: center;
    color: $colWhite;
    font-weight: 400;
  }
}

@media screen and (min-width: $largePhone) {

  .s-workflow-slide {

    &__container {
      justify-content: center;
    }

    &__col {
      @include flex-col-equal(2, 20px);
    }

    &__headline {
      margin-top: -100px;
    }
  }
}

@media screen and (min-width: $tablet) {

  .s-workflow-slide {

    &__row {
      row-gap: 50px;
    }

    &__col {
      @include flex-col-equal(3, 20px);
    }

    &__icon {
      width: 100px;
      height: 100px;
    }

    &__text {
      margin-top: 40px;
    }
  }
}

@media screen and (min-width: $largeTablet) {

  .s-workflow-slide {

    &__col {
      @include flex-col-equal(5, 20px);
    }
  }
}

</style>
