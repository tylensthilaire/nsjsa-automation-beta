const express = require('express');
const router = express.Router();

const BASE_PATH = 'agent/stage/2';
const ABS_BASE_PATH = `/${BASE_PATH}`;

// router.get('/', function (req, res) {
//   res.redirect(`${ABS_BASE_PATH}/nino`);
// })

router.post('/nino-search', function (req, res) {
    res.redirect('claim');
});

module.exports = router;
