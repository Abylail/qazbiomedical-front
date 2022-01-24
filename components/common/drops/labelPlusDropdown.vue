<template>
  <div class="label-plus-dropdown" :class="{'label-plus-dropdown--open': isOpen}">
    <div class="label-plus-dropdown__head">
      <h3 class="label-plus-dropdown__title">{{ title }}</h3>
      <div class="label-plus-dropdown__open-tool" @click="openToggle()">
        <span v-if="isOpen"><div class="minus"/></span>
        <span v-else><div class="plus"/></span>
      </div>
    </div>

    <Slide>
      <div class="label-plus-dropdown__content" v-if="isOpen">
        <slot/>
        <div class="label-plus-dropdown__send-request" v-if="sendRequest">
          <base-button type="mini" @click="sendRequestHandle()">Отправить заявку</base-button>
        </div>
      </div>
    </Slide>

  </div>
</template>

<script>
import Slide from "@/components/transitions/Slide";
export default {
  name: "labelPlusDropdown",
  components: {Slide},
  props: {
    title: {
      type: String,
      required: true
    },
    sendRequest: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isOpen: false,
  }),
  methods: {
    sendRequestHandle() {
      this.$emit("onSend");
    },
    openToggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="scss" scoped>
.label-plus-dropdown {
  transition: $transition;
  border-bottom: 1px solid $color__grey;
  padding: 8px 10px;
  margin-top: 12px;

  &--open {
    padding: 16px 10px;
    background: $color__light-grey;
    border-bottom: none;
    border-radius: $border_radius;
  }

  &__head {
    display: grid;
    grid-template-columns: 1fr 15px;
    column-gap: 10px;
  }

  &__content {
    padding: 16px 10px 0;
  }

  &__title {
    font-size: $fs__text;
    color: $color__font_primary;
  }

  &__open-tool {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  &__send-request {
    margin-top: 24px;
    border-top: 1px solid $color__grey;
    padding-top: 24px;
    padding-bottom: 8px;
  }

}

.plus {
  --b:2px; /* the thickness */
  width:15px; /* the size */
  aspect-ratio:1/1;
  //border:10px solid #000; /* the outer space */
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#fff 90deg,#000 0)
    calc(100% + var(--b)/2) calc(100% + var(--b)/2)/
    calc(50%  + var(--b))   calc(50%  + var(--b));
  display:inline-block;
}

.minus {
  --b:1px; /* the thickness */
  width:15px; /* the size */
  aspect-ratio:1/1;
  &:before {
    display: block;
    border: var(--b) solid #000;
    content: "";
  }
}

</style>
