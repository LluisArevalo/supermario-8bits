var _character;
var _characterContainer;
var _currentLeft = 0;
var _maxLeft = window.screen.width - 90;
var _sign = "sum";

window.onload = function load() {
  _character          = new CharacterConfiguration();

  _characterContainer = document.getElementById('mushroom');
  var mushroomValues  = loadMushroom();

  _renderCharacter(mushroomValues, _characterContainer);
  _animate();
};

function _renderCharacter (array, container) {
  array.forEach (function (element) {
    var div = document.createElement('div');
    div.className = 'pixel ' + element;

    container.appendChild(div);
  });
}

function _animate () {
  if (_currentLeft >= _maxLeft && _sign === "sum") {
    _sign = "rest";
  } else if (_currentLeft <= 0 && _sign === "rest") {
    _sign = "sum";
  }

  if (_sign === "sum") {
    _currentLeft += 10;
  } else {
    _currentLeft -= 10;
  }

  _characterContainer.style.marginLeft = (_currentLeft) + 'px';
  setTimeout(_animate, 40);
}

function loadMushroom () {
  return _character.getMushroom();
}
