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
  /* wwEditor:start */
  watch: {
    'content.style'() {
      this.$emit('update:content:effect', {
        currency: 'USD',
        unit: 'celsius',
      });
    }
  },
  /* wwEditor:end */
  computed: {
    value() {
      const value = this.content.value;
      const options = {
        style: this.content.style,
        currency: this.currency,
        currencyDisplay: this.content.currencyDisplay,
        notation: this.content.notation,
        unit: this.unit,
        unitDisplay: this.content.unitDisplay,
        minimumIntegerDigits: this.content.minimumIntegerDigits,
        minimumFractionDigits: this.content.fractionDigits,
        maximumFractionDigits: this.content.fractionDigits,
        useGrouping: this.content.thousandsSeparator,
      };

      try {
        return new Intl.NumberFormat(this.locale, options).format(value);
      } catch (error) {
        return new Intl.NumberFormat(this.locale, {...options, currency: 'USD', unit: 'celsius'}).format(value);
      }
    },
    locale() {
      return this.content.locale === "ww-project-lang"
        ? wwLib.$store.getters["front/getLang"]
        : this.content.locale;
    },
    currency() {
      return this.content.currency && typeof this.content.currency === 'string' ? this.content.currency : 'USD'
    },
    unit() {
      return this.content.unit && typeof this.content.unit === 'string' ? this.content.unit : 'celsius'
    }
  },
};
</script>
