<template>
  <img
    class="base-icon"
    :class="[
      size ? `base-icon__size-${size}` : null,
    ]"
    :src="require(`@/assets/${repo}/${$slots.default[0].text}.${extension}`)"
  >
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    repo: {
      type: String,
      default: "icons"
    },
    extension: {
      type: String,
      default: "svg"
    },
    size: {
      type: String,
      default: ""
    }
  },
  mounted() {
    console.log(this.$slots.default[0].text);
  }
}
</script>

<style lang="scss" scoped>
.base-icon {

  &__size {
    @for $size from 0 through 100 {
      &-#{$size} {
        height: $size + px;
        width: $size + px;
      }
    }
  }

}
</style>
