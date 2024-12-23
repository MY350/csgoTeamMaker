let people = [];
let CT = [];
let T = [];
let index = 0;
const maps = ["Dust 2", "Mirage", "Vertigo", "Ancient", "Inferno", "Nuke", "Anubis", "Overpass", "Thera"];
let e;

function getName() {
  let name = document.getElementById("sigma").value;
  if (name != "") {
    people.push(name);
    document.getElementById("sigma").value = "";
    makeButton(name, "players");
    
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function pickMap() {
  let mapPics = [];
  for (k = 0; k < maps.length; k++) {
    let f = k + "map";
    if (document.getElementById(f).checked)
      mapPics.push(document.getElementById(f).name);
  }
  let i = getRandomInt(mapPics.length);
  while (e == i) {
    i = getRandomInt(mapPics.length);
  }
  let map = mapPics[i];
  e = i;
  document.getElementById("map").innerHTML = map;
}

function clearScreen() {
  people = [];
  document.getElementById("players").innerHTML = "";
  document.getElementById("CT_text").innerHTML = "";
  document.getElementById("T_text").innerHTML = "";
  document.getElementById("map").innerHTML = "";
  T = [];
  CT = [];
  o = 0;
}

function makeButton(text, id) {
  var balls = document.createElement("BUTTON");
  var ching = document.createTextNode(text);
  balls.appendChild(ching);
  document.getElementById(id).appendChild(balls);
}

function kys() {
  alert("sigma");
}

function makeTeams() {
  for (i = 0; i < people.length; i++) {
    let r = getRandomInt(people.length);
    let tmp = people[i];
    people[i] = people[r];
    people[r] = tmp;
  }
  
  for (i = 0; i < people.length; i++) {
    let num = i % 2;
    if (num == 0) 
      CT.push(people[i]);
    else
      T.push(people[i]);
  }
  document.getElementById("CT_text").innerHTML = CT.toString();
  document.getElementById("T_text").innerHTML = T.toString();
  T = [];
  CT = [];
  if (people.length != 0)
    pickMap();
}

// ssh works
