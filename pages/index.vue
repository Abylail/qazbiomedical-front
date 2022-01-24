<template>
  <div class="main-page">

    <info id="info"/>

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
// import TechBase from "../components/common/mainPage/techBase";
export default {
  components: {
    // TechBase,
    Advantages, PriceRequest, Services, Info
  }
}
</script>
<style lang="scss" scoped>
.main-page {

}
</style>
