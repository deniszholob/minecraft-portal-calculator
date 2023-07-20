var cOverWorld = ["xIn", "yIn", "zIn"];
var cNether = ["xOut", "yOut", "zOut"];

var cMap = {
  xIn: "xOut",
  yIn: "yOut",
  zIn: "zOut",
};

function init() {
  for (var i = 0; i < cOverWorld.length; i++) {
    var over = document.getElementById(cOverWorld[i]);
    // over.value = 0;
    over.addEventListener("keyup", calcNetherLocation);
    over.addEventListener("click", calcNetherLocation);
  }
  for (var i = 0; i < cNether.length; i++) {
    var nether = document.getElementById(cNether[i]);
    // nether.value = 0;
    nether.addEventListener("keyup", calcOverWorldLocation);
    nether.addEventListener("click", calcOverWorldLocation);
  }
  clearFields();
}

function clearFields() {
  for (var i = 0; i < cOverWorld.length; i++) {
    var over = document.getElementById(cOverWorld[i]);
    var nether = document.getElementById(cNether[i]);
    over.value = 0;
    nether.value = 0;
  }
  writeOutput();
}

function calcNetherLocation() {
  var inID = this.id;
  var outID = cMap[inID];
  var fieldIn = document.getElementById(inID);
  var fieldOut = document.getElementById(outID);

  fieldOut.value = Math.floor(fieldIn.value) / 8;
  writeOutput();
}

function calcOverWorldLocation() {
  var inID = this.id;
  var outID = getArrayKeyByValue(cMap, inID);
  var fieldIn = document.getElementById(inID);
  var fieldOut = document.getElementById(outID);

  fieldOut.value = fieldIn.value * 8;
  writeOutput();
}

function writeOutput() {
  var out = document.getElementById("Output");
  var s = "";
  s += "Relm\tX\tY\tZ";
  s += "\nWorld";
  for (var i = 0; i < cOverWorld.length; i++) {
    s += "\t" + document.getElementById(cOverWorld[i]).value;
  }
  s += "\nNether";
  for (var i = 0; i < cNether.length; i++) {
    s += "\t" + document.getElementById(cNether[i]).value;
  }
  out.innerHTML = s;
}

getArrayKeyByValue = function (array, value) {
  for (var key in array) {
    if (array.hasOwnProperty(key)) {
      if (array[key] === value) {
        return key;
      }
    }
  }
};
