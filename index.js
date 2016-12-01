var _character;

window.onload = function load() {
  _character         = new CharacterConfiguration();

  var marioContainer = document.getElementById('mario');
  var luigiContainer = document.getElementById('luigi');
  var marioValues    = loadMario();
  var luigiValues    = loadLuigi();

  renderCharacter(marioValues, marioContainer);
  renderCharacter(luigiValues, luigiContainer);
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
