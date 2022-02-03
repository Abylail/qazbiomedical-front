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
    partners,
    doScroll: true,
  }),
  methods: {
    startScroll() {
      const sliderWidth = this.$refs.slider.clientWidth / 2;
      if (window.innerWidth < sliderWidth) this.$refs.slider.style.setProperty('--slider-width', `-${sliderWidth}px`);
      else this.doScroll = false;
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
    display: table;
    padding: 30px 0;
    position: relative;
    --slider-width: 0;
    animation: scroll 20s linear infinite;
    margin: 0 auto;
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
@keyframes scroll {
  from {
    left: 0;
  }
  100% {
    left: var(--slider-width);
  }
}
</style>
