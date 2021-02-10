console.log("javascript is good to go!");


//var surround = document.getElementById('surroundDiv1');
let surround = document.querySelector('#surroundDiv1');
let surround2 = document.querySelector('#surroundDiv2');
let surround3 = document.querySelector('#surroundDiv3');

//functions--add console.log

function show() {
  let welcome = document.querySelector('#sub1');
  welcome.style.display = '';
}

function hide() {
  let welcome = document.querySelector('#sub1');
  welcome.style.display = 'none';
}

function show2() {
  let welcome = document.querySelector('#sub2');
  welcome.style.display = '';
}

function hide2() {
  let welcome = document.querySelector('#sub2');
  welcome.style.display = 'none';
}

function show3() {
  let welcome = document.querySelector('#sub3');
  welcome.style.display = '';
}

function hide3() {
  let welcome = document.querySelector('#sub3');
  welcome.style.display = 'none';
}


surround.addEventListener("mouseover", show);
surround.addEventListener("mouseout", hide);

surround2.addEventListener("mouseover", show2);
surround2.addEventListener("mouseout", hide2);

surround3.addEventListener("mouseover", show3);
surround3.addEventListener("mouseout", hide3);
