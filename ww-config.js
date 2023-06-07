/* wwEditor:start */
import locales from "./src/locales";
import currencies from "./src/currencies";
locales.unshift({ label: "Page lang", value: "ww-project-lang" });
/* wwEditor:end */

export default {
  inherit: {
    type: "ww-text",
    exclude: ["text"],
  },
  editor: {
    label: {
      en: "Number",
    },
    icon: "number",
    bubble: {
      icon: "number",
    },
    customSettingsPropertiesOrder: [
      "value",
      "locale",
      [
        "style",
        "currency",
        "currencyDisplay",
        "notation",
        "signDisplay",
        "unit",
        "unitDisplay",
      ],
      [
        "minimumIntegerDigits",
        "fractionDigits",
        "thousandsSeparator",
        "convertion",
      ],
    ],
  },
  properties: {
    value: {
      label: {
        en: "Value",
      },
      type: "Text",
      bindable: true,
      defaultValue: 3.14159,
      section: "settings",
      /* wwEditor:start */
      bindingValidation: {
        type: "number",
        tooltip:
          "A number that defines the element value: `42 | 42.00 | 0.042`",
      },
      /* wwEditor:end */
    },
    locale: {
      label: {
        en: "Locale",
        fr: "Locale",
      },
      type: "TextSelect",
      /* wwEditor:start */
      options: {
        options: locales,
      },
      /* wwEditor:end */
      defaultValue: "ww-project-lang",
      section: "settings",
      bindable: true,
      bindingValidation: {
        type: "string",
        tooltip:
          'A string that defines the locale code: `"en" | "es" | "fr"` of `"ww-project-lang"` for the current page ',
      },
    },
    style: {
      label: {
        en: "Style",
        fr: "Style",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "decimal", label: "Decimal" },
          { value: "currency", label: "Currency" },
          { value: "percent", label: "Percent" },
          { value: "unit", label: "Unit" },
        ],
      },
      defaultValue: "currency",
      section: "settings",
    },
    currency: {
      hidden: (content) => content.style !== "currency",
      label: {
        en: "Currency",
        fr: "Currency",
      },
      type: "TextSelect",
      /* wwEditor:start */
      options: {
        options: currencies,
      },
      /* wwEditor:end */
      defaultValue: "USD",
      section: "settings",
      bindable: true,
    },
    currencyDisplay: {
      hidden: (content) => content.style !== "currency",
      label: {
        en: "Currency display",
        fr: "Currency display",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "narrowSymbol", label: "Symbol" },
          { value: "code", label: "Code" },
          { value: "name", label: "Name" },
        ],
      },
      defaultValue: "narrowSymbol",
      section: "settings",
    },
    notation: {
      label: {
        en: "Notation",
        fr: "Notation",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "standard", label: "Standard" },
          { value: "scientific", label: "Scientific" },
          { value: "compact", label: "Compact" },
        ],
      },
      defaultValue: "standard",
      section: "settings",
    },
    unit: {
      hidden: (content) => content.style !== "unit",
      label: {
        en: "Unit",
        fr: "Unit",
      },
      type: "TextSelect",
      /* wwEditor:start */
      options: {
        options: [
          { value: "acre", label: "acre" },
          { value: "bit", label: "bit" },
          { value: "byte", label: "byte" },
          { value: "celsius", label: "celsius" },
          { value: "centimeter", label: "centimeter" },
          { value: "day", label: "day" },
          { value: "degree", label: "degree" },
          { value: "fahrenheit", label: "fahrenheit" },
          { value: "fluid-ounce", label: "fluid-ounce" },
          { value: "foot", label: "foot" },
          { value: "gallon", label: "gallon" },
          { value: "gigabit", label: "gigabit" },
          { value: "gigabyte", label: "gigabyte" },
          { value: "gram", label: "gram" },
          { value: "hectare", label: "hectare" },
          { value: "hour", label: "hour" },
          { value: "inch", label: "inch" },
          { value: "kilobit", label: "kilobit" },
          { value: "kilobyte", label: "kilobyte" },
          { value: "kilogram", label: "kilogram" },
          { value: "kilometer", label: "kilometer" },
          { value: "liter", label: "liter" },
          { value: "megabit", label: "megabit" },
          { value: "megabyte", label: "megabyte" },
          { value: "meter", label: "meter" },
          { value: "mile", label: "mile" },
          { value: "mile-scandinavian", label: "mile-scandinavian" },
          { value: "milliliter", label: "milliliter" },
          { value: "millimeter", label: "millimeter" },
          { value: "millisecond", label: "millisecond" },
          { value: "minute", label: "minute" },
          { value: "month", label: "month" },
          { value: "ounce", label: "ounce" },
          { value: "percent", label: "percent" },
          { value: "petabyte", label: "petabyte" },
          { value: "pound", label: "pound" },
          { value: "second", label: "second" },
          { value: "stone", label: "stone" },
          { value: "terabit", label: "terabit" },
          { value: "terabyte", label: "terabyte" },
          { value: "week", label: "week" },
          { value: "yard", label: "yard" },
          { value: "year", label: "year" },
        ],
      },
      /* wwEditor:end */
      defaultValue: "celsius",
      section: "settings",
      bindable: true,
    },
    unitDisplay: {
      hidden: (content) => content.style !== "unit",
      label: {
        en: "Unit dysplay",
        fr: "Unit dysplay",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "long", label: "Long" },
          { value: "short", label: "Short" },
          { value: "narrow", label: "Narrow" },
        ],
      },
      defaultValue: "short",
      section: "settings",
    },
    minimumIntegerDigits: {
      type: "Number",
      label: {
        en: "Minimum integer digits",
        fr: "Minimum integer digits",
      },
      options: {
        min: 1,
        max: 21,
      },
      defaultValue: 1,
      section: "settings",
      bindable: true,
    },
    fractionDigits: {
      type: "Number",
      label: {
        en: "Decimal places",
        fr: "Decimal places",
      },
      options: {
        min: 0,
        max: 20,
      },
      defaultValue: 2,
      section: "settings",
      bindable: true,
    },
    thousandsSeparator: {
      label: {
        en: "1000 separator",
        fr: "1000 separator",
      },
      type: "OnOff",
      defaultValue: true,
      bindable: true,
      section: "settings",
    },
  },
};
