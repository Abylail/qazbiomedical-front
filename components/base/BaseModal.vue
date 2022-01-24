<template>
  <fade>
    <div class="base-modal" v-if="isOpen" @click.self="close">

      <div class="base-modal__window">
        <div class="base-modal__head">
          <div class="base-modal__title">{{ title }}</div>
          <div class="base-modal__close" @click="close"><img :src="require('@/assets/icons/close.svg')"/></div>
        </div>
        <div class="base-modal__body">
          <slot/>
        </div>
      </div>

    </div>
  </fade>
</template>

<script>
import Fade from "../transitions/Fade";
export default {
  name: "BaseModal",
  components: {Fade},
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    show() {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      this.isOpen = true;
      this.$emit("onOpen");
    },
    close() {
      document.getElementsByTagName("body")[0].style.overflowY = null;
      this.isOpen = false;
      this.$emit("onClose");
    }
  }
}
</script>

<style lang="scss" scoped>
.base-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__window {
    border-radius: $border-radius;
    max-width: 700px;
    width: 95%;
    max-height: 95vh;
    background: white;
    overflow: hidden;
    display: grid;
  }

  &__head {
    background: $color__primary;
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    color: white;
    font-size: $fs__text;
  }

  &__close {
    cursor: pointer;
    height: 40px;
    transition: $transition;
    img { height: 100% }
    &:hover { opacity: .85 }
  }

  &__body {
    padding: 24px;
    overflow: auto;
  }

}
</style>
