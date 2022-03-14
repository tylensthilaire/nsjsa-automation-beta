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

router.get('/start', function (req, res) {
    let data = req.session.data;
    answer = data['s'];

    // all registration scenarios
    if (['r1','r2','r3','r4'].includes(answer)) {

        data['task'] = 'register';
        data['claimStatus'] = 'not-registered';
    
        // all processing scenarios
    } else if (['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10'].includes(answer)) {

        data['task'] = 'process';
        data['claimant'] = 'ij';

    // remainder
    } else {
        data['task'] = 'none';
    }

    // specific scenarios
    if (answer === 'r1') {

        data['claimant'] = 'sh';
        data['nino'] = 'CX 40 01 26 A';
        data['noReg'] = 1;

    } else if (answer === 'r2') {

        data['claimant'] = 'kb';
        data['nino'] = 'CX 60 12 13 A';
        data['niMatchCis'] = 1;

    } else if (answer === 'r3') {
 
        data['claimant'] = 'sh';
        data['nino'] = 'CX 40 01 26 A';
        data['dupe'] = 1;

    } else if (answer === 'r4') {
 
        data['claimant'] = 'kb';
        data['nino'] = 'CX 60 12 13 A';
        data['niMatchCis'] = 1;

    } else if (answer === 'p1') {

        data['claimStatus'] = 'northern-ireland';
        data['northernIreland'] = 1;

    } else if (answer === 'p2') {

        data['claimStatus'] = 'appointee-check-needed';
        data['appointee'] = 1;

    } else if (answer === 'p3') {

        data['claimStatus'] = 'ID-check-needed';
        data['cis'] = 1;

    } else if (answer === 'p4') {
  
        data['claimStatus'] = 'fraud-check-needed';
        data['fraud'] = 1;

    } else if (answer === 'p5') {

        data['claimant'] = 'ij';
        data['claimStatus'] = 'ID-at-risk-check-needed';
        data['idRisk'] = 1;

    } else if (answer === 'p6') {

        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-built';
        data['build'] = 1;

    } else if (answer === 'p7') {

        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';
        data['nicCheck'] = 1;

    } else if (answer === 'p8') {
        // robot
        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';

    } else if (answer === 'p9') {
        // robot error
        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';
        data['bsError'] = 1;

    } else if (answer === 'p10') {
        // decision note
        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-entitled';
        data['note'] = 1;

    }

    res.redirect('choose-task');
});


router.post('/nino-search', function (req, res) {
    let data = req.session.data;

    // reset data
    delete data['s'];
    delete data['task'];
    delete data['claimant'];
    delete data['nino'];
    delete data['claimStatus'];
    delete data['northernIreland'];
    delete data['dupe'];
    delete data['idRisk'];
    delete data['fraud'];
    delete data['niMatchCis'];
    delete data['cis'];
    delete data['appointee'];
    delete data['noReg'];
    delete data['build'];
    delete data['nicCheck'];
    delete data['bsError'];
    delete data['note'];

    answer = data['niNumber'];

    // all registration scenarios
    if (['r1','r2','r3','r4'].includes(answer)) {

        data['task'] = 'register';
        data['claimStatus'] = 'not-registered';
    
        // all processing scenarios
    } else if (['p1','p2','p3','p4','p5','p6','p7','p8','p9','p10'].includes(answer)) {

        data['task'] = 'process';
        data['claimant'] = 'ij';

    // remainder
    } else {
        data['task'] = 'none';
    }

    // specific scenarios
    if (answer === 'r1') {

        data['claimant'] = 'sh';
        data['nino'] = 'CX 40 01 26 A';
        data['noReg'] = 1;

    } else if (answer === 'r2') {

        data['claimant'] = 'kb';
        data['nino'] = 'CX 60 12 13 A';
        data['niMatchCis'] = 1;

    } else if (answer === 'r3') {
 
        data['claimant'] = 'sh';
        data['nino'] = 'CX 40 01 26 A';
        data['dupe'] = 1;
        res.redirect('duplicates');

    } else if (answer === 'r4') {
 
        data['claimant'] = 'kb';
        data['nino'] = 'CX 60 12 13 A';
        data['niMatchCis'] = 1;

    } else if (answer === 'p1') {

        data['claimStatus'] = 'northern-ireland';
        data['northernIreland'] = 1;

    } else if (answer === 'p2') {

        data['claimStatus'] = 'appointee-check-needed';
        data['appointee'] = 1;

    } else if (answer === 'p3') {

        data['claimStatus'] = 'ID-check-needed';
        data['cis'] = 1;

    } else if (answer === 'p4') {
  
        data['claimStatus'] = 'fraud-check-needed';
        data['fraud'] = 1;

    } else if (answer === 'p5') {

        data['claimant'] = 'ij';
        data['claimStatus'] = 'ID-at-risk-check-needed';
        data['idRisk'] = 1;

    } else if (answer === 'p6') {

        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-built';
        data['build'] = 1;

    } else if (answer === 'p7') {

        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';
        data['nicCheck'] = 1;

    } else if (answer === 'p8') {
        // robot
        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';

    } else if (answer === 'p9') {
        // robot error
        data['claimant'] = 'ij';
        data['claimStatus'] = 'review-needed';
        data['bsError'] = 1;

    } else if (answer === 'p10') {
        // decision note
        data['claimant'] = 'ij';
        data['claimStatus'] = 'not-entitled';
        data['note'] = 1;

    }

    res.redirect('view-claim');
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

// reset the data back to defaults when end is got
router.get('/end', function (req, res) {
    let data = req.session.data;

    delete data['s'];
    delete data['task'];
    delete data['claimant'];
    delete data['nino'];
    delete data['claimStatus'];
    delete data['northernIreland'];
    delete data['dupe'];
    delete data['idRisk'];
    delete data['fraud'];
    delete data['niMatchCis'];
    delete data['cis'];
    delete data['appointee'];
    delete data['noReg'];
    delete data['build'];
    delete data['nicCheck'];
    delete data['bsError'];
    delete data['note'];

    res.redirect('screens');
});

module.exports = router