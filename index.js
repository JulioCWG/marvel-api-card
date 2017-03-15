var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

var port = 8080


app.use('/public', express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
  console.log('user coneccted')

  socket.on('disconnect', function(){
    console.log('user disconnect')
  })
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
  })
})

http.listen(port, function(){
  //if (err) return console.log(err)
  console.log('Servidor escuchando en: ', 8080)
})
