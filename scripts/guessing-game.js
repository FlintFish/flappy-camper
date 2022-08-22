//@ts-check

const button = document.getElementById("guessing-game")

console.log(button)

button?.addEventListener("click", function(){
// console.log("clicked");
let answer = 1;

let guess = Number(
     prompt("pick a numer between 1 and 10")
  );


  if(answer == guess) {
    alert("YOU WON!!!!!")
  }

  if(answer != guess){
    alert("Your A Dork")
  }
console.log(guess);
});
