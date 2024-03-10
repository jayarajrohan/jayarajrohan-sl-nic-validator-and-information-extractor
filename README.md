# Sri Lankan National Identity Card (NIC) Validator and Information Extractor

This package provides functions for validating Sri Lankan National Identity Card (NIC) numbers and extracting details such as date of birth, age, and gender.

## Installation

Install the package using npm:

```sh
npm install sl-nic-validator-and-information-extractor
```

or yarn:

```sh
yarn add sl-nic-validator-and-information-extractor
```

## Usage

1. Validating NIC Numbers:

The isValidSlNic function validates the format and structure of a given NIC number.

```javascript
import { isValidSlNic } from "sl-nic-validator";

const nic = "971902662V"; // Example NIC
const isValid = isValidSlNic(nic);

if (isValid) {
  console.log("Valid NIC!");
} else {
  console.log("Invalid NIC.");
}
```

2. Extracting Details:

The extractDetailsFromSlNic function takes a valid NIC number and returns an object containing the extracted information:

```javascript
import { extractDetailsFromSlNic } from "sl-nic-validator";

const nic = "971902662V"; // Example NIC
const nicDetails = extractDetailsFromSlNic(nic);

if (nicDetails) {
  console.log(nicDetails);
  // Output:
  // { dateOfBirth: '1997-07-08', age: 26, gender: 'Male' }
} else {
  console.log("Invalid NIC, cannot extract details.");
}
```

The returned object (nicDetails) has the following properties:

- dateOfBirth: A string in the format YYYY-MM-DD representing the date of birth extracted from the NIC.
- age: An integer representing the calculated age based on the date of birth and the current date.
- gender: A string indicating "Male" or "Female" based on the NIC encoding.

## Functionality

- Validates both 10-digit and 12-digit Sri Lankan NICs.
- Extracts date of birth, age, and gender from valid NICs.
- Returns undefined for invalid NICs.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, please open an issue or submit a pull request on the [GitHub repository](https://github.com/jayarajrohan/sl-nic-validator-and-information-extractor).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, you can reach out to the project maintainer at rohanonfirealways@gmail.com.
