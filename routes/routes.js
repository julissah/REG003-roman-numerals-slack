const { Router } = require('express');

const router = Router();

const { parse, stringify } = require('roman-numerals-api');
const pkg = require('../package.json');
router.get('/', (req, res) => {
    res.json({
        name: pkg.name,
        version: pkg.version,
    });
});

// POST
router.post('/', (req, res) => {
    const { text } = req.body;
    console.log(text);
    const [name, param] = text.split(' ');
    const resultArabigo = (value) => {
      try {
        return parse(value);
      } catch (error) {
        return error.message;
      }
    };
  
    const resultRoman = (value) => {
      try {
        return stringify(value);
      } catch (error) {
        return error.message;
      }
    };
  
    if (name === 'parse') {
      return res.json({
        response_type: 'in channel',
        text: resultArabigo(param),
      });
    }
    if (name === 'stringify') {
      return res.json({
        response_type: 'in channel',
        text: resultRoman(+param),
      });
    }
  
    if (name === 'help') {
      return res.json({
        response_type: 'in channel',
        text: 'Convertir de ROMAN-ARA [ ejemplo: /parse 10 ], de ARA-ROMAN: [ ejemplo: /stringify VII ]',
      });
    }
  
    if (name === 'version') {
      return res.json({
        response_type: 'in channel',
        text: pkg.version,
      });
    }
  
    return res.status(400).json({
      response_type: 'ephemeral',
      text: "Sorry, slash commando, that didn't work. Please try again.",
    });

});

module.exports = router;