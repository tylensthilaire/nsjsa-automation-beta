const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/agent/stage/3/', require('./views/agent/stage/3/_routes'))
router.use('/agent/stage/2b/', require('./views/agent/stage/2b/_routes'))
router.use('/agent/stage/2a/', require('./views/agent/stage/2a/_routes'))
router.use('/agent/stage/1/', require('./views/agent/stage/1/_routes'))
router.use('/agent/stage/shared/', require('./views/agent/stage/shared/_routes'))

module.exports = router
