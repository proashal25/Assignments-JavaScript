let players =[45, 67, 89, 34, 90, 76, 54, 61];
let totalScore = 0;
let averageScore =0;
for(let i = 0; i < players.length; i++){
    totalScore = totalScore + players[i];
}
console.log(totalScore)
averageScore = totalScore/players.length;
Math.round(averageScore);
scoreAbove50 = 0;
scoreBelow50 = 0;
for(let i = 0; i < players.length; i++){
    if(players[i] >= 50){
        scoreAbove50 = scoreAbove50 +1;
    }
    if(players[i] < 50){
        scoreBelow50 = scoreBelow50 +1;
    }
}
let highestScore = Math.max(...players);
let lowestScore =  Math.min(...players);
console.log(highestScore);
console.log(lowestScore);
console.log(averageScore)
let remarks;
if(averageScore > 70){
remarks="Exellent team perfomance";

}else{
remarks = "Team needs improvement";
} 
document.write("totalplayer :" + players.length + "<br>");
document.write("totalscore :" + totalScore + "<br>");
document.write("averagescore :" + averageScore + "<br>");
document.write("highestscore :" + highestScore + "<br>");
document.write("lowestscore :" + lowestScore + "<br>");
document.write("Passed players :" + scoreAbove50 + "<br>");
document.write("Fail players :" + scoreBelow50 + "<br>");
document.write("Team perfomance :" + remarks + "<br>");