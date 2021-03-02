<template lang="pug">
  .s-contact-slide
    .s-contact-slide__container
      .s-contact-slide__row
        .s-contact-slide__col.s-contact-slide__col--contact
          .s-contact-slide__config-block
            h3.s-contact-slide__headline.
              Укажите исходные данные, и мы подберем для вас подходящее решение
            sButton(
              :link="{ name: 'ConfigPage' }"
            )
              template(v-slot:text) Подобрать
          .s-contact-slide__contact-block
            h3.s-contact-slide__headline.
              Либо свяжитесь с нами любым удобным способом:
            .s-contact-slide__contact-row
              .s-contact-slide__contact-col
                .s-contact-slide__contact
                  img(
                    class="s-contact-slide__contact-icon"
                    src="@/assets/img/svg/icon-tel.svg"
                    alt="phone"
                  )
                  p.s-contact-slide__contact-text +38 (068) 527 83 60
                .s-contact-slide__contact
                  img(
                    class="s-contact-slide__contact-icon"
                    src="@/assets/img/svg/icon-viber.svg"
                    alt="viber"
                  )
                  p.s-contact-slide__contact-text +38 (068) 527 83 60
                .s-contact-slide__contact
                  img(
                    class="s-contact-slide__contact-icon"
                    src="@/assets/img/svg/icon-whatsapp.svg"
                    alt="whatsapp"
                  )
                  p.s-contact-slide__contact-text +38 (068) 527 83 60
                .s-contact-slide__contact
                  img(
                    class="s-contact-slide__contact-icon"
                    src="@/assets/img/svg/icon-telegram.svg"
                    alt="telegram"
                  )
                  p.s-contact-slide__contact-text +38 (068) 527 83 60
              .s-contact-slide__contact-col
                .s-contact-slide__contact
                  img(
                    class="s-contact-slide__contact-icon"
                    src="@/assets/img/svg/icon-facebook.svg"
                    alt="facebook"
                  )
                  p.s-contact-slide__contact-text facebook.com/voltaservis
                .s-contact-slide__contact
                  img(
                    class="s-contact-slide__contact-icon"
                    src="@/assets/img/svg/icon-instagram.svg"
                    alt="instagram"
                  )
                  p.s-contact-slide__contact-text voltaservice
                .s-contact-slide__contact
                  img(
                    class="s-contact-slide__contact-icon"
                    src="@/assets/img/svg/icon-skype.svg"
                    alt="skype"
                  )
                  p.s-contact-slide__contact-text voltaservice
                .s-contact-slide__contact
                  img(
                    class="s-contact-slide__contact-icon"
                    src="@/assets/img/svg/icon-telegram.svg"
                    alt="telegram"
                  )
                  p.s-contact-slide__contact-text @voltaservice
                .s-contact-slide__contact
                  img(
                    class="s-contact-slide__contact-icon"
                    src="@/assets/img/svg/icon-gmail.svg"
                    alt="email"
                  )
                  p.s-contact-slide__contact-text info@voltaservice.com
        .s-contact-slide__col.s-contact-slide__col--form
          h3.s-contact-slide__headline.
            Оставьте свой номер телефона, и наши консультанты свяжутся с вами
          form(@submit.prevent="submit").s-contact-slide__form
            fieldset.s-contact-slide__fieldset
              label.s-contact-slide__label Имя:
              .s-contact-slide__input-wrapper
                input(
                  class="s-contact-slide__input"
                  :class="{\
                    's-contact-slide__input--error':\
                      (submitStatus !== null) &&\
                      (submitStatus !== 'sent') &&\
                      $v.fields.name.$error\
                  }"
                  v-model.trim="$v.fields.name.$model"
                  type="text"
                  placeholder="Имя"
                )
              label.s-contact-slide__label Телефон:
              .s-contact-slide__input-wrapper
                the-mask(
                  :class="{\
                    's-contact-slide__input--error':\
                    (submitStatus !== null) &&\
                    (submitStatus !== 'sent') &&\
                    $v.fields.tel.$error\
                  }"
                  v-model.trim="$v.fields.tel.$model"
                  type="tel"
                  mask="+38 ( ### ) ### ## ##"
                  :masked="false"
                  placeholder="+38 ( - - - ) - -  - -  - -"
                  @focus.native="fields.tel ? null : fields.tel = '+38 ('"
                  @keyup.native="fields.tel.length === 21 ? isPhoneFilled = true : null"
                ).s-contact-slide__input
                template(v-if="submitStatus !== null && submitStatus !== 'sent'")
                  p.s-contact-slide__error-message(
                    v-if="!$v.fields.tel.required"
                  ) Обязательное поле
                  p.s-contact-slide__error-message(
                    v-if="\
                      !$v.fields.tel.numeric ||\
                      !$v.fields.tel.minLength ||\
                      !$v.fields.tel.maxLength\
                    "
                  ) Укажите верный номер
              label(for="region").s-contact-slide__label Дополнтельная информация:
              .s-contact-slide__input-wrapper
                textarea(
                  v-model.trim="$v.fields.additional.$model"
                  type="tel"
                  placeholder="Ваши вопросы"
                  rows="2"
                ).s-contact-slide__input
            sButton(
              :disabled="submitStatus !== null && submitStatus !== 'error'"
              type="submit"
              class="s-contact-slide__form-button"
            )
              template(v-slot:text).
                {{ submitStatus === 'sent' ? 'Заявка отправлена' : 'Перезвоните мне' }}

</template>

<script>

import sButton from '@/components/common/s-button.vue';
import { DateTime } from 'luxon';
import {
  required,
  numeric,
  minLength,
  maxLength,
} from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
  name: 'sContactSlide',
  components: {
    sButton,
  },
  data() {
    return {
      fields: {
        name: '',
        tel: null,
        additional: '',
      },
      submitStatus: null,
      isPhoneFilled: false,
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
      additional: {},
    },
  },
  methods: {
    ...mapActions([
      'SEND_CONTACT_REQUEST',
    ]),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = 'error';
      } else {
        let request = {};
        const id = this.currentDate();

        request = Object.assign(request, this.fields);
        request.id = id;

        this.SEND_CONTACT_REQUEST(request);

        this.submitStatus = 'pending';
        setTimeout(() => {
          this.submitStatus = 'sent';
          this.resetFields();
          // this.$v.$reset;
          console.log(request);
        }, 500);
      }
    },
    resetFields() {
      this.fields.name = null;
      this.fields.tel = null;
      this.fields.region = 'Днепропетровская';
    },
    currentDate() {
      return DateTime.local().toString();
    },
  },
};

</script>

<style lang="scss" scoped>

.s-contact-slide {
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
    background: $headerGradient;
    transform: matrix(1, 0, 0, -1, 0, 0);
    opacity: 0.8;
  }

  &__container {
    @include root-container;
    @include home-slide-container;
    position: relative;
    z-index: 3;
  }

  &__row {
    @include flex-row($cg: 80px);
    flex-wrap: wrap;
    height: 100%;
  }

  &__col {
    @include flex-col-equal(1);
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    &--contact {
      order: 1;
    }

    &--form {
      order: 0;
    }
  }

  &__headline {
    margin-bottom: 20px;
    text-align: center;
    color: $colWhite;
  }

  &__config-block,
  &__contact-block {
    margin-top: 30px;
    text-align: center;
  }

  &__contact-row {
    @include flex-row($cg: 10px);
    flex-wrap: wrap;
  }

  &__contact-col {
    @include flex-col-equal(2, 10px);
  }

  &__contact {
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
  }

  &__contact-icon {
    width: 30px;
  }

  &__contact-text {
    margin-left: 10px;
    color: $colWhite;
  }

  &__form {
    width: 100%;
  }

  &__fieldset {
    margin-bottom: 10px;
  }

  &__label {
    display: block;
    margin-bottom: 10px;
    font-family: Roboto, Arial, serif;
    color: $colWhite;
  }

  &__input-wrapper {
    @include form-input-wrapper;
  }

  &__input {
    @include form-input(100%, $bw: 0, $mb: 0);

    &--error {

      & fieldset {
        border-color: $colRed;
      }
    }
  }

  &__error-message {
    @include form-error-message;
  }

  &__form-button {
    width: 100%;
  }
}

@media screen and (min-width: $phone) {

  .s-contact-slide {

    &__contact {
    }
  }
}

@media screen and (min-width: $tablet) {

  .s-contact-slide {

    &__col {
      @include flex-col-equal(2, 80px);
      align-items: flex-start;

      &--contact {
        order: 0;
      }

      &--form {
        order: 1;
      }
    }

    &__config-block,
    &__contact-block {
      margin: 0 0 50px;
      text-align: left;
    }

    &__headline {
      margin-bottom: 40px;
      text-align: left;
    }
    &__input,
    &__form-button {
      width: 350px;
    }
  }
}

// @media screen and (min-width: $tablet) {

//   .text-block {
//     margin-bottom: 35px;

//     &__headline {
//       margin-bottom: 10px;
//     }
//   }
// }

</style>
