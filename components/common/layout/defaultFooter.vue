<template>
  <footer class="default-footer">
    <div class="layout-wrapper">

      <div class="default-footer__logo">
        <a>
          <base-icon>full-logo</base-icon>
        </a>
      </div>

      <div class="default-footer__contacts">

        <a class="default-footer__contact" href="tel:+77172953326">
          <img :src="require('@/assets/icons/phone.svg')" alt="phone"/>
          +7 7172 95 33 26
        </a>

        <a class="default-footer__contact" href="https://wa.me/+77000953326">
          <img :src="require('@/assets/icons/whatsapp.svg')" alt="phone"/>
          +7 700 095 33 26
        </a>

        <a class="default-footer__contact" href="mailto:qazbiomedical@mail.ru">
          <img :src="require('@/assets/icons/email.svg')" alt="email"/>
          qazbiomedical@mail.ru
        </a>

        <div class="default-footer__contact default-footer__icons">
          Мы в соц.cетях:
          <a class="ml-10" href="https://www.instagram.com/qazbiomedical">
            <img :src="require('@/assets/icons/instagram.svg')" alt="instagram"/>
          </a>
          <a><img :src="require('@/assets/icons/facebook.svg')" alt="facebook"/></a>
        </div>

      </div>

      <div class="default-footer__copyright">
        {{ currentYear }} © ТОО "QazBioMedical"
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "defaultFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
.default-footer {
  background: $color__primary;
  padding-top: 20px;

  &__contacts {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: $bp__mobile) {
      flex-direction: column;
    }
  }

  &__contact {
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    font-size: $fs__default;
    margin-right: 30px;
    text-decoration: none;
    img { margin-right: 10px }
    @media (max-width: $bp__mobile) {
      margin-bottom: 15px;
    }
  }

  &__logo {
    color: white;
    font-size: $fs__title;
    text-align: center;
    margin: 30px;
  }

  &__copyright {
    border-top: 1px solid rgba(255, 255, 255, .2);
    padding-top: 15px;
    padding-bottom: 25px;
    text-align: center;
    color: white;
    font-size: 12px;
    margin-top: 30px;
  }
}
</style>
