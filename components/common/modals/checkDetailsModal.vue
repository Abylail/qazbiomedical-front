<template>
  <base-modal ref="modal" :title="details.label">
    <div class="check-details">
      <div class="check-details__content" v-html="details.content"></div>
    </div>
  </base-modal>
</template>

<script>
export default {
  name: "checkDetailsModal",
  data: () => ({
    details: {},

    isLoading: false
  }),
  methods: {
    show(details) {
      this.details = details;
      this.$refs.modal.show();
    },
    close() {
      this.details = {};
      this.$refs.modal.close();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
