<template>
  <div class="default-layout">

    <!-- HEADER -->
    <default-header/>

    <!-- MAIN PAGE -->
    <main class="default-layout__content">
      <nuxt/>
    </main>

    <!-- FOOTER -->
    <default-footer/>
  </div>
</template>

<script>
import DefaultHeader from "@/components/common/layout/defaultHeader";
import DefaultFooter from "@/components/common/layout/defaultFooter";
export default {
  name: "default",
  components: {DefaultFooter, DefaultHeader }
}
</script>

<style lang="scss" scoped>
.default-layout {

  &__content {
    padding-top: 50px;
    @media (max-width: $bp__mobile) {
      padding-top: 10px;
    }
  }

}
</style>
