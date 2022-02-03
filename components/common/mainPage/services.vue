<template>
  <div class="services">
    <div class="layout-wrapper">
      <h3 class="title mb-24">Услуги</h3>


      <label-plus-dropdown title="Метрологический аудит, аутсорсинг и консультационно-методические услуги" sendRequest>
        <p class="services__subtitle">Метрологический аудит осуществляются по вопросам:</p>

        <ul class="services__list mt-4">
          <li class="services__list-item">Оценки состояния измерений и компетентности лабораторий;</li>
          <li class="services__list-item">Подготовки к аккредитации;</li>
          <li class="services__list-item">Совершенствования и поддержания функционирования системы метрологического обеспечения производства;</li>
          <li class="services__list-item">При разработке СМК в рамках подготовки к сертификации.</li>
        </ul>

        <p class="services__subtitle mt-12">Консультационно-методические услуги осуществляются по вопросам:</p>

        <ul class="services__list mt-4">
          <li class="services__list-item">Внедрения калибровки средств измерений;</li>
          <li class="services__list-item">Перехода от поверки к калибровке средств измерений;</li>
          <li class="services__list-item">Совершенствования системы управления метрологического обеспечения производства.</li>
        </ul>
      </label-plus-dropdown>


      <label-plus-dropdown title="Регистрация средств измерений в реестре ГСИ РК" sendRequest>
        <p class="services__subtitle">Испытание СИ для целей утверждения типа:</p>
        <p class="services__text">
          В соответствии с СТ РК 2.21-2019 «Порядок проведения испытаний и утверждения типа средств измерений»
          Средства измерений, производимые серийно в Республике Казахстан или ввезенные на территорию Республики Казахстан партиями
          и предназначенные для применения в сфере государственного метрологического контроля, перед вводом в эксплуатацию подлежат
          испытаниям с последующим утверждением типа этих средствизмерений ст.17,п.1ЗРК «Обобеспечении единства измерений»
        </p>
        <p class="services__subtitle">Признание результатов испытаний и утверждения типа в соответствии с ПМГ 06-2001</p>
        <div class="services__countries">
          <div class="services__country" v-for="(country, i) in countries" :key="i">
            <img :src="require(`~/assets/images/${country.imgName}`)" />
            <label>{{ country.label }}</label>
          </div>
        </div>
        <div class="services__certificates">
          <div class="services__certificate" v-for="(certificate, i) in certificates" :key="i">
            <img :src="require(`~/assets/images/${certificate.imgName}`)" />
            <label>{{ certificate.label }}</label>
            <p v-if="certificate.description">{{ certificate.description }}</p>
          </div>
        </div>
      </label-plus-dropdown>


      <label-plus-dropdown title="Аттестация испытательного оборудования" sendRequest>
        <p>ТОО «Qaz Bio Medical» проводит работы по аттестации испытательного оборудования согласно СТ РК 2.75-2018 «Порядок аттестации испытательного оборудования»</p>
        <br/>
        <p>Аттестации подлежит испытательное оборудование, воспроизводящее нормированные внешние воздействующие факторы и (или) нагрузки.</p>
      </label-plus-dropdown>


      <label-plus-dropdown title="Поставка и сервисное обслуживание средств измерений" sendRequest>
        <ul class="services__list">
          <li class="services__list-item">ТОО «Qaz Bio Medical» является поставщиком научно-аналитического оборудования мирового производителя</li>
          <li class="services__list-item">Технические специалисты нашей сервисной cлужбы имеют большой опыт ремонта оборудования и ежегодно проходят стажировку в компаниях- производителях.</li>
          <li class="services__list-item">Если восстановить оборудование нельзя, то мы сможем предложить аналогичное оборудование по адекватным ценам.</li>
        </ul>
      </label-plus-dropdown>


      <label-plus-dropdown title="Поверка средств измерений и медицинского оборудования">
        <div class="services__check-list">
          <div class="services__check-item__wrapper" v-for="(checkItem, i) in checkList" :key="i" :style="`background: center / cover no-repeat url(${checkItem.image})`">
          <div class="services__check-item">
            <label>{{ checkItem.label }}</label>
            <p>{{ checkItem.description }}</p>
            <base-button type="more" @click="showDetails(checkItem)">Узнать подробнее</base-button>
          </div>
          </div>
        </div>
      </label-plus-dropdown>

      <!-- MODAL -->
      <check-details-modal ref="details"/>

    </div>
  </div>
</template>

<script>
import checkList from "@/config/checkList";

import LabelPlusDropdown from "../drops/labelPlusDropdown";
import CheckDetailsModal from "../modals/checkDetailsModal";

export default {
  name: "services",
  components: {CheckDetailsModal, LabelPlusDropdown},
  data: () => ({
    countries: [
      { label: "Казахстан", imgName: "kz-flag.png" },
      { label: "Армения", imgName: "arm-flag.png" },
      { label: "Беларусь", imgName: "bel-flag.png" },
      { label: "Россия", imgName: "ru-flag.png" },
      { label: "Кыргызстан", imgName: "kr-flag.png" },
    ],

    certificates: [
      {
        label: "Партия СИ",
        description: "",
        imgName: "default.png"
      },
      {
        label: "Сертификат об утверждении типа СИ",
        description: "(выдается сроком на на 5 лет)",
        imgName: "default.png"
      },
      {
        label: "Сертификат о признании Утверждения Типа",
        description: "выдается на срок действия сертификата страны -заявителя)",
        imgName: "default.png"
      },
    ],

    checkList,

  }),
  methods: {
    showDetails(item) {
      this.$refs.details.show(item);
    }
  }
}
</script>

<style lang="scss" scoped>
.services {
  padding: 40px 0 60px;

  &__subtitle {
    font-size: $fs__default;
    color: $color__font_primary;
    padding: 5px 0;
  }

  &__text {
    font-size: $fs__default;
    color: $color__font_secondary;
  }

  &__list {
    padding-left: 10px;
    margin: 0;
  }

  &__list-item {
    font-size: $fs__default;
    color: $color__font_secondary;
    &:not(:first-child) { margin-top: 5px }
  }

  &__countries {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
  }

  &__country {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 24px;
    padding: 10px 0;

    img {
      height: 50px;
      width: 100px;
    }

    label {
      margin-top: 10px;
      text-align: center;
      font-size: $fs__default;
    }
  }

  &__certificates {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 12px;
  }

  &__certificate {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 312px;
    padding: 10px 0;

    img {
      width: 100%;
    }

    label {
      margin-top: 16px;
      font-size: $fs__default;
      word-break: break-word;
      text-align: center;
    }

    p {
      color: $color__font_secondary;
      font-size: $fs__default;
      word-break: break-word;
      text-align: center;
    }
  }

  &__check-list {
    display: flex;
    //justify-content: space-between;
    flex-wrap: wrap;
  }

  &__check-item {
    $padding: 10px;
    height: calc(100% - 2*$padding);
    width: calc(100% - 2*$padding);
    padding: $padding;
    background: rgba(255, 255, 255, .5);
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    background-size: cover;

    &__wrapper {
      margin-right: 12px;
      margin-top: 12px;
      width: 270px;
      height: 260px;

      @media(max-width: $bp__mobile) {
        width: 100%;
        height: 150px;
      }
    }

    label {
      font-size: $fs__text;
      color: $color__font_primary;
      word-break: break-word;
    }

    p {
      font-size: $fs__default;
      margin: 12px 0;
      color: $color__font_secondary;
    }

  }

}
</style>
