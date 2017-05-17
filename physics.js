const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){
  //you will configure your series of questions inside here.
  if(str=="motion"){
    terminal.question("which variable are you solving for?", function(str){
      if(str=="d"){
        terminal.question("Do you know acceleration?"). function(str){
          if(str=="no"){
            motion.distance1();
          }
          else{
            motion.distance2();
          }
        }
      }
      else if()
    }
  }
});

function distance(v,t){
    let distance=v*t;
    return distance;
}
function ke(m,v){
    let energy=m*v*v/2;
    return energy;
}
