<template>
  <wwText class="ww-number" :text="`${value}`"></wwText>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  emits: ["update:content:effect"],
  data() {
    return {
      datas: null,
    };
  },
  watch: {
    /* wwEditor:start */
    "wwEditorState.sidepanelContent.currency"(currency) {
      this.$emit("update:content:effect", {
        options: { ...this.content.options, currency },
      });
    },
    "wwEditorState.sidepanelContent.locale"(locale) {
      this.$emit("update:content:effect", {
        options: { ...this.content.options, locale },
      });
    },
    "wwEditorState.sidepanelContent.unit"(unit) {
      this.$emit("update:content:effect", {
        options: { ...this.content.options, unit },
      });
    },
    /* wwEditor:end */
  },
  computed: {
    value() {
      const value = this.content.value;
      const options = {
        style: this.content.style,
        currency: this.content.options.currency,
        currencyDisplay: this.content.currencyDisplay,
        notation: this.content.notation,
        unit: this.content.options.unit,
        unitDisplay: this.content.unitDisplay,
        minimumIntegerDigits: this.content.minimumIntegerDigits,
        minimumFractionDigits: this.content.fractionDigits,
        maximumFractionDigits: this.content.fractionDigits,
        useGrouping: this.content.thousandsSeparator,
      };

      return new Intl.NumberFormat(this.locale, options).format(value);
    },
    locale() {
      return this.content.options.locale === "ww-project-lang"
        ? wwLib.$store.getters["front/getLang"]
        : this.content.options.locale;
    },
  },
};
</script>
