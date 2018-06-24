'use strict'

const express = require('express')
const ClientCtrl = require('../controllers/client')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/client', auth, ClientCtrl.getClients)
api.get('/client/:clientId', ClientCtrl.getClient)
api.post('/client', auth, ClientCtrl.saveClient)
api.put('/client/:clientId', auth, ClientCtrl.updateClient)
api.delete('/client/:clientId', auth, ClientCtrl.deleteClient)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api