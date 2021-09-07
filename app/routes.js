const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/agent/stage/2/', require('./views/agent/stage/2/_routes'))
router.use('/agent/stage/1/', require('./views/agent/stage/1/_routes'))
router.use('/agent/stage/shared/', require('./views/agent/stage/shared/_routes'))

module.exports = router
