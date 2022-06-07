const { Router } = require('express');
const { zodiacSigns } = require('../../data/zodiac');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const matchingSign = zodiacSigns.find((sign) => sign.id === id);
    res.json(matchingSign);
  })

  .get('/', (req, res) => {
    const signs2 = zodiacSigns.map((sign) => { return { id: sign.id, name: sign.name };});
    res.json(signs2);
  });

  
