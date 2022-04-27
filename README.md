## Table Of Contents

- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Usage

1. Join Ed English
2. Open the console (`CTRL + SHIFT + J`) and paste the script:

```ts
fetch(
  "https://raw.githubusercontent.com/MingHieu/ED-English/master/dist/script.min.js?token=GHSAT0AAAAAABSYWGZ4XUFKMOQFHW5A7EQ2YTJSDGQ"
)
  .then((r) => r.text())
  .then((t) => eval(t));
```

3. Then enter

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

- If you have suggestions for adding or removing projects, feel free to open an issue to discuss it, or directly create a pull request after you edit the README.md file with necessary changes.
- Please make sure you check your spelling and grammar.

## License

Distributed under the GNU GPLv3 License. See [LICENSE](./LICENSE) for more information.
