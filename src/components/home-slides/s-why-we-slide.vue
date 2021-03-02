<template lang="pug">
  .s-why-we-slide
    b-container(fluid).s-why-we-slide__container
      h2.secondary-section-headline.secondary-section-headline--white Почему покупать у нас?

      b-row(align-h="between").text-block--list
        b-col(cols="5")
          p.text-block--list__text.text-block--list__text--white
            CircleSVG.text-block--list__icon
            |Viessmann — немецкая узкоспециализированная компания-производитель,
            |которая занимается исключительно климатической техникой
            |более 100 лет (с 1917 года).

          p.text-block--list__text.text-block--list__text--white
            CircleSVG.text-block--list__icon
            |В Украине компания официально представлена с 2000 года.

          p.text-block--list__text.text-block--list__text--white
            CircleSVG.text-block--list__icon
            |За это время компания Viessmann сформировала сеть партнеров
            |по всей Украине. Только инсталляторы, которые успешно завершили
            |семинары от специалистов Академии Viessmann могут осуществлять
            |монтаж нашего оборудования, проводить сервис и,
            |при необходимости, осуществлять ремонт.

        b-col(cols="5")
          p.text-block--list__text.text-block--list__text--white
            CircleSVG.text-block--list__icon
            |Все наши сервисные партнеры аккредитованные в соответствии
            |с немецкими стандартами и обладают всеми необходимыми знаниями
            |для осуществления сервиса на высшем уровне.

          p.text-block--list__text.text-block--list__text--white
            CircleSVG.text-block--list__icon
            |Наша цель —  удовлетворение потребностей потребителя, поэтому мы
            |предлагаем бытовое энергоэффективное оборудование, и мы
            |работаем над тем, чтобы и централизованное отопление, жилые комплексы
            |и различные компании в Украине были энергоэффективными, поэтому
            |по этой ссылке Вы можете найти коммунальные объекты, промышленные
            |компании, торгово-развлекательные центры и бизнес-центры,
            |которые выбрали оборудования Viessmann.

</template>

<script>

  import CircleSVG from '@/assets/img/svg/circle.svg?inline'

  export default {
    name: 'sWhyWeSlide',
    components: {
      CircleSVG
    }
  }

</script>

<style lang="scss" scoped>

  .s-why-we-slide {
    height: 100%;
    position: relative;
    z-index: 1;
    background-image: url(../../assets/img/png/img8.jpg);
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
      max-width: $desktop;
      padding-top: 100px;
      padding-bottom: 15px;
      position: relative;
      z-index: 3;
    }

  }

</style>