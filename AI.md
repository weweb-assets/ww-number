---
name: ww-number
description: The ww-number component displays a formatted number with customizable options for style, locale, and notation, utilizing the Intl.NumberFormat API for precise and localized number representation.
keywords:
  - intl.numberformat
  - localized number formatting
  - currency formatting
  - percentage display
  - unit-based formatting
  - dynamic property binding
  - number notation styles
  - thousands separator
  - ww-text integration
  - number display options
---

#### ww-number

Component Purpose: Renders a formatted number with various display options such as decimal, currency, percentage, or unit-based using Intl.NumberFormat API for localized number formatting.

Properties:
- value: number - The numeric value to display. Default: 3.14159.
- locale: string | 'ww-project-lang' - Locale code or "ww-project-lang" for current page language. Default: "ww-project-lang".
- style: 'decimal' | 'currency' | 'percent' | 'unit' - Formatting style. Default: "currency".
- currency: string - Currency code when using currency style. Default: "USD".
- currencyDisplay: 'narrowSymbol' | 'code' | 'name' - Currency display style. Default: "narrowSymbol".
- notation: 'standard' | 'scientific' | 'compact' - Number notation style. Default: "standard".
- unit: string - Unit for unit style. Default: "celsius".
- unitDisplay: 'long' | 'short' | 'narrow' - Unit name display style. Default: "short".
- minimumIntegerDigits: number - Minimum integer digits (1-21). Default: 1.
- fractionDigits: number - Decimal places (0-20). Default: 2.
- thousandsSeparator: boolean - Use thousands separator. Default: true.

Children:
- Inherits from ww-text

Events: none

Variables: none
