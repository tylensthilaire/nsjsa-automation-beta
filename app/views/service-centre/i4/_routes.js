var express = require('express')
var router = express.Router()

const BASE_PATH = 'i4';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/service-centre/i4/screens';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});


router.post('/nino-search', function (req, res) {
    res.redirect('view-claim?task=register&claimStatus=registration-needed&claimant=sh&nino=CX 40 01 26 A&idRisk=0&fraud=0&cis=1&dupe=0&niUpdate=0');
});

router.post('/nino', function (req, res) {
    let data = req.session.data;
    // console.log( data['niMatchCis'] );
    if ( data['s'] != 'r4' ) {
        data['cis'] = 0;
        data['niMatchCis'] = 1;
        data['noReg'] = 1;
        res.redirect('view-claim');
    } else {
        res.redirect('duplicates');
    }
});

module.exports = router