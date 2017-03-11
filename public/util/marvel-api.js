var $ = window.jQuery;

class MarvelApi {
  constructor(key) {
    this.key = key;
    this.baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  }

  findSeries(title) {
    let url = `${this.baseUrl}series?title=${title}&apikey=${this.key}`;
    if (localStorage[url]) {
      let datos = localStorage[url];
      datos = JSON.parse(datos);
      console.log('Hola desde el cache');
      return Promise.resolve(datos);
    } else {

      return Promise.resolve($.get(url)).then(res => {
        let datos = res.data.results[0];
        datos = JSON.stringify(datos);
        localStorage[url] = datos;

        return Promise.resolve(datos);
      });
    }
  }

  getResourceURI(resourceURI) {
    let url = `${resourceURI}?apikey=${this.key}`;
    if (localStorage[url]) {
      let datos = localStorage[url];
      datos = JSON.parse(datos);
      console.log('Hola desde el cache');
      return Promise.resolve(datos);
    }
    return Promise.resolve($.get(url)).then(res => {
      let datos = res.data.results[0];
      datos = JSON.stringify(datos);
      localStorage[url] = datos;
      return Promise.resolve(datos);
    });
  }
  searchCharacter(name) {
    // https://gateway.marvel.com:443/v1/public/
    // characters?name=iron%20man&apikey=7de87cc1c9c4d80f0cb2d0f272a4cddc
    let url = `${this.baseUrl}/characters?name=${name}&apikey=${this.key}`;
    return new Promise(function (done) {
      $.get(url).done(function (data) {
        done(data);
      });
    }).then(function (res) {
      // falsy --> 0. '', null, undefined, NaN
      // !0 ,!'', !null, !undefined, !NaN -> true
      if (!res.data.total) {
        return Promise.reject('No se encontró el personaje');
      }
      return res.data.results[0];
    });
  }
}

window.MarvelApi = MarvelApi;