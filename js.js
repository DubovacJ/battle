let leftNum = document.getElementById("leftNum");
let rightNum = document.getElementById("rightNum");
const button = document.getElementById("button");
const buttonAgain = document.getElementById("again");
let topcider = document.getElementById("top");
let randomLeft = Math.ceil(Math.random() * 5);
let randomRight = Math.ceil(Math.random() * 5);
const telo = document.getElementsByTagName("body");

button.addEventListener("click", function test() {
  again.style.display = "unset";        
  button.style.display = "none";

  if (randomLeft > randomRight) {
    topcider.innerHTML = "Red player wins";
  } else if (randomLeft < randomRight) {
    topcider.innerHTML = "Blue player wins";
  } else {
    topcider.innerHTML = "It's a tie";
  }
  leftNum.innerHTML = randomLeft;
  rightNum.innerHTML = randomRight;
});

buttonAgain.addEventListener("click", ()=> {
  window.location.reload();

});
