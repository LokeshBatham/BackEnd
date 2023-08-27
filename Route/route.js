const express = require('express')
const app = express();
const route = new express.Router()

app.use(route)


const USerController = require('../Controller/Create')

route.get('/login',USerController.login)
route.get('/register',USerController.register)
route.post('/addnote', USerController.addNote)




module.exports = route