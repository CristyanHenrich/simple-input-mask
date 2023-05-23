# Simple Input Mask

This is a set of JavaScript functions for applying formatting masks to input fields.

## Available Functions

| Function                        | Description                                                           |
|---------------------------------|-----------------------------------------------------------------------|
| `prefixRealMask(this)`          | Adds the "R$" prefix and formats a numeric value as a Brazilian currency mask. |
| `RealMask(this)`                | Formats a numeric value as a Brazilian currency mask. |
| `cpfMask(this)`                 | Formats a numeric value as a CPF (Individual Taxpayer Registration) mask. |
| `cnpjMask(this)`                | Formats a numeric value as a CNPJ (National Register of Legal Entities) mask. |
| `numberMask(this)`              | Removes all non-numeric characters from an input field. |
| `cellPhoneMask(this)`           | Formats a numeric value as a mobile number mask. |
| `phoneMask(this)`               | Formats a numeric value as a phone number mask. |
| `cepMask(this)`                 | Formats a numeric value as a ZIP code (Postal Code) mask. |
| `inscricaoEstadualMask(this)`   | Formats a numeric value as a State Registration mask. |

## How to use

To use these functions, you must pass a `this` event object that represents the input field. The functions will format the field value according to the corresponding mask.

Example of use:

```html
<input type="text" oninput="cpfMask(this)" placeholder="CPF">
```

This example will apply the CPF mask to the input field.

## Contributing

Feel free to contribute with improvements, corrections or adding new skins. Open an issue or submit a pull request to discuss your ideas and contributions.

## License

This code is licensed under the MIT License. See the LICENSE file for more information.
