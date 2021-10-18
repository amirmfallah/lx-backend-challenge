# Backend Technical Challenge

This API challenge, based on the [Swagger Schema](http://tech-challenge.lx-cloud.com/swagger/docs/technical-challenge-api.yml) is written in JavaScript using **Node.js** and **Express.js** frameworks and also using **serverless** framework is deployed to the a AWS lambda function.

A [Postman collection](challenge-postman-collection.json) is available to test API endpoints. The `base_url` variable need to be set to the endpoint url generated after deploying to a AWS lambda function.

## Requirements

The setup of the environment is needed to localy run or deploy to the AWS services.

- Node.js
- AWS CLI
- Serverless

## Setup

Install dependencies

    npm install

## Run Localy

The application can be executed localy using following command, a web server will be created on `localhost` port `3000`.

    npm run

## Configurations

The `configs.js` file is located in the `lib` directory.

```js
const punctuations = [",", ".", '"', "!", "?", " "];
const roundOffset = 0.5;
// const roundOffset = 0.159;
const taxBrackets = [
  {
    start: 0,
    end: 18200,
    rate: 0,
  },
  {
    start: 18200,
    end: 37000,
    rate: 0.19,
  },
  {
    start: 37000,
    end: 87000,
    rate: 0.325,
  },
  {
    start: 87000,
    end: 180000,
    rate: 0.37,
  },
  {
    start: 180000,
    end: Infinity,
    rate: 0.45,
  },
];
```

- The `punctuations` variable contains all the characters need to be ignored in the first two endpoints.
- The `roundOffset` variable shows that values above that constant, will be rounded up when needed in the last two endpoints.
- Tax brackets used in the last two endpoints can be easily edited by editing the `taxBrackets` constant.

## Deploy

To deploy the application please run following command in the projects root directory.

    serverless deploy

## Testing

To run testing use below command:

    npm test

### Coverage report

| File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| --------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files       | 97.05   | 96       | 100     | 97.01   |
| configs.js      | 100     | 100      | 100     | 100     |
| decimalUtils.js | 100     | 100      | 100     | 100     |
| utils.js        | 96.49   | 96       | 100     | 96.42   | 71,112            |
