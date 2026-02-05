const express = require('express');
const router = express.Router();

router.get('/fetch', (request, response) => {
  const { name, age, email } = request.body;

  console.log(typeof age);

  if (age === 24) {
    response.status(200).send({
      name,
      age,
      email,
    });
  } else {
    response.status(400).send({
      message: 'Age must be 24',
      error: 'Failed',
    });
  }
});

module.exports = router;
