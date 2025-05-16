// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);







let arduinoProgress = document.querySelector(".arduino"),
  arduinoValue = document.querySelector(".arduino-progress");

let arduinoStartValue = 0,
  arduinoEndValue = 50,
  arduinospeed = 70;

let progressarduino = setInterval(() => {
  arduinoStartValue++;

  arduinoValue.textContent = `${arduinoStartValue}%`;
  arduinoProgress.style.background = `conic-gradient(#7d2ae8 ${
    arduinoStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (arduinoStartValue == arduinoEndValue) {
    clearInterval(progressarduino);
  }
}, arduinospeed);








let machineProgress = document.querySelector(".machine"),
  machineValue = document.querySelector(".machine-progress");

let machineStartValue = 0,
  machineEndValue = 50,
  machinespeed = 70;

let progressmachine = setInterval(() => {
  machineStartValue++;

  machineValue.textContent = `${machineStartValue}%`;
  machineProgress.style.background = `conic-gradient(#7d2ae8 ${
    machineStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (machineStartValue == machineEndValue) {
    clearInterval(progressmachine);
  }
}, machinespeed);
// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// django progress circular bar 
let djangoProgress = document.querySelector(".django"),
  djangoValue = document.querySelector(".django-progress");

let djangoStartValue = 0,
  djangoEndValue = 70,
  djangospeed = 30;

let progressdjango = setInterval(() => {
  djangoStartValue++;

  djangoValue.textContent = `${djangoStartValue}%`;
  djangoProgress.style.background = `conic-gradient(#20c997 ${
    djangoStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (djangoStartValue == djangoEndValue) {
    clearInterval(progressdjango);
  }
}, djangospeed);

// mernjs progress circular bar 
let mernProgress = document.querySelector(".mernjs"),
  mernValue = document.querySelector(".mernjs-progress");

let mernStartValue = 0,
  mernEndValue = 80,
  rjsspeed = 30;

let progressmern = setInterval(() => {
  mernStartValue++;

  mernValue.textContent = `${mernStartValue}%`;
  mernProgress.style.background = `conic-gradient(#3f396d ${
    mernStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (mernStartValue == mernEndValue) {
    clearInterval(progressmern);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});