# Backend Technical Challenge

This API challenge, based on the [Swagger Schema](http://tech-challenge.lx-cloud.com/swagger/docs/technical-challenge-api.yml) is written in JavaScript using **Node.js** and **Express.js** frameworks and also using **serverless** framework is deployed to AWS lambda and API gateway.

A [Postman collection](challenge-postman-collection.json) is available to test API endpoints. The `base_url` variable need to be set to the endpoint url generated after deployment to a AWS lambda function.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/193bda61d113bf8822df?action=collection%2Fimport)

## Requirements

The setup of the environment is needed to run Locally and deploy to AWS.

- Node.js
- AWS CLI
- Serverless

## Setup

Install dependencies

    $ npm install

    added 346 packages from 176 contributors and audited 346 packages in 3.222s

## Run Locally

The application can be executed Locally using following command, a web server will be created on `localhost` port `3000`.

    $ npm start

    > node local.handler.js
    listening on http://localhost:3000

## Configurations

The `configs.js` file is located in the `lib` directory.

```js
const punctuations = [",", ".", '"', "!", "?", " "];
const roundOffset = 0.5;
// Uncomment the line below when rounding up values above 0.159 is needed.
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

- The `punctuations` variable contains all of the characters needed to be ignored in the first two endpoints.
- The `roundOffset` variable is the constant threshold that values above it are rounded up.
- Tax brackets used in the last two endpoints can be easily edited by editing the `taxBrackets` constant.

## Deploy

To deploy the application please run following command in the project directory.

    $ serverless deploy

    Serverless: Stack update finished...
    Service Information
    service: lx-backend-challenge
    stage: dev
    region: ap-southeast-2
    stack: lx-backend-challenge-dev
    resources: 11
    api keys:
      None
    endpoints:
      ANY - https://d9j89kccu9.execute-api.ap-southeast-2.amazonaws.com/dev/{proxy+}
    functions:
      handler: lx-backend-challenge-dev-handler
    layers:
      None

## Testing

To run tests use below command:

    $ npm test

      decimalUtils Unit Testing
    ✔ decimalUtils.add(0.1, 0.2) should return 0.3
    ✔ decimalUtils.sub(0.3, 0.1) should return 0.2
    ✔ decimalUtils.mod(0.5, 0.2) should return 0.2
    ✔ decimalUtils.times(5.7, 0.3) should return 1.71
    ✔ decimalUtils.div(6.2, 0.2) should return 31
    ...

23 passing (28ms)

### Coverage report

| File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| --------------- | ------- | -------- | ------- | ------- | ----------------- |
| All files       | 97.05   | 96       | 100     | 97.01   |
| configs.js      | 100     | 100      | 100     | 100     |
| decimalUtils.js | 100     | 100      | 100     | 100     |
| utils.js        | 96.49   | 96       | 100     | 96.42   | 71,112            |
