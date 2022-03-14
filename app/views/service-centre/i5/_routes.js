var express = require('express')
var router = express.Router()

const BASE_PATH = 'i5';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const START_PATH = '/service-centre/i5/screens';

router.get('/', function (req, res) {
    res.redirect(`${START_PATH}`);
});

router.get('/', function (req, res) {
    res.redirect(`${ABS_BASE_PATH}/nino-search`);
});

router.get('/start', function (req, res) {
    let data = req.session.data;
    answer = data['s'];
    
    // all processing scenarios, just one this inc
    if (['p4'].includes(answer)) {

        data['task'] = 'process';
        data['claimant'] = 'ij';

    // all template scenarios
    } else if (['t1','t2','t3'].includes(answer)) {

         data['task'] = 'id-template';
         data['claimStatus'] = 'ID-template-needed';

    // remainder
    } else {
        data['task'] = 'none';
    }

    // specific scenarios
    if (answer === 'p4') {
  
        data['claimStatus'] = 'fraud-check-needed';
        data['fraud'] = 1;
    
    } else if (answer === 't1') {

        data['cis'] = 1;
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

    // all processing scenarios
    if (['p4'].includes(answer)) {

        data['task'] = 'process';
        data['claimant'] = 'ij';

    // remainder
    } else {
        data['task'] = 'none';
    }

    // specific scenarios
    if (answer === 'p4') {
  
        data['claimStatus'] = 'fraud-check-needed';
        data['fraud'] = 1;

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