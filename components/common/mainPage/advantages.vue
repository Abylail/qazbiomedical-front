<template>
  <div class="advantages">
    <div class="layout-wrapper">
      <h3 class="advantages__title title">Наши преимущества</h3>

      <div class="advantages__card" v-for="(card, i) in cards" :key="i">
        <div class="advantages__card__image">
          <img :src="require('@/assets/icons/tag.svg')" alt="tag"/>
        </div>
        <div>
          <div class="advantages__card__title">{{ card.label }}</div>
          <div class="advantages__card__description">{{ card.description }}</div>
        </div>
      </div>

      <div class="advantages__advantage-grid">
        <div class="advantages__advantage-item" v-for="advantage in advantageList">
          <img :src="require(`@/assets/icons/${advantage.imgName}`)" alt="advantage"/>
          <label>{{ advantage.label }}</label>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "advantages",
  data: () => ({
    cards: [
      {
        label: "Аккредитована на соответствие требованиям ГОСТ ISO/IEC 17025-2019",
        description: "Соответствие всем требованиям, предъявляемых к метрологической службе, подкрепленные аттестатом на право поверки медицинской техники.",
      },
      {
        label: "Большой опыт участия в Государственных закупках",
        description: "Большой опыт работы как с корпоративными заказчиками, так и с государственными учреждениями."
      },
      {
        label: "Собственная метрологическая служба",
        description: "Наличие собственной лаборатории, позволяет осуществлять в кратчайшие сроки метрологическое обслуживание широчайшего спектра медицинского оборудования не прибегая к услугам сторонних организаций."
      }
    ],

    advantageList: [
      { label: "АВТОМАТИЧЕСКАЯ РЕГИСТРАЦИЯ СИ ЗАЯВИТЕЛЯ В БАЗЕ QBM", imgName: "registration.svg" },
      { label: "ВОЗМОЖНОСТЬ ВЫЕЗДА НА ОБЪЕКТ", imgName: "location.svg" },
      { label: "ВЫСОКИЙ ПРОФЕССИОНАЛИЗМ", imgName: "pro.svg" },
      { label: "ОПЕРАТИВНОСТЬ", imgName: "speed.svg" },
    ]
  })
}
</script>

<style lang="scss" scoped>
.advantages {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 75px 0 150px;
  background: $color__light-grey;
  @media (max-width: $bp__mobile) {
    padding: 50px 0 100px;
  }

  &__title {
    text-align: center;
  }

  &__card {
    display: grid;
    grid-template-columns: 65px 1fr;
    border-radius: $border-radius;
    background: white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    margin-top: 45px;
    padding: 15px;
    min-height: 90px;

    &__image {
      //display: flex;
      //justify-content: center;
      img { width: 50px }
    }

    &__title {
      margin-top: 5px;
      color: $color__font_primary;
      font-size: $fs__text;
    }

    &__description {
      margin-top: 12px;
      color: $color__font_secondary;
      font-size: $fs__default;
    }
  }

  &__advantage-grid {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width: $bp__mobile) {
      grid-template-columns: 1fr;
    }
  }

  &__advantage-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    max-width: 450px;
    line-height: 40px;
    font-size: $fs__text;
    img {
      margin-right: 30px;
      width: 70px;
    }

    @media(max-width: $bp__mobile) {
      max-width: none;
      line-height: 22px;
    }
  }

}
</style>
