<template lang="pug">
  .s-invest-slide
    .s-invest-slide__row
      .s-invest-slide__col
        .s-invest-slide__inner-container.s-invest-slide__inner-container--image
          h2.s-invest-slide__headline
            |Когда имеет смысл инвестировать в тепловой насос?

      .s-invest-slide__col
        .s-invest-slide__inner-container.s-invest-slide__inner-container--gradient
          .text-block
            .text-block__icon
            p.
              У вас большие расходы на газ (отопление, горячая вода).
              Вы хотели бы уменьшить ваши счета за энергию (особенно зимой,
              когда речь идет о тысячах гривен).
          .text-block
            .text-block__icon
            p.
              Вы планируете делать ремонт или строите дом и Вам нужно
              оборудование для отопления и горячего водоснабжения.
          .text-block
            .text-block__icon
            p.
              К Вашему дому не подведена газовая магистраль.
          .text-block
            .text-block__icon
            p.
              Вы используете или планируете использовать систему "теплый пол"
              (если не планируете - подумайте об этом).
          .text-block
            .text-block__icon
            p.
              Вы стремитесь быть максимально эффективными и использовать
              только энергоэффективное оборудование
          .text-block
            .text-block__icon
            p.
              Для Вас важно, чтобы в доме не было взрывоопасных веществ.
          .text-block
            .text-block__icon
            p.
              Вы готовы потратить на отопление от $5000 до $12000

</template>

<script>

export default {
  name: 'sInvestSlide',
  components: {
  },
};

</script>

<style lang="scss" scoped>

.s-invest-slide {
  position: relative;
  z-index: 1;
  text-align: left;
  background-image: url('../../assets/img/backgrounds/bg-home.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: $colWhite;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
    z-index: 2;
  }

  &__row {
    @include root-container;
    @include home-slide-container;
  }

  &__headline {
    @include home-h2;
    position: relative;
    z-index: 12;
    color: $colWhite;
  }

}

.text-block {
  padding-left: 10px;
  margin-bottom: 20px;
  position: relative;
  z-index: 12;
  color: $colWhite;

  &__icon {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 0;
    background-color: $colRed;
  }
}

@media screen and (min-width: $tablet) {

  .s-invest-slide {
    background-image: unset;

    &::before {
      display: none;
    }

    &__row {
      @include flex-row;
      max-width: unset;
      padding: unset;
    }

    &__col {
      @include flex-col-equal;
      min-height: calc(100vh - #{$headerWidth});
    }

    &__inner-container {
      min-height: calc(100vh - #{$headerWidth});
      padding: 60px;

      &--image {
        position: relative;
        z-index: 10;
        background-image: url('../../assets/img/backgrounds/bg-home.jpeg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          left: 0;
          top: 0;
          z-index: 11;
        }
      }

      &--gradient {
        height: 100%;
        position: relative;
        z-index: 10;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          left: 0;
          top: 0;
          z-index: 11;
          background: $headerGradient;
        }
      }
    }

    &__headline {
      text-align: left;
    }
  }

  .text-block {
    padding-left: 20px;
    margin-bottom: 35px;
    color: $colBlue;

    &__icon {
      width: 10px;
      height: 10px;
      top: 6px;
    }
  }
}

</style>
