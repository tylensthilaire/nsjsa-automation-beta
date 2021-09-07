const express = require('express');
const router = express.Router();

const BASE_PATH = 'agent/stage/1';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprint8/1/3-claim-start';

// router.get('/', function (req, res) {
//   res.redirect(`${ABS_BASE_PATH}/nino`);
// })

router.post('/nino-search', function (req, res) {
    res.redirect('claim');
});

router.post('/nino', function (req, res) {
    res.redirect('claim');
});

module.exports = router;
