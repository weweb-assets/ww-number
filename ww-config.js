export default {
  editor: {
    label: {
      en: "Number",
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
        "minimumFractionDigits",
        "maximumFractionDigits",
        "minimumSignificantDigits",
        "maximumSignificantDigits",
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
    },
    locale: {
      label: {
        en: "Locale",
        fr: "Locale",
      },
      type: "TextSelect",
      options: () => {
        return { options: window.wwLocalesList };
      },
      defaultValue: "en",
      section: "settings",
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
          { value: "unit", label: "unit" },
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
      options: () => {
        return { options: window.wwCurrenciesList };
      },
      defaultValue: "USD",
      section: "settings",
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
      hidden: (content) => content.style !== "decimal",
      label: {
        en: "Notation",
        fr: "Notation",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "standard", label: "Standard" },
          { value: "scientific", label: "Scientific" },
          { value: "engineering", label: "Engineering" },
          { value: "compact", label: "Compact" },
        ],
      },
      defaultValue: "standard",
      section: "settings",
    },
    signDisplay: {
      hidden: (content) => content.style !== "decimal",
      label: {
        en: "Sign dysplay",
        fr: "Sign dysplay",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "auto", label: "Auto" },
          { value: "never", label: "Never" },
          { value: "always", label: "Always" },
          { value: "exceptZero", label: "ExceptZero" },
        ],
      },
      defaultValue: "auto",
      section: "settings",
    },
    unit: {
      hidden: (content) => content.style !== "unit",
      label: {
        en: "Unit",
        fr: "Unit",
      },
      type: "TextSelect",
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
      defaultValue: "celsius",
      section: "settings",
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
          { value: "narrow", label: "Marrow" },
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
    },
    minimumFractionDigits: {
      type: "Number",
      label: {
        en: "Minimum fraction digits",
        fr: "Minimum fraction digits",
      },
      options: {
        min: 0,
        max: 20,
      },
      defaultValue: 0,
      section: "settings",
    },
    maximumFractionDigits: {
      type: "Number",
      label: {
        en: "Maximum fraction digits",
        fr: "Maximum fraction digits",
      },
      options: {
        min: 0,
        max: 20,
      },
      defaultValue: 3,
      section: "settings",
    },
    minimumSignificantDigits: {
      type: "Number",
      label: {
        en: "Minimum significant digits",
        fr: "Minimum significant digits",
      },
      options: {
        min: 1,
        max: 21,
      },
      defaultValue: 1,
      section: "settings",
    },
    maximumSignificantDigits: {
      type: "Number",
      label: {
        en: "Maximum significant digits",
        fr: "Maximum significant digits",
      },
      options: {
        min: 1,
        max: 21,
      },
      defaultValue: 21,
      section: "settings",
    },
    numberElement: {
      hidden: true,
      defaultValue: { isWwObject: true, type: "ww-text" },
    },
  },
};
