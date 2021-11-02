const { Router } = require('express');

const router = Router();

const { parse, stringify } = require('roman-numerals-convert');
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

    if (/\s/.test(text)) {

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
      
    } else {

      switch (text) {
        case 'version':
          return res.json({
            response_type: 'in channel',
            text: pkg.version,
          });
        case 'help':
          return res.json({
            response_type: 'in channel',
            text: 'Convert: Romano-Arábigo [ Example: /parse V ] Result: 5, Arábigo-Romano: [ Example: /stringify 5 ] Result: V /n',
          });
        default:
          if ( isNaN(text) === false ) {
            return res.json({
              response_type: 'in channel',
              text: resultRoman(+text),
            });
          } else {
            return res.json({
              response_type: 'in channel',
              text: resultArabigo(text),
            });
          }
      }
    }
  
    return res.status(400).json({
      response_type: 'ephemeral',
      text: "Sorry, slash commando, that didn't work. Please try again.",
    });

});

module.exports = router;