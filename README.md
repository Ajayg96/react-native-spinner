# React-Native-Spinner

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
npm install react-native-spinner
```

## Example

See [the example App.js file][example] for an example implementation.

## Options

| Property               | Type                       | Default   | Description                                                |
| ---------------------- | -------------------------- | --------- | ---------------------------------------------------------- |
| isModalVisible         | Boolean                    | false     | Boolean to show/hide the modal background                  |
| spinnerSize            | String (enum) small, large | "small"   | Size of the spinner                                        |
| spinnerBackgroundColor | String                     | -         | Color of the spinner background                            |
| closeModal             | Function                   | undefined | callback that is called when the user taps the back button |
| spinnerColor           | String                     | default   | Color of the spinner                                       |
| isLoading              | Boolean                    | false     | Boolean to show/hide the spinner                           |

## License

[MIT](LICENSE) © Ajay

##

[npm]: https://www.npmjs.com/
[example]: https://github.com/Ajayg96/react-native-spinner/blob/master/examples/App.js

callback that is called when the user taps the back button
