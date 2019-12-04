# React-Native-Modal-Spinner

<div style="text-align: center">
  <img src="https://badgen.net/badge/node@LTS/>=8.11.1/green">
  <img src="https://badgen.net/badge/npm/>=5.6.0/blue">
  <img src="https://badgen.net/badge/react-native/>=0.57.4/orange">
  <img src="https://badgen.net/badge/code style/standard/yellow">
  <img src="https://badgen.net/badge/release/v1.0/pink">
</div>

A simple and fully customizable cross-platform React Native component that implements a spinner UI.

## Getting Started

### Prerequisites

`NodeJS >= v8.11.1`
`react-native-cli >= 2.0.1`
`react-native >= 0.57.4`
`npm >= 5.6.0`

## Table of Contents

- [Install](#install)
- [Example](#example)
- [Options](#options)
- [License](#license)

## Install

[npm][]:

```sh
npm install react-native-modal-spinner
```

## Example

See [the example App.js file][example] for an example implementation.

## Options

| Property        | Type                       | Default                                         | Description                                                |
| --------------- | -------------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| visible         | Boolean                    | false                                           | Boolean to show/hide the spinner                           |
| size            | String (enum) small, large | "small"                                         | Size of the spinner                                        |
| backgroundColor | String                     | -                                               | Color of the spinner background                            |
| onClose         | Function                   | -                                               | Callback that is called when the user taps the back button |
| color           | String                     | default is gray on iOS and dark cyan on Android | Color of the spinner                                       |

## License

[MIT](LICENSE) © Ajay

##

[npm]: https://www.npmjs.com/
[example]: https://github.com/Ajayg96/react-native-spinner/blob/master/examples/App.js
