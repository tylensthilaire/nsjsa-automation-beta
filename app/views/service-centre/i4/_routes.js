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
    let data = req.session.data;
    answer = data['niNumber'];

    if (answer === 'r1') {

        data['s'] = 'r1';
        data['task'] = 'register';
        data['claimant'] = 'sh';
        data['nino'] = 'CX 40 01 26 A';
        data['claimStatus'] = 'not-registered';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 1;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'r2') {

        data['s'] = 'r2';
        data['task'] = 'register';
        data['claimant'] = 'kb';
        data['nino'] = 'CX 60 12 13 A';
        data['claimStatus'] = 'not-registered';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 1;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'r3') {
 
        data['s'] = 'r3';
        data['task'] = 'register';
        data['claimant'] = 'sh';
        data['nino'] = 'CX 40 01 26 A';
        data['claimStatus'] = 'not-registered';
        data['northernIreland'] = 0;
        data['dupe'] = 1;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'r4') {
 
        data['s'] = 'r4';
        data['task'] = 'register';
        data['claimant'] = 'kb';
        data['nino'] = 'CX 60 12 13 A';
        data['claimStatus'] = 'not-registered';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 1;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p1') {

        data['s'] = 'p1';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'northern-ireland';
        data['northernIreland'] = 1;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p2') {

        data['s'] = 'p2';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'appointee-check-needed';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 1;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p3') {

        data['s'] = 'p3';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'ID-check-needed';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 1;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p4') {
  
        data['s'] = 'p4';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'fraud-check-needed';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 1;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p5') {

        data['s'] = 'p5';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'ID-at-risk-check-needed';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 1;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p6') {

        data['s'] = 'p6';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-built';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 1;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p7') {

        data['s'] = 'p7';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 1;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p8') {

        data['s'] = 'p8';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p9') {

        data['s'] = 'p9';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 1;
        data['note'] = 0;

        res.redirect('view-claim');

    } else if (answer === 'p10') {

        data['s'] = 'p10';
        data['task'] = 'process';
        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-entitled';
        data['northernIreland'] = 0;
        data['dupe'] = 0;
        data['idRisk'] = 0;
        data['fraud'] = 0;
        data['niMatchCis'] = 0;
        data['cis'] = 0;
        data['appointee'] = 0;
        data['noReg'] = 0;
        data['build'] = 0;
        data['nicCheck'] = 0;
        data['bsError'] = 0;
        data['note'] = 1;

        res.redirect('view-claim');

    } else {
        res.redirect('view-claim?task=register&claimStatus=registration-needed&claimant=sh&nino=CX 40 01 26 A&idRisk=0&fraud=0&cis=1&dupe=0&niUpdate=0');
    }
});

router.post('/nino', function (req, res) {
    let data = req.session.data;
    // console.log( data['niMatchCis'] );
    if ( data['s'] != 'r4' ) {
        data['cis'] = 0;
        data['niMatchCis'] = 0;
        data['noReg'] = 1;
        res.redirect('view-claim');
    } else {
        res.redirect('duplicates');
    }
});

module.exports = router