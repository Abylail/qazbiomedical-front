<template>
  <div class="price-request" lazy-background="../../../assets/images/priceRequestBackground.png">
    <div class="price-request__wrapper">
      <p class="price-request__title">Узнать стоимость</p>
      <p class="price-request__description">Гарантированно справедливые цены</p>

      <input
        class="price-request__input mt-30"
        placeholder="ФИО"
        v-model="sendForm.name"
      />

      <div class="price-request__row mt-24">
        <input
          class="price-request__input price-request__row__left"
          placeholder="Email"
          v-maska="'XXX!@'"
          v-model="sendForm.email"
        />
        <input
          class="price-request__input price-request__row__right"
          placeholder="+7 (###) ###-##-##"
          v-maska="'+7 (###) ###-##-##'"
          v-model="sendForm.phone"
        />
      </div>

      <textarea
        class="price-request__textarea mt-24"
        placeholder="Комментарий"
        v-model="sendForm.comment"
      />

      <div class="price-request__button-wrapper">
      <base-button
        class="mt-24"
        @click="send"
      >Отправить</base-button>
      </div>

    </div>
  </div>
</template>

<script>
import { maska } from 'maska'

export default {
  name: "priceRequest",
  directives: { maska },
  data: () => ({
    sendForm: {
      name: null,
      email: null,
      phone: null,
      comment: null,
    }
  }),
  methods: {
    send() {
      this.$mail.send({
        form: "qazbm.kz",
        subject: 'Заявка с сайта',
        text: 'This is an incredible test message',
      });
      this.clear();
    },
    clear() {
      Object.keys(this.sendForm).forEach(key => {
        this.sendForm[key] = null;
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.price-request {
  padding: 100px 0;
  //background: url("../../../assets/images/priceRequestBackground.png");
  color: white;

  &__wrapper {
    width: 95%;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  &__title {
    text-align: center;
    font-size: $fs__title;
  }

  &__description {
    margin-top: 20px;
    font-size: $fs__text;
    text-align: center;
  }

  &__row {
    display: flex;
    justify-content: space-between;

    &__left {
      margin-right: 12px;
    }

    &__right {
      margin-left: 12px;
    }

    @media (max-width: $bp__mobile) {
      flex-direction: column;
      &__left {
        margin-right: 0;
      }
      &__right {
        margin-left: 0;
        margin-top: 24px;
      }
    }
  }

  &__input {
    border: 1px solid white;
    height: 40px;
    border-radius: $border-radius--mini;
    background: none;
    color: white;
    font-size: $fs__text;
    padding: 0 16px;
    width: -webkit-fill-available;
    &::placeholder { color: #cccccc }
  }

  &__textarea {
    border: 1px solid white;
    height: 235px;
    border-radius: $border-radius--mini;
    background: none;
    color: white;
    font-size: $fs__text;
    line-height: 38px;
    padding: 0 16px;
    width: -webkit-fill-available;
    &::placeholder { color: #cccccc }
  }

  &__button-wrapper {
    display: flex;
    justify-content: center;
  }

}
</style>
