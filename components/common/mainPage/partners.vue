<template>
  <div class="partners">

    <div class="layout-wrapper">
      <h3 class="title">Партнеры</h3>
    </div>

    <div class="partners__slider-wrapper">
    <div class="partners__slider" ref="slider">
      <a class="partners__slide" v-for="(partner, i) in partners" :href="partner.url" target="_blank">
        <img :src="partner.image" :alt="partner.url"/>
      </a>
      <a class="partners__slide" v-for="(partner, i) in partners" :href="partner.url" target="_blank" v-show="doScroll" @click.stop>
        <img :src="partner.image" :alt="partner.url"/>
      </a>
    </div>
    </div>

  </div>
</template>

<script>
import partners from "@/config/partners";

export default {
  name: "partners",
  data: () => ({
    SCROLL_SECONDS: 35,
    partners,
    doScroll: true,
  }),
  methods: {
    startScroll() {
      const sliderWidth = this.$refs.slider.clientWidth / 2;
      if (window.innerWidth < sliderWidth) {
        this.$refs.slider.animate([
          {left: 0},
          {left: `-${sliderWidth}px`},
        ], {
          duration: this.SCROLL_SECONDS * 1000,
          iterations: Infinity
        })
      }
      else {
        this.doScroll = false;
      }
    }
  },
  mounted() {
    this.startScroll();
  }
}
</script>

<style lang="scss" scoped>
.partners {
  padding: 50px 0 24px;

  &__slider-wrapper {
    overflow: auto;
    pointer-events: none;
    &::-webkit-scrollbar { display: none;}
    .scrollbar-hidden {
      -ms-overflow-style: none;
      scrollbar-width: none; /* Firefox */
    }
  }

  &__slider {
    $seconds: 35s;
    --slider-width: -100000px;
    display: table;
    padding: 30px 0;
    position: relative;
  }

  &__slide {
    display: table-cell;
    height: 70px;
    pointer-events: auto;
    cursor: pointer;
    img {
      height: 100%;
      margin-right: 50px;
    }
  }

}
</style>
