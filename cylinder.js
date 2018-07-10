let readline = require("readline-sync");
let radius = readline.question("What is the radius? ");
let height = readline.question("What is the height? ");
let volume = readline.question("Do you want to know the volume? ");
let surfaceArea = roadline.question("Do you want to know the surface area? ");
let x = 0;
let y = 0;

if(volume == yes){
  x = ((Math.PI) * (radius ** 2) * height);
  console.log(x);
}
else{
  if(volume == no){
    x = 0;
  }
}

if(surfaceArea == yes){
  y = (2 * Math.PI * radius * height) + (2 * Math.PI * (radius ** 2));
  console.log(y);
}
else{
  if(surfaceArea = no){
    y = 0;
  }
}
