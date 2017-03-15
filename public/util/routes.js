var $ = require('jquery');
var page = require('page');

var signinTemplate = `<label>ingresa tu nombre</label>
<input type="text" id="firstName" name="firstName" tabindex="1" placeholder="juan, julio, gabriel" class="Signin-name-input"/>
<button tabindex="2" class="Signin-button">Ingresar</button>`;

var homeTemplate = `    <section class="Layout">
      <section class="Layout-angonist">
        <div class="Back"><img src="./public/images/back.jpg" alt="Cover Card" class="Back-img"></div>
        <div class="Back"><img src="./public/images/back.jpg" alt="Cover Card" class="Back-img"></div>
        <div class="Back"><img src="./public/images/back.jpg" alt="Cover Card" class="Back-img"></div>
        <div class="Back"><img src="./public/images/back.jpg" alt="Cover Card" class="Back-img"></div>
        <div class="Back"><img src="./public/images/back.jpg" alt="Cover Card" class="Back-img"></div>
      </section>
      <section class="Layout-main">
        <div class="Layout-status">
          <div class="Status">
            <h3 class="Status-player">Gabriel</h3>
            <p class="Status-points">10000</p>
          </div>
          <div class="Status">
            <h3 class="Status-player">Julio</h3>
            <p class="Status-points">10000</p>
          </div>
        </div>
        <div class="Layout-battle">
          <div class="Battle">
            <div class="Battle-angonist">
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
            </div>
            <div class="Battle-player">
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
              <div class="Card">
                <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
                <div class="Card-description">Wolverine Es Muy Poderoso</div>
                <div class="Card-attack">500 puntos de ataque</div>
              </div>
            </div>
          </div>
        </div>
        <div class="Layout-phases">
          <div class="Phases">
            <div class="phases">
              <p>Ese Ataque fue cabron le diste en su madre con 300 puntos</p>
            </div>
          </div>
        </div>
      </section>
      <section class="Layout-player">
        <div class="Card">
          <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
          <div class="Card-description">Wolverine Es Muy Poderoso</div>
          <div class="Card-attack">500 puntos de ataque</div>
        </div>
        <div class="Card">
          <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
          <div class="Card-description">Wolverine Es Muy Poderoso</div>
          <div class="Card-attack">500 puntos de ataque</div>
        </div>
        <div class="Card">
          <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
          <div class="Card-description">Wolverine Es Muy Poderoso</div>
          <div class="Card-attack">500 puntos de ataque</div>
        </div>
        <div class="Card">
          <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
          <div class="Card-description">Wolverine Es Muy Poderoso</div>
          <div class="Card-attack">500 puntos de ataque</div>
        </div>
        <div class="Card">
          <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="Wolverine" class="Card-image">
          <div class="Card-description">Wolverine Es Muy Poderoso</div>
          <div class="Card-attack">500 puntos de ataque</div>
        </div>
      </section>
    </section>`;

//page('ruta destino', qué quiero que pase)
page('/', restrict, home);
page('/signin', signin);
page();

function restrict(ctx, next) {
  console.log('Restricting..');
  console.log('Context :' + JSON.stringify(ctx));
  console.log('window.user:' + window.user);
  if (!window.user) return page('/signin');

  next();
}

function home() {
  console.log('Estoy navegando al home');
  $('.app-container').html(homeTemplate);
}

function signin(ctx, next) {
  //intecto el html del sign in en app-container
  $('.app-container').html(signinTemplate);

  $('.Signin-button').on('click', function (event) {
    event.preventDefault();
    //obtengo el contenido del input
    var username = $('.Signin-name-input')[0].value;
    if (!username) return alert('Ingrese un nombre válido');
    window.user = { username: username };
    page('/');
  });
}

page({ hashbang: true });