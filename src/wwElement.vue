<template>
  <div class="ww-number">
    <wwElement v-bind="content.numberElement" :wwProps="{ text: value }" />
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      datas: null,
    };
  },
  computed: {
    value() {
      const value = this.content.value;
      const locale = this.content.locale;

      const options = {
        style: this.content.style,
        currency: this.content.currency,
        currencyDisplay: this.content.currencyDisplay,
        notation: this.content.notation,
        signDisplay: this.content.signDisplay,
        unit: this.content.unit,
        unitDisplay: this.content.unitDisplay,
        minimumIntegerDigits: this.content.minimumIntegerDigits,
        minimumFractionDigits: this.content.minimumFractionDigits,
        maximumFractionDigits: this.content.maximumFractionDigits,
        minimumSignificantDigits: this.content.minimumSignificantDigits,
        maximumSignificantDigits: this.content.maximumSignificantDigits,
      };

      return new Intl.NumberFormat(locale, options).format(value);
    },
  },
};
</script>
