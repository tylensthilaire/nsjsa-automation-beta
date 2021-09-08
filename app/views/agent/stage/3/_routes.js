const express = require('express');
const router = express.Router();

const BASE_PATH = 'agent/stage/3';
const ABS_BASE_PATH = `/${BASE_PATH}`;

// router.get('/', function (req, res) {
//   res.redirect(`${ABS_BASE_PATH}/nino`);
// })

router.post('/3/nino-search', function (req, res) {
    res.redirect('../2/claim');
});

router.get('/1', function (req, res) {
    res.redirect('1/claim');
});

router.get('/2', function (req, res) {
    res.redirect('2/claim');
});

router.get('/3', function (req, res) {
    res.redirect('3/nino-search');
});

module.exports = router;
