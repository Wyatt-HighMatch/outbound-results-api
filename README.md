# How to Run

1) Clone the Repository.
2) Navigate to the project directory.
3) Run `npm install`.
4) Run `npm start`
5) The terminal should display the following message
````
> 6-12@0.0.0 start
> node ./bin/www
Listening on port: 3000
````
6) Make a /Results request using Postman on Compass.
7) The output of the request will be viewable in the terminal
````
================

Timestamp: 2024-06-13T17:09:48.606Z

Request Headers
{
  host: 'localhost:3000',
  authorization: 'Basic b3V0Ym91bmQtdXNlcm5hbWU6b3V0Ym91bmQtcGFzc3dvcmQ=',
  traceparent: '00-63bb94bcf69f5fc0693624bf4eea7d44-ed702e16d0d37abb-00',
  'content-type': 'application/json; charset=utf-8',
  'content-length': '369'
}

Request Body
{
  RequesterRefId: '734d9e0c-f8aa-487a-bae3-e86abceac8c7',
  ClientId: '123',
  ProviderOrderId: 'ae974e0c-3189-4e71-a9a2-a8a9a029e8ad',
  Status: 'Completed Pre-Hire Knowledge Test (V1)',
  OrderComplete: true,
  Result: 'Fail, Remediate',
  Score: 30,
  ReportUrl: 'https://report.highmatch.dev/Z1OKbNRv4K7',
  ReportUrls: [ 'https://report.highmatch.dev/Z1OKbNRv4K7' ],
  ScoreArray: []
}

================
POST /results 200 20.542 ms - -
````