<template>
  <header>
    <div class="default-header">
    <div class="default-header__wrapper layout-wrapper">

      <!-- LEFT (LOGO) -->
      <div class="default-header__side">
        <a class="default-header__logo">
          <base-icon>full-logo</base-icon>
        </a>
      </div>

      <!-- RIGHT -->
      <div class="default-header__side">

        <div class="default-header__navigator">
          <button
            v-for="item in menu"
            class="default-header__navigator-item"
            :class="{active: activeMenu === item.id}"
            @click="go(item.id, item)"
          >{{ item.title }}</button>
        </div>

        <base-button class="default-header__get-price" type="primary-reverse" @click="go('priceRequest')">Узнать стоимость</base-button>

        <base-button class="default-header__navigator-mobile-toggle" type="empty" @click="mobileMenuToggle()">
          <div class="hamburger" :class="{active: mobileMenuOpen}"><span/><span/><span/></div>
        </base-button>

      </div>
    </div>
    </div>

    <Slide>
      <div class="default-header__navigator-mobile" v-show="mobileMenuOpen">
        <button
          v-for="item in menu"
          class="default-header__navigator-item-mobile"
          :class="{active: activeMenu === item.id}"
          @click="go(item.id, item)"
        >{{ item.title }}</button>
      </div>
    </Slide>

    <Fade>
      <div
        class="default-header__all-window"
        v-show="mobileMenuOpen"
        @click.self="mobileMenuToggle(false)"
      />
    </Fade>

  </header>
</template>

<script>
import Slide from "@/components/transitions/Slide";
import Fade from "@/components/transitions/Fade";

export default {
  name: "defaultHeader",
  components: {Fade, Slide},
  data: () => ({
    activeMenu: null,
    lastPosition: 0,
    MIN_CHANGE: 30,
    menu: {
      "info": {
        title: "О компании",
        id: "info",
        offsetTop: 0,
        type: "anchor"
      },
      "services": {
        title: "Услуги",
        id: "services",
        offsetTop: null,
        type: "anchor"
      },
      "contacts": {
        title: "Контакты",
        id: "contacts",
        bottom: true,
        type: "anchor"
      },
    },
    mobileMenuOpen: false,
  }),
  methods: {
    mobileMenuToggle(val) {
      this.mobileMenuOpen = (typeof val === "undefined") ? !this.mobileMenuOpen : val;
      document.getElementsByTagName("body")[0].style.overflowY = this.mobileMenuOpen ? "hidden" : null;
    },
    go(anchor, options) {
      this.mobileMenuToggle(false);
      if (options && options.bottom) {
        window.scrollTo(0, document.body.offsetHeight);
        return;
      }
      const header = 80;
      const offsetTop = document.getElementById(anchor)?.offsetTop || 0;
      window.scrollTo(0, offsetTop - header);
    },
    onScroll() {
      const difference = this.lastPosition - window.scrollY;
      if (difference > this.MIN_CHANGE || difference < -this.MIN_CHANGE) {
       this.lastPosition = window.scrollY;

       this.$nextTick(() => {
         this.activeMenu = this.activeMenuController(this.lastPosition);
       });
      }
    },
    activeMenuController(scrollY) {
      let activeNext = null;
      Object.keys(this.menu).forEach(key => {
        if (scrollY >= this.menu[key].offsetTop - 100) {
          activeNext = key;
        }
        else {
          return activeNext;
        }
      });
      return activeNext;
    },
    getOffsets() {
      Object.keys(this.menu).forEach(key => {
        let item = this.menu[key] || {};
        if (typeof item.offsetTop !== "undefined") {
          item.offsetTop = document.getElementById(item.id)?.offsetTop - 160 || 0;
        }
        else if (item.bottom) {
          item.offsetTop = document.body.offsetHeight - window.innerHeight - 160;
        }
        this.menu[key] = item;
      })
    },
  },
  mounted() {
    this.getOffsets();
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
}
</script>

<style lang="scss" scoped>
$shadowHeight: 10px;
$headerHeight: 50px;
$headerPadding: 25px; // vertical

#shadow {
  &::before {
    z-index: $headerIndex - 1;
    content: "";
    display: block;
    height: $shadowHeight;
    width: 100%;
    position: fixed;
    top: $headerHeight + 2*$headerPadding;
    background: linear-gradient(180deg,
      rgba(0, 0, 0, .4) 0%,
      rgba(0, 0, 0, .15) 50%,
      //transparent 80%,
      transparent 100%
    );
  }
}

header {
  position: sticky;
  top: -$shadowHeight;
  z-index: $headerIndex - 2;
  @extend #shadow;
}
.default-header {
  position: relative;
  padding: $headerPadding + 2*$shadowHeight 0 $headerPadding;
  width: 100%;
  background: $color__primary;
  top: -$shadowHeight;
  z-index: $headerIndex;
  //box-shadow: 0px 8px 10px 0px rgba(34, 60, 80, 0.2);

  &__wrapper {
    height: $headerHeight;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__side {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__logo {
    color: $color__primary;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__get-price {
    @media (max-width: $bp__mobile) {
      display: none !important;
    }
  }

  &__navigator {
    margin-right: 30px;
    @media(max-width: $bp__mobile) {
      display: none;
    }
  }

  &__navigator-item {
    transition: $transition;
    background: none;
    border: none;
    color: white;
    font-size: $fs__default;
    cursor: pointer;
    &:not(:first-child) { margin-left: 20px }

    &.active {
      border-bottom: 2px solid white;
      padding: 10px 0;
    }
  }

  &__navigator-mobile-toggle {
    display: none !important;
    @media(max-width: $bp__mobile) {
      display: flex !important;
      margin-left: 10px;
    }
  }

  &__navigator-mobile {
    position: fixed;
    width: 100%;
    top: $headerHeight + 2*$headerPadding - $shadowHeight - 1px;
    background: $color__primary;
    z-index: $headerMobileMenuIndex;
    display: flex;
    flex-direction: column;
  }

  &__navigator-item-mobile {
    background: none;
    border: none;
    padding: 10px;
    font-size: $fs__text;
    color: #fff;
    text-underline-offset: 5px;
    &.active {
      //background: #fff;
      //color: $color__font_primary;
      text-decoration: underline;
    }
  }

  &__all-window {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: $headerIndex - 1;
    background: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.hamburger {
  $width: 33px;
  $weight: 4px;
  $spaceBetween: 5px;

  span {
    display: block;
    width: $width;
    height: $weight;
    &:not(:last-child) {margin-bottom: $spaceBetween;}
    position: relative;

    background: #fff;
    border-radius: 3px;

    z-index: 1;

    transform-origin: $weight 0;

    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    opacity 0.55s ease;
  }
  &.active {
    span {
      opacity: 1;
      transform: rotate(45deg) translate(0, -2px);
      background: #fff;
      &:last-child
      {
        transform: rotate(-45deg) translate(0, -1px);
        //top: $weight + $spaceBetween;
      }
      &:nth-last-child(2)
      {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }
    }
  }
}
</style>
