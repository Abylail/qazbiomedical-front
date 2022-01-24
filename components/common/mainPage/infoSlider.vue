<template>
  <div class="layout-wrapper">
    <div class="info-slider">

      <div class="info-slider__image">
        <div class="info-slider__wallpaper"></div>
        <img :src="require('@/assets/images/microscope.png')" alt="microscope"/>
      </div>

      <div class="info-slider__slider-wrapper">
        <div class="info-slider__title">О компании</div>
        <div class="info-slider__slider">
        <client-only>
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(text, i) in slides" :key="i">
              <div class="info-slider__slide">{{ text }}</div>
            </swiper-slide>
            <div class="info-slider__pagination" slot="pagination"></div>
          </swiper>
        </client-only>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import 'swiper/css/swiper.css';

export default {
  name: "infoSlider",
  components: {
    Swiper,
    SwiperSlide
  },
  data: () => ({
    slides: [
      "ТОО «Qaz Bio Medical» оказывает качественные метрологические и консалтинговые услуги в области технического регулирования, обеспечения единства измерений и стандартизации.",
      "Главной целью ТОО «Qaz Bio Medical» является обеспечение высокого качества предоставляемых услуг в области метрологии, завоевание доверия к измерительной системе, развитие научной метрологии и создание эффективной метрологической системы.",
      "В структуре компании имеется высокотехнологическая современная лаборатория аккредитованная Национальным центром аккредитации Республики Казахстан по поверке медицинского оборудования импортного и отечественного производства.",
      "На сегодняшний день наша компания расширяет свою деятельность в области поставок и сервисного обслуживания медицинского оборудования и многие другие направления.",
    ],

    swiperOption: {
      notNextTick: false,
      loop: true,
      initialSlide: 0,
      autoplay: {
        delay: 4000,
        disableOnInteraction: true
      },
      speed: 1000,
      grabCursor: true,
      pagination: {
        el: ".info-slider__pagination",
        clickable: true,
        type: "bullets"
      }
    },
  }),
}
</script>

<style lang="scss" scoped>
.info-slider {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "image slider";

  @media(max-width: $bp__mobile) {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: $fs__title;
    font-weight: 600;
  }

  &__image {
    grid-area: image;
    position: relative;

    img {
      position: absolute;
      height: 700px;
      width: 450px;
      z-index: 1;
      @media(max-width: $bp__mobile) {
        position: relative;
        width: 100%;
        height: 500px;
      }
    }
  }

  &__wallpaper {
    position: absolute;
    height: 600px;
    width: 350px;
    background: $color__primary;
    @media(max-width: $bp__mobile) {
      width: 80%;
      height: 400px;
    }
  }

  &__slider-wrapper {
    grid-area: slider;
    overflow: auto;
    padding-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media(max-width: $bp__mobile) {
      padding-top: 20px;
    }
  }

  &__slider {
    margin-top: 40px;
    overflow: auto;
  }

  &__slide {
    height: 300px;
    font-size: $fs__text;

    @media (max-width: $bp__mobile) {
      height: auto;
      padding-bottom: 20px;
    }
    &.swiper {
      overflow: hidden;
    }
  }

  &__pagination {
    //margin-top: 50px;

    ::v-deep {
      .swiper-pagination-bullet {
        background: $color__font_secondary;
        margin: 0 8px;
        &-active {
          background: $color__primary;
        }
      }
    }
  }

}
</style>
