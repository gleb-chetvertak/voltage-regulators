<template lang="pug">
  .s-request-config
    ul.s-request-config__list
      li.s-request-config__list-item
        .s-request-config__list-selector
        p Наши специалисты бесплатно подберут наиболее подходящие модели для Вашего помещения.
      li.s-request-config__list-item
        .s-request-config__list-selector
        p
          span.s-request-config__required-sign *
          |  - поля, обязательные для заполнения.
    h5.s-request-config__headline Данные для проектирования:
    h6.s-request-config__fieldset-headline
      | Описание работ:
    fieldset.s-request-config__fieldset
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Новое строительство
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Замена устаревшей системы
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Частичная замена существующей системы с целью уменьшения расходов и/или повышения комфорта
    h6.s-request-config__fieldset-headline
      | Назначение помещений:
    fieldset.s-request-config__fieldset
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Жильё
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Офис
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Магазин
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Питание
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Производство
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Медицина или дошкольное образование
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Другое
    h6.s-request-config__fieldset-headline
      | Отапливаемая площадь, кв. м:
    fieldset.s-request-config__fieldset
      input.s-request-config__input
    h6.s-request-config__fieldset-headline
      | Теплопотери, кВт:
    fieldset.s-request-config__fieldset
      input.s-request-config__input
    h6.s-request-config__fieldset-headline
      | Что должен обеспечить тепловой насос:
    fieldset.s-request-config__fieldset
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Отопление
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Горячее водоснабжение
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Нагрев бассейна
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Другое
    h6.s-request-config__fieldset-headline
      | Электроснабжение:
    fieldset.s-request-config__fieldset
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | 220 Вольт, одна фаза
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | 380 Вольт, три фазы
    h6.s-request-config__fieldset-headline
      | Лимит электрической энергии, выделенный электроснабжающей компанией, кВт:
    fieldset.s-request-config__fieldset
      input.s-request-config__input
    h6.s-request-config__fieldset-headline
      | Пожелания (если есть) по источнику энергии:
    fieldset.s-request-config__fieldset
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Грунт
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Воздух улицы
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Воздух вентиляции
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Вода неглубоко от поверхности грунта, и водоем рядом
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Собственный водоем
    h6.s-request-config__fieldset-headline
      | Площадь собственной, незастроенной в это время, земли, м2:
    fieldset.s-request-config__fieldset
      input.s-request-config__input
    h6.s-request-config__fieldset-headline
      | Количество жителей (для расчета расхода горячей воды):
    fieldset.s-request-config__fieldset
      input.s-request-config__input
    h6.s-request-config__fieldset-headline
      | Вид или виды отопления:
    fieldset.s-request-config__fieldset
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Теплый пол
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Радиаторы
      label.s-request-config__checkbox-container
        input(
          type="checkbox"
          name="processes"
        ).s-request-config__checkbox
        .s-request-config__checkbox-new
          icon-check.s-request-config__checkbox-icon
        | Фанкойлы
    h6.s-request-config__fieldset-headline
      | Температурный график отопления, ℃, подающая/обратная магистраль (если известно):
    fieldset.s-request-config__fieldset
      input.s-request-config__input
    h6.s-request-config__fieldset-headline
      | Альтернативный источник тепла - если имеется или планируется к установке
      | (газовый, пелетный, жидкотопливный котел, солнечный колектор, и т.п.):
    fieldset.s-request-config__fieldset
      input.s-request-config__input
    h6.s-request-config__fieldset-headline
      | Область, район (для определения климатической зоны):
    fieldset.s-request-config__fieldset
      input.s-request-config__input
    h6.s-request-config__fieldset-headline
      | Дополнительная информация:
    fieldset.s-request-config__fieldset
      textarea.s-request-config__input
    h6.s-request-config__fieldset-headline
      | Ваши контактные данные:
    fieldset.s-request-config__contacts
      fieldset
        label.s-request-config__contact-label
          | Имя:
        input.s-request-config__input
      fieldset
        label.s-request-config__contact-label
          | Отчетсво:
        input.s-request-config__input
      fieldset
        label.s-request-config__contact-label
          | Телефон:
          span.s-request-config__required-sign  *
        input.s-request-config__input
      fieldset
        label.s-request-config__contact-label
          | Email:
        input.s-request-config__input

    .s-request-config__submit
      sButton(
        type="submit"
        :disabled="submitStatus === 'pending'"
        modifier="large"
        :text="submitStatus === 'sent' ? 'Дополнительная заявка' : 'Отправить'"
      )
        template(v-slot:text) Отправить

</template>

<script>

// import Vue from 'vue';
import sButton from '@/components/common/s-button.vue';
import IconCheck from '@/assets/img/svg/icon-check.svg?inline';
// import { mapActions, mapGetters } from 'vuex';
import {
  required,
  numeric,
  minLength,
  maxLength,
  email,
} from 'vuelidate/lib/validators';

export default {
  name: 's-request-config',
  components: {
    sButton,
    IconCheck,
  },
  data() {
    return {
      fields: {
        name: '',
        tel: null,
        email: '',
      },
      submitStatus: null,
    };
  },
  validations: {
    fields: {
      name: {},
      tel: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      email: {
        email,
      },
    },
  },
};

</script>

<style lang="scss">

.s-request-config {
  padding: 20px 30px;
  // border: 1px solid rgba(50,50,50,.15);
  background-color: $colWhite;

  &__headline {
    margin-bottom: 20px;
    color: $colBlue;
  }

  &__list {
    margin-bottom: 20px;
  }

  &__list-item {
    display: flex;
    margin-bottom: 5px;
    margin-left: 10px;
    justify-content: flex-start;
    align-items: flex-start;
    color: $colBlue;
  }

  &__list-selector {
    height: 8px;
    width: 8px;
    margin-top: 7px;
    margin-right: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: $colRed;
  }

  &__required-sign {
    @include required-field-sign;
  }

  &__fieldset-headline {
    color: $colBlue;
  }

  &__fieldset {
    margin-bottom: 30px;
    margin-left: 10px;
  }

  &__input {
    @include form-input($w: 100%);
    margin-top: 10px;
  }

  &__checkbox-container {
    display: block;
    padding-left: 28px;
    margin-top: 10px;
    position: relative;
    line-height: 20px;
    color: $colBlue;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  &__checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ &-new {
      border-color: $colRed;
      background-color: $colRed;
    }
  }

  &__checkbox-new {
    display: flex;
    height: 18px;
    width: 18px;
    border: 2px solid $colBlue;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: $colWhite;
  }

  &__checkbox-icon {
    width: 12px;
    height: 12px;
    fill: $colWhite;
  }

  &__contacts {
    display: grid;
    margin-top: 10px;
    margin-left: 10px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 20px;
  }

  &__contact-label {
    display: block;
    margin-left: 10px;
    color: $colBlue;
  }

  &__submit {
    margin-top: 30px;
    text-align: center;
  }

  // &__field {
  //   display: flex;
  //   justify-content: flex-start;
  //   align-items: flex-start;
  //   color: $colBlue;
  // }

  // &__checkbox {

  //   & .v-input--selection-controls {
  //     margin-top: 0;
  //   }
  // }

  // &__contact-label {
  //   display: block;
  //   margin-bottom: 5px;
  //   color: $colBlue;
  // }

  // &__contact-fields {
  //   display: grid;
  //   margin-left: 10px;
  //   grid-template-columns: repeat(2, 1fr);
  //   grid-column-gap: 30px;
  // }

  // &__contact-fieldset {
  //   margin-bottom: 10px;
  // }

  // &__submit {
  //   margin-top: 20px;
  //   text-align: center;
  // }

  // & label {
  //   margin-left: 10px;
  //   color: $colBlue;
  //   font-family: Roboto, Arial, serif;
  //   font-size: 16px;
  //   font-weight: 400;
  // }

  // &__input {

  //   &--error {

  //     & fieldset {
  //       border-color: $colRed;
  //     }
  //   }
  // }

  // &__error-message {
  //   margin-top: 5px;
  //   color: $colRed;
  // }
}

</style>
