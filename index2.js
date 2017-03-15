var express = require('express')
var app = express()
var http = require('http').Server(app)
var port = 8080

//se ejecuta si se llama explicitamente en la deifincion
// de una ruta.
function middleHandler(req, res, next){
  console.log('soy un middleware que anda por ahi')
  next()
}

// se ejecuta primero
app.use(function (req, res, next){
  console.log('soy el 1er middleware')
  next()
})

app.use(function (req, res, next){
  console.log('soy el 2do middleware')
  next()
})

app.get('/', middleHandler, function(req, res) {
  // res.sendFile(__dirname + '/index.html')
  console.log('peticion al home')
})

http.listen(port, function(){
  //if (err) return console.log(err)
  console.log('Servidor escuchando en: ', 8080)
})
