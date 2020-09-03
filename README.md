# Simple server for mocking Terra response

Currently, only mock api for Hestia React native ;))

## Installation

```sh
yarn install
```

## Running sever

```sh
yarn start
```

## Changing response

Change `APP_ID` variable in `index.js` file to get corresponding React native app from the response:

- "1": App with one image.
- "2": App with two images.
- "3": App with simple game was made with `react-native-game-engine`
- "4": App will crash immediately after starting (maybe, app had been released before app was tested by QC)
- "5": App with an action that will make app crash.
