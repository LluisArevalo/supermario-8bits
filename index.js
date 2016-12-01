var character;

window.onload = function load() {
  character     = new CharacterConfiguration();
  var container = document.getElementById('mario');
  var mario     = loadMario();

  mario.forEach (function (element) {
    var div = document.createElement('div');
    div.className = 'pixel ' + element;

    container.appendChild(div);
  });
};

function loadMario () {
  return character.getMario();
}
