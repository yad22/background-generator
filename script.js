var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

console.log(h3);
console.log(color1);
console.log(color2);
console.log(body)

function gradientInput(){
    console.log(color1.value);
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value + "," 
    + color2.value + ")";

    h3.textContent = body.style.background + ";";

}

color1.addEventListener(
    "input",
    gradientInput
)

color2.addEventListener(
    "input",
    gradientInput
)