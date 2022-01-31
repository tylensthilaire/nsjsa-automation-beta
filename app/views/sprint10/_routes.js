var express = require('express')
var router = express.Router()

const BASE_PATH = 'sprint10';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/sprint10/choose-task';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});


router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?task=needsId&claimant=sh&claimStatus=pre-checks-complete&idRisk=1&fraud=0&cis=0&noReg=0');
});

router.post('/nino', function (req, res) {
    let data = req.session.data;
    data['cis'] = 0;
    data['niUpdate'] = 1;
    res.redirect('view-claim');
});

module.exports = router