var $ = window.jQuery;
//var MarvelApi = window.MarvelApi

var key = '7de87cc1c9c4d80f0cb2d0f272a4cddc';
var api = new MarvelApi(key);
//var url='https://gateway.marvel.com:443/v1/public/series?title=avengers&' + key;
//var url2= 'http://gateway.marvel.com/v1/public/characters/1009175'

api.findSeries('avengers')
//Promise.resolve($.get(url))
.then(serie => {
  let serieImage = `url(${serie.thumbnail.path}.${serie.thumbnail.extension})`;
  $('.Layout').css('background-image', serieImage);
  var characters = serie.characters.items;
  var promises = [];
  for (let character of characters) {
    let promise = api.getResourceURI(character.resourceURI);
    promises.push(promise);
  }
  return Promise.all(promises);
}).then(characters => {
  return characters.filter(character => !!character.thumbnail);
}).then(characters => {

  ////ordenar las cartas con la funcion shuffle
  characters = shuffle(characters);

  for (let i = 0; i < 5; i++) {
    //  let index = Math.floor(Math.random() * characters.length - 1)
    //  let character = characters [index]
    let character = characters[i];
    drawCharacter(character);
  }

  // debugger
  // console.log(characters);
  // //por cada carta
  // $('.Card').each((i, item) => {
  //   let character = characters[i]
  //   let $this =$(item)
  //   let $image = $this.find('.Card-image')
  //   let $description = $this.find('.Card-description')
  //   let $name = $this.find('.Card-name')
  //   $image.attr('src',`${character.thumbnail.path}.${character.thumbnail.extension}`)
  //   $name.text(character.name)
  //   $description.text(character.description)
  //cambiar la imagen .Card-image
  // Cambiar .Card-description
  //cambiar .card-name
}).catch(err => {
  console.error(err);
});

$('.CharacterForm').on('submit', function (event) {
  event.preventDefault();

  let name = $(this).find('.CharacterForm-name').val();
  api.searchCharacter(name).then(function (character) {
    drawCharacter(character);
  }).catch(function (reason) {
    if (reason === 'No se encontró el personaje') $('.CharacterForm-message').text(reason);
  });
  //llamar a la api de marvel
  //dibujar una carta con el personaje de la api
  //si no regresa un personaje ->no hay personaje
  // si regresa solo un personae -> dibujar carta
  // si regresa mas de un personaje -> dibujar carta con el primer personaje
});

function renderCharacter(character) {
  let attackPoints = Math.ceil(Math.random() * 500) + 500;
  return `<div class="Card">
    <h2 class="Card-name">${character.name}</h2>
    <img src="${character.thumbnail.path}.${character.thumbnail.extension}" class="Card-image">
    <div class="Card-description">${character.description}</div>
    <div class="Card-attack" data-attack="${attackPoints}">${attackPoints} Puntos de ataque !!</div>
  </div>`;
}

function shuffle(arr) {
  for (var i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    let index = Math.floor(Math.random() * (arr.length - 1));
    arr[i] = arr[index];
    arr[index] = tmp;
  }
  return arr;
}

function drawCharacter(character) {
  let template = renderCharacter(character);
  let $card = $(template);

  $card.on('click', function (event) {
    let $this = $(this);
    let attack = $this.find('.Card-attack');
    console.log(attack.data('attack'));
  });
  $('.Battle-player').append($card);
}