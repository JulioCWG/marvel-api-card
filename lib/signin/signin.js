var $ = require('jquery')
var page = require('page')

var template = require('./template.jade')

page('/signin', signin)

function signin(ctx, next){
  //intecto el html del sign in en app-container
  $('.app-container').html(template)

  $('.Signin-button').on('click', function (event) {
    event.preventDefault();
    //obtengo el contenido del input
    var username = $('.Signin-name-input')[0].value;
    if(!username) return alert('Ingrese un nombre válido')
    window.user = { username: username}
    page('/');
  });
}
