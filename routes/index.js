'use strict'

const express = require('express')
const ClientCtrl = require('../controllers/client')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

/*api.get('/client', ClientCtrl.getClients)
api.get('/client/:clientId', ClientCtrl.getClient)
api.post('/client', auth, ClientCtrl.saveClient)
api.put('/client/:clientId', auth, ClientCtrl.updateClient)
api.delete('/client/:clientId', auth, ClientCtrl.deleteClient)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'You have access' })
})*/

api.get('/client', ClientCtrl.getClients)
api.get('/client/:clientId', ClientCtrl.getClient)
api.post('/client', ClientCtrl.saveClient)
api.put('/client/:clientId', ClientCtrl.updateClient)
api.delete('/client/:clientId', ClientCtrl.deleteClient)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'You have access' })
})

module.exports = api
