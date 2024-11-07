
# jwt-secret-cli

`jwt-secret-cli` is a **Command Line Interface (CLI)** tool designed to generate secure JSON Web Token (JWT) secrets effortlessly. Enhance the security of your applications by creating strong, customizable secrets for JWTs used in authentication and authorization mechanisms.

## Features

- **Generate Secure Secrets:** Create cryptographically strong secrets to safeguard your JWTs.
- **Customizable Length:** Specify the length of the generated secret to meet your security requirements.
- **Flexible Formats:** Choose between hexadecimal (`hex`) and Base64 (`base64`) formats for your secrets.
- **Simple CLI Interface:** Intuitive commands and options for seamless integration into your workflow.
- **Production-Ready:** Robust error handling and tested functionalities ensure reliability in production environments.

## Installation

You can install `jwt-secret-cli` globally using [npm](https://www.npmjs.com/):

```bash
npm install -g jwt-secret-cli
```

Alternatively, if you prefer to use it without installing globally, you can use `npx`:

```bash
npx jwt-secret-cli [options]
```

## Usage

After installation, you can use the `jwt-secret-cli` command in your terminal.

### Basic Command

Generate a secret with default settings (64 characters in hexadecimal format):

```bash
jwt-secret-cli
```

**Output:**

```
e5f8c3b2a1d4e6f7b8c9d0e1f2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8
```

### Options

- `-l, --length <number>`: **Length of the secret** (default: `64`).
- `-f, --format <type>`: **Format of the secret** (`hex` or `base64`, default: `hex`).
- `-h, --help`: Display help for command.
- `-V, --version`: Output the version number.

### Examples

1. **Generate a 128-Character Hexadecimal Secret**

   ```bash
   jwt-secret-cli -l 128
   ```

   **Output:**

   ```
   a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4
   ```

2. **Generate a 64-Character Base64 Secret**

   ```bash
   jwt-secret-cli -f base64
   ```

   **Output:**

   ```
   QWxhZGRpbjpvcGVuIHNlc2FtZSBJbmNpZGVudGlhbC1CYXR0ZXJ5U2VjcmV0VG9rZW4=
   ```

3. **Generate a 32-Character Base64 Secret**

   ```bash
   jwt-secret-cli -l 32 -f base64
   ```

   **Output:**

   ```
   U29tZVNlY3JldFN0cmluZzEyMzQ1Ng==
   ```

### Help

To view all available options and commands:

```bash
jwt-secret-cli --help
```

**Output:**

```
Usage: jwt-secret-cli [options]

A CLI tool to generate secure JWT secrets

Options:
  -V, --version           output the version number
  -l, --length <number>   Length of the secret (default: 64)
  -f, --format <type>     Format of the secret (hex/base64) (default: hex)
  -h, --help              display help for command
```

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or improvements, please follow these steps:

1. **Fork the Repository**

   Click the [Fork](https://github.com/LayerDynamics/jwt-secret-cli/fork) button at the top right of this page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/LayerDynamics/jwt-secret-cli.git
   cd jwt-secret-cli
   ```

3. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   Implement your feature or fix.

5. **Commit Your Changes**

   ```bash
   git commit -m "Add feature: your feature description"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**

   Go to the [original repository](https://github.com/LayerDynamics/jwt-secret-cli.git) and click on the **Compare & pull request** button.

## License

This project is licensed under the [Unlicense](./LICENSE), which dedicates it to the public domain. You are free to use, modify, and distribute this software for any purpose without any restrictions.

For more details, please refer to the [LICENSE](./LICENSE) file.

## Repository

The source code for `jwt-secret-cli` is hosted on GitHub:

🔗 [https://github.com/LayerDynamics/jwt-secret-cli.git](https://github.com/LayerDynamics/jwt-secret-cli.git)

## Author

**LayerDynamics**

- [GitHub](https://github.com/LayerDynamics)
- [Twitter](https://twitter.com/LayerDynamics) *(if applicable)*

## Acknowledgements

- Thanks to the open-source community for providing the tools and libraries that make projects like this possible.
- Inspired by the need for secure and easy-to-use JWT secret generators.

---

