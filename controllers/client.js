'use strict'

const Client = require('../models/clients')

function getClient (req, res) {
  let clientId = req.params.clientId

  Client.findById(clientId, (err, client) => {
    if (err) return res.status(500).send({message: `Request error: ${err}`})
    if (!client) return res.status(404).send({message: `Client does not exist`})

    res.status(200).send({ client })
  })
}

function getClients (req, res) {
  Client.find({}, (err, clients) => {
    if (err) return res.status(500).send({message: `Request error: ${err}`})
    if (!clients) return res.status(404).send({message: 'There are no clients'})

    res.status(200).send({clients})
  })
}

function saveClient (req, res) {
  console.log('POST /api/client')
  console.log(req.body)

  let client = new Client() 
  client.name = req.body.name
  client.direction = req.body.direction
  client.phone = req.body.phone
  client.mail = req.body.mail 
  client.category = req.body.category
  client.description = req.body.description

  client.save((err, clientStored) => {
    if (err) res.status(500).send({message: `Error when saving in the database: ${err} `})

    res.status(200).send({ client: clientStored })
  })
}

function updateClient (req, res) {
  let clientId = req.params.clientId
  let update = req.body

  Client.findByIdAndUpdate(clientId, update, (err, clientUpdated) => {
    if (err) res.status(500).send({message: `Error when updating the client: ${err}`})

    res.status(200).send({ client: clientUpdated })
  })
}

function deleteClient (req, res) {
  let clientId = req.params.clientId

  Client.findById(clientId, (err, client) => {
    if (err) res.status(500).send({message: `Error when deleting the client: ${err}`})

    client.remove(err => {
      if (err) res.status(500).send({message: `Error when deleting the client: ${err}`})
      res.status(200).send({message: 'Client has been deleted'})
    })
  })
}

module.exports = {
  getClient,
  getClients,
  saveClient,
  updateClient,
  deleteClient
}
