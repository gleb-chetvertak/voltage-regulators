<template lang="pug">
  .s-pump-vs-gas-slide
    .s-pump-vs-gas-slide__container
      h2.s-pump-vs-gas-slide__headline
        |Чем отличается отопление тепловым насосом от газового отопления

      .s-pump-vs-gas-slide__text-blocks
        .s-pump-vs-gas-slide__text-col
          .text-block
            .text-block__icon
            p.
              Ключевым отличием тепловых насосов от газового отопления является
              то, что они работают на тепловой энергии из окружающей среды, а не газе.

          .text-block
            .text-block__icon
            p.
              Для поднятия температуры окружающей среды до нужной температуры для системы
              отопления, тепловые насосы используют электричество. В результате, 2/3 энергии,
              которую вы используете для системы отопления и горячего водоснабжения,
              вы бесплатно берете из окружающей среде и платите всего за 1/3 использованной
              энергии — за электроэнергию.

          .text-block
            .text-block__icon
            p.
              Летом тепловые насосы могут выполнять функцию кондиционера и охлаждать Ваш дом.

        .s-pump-vs-gas-slide__text-col
          .text-block
            .text-block__icon
            p.
              Кроме того, что тепловой насос использует минимум электроэнергии, домовладелец
              платит за нее по минимальным ценам. На данный момент на территории Украины
              действует специальный тариф на электроэнергию для отопления дома тепловым
              насосом с потреблением до 3000 кВт в месяц.

          .text-block
            .text-block__icon
            p.
              Основной элемент в тепловом насосе — компрессор. Такой, как в вашем холодильнике,
              но значительно большей мощности. Поэтому он может
              работать бесперебойно 25 лет и более.
              Газовые котлы не имеют такого срока службы.

          .text-block
            .text-block__icon
            p.
              Тепловые насосы абсолютно безопасны для жителей дома и для окружающей среды. В работе
              теплового насоса исключен человеческий или внешний фактор
              и отсутствуют процессы горения.
              При работе теплового насоса отсутствуют какие-либо выбросы вредных веществ.

</template>

<script>

export default {
  name: 'sPumpVsGasSlide',
};

</script>

<style lang="scss" scoped>

.s-pump-vs-gas-slide {
  min-height: 100%;
  position: relative;
  z-index: 1;
  background-color: $colWhite;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background: $headerGradient;
    opacity: 0.1;
  }

  &__container {
    @include root-container;
    @include home-slide-container;
    position: relative;
    z-index: 3;
  }

  &__headline {
    @include home-h2;
    max-width: 900px;
    color: $colBlue;
  }

  &__text-blocks {
    margin-bottom: 20px;
    justify-content: space-between;
    text-align: left;
    color: $colBlue;
  }
}

.text-block {
  padding-left: 10px;
  margin-bottom: 15px;
  position: relative;

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

@media screen and (min-width: $largePhone) {

  .s-pump-vs-gas-slide {

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
    padding-left: 20px;
    margin-bottom: 35px;

    &__icon {
      width: 10px;
      height: 10px;
      top: 6px;
    }
  }
}

</style>
