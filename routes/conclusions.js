var express = require('express');
var router = express.Router();
const ConclusionModel = require('../models/conclusion-model');

router.get('/', async(_req, res) => {
  try {
    const conclusions = await ConclusionModel.find();
    if (conclusions.length > 0) {
      res.status(200).json(conclusions);
    } else {
      res.status(404).json("No conclusions found");
    }
  } catch (error) {
      res.status(400).json(error);
  }
});


router.post('/add', async(req, res) => {
  const conclusion = await ConclusionModel.create(req.body);
  res.status(201).json(conclusion);

});

module.exports = router;