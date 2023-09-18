var numberOfDrumButtons = document.querySelectorAll(".btn").length;
console.log(numberOfDrumButtons);

var firstButton = document.querySelector(".w");
var secondButton = document.querySelector(".a");
var thirdButton = document.querySelector(".s");
var fourthButton = document.querySelector(".d");
var fifthButton = document.querySelector(".j");
var sixthButton = document.querySelector('.k');
var seventhButton = document.querySelector('.l');
for(var i=0;i<numberOfDrumButtons;i++){

document.querySelectorAll(".btn")[i].addEventListener("click",function (event){
  buttonTarget = event.target;

  if(firstButton == buttonTarget){
    var audio = new Audio("tom-1.mp3");
    audio.play();
  }
  else if(secondButton == buttonTarget){
    var audio = new Audio("tom-2.mp3");
    audio.play();
  }
  else if(thirdButton == buttonTarget){
    var audio = new Audio('tom-3.mp3');
    audio.play();
  }
  else if(fourthButton == buttonTarget){
    var audio = new Audio("tom-4.mp3");
    audio.play();
  }
  else if(fifthButton == event.target){
    var audio = new Audio('snare.mp3');
    audio.play();
  }
  else if(sixthButton == event.target){
    var audio = new Audio('crash.mp3');
    audio.play();
  }
  else if(seventhButton == event.target){
    var audio = new Audio("kick-bass.mp3");
    audio.play();
  }

})
}
u
