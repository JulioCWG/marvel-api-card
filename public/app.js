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
  return characters.filter(character => {
    return !!character.thumbnail;
  });
}).then(characters => {
  debugger;
  console.log(characters);
  //por cada carta
  $('.Card').each((i, item) => {
    let character = characters[i];
    let $this = $(item);
    let $image = $this.find('.Card-image');
    let $description = $this.find('.Card-description');
    let $name = $this.find('.Card-name');
    $image.attr('src', `${character.thumbnail.path}.${character.thumbnail.extension}`);
    $name.text(character.name);
    $description.text(character.description);
  });
  //cambiar la imagen .Card-image
  // Cambiar .Card-description
  //cambiar .card-name
}).catch(err => {
  console.error(err);
});