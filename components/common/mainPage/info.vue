<template>
  <div class="info">
    <div class="layout-wrapper">

      <!-- FIRST -->
      <div class="info__first">
        <div class="info__first__text">
          <div class="info__first__text__wrapper">
            <h1 class="title">Реестр средств измерений для лаборатории</h1>
            <p class="description-grey mt-15">В легком доступе для пользователей средств измерений</p>
            <base-button class="mt-30" type="more">Узнать подробнее</base-button>
          </div>
        </div>
        <div class="info__first__picture"/>
      </div>
    </div>


    <!-- SECOND -->
    <div class="info__second">
      <info-slider/>
    </div>
  </div>
</template>

<script>
import InfoSlider from "./infoSlider";
export default {
  name: "info",
  components: {InfoSlider}
}
</script>

<style lang="scss" scoped>
.info {

  &__first {
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: $bp__mobile) {
      grid-template-columns: 2fr 1fr;
    }

    &__text {
      display: flex;
      align-items: center;

      &__wrapper {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 530px;
      }
    }

    &__picture {
      background: url("~assets/images/info-first.png");
      background-size: cover;
    }

  }

  &__second {
    background: $color__light-grey;
    margin-top: -100px;
    padding: 200px 0;


    @media(max-width: $bp__mobile) {
      padding-bottom: 100px;
    }
  }

}
</style>
