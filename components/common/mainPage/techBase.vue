<template>
  <div class="tech-base">
    <div class="layout-wrapper">

      <h3 class="title">Техническая база</h3>

      <div class="tech-base__list">

        <div class="tech-base__item" v-for="(item, i) in list" :key="i">
          <label>{{ item.label }}</label>
          <p class="mt-12">{{ item.description }}</p>
          <base-button class="mt-12" type="more">Узнать подробнее</base-button>
        </div>

      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "techBase",
  data: () => ({
    list: [
      {
        label: "Fluke Biomedical ProSim 8 Генератор сигналов пациента",
        description: "ProSim 8 может воспроизводить сигналы ЭКГ,инвазивного и неинвазивного кровяного давления, реографический сигнал, сигнал температуры и сатурации кислорода.",
      },
      {
        label: "Fluke Biomedical ProSim 8 Генератор сигналов пациента",
        description: "ProSim 8 может воспроизводить сигналы ЭКГ,инвазивного и неинвазивного кровяного давления, реографический сигнал, сигнал температуры и сатурации кислорода.",
      },
      {
        label: "Fluke Biomedical ProSim 8 Генератор сигналов пациента",
        description: "ProSim 8 может воспроизводить сигналы ЭКГ,инвазивного и неинвазивного кровяного давления, реографический сигнал, сигнал температуры и сатурации кислорода.",
      },
      {
        label: "Fluke Biomedical ProSim 8 Генератор сигналов пациента",
        description: "ProSim 8 может воспроизводить сигналы ЭКГ,инвазивного и неинвазивного кровяного давления, реографический сигнал, сигнал температуры и сатурации кислорода.",
      },
      {
        label: "Fluke Biomedical ProSim 8 Генератор сигналов пациента",
        description: "ProSim 8 может воспроизводить сигналы ЭКГ,инвазивного и неинвазивного кровяного давления, реографический сигнал, сигнал температуры и сатурации кислорода.",
      },
      {
        label: "Fluke Biomedical ProSim 8 Генератор сигналов пациента",
        description: "ProSim 8 может воспроизводить сигналы ЭКГ,инвазивного и неинвазивного кровяного давления, реографический сигнал, сигнал температуры и сатурации кислорода.",
      },
    ]
  }),
}
</script>

<style lang="scss" scoped>
.tech-base {
  padding: 100px 0;

  &__list {
    margin: 20px auto 0;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    min-height: 260px;
    width: 90%;
    max-width: 320px;
    margin-right: 20px;
    margin-top: 12px;
    padding: 16px;
    box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);

    label {
      font-size: $fs__text;
      line-height: 30px;
      color: $color__font_primary;
    }

    p {
      font-size: $fs__default;
      line-height: 26px;
      color: $color__font_secondary;
    }
  }

}
</style>
