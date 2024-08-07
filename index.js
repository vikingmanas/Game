var random1=Math.floor(Math.random()*6)+1;
var randice="dice"+random1+".png";
var image="images/"+randice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",image);

var random2=Math.floor(Math.random()*6)+1;
var randimg="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randimg);
if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!"; 
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="Player  2 Wins!!"; 
}
else{
    document.querySelector("h1").innerHTML="TIED!!"; 
    
}