let divElm = document.getElementById("player");

let xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));

let yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));

let upTime, leftTime, rightTime, downTime;
let upAnim, leAnim, riAnim, dnAnim;

function up() {
  if (yNow > 2) {
    let moveBy = yNow - 1;
    divElm.style["top"] = moveBy + "px";
    divElm = document.getElementById("player");
    xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));
    yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));
  }
}

function left() {
  if (xNow > 2) {
    let moveBy = xNow - 1;
    divElm.style["left"] = moveBy + "px";
    divElm = document.getElementById("player");
    xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));
    yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));
  }
}

function right() {
  if (xNow < 302) {
    let moveBy = xNow + 1;
    divElm.style["left"] = moveBy + "px";
    divElm = document.getElementById("player");
    xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));
    yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));
  }
}

function down() {
  if (yNow < 302) {
    let moveBy = yNow + 1;
    divElm.style["top"] = moveBy + "px";
    divElm = document.getElementById("player");
    xNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("left"));
    yNow = parseInt(window.getComputedStyle(divElm).getPropertyValue("top"));
  }
}

let counterD = 1;
function startAnimD() {
  dnAnim = setInterval(downAnim, 200);
}
function stopAnimD() {
  divElm.style.backgroundImage = "url('assets/animation/image_part_001.png')";
  clearInterval(dnAnim);
}
function downAnim() {
  counterD++;
  if (counterD > 9) {
    counterD = 1;
  }
  divElm.style.backgroundImage =
    "url('assets/animation/image_part_00" + counterD + ".png')";
}

let counterL = 11;
function startAnimL() {
  leAnim = setInterval(leftAnim, 200);
}
function stopAnimL() {
  divElm.style.backgroundImage = "url('assets/left.png')";
  clearInterval(leAnim);
}
function leftAnim() {
  counterL++;
  if (counterL > 20) {
    counterL = 11;
  }
  divElm.style.backgroundImage =
    "url('assets/animation/image_part_0" + counterL + ".png')";
}

let counterR = 31;
function startAnimR() {
  riAnim = setInterval(rightAnim, 200);
}
function stopAnimR() {
  divElm.style.backgroundImage = "url('assets/right.png')";
  clearInterval(riAnim);
}
function rightAnim() {
  counterR++;
  if (counterR > 39) {
    counterR = 31;
  }
  divElm.style.backgroundImage =
    "url('assets/animation/image_part_0" + counterR + ".png')";
}

let counterU = 21;
function startAnimU() {
  upAnim = setInterval(upsideAnim, 200);
}
function stopAnimU() {
  divElm.style.backgroundImage = "url('assets/back.png')";
  clearInterval(upAnim);
}
function upsideAnim() {
  counterU++;
  if (counterU > 29) {
    counterU = 21;
  }
  divElm.style.backgroundImage =
    "url('assets/animation/image_part_0" + counterU + ".png')";
}
