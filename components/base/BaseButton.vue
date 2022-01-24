<template>
  <button class="base-button" :class="`base-button--${type}`" @click="$emit('click')">

    <slot>Кнопка</slot>

    <div class="base-button__arrow ml-15" v-if="showArrow"/>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type:{
      type: String,
      default: "primary", // types: primary, more, mini, empty
    }
  },
  computed: {
    showArrow() {
      return this.type === "more";
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: $fs__default;
  background: none;
  border: none;
  padding: 0;

  &:active { opacity: .6 }

  &--primary {
    background: $color__primary;
    color: white;
    border-radius: $border-radius;
    height: 40px;
    padding: 10px 20px;
  }

  &--more {
    color: $color__primary;
    //margin-right: 15px; // for arrow
    &:hover { text-decoration: underline }
  }

  &--mini {
    background: $color__primary;
    color: white;
    border-radius: $border-radius;
    padding: 10px 20px;
    font-size: 14px;
  }

  &--empty {
    background: none;
  }


  &__arrow {
    height: 6px;
    width: 6px;
    transform: rotate(-45deg);
    border-bottom: 2px solid $color__primary;
    border-right: 2px solid $color__primary;
  }
}
</style>
