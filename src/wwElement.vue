<template>
  <!-- <wwElement v-bind="content.numberElement" :wwProps="{ text: value }" /> -->
  {{ value }}
</template>

<script>
import locales from "./locales";
import currencies from "./currencies";

export default {
  props: {
    content: { type: Object, required: true },
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
  methods: {
    initLocales() {
      let wwLocalesList = [];

      for (let locale of Object.keys(locales)) {
        const value = locale.replaceAll("_", "-");
        wwLocalesList.push({
          value,
          label: `${locales[locale]} (${value})`,
        });
      }

      if (!_.isEqual(window.wwLocalesList, wwLocalesList)) {
        window.wwLocalesList = wwLocalesList;
      }
    },
    initCurencies() {
      let wwCurrenciesList = [];

      for (let currency of currencies) {
        if (wwCurrenciesList.some((curr) => curr.label === currency.name))
          continue;

        wwCurrenciesList.push({
          value: currency.code,
          label: currency.name,
        });
      }

      if (!_.isEqual(window.wwCurrenciesList, wwCurrenciesList)) {
        window.wwCurrenciesList = wwCurrenciesList;
      }
    },
  },
  mounted() {
    this.initLocales();
    this.initCurencies();
  },
};
</script>
