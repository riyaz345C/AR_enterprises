const express = require('express')
const routes = express.Router()
const sendEmail = require('../middleware/emailMiddleware')

routes.get('/',require('../controller/home').getHome)

routes.post('/sendEmail',sendEmail,require('../controller/home').sendEmail)

module.exports = routes
