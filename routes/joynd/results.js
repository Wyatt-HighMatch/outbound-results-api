var express = require('express');
var router = express.Router();

router.post('', (req, res, next) => {
  console.log();
  const date = new Date(Date.now()).toISOString();
  console.log('================');
  
  console.log();
  
  console.log(`Timestamp: ${date}`);

  console.log();

  console.log('Request Headers');
  console.log(req.headers);
  
  console.log();

  console.log('Request Body');
  console.log(req.body);
  
  console.log();

  console.log('================');
  res.send();
});

router.get('', (req, res, next) => {
  console.log('Server Hit');
  res.status(200).json({
    status: 'success',
    data: 'Server Exists'
  })
})

module.exports = router;
