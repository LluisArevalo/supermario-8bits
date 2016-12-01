var _character;

window.onload = function load() {
  _character          = new CharacterConfiguration();

  var marioContainer    = document.getElementById('mario');
  var luigiContainer    = document.getElementById('luigi');
  var goombaContainer   = document.getElementById('goomba');
  var mushroomContainer = document.getElementById('mushroom');
  var marioValues       = loadMario();
  var luigiValues       = loadLuigi();
  var goombaValues      = loadGoomba();
  var mushroomValues    = loadMushroom();

  renderCharacter(marioValues, marioContainer);
  renderCharacter(luigiValues, luigiContainer);
  renderCharacter(goombaValues, goombaContainer);
  renderCharacter(mushroomValues, mushroomContainer);
};

function renderCharacter (array, container) {
  array.forEach (function (element) {
    var div = document.createElement('div');
    div.className = 'pixel ' + element;

    container.appendChild(div);
  });
}

function loadMario () {
  return _character.getMario();
}

function loadLuigi () {
  return _character.getLuigi();
}

function loadGoomba () {
  return _character.getGoomba();
}

function loadMushroom () {
  return _character.getMushroom();
}
