const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/agent/stage/1a/', require('./views/agent/stage/1a/_routes'))
router.use('/agent/stage/1a/1-eligibility/', require('./views/agent/stage/1a/1-eligibility/_routes'))
router.use('/agent/stage/1a/2-details/', require('./views/agent/stage/1a/2-details/_routes'))
router.use('/agent/stage/1a/3-claim-start/', require('./views/agent/stage/1a/3-claim-start/_routes'))
router.use('/agent/stage/1a/4-other-benefits/', require('./views/agent/stage/1a/4-other-benefits/_routes'))
router.use('/agent/stage/1a/5-jury-service/', require('./views/agent/stage/1a/5-jury-service/_routes'))
router.use('/agent/stage/1a/6-current-employment/', require('./views/agent/stage/1a/6-current-employment/_routes'))
router.use('/agent/stage/1a/7-previous-employment/', require('./views/agent/stage/1a/7-previous-employment/_routes'))
router.use('/agent/stage/1a/8-abroad/', require('./views/agent/stage/1a/8-abroad/_routes'))
router.use('/agent/stage/1a/9-pensions/', require('./views/agent/stage/1a/9-pensions/_routes'))
router.use('/agent/stage/1a/10-education/', require('./views/agent/stage/1a/10-education/_routes'))
router.use('/agent/stage/1a/dth/', require('./views/agent/stage/1a/dth/_routes'))

router.use('/agent/stage/4/', require('./views/agent/stage/4/_routes'))
router.use('/agent/stage/3/', require('./views/agent/stage/3/_routes'))
router.use('/agent/stage/2b/', require('./views/agent/stage/2b/_routes'))
router.use('/agent/stage/2a/', require('./views/agent/stage/2a/_routes'))
router.use('/agent/stage/1b/', require('./views/agent/stage/1b/_routes'))
router.use('/agent/stage/shared/', require('./views/agent/stage/shared/_routes'))

router.use('/sprints/sprint3/', require('./views/sprints/sprint3/_routes'))


router.use('/sprints/sprint4/', require('./views/sprints/sprint4/_routes'))
router.use('/sprints/sprint4/1-eligibility/', require('./views/sprints/sprint4/1-eligibility/_routes'))
router.use('/sprints/sprint4/2-details/', require('./views/sprints/sprint4/2-details/_routes'))

router.use('/sprints/sprint5/', require('./views/sprints/sprint5/_routes'))
router.use('/sprints/sprint5/i3/', require('./views/sprints/sprint5/i3/_routes'))

router.use('/sprints/sprint7/', require('./views/sprints/sprint7/_routes'))

router.use('/sprints/sprint9/additional/', require('./views/sprints/sprint9/additional/_routes'))
router.use('/sprints/sprint10/', require('./views/sprints/sprint10/_routes'))

router.use('/sprints/sprint11/', require('./views/sprints/sprint11/_routes'))
router.use('/sprints/sprint11/1a-eligibility/', require('./views/sprints/sprint11/1a-eligibility/_routes'))
router.use('/sprints/sprint11/1b-lead-in/', require('./views/sprints/sprint11/1b-lead-in/_routes'))
router.use('/sprints/sprint11/2-details/', require('./views/sprints/sprint11/2-details/_routes'))
router.use('/sprints/sprint11/3-claim-start/', require('./views/sprints/sprint11/3-claim-start/_routes'))
router.use('/sprints/sprint11/4-other-benefits/', require('./views/sprints/sprint11/4-other-benefits/_routes'))
router.use('/sprints/sprint11/5-jury-service/', require('./views/sprints/sprint11/5-jury-service/_routes'))
router.use('/sprints/sprint11/6-current-employment/', require('./views/sprints/sprint11/6-current-employment/_routes'))
router.use('/sprints/sprint11/7-previous-employment/', require('./views/sprints/sprint11/7-previous-employment/_routes'))
router.use('/sprints/sprint11/8-abroad/', require('./views/sprints/sprint11/8-abroad/_routes'))
router.use('/sprints/sprint11/9-pensions/', require('./views/sprints/sprint11/9-pensions/_routes'))
router.use('/sprints/sprint11/10-education/', require('./views/sprints/sprint11/10-education/_routes'))
router.use('/sprints/sprint11/dth-lead-in/', require('./views/sprints/sprint11/dth-lead-in/_routes'))
router.use('/sprints/sprint11/dth/', require('./views/sprints/sprint11/dth/_routes'))

router.use('/sprints/sprint14/', require('./views/sprints/sprint11/_routes'))
router.use('/sprints/sprint14/1a-eligibility/', require('./views/sprints/sprint14/1a-eligibility/_routes'))
router.use('/sprints/sprint14/1b-lead-in/', require('./views/sprints/sprint14/1b-lead-in/_routes'))
router.use('/sprints/sprint14/2-details/', require('./views/sprints/sprint14/2-details/_routes'))
router.use('/sprints/sprint14/3-claim-start/', require('./views/sprints/sprint14/3-claim-start/_routes'))
router.use('/sprints/sprint14/4-other-benefits/', require('./views/sprints/sprint14/4-other-benefits/_routes'))
router.use('/sprints/sprint14/5-jury-service/', require('./views/sprints/sprint14/5-jury-service/_routes'))
router.use('/sprints/sprint14/6-current-employment/', require('./views/sprints/sprint14/6-current-employment/_routes'))
router.use('/sprints/sprint14/7-previous-employment/', require('./views/sprints/sprint14/7-previous-employment/_routes'))
router.use('/sprints/sprint14/8-abroad/', require('./views/sprints/sprint14/8-abroad/_routes'))
router.use('/sprints/sprint14/9-pensions/', require('./views/sprints/sprint14/9-pensions/_routes'))
router.use('/sprints/sprint14/10-education/', require('./views/sprints/sprint14/10-education/_routes'))
router.use('/sprints/sprint14/dth-lead-in/', require('./views/sprints/sprint14/dth-lead-in/_routes'))
router.use('/sprints/sprint14/dth/', require('./views/sprints/sprint14/dth/_routes'))

// redirect to latest citizen journey
router.get('/citizen-latest', function (req, res) {
    res.redirect('sprints/sprint14/screens');
});

// plug in service centre beta
router.use('/service-centre/i4/', require('./views/service-centre/i4/_routes'))
router.use('/service-centre/i5/', require('./views/service-centre/i5/_routes'))
router.use('/service-centre/i6/', require('./views/service-centre/i6/_routes'))
router.use('/service-centre/i7/', require('./views/service-centre/i7/_routes'))
router.use('/service-centre/mvp/', require('./views/service-centre/mvp/_routes'))

// feedback location
router.get('/feedback', function (req, res) {
    res.redirect('https://github.com/dwp/nsjsa-automation-beta/issues')
});

module.exports = router
