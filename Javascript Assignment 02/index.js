let rNumber = Math.round(Math.random()*20);
console.log(rNumber);
for( i=1 ;i<6 ; i++){
let guess =+prompt("guess the number");
if(guess == rNumber){
    alert( "Congratulations! You Won");
    alert("Attempts Used "+ i);
    alert("correct number" + rNumber)
    break
}
else(
    alert("Better Luck Next Time")
)
}