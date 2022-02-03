<template>
  <div class="main-page">

    <info id="info"/>

    <partners id="partners"/>

    <services id="services"/>

    <price-request id="priceRequest"/>

    <advantages/>

<!--<tech-base/>-->

  </div>
</template>

<script>
import Info from "../components/common/mainPage/info";
import Services from "../components/common/mainPage/services";
import PriceRequest from "../components/common/mainPage/priceRequest";
import Advantages from "../components/common/mainPage/advantages";
import Partners from "../components/common/mainPage/partners";
// import TechBase from "../components/common/mainPage/techBase";
export default {
  components: {
    Partners,
    // TechBase,
    Advantages, PriceRequest, Services, Info
  }
}
</script>
<style lang="scss" scoped>
.main-page {

}
</style>
