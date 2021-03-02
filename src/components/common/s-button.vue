<template lang="pug">
  button(
    :class="`s-button--${modifier}`"
    @click="linkClicked()"
  ).s-button
    slot(name="text")

</template>

<script>

export default {
  name: 'sButton',
  props: {
    modifier: {
      type: String,
      default() {
        return 'large';
      },
    },
    link: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    linkClicked() {
      if (this.link) {
        this.$router.push(this.link);
      }
    },
  },
};

</script>

<style lang="scss" scoped>

.s-button {
  border: 1px solid $colRed;
  border-radius: 4px;
  font-family: Roboto, Arial, serif;
  font-size: 1rem;
  font-weight: 400;
  color: $colWhite;
  text-decoration: none;
  background-color: $colRed;
  text-decoration: none;
  transition: $animButtons;
  cursor: pointer;

  &,
  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid $colGray;
    color: $colRed;
    background-color: $colWhite;
  }

  // &[type=submit] {
  //   color: $colWhite;

  //   &:hover {
  //     border: 1px solid $colGray;
  //     color: $colRed;
  //     background-color: $colWhite;
  //   }
  // }

  &--large {
    padding: 15px 30px;
    text-transform: uppercase;
  }

  &--mini {
    padding: 10px 25px;
  }
}

@media screen and (min-width: $tablet) {

  .s-button {

    &--large {
      padding: 20px 50px;
    }
  }
}

</style>
