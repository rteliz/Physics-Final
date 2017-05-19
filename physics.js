const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
  input:process.stdin,
  output:process.stdout
});

function printOptions(){
  console.log("\nEnter the variables you know in a comma list.");
  console.log("If you do not know a variable, then type n");
  console.log("distance,velocity,acceleration,time,mass,energy");
}

terminal.question("What type of equation are you looking for?",function(str){
  str.toLowerCase();
  //you will configure your series of questions inside here.
  if(str=="motion"){
    terminal.question("which variable are you solving for?", function(str){
      str.toLowerCase();
      if(str=="d"){
        printOptions();
        terminal.question("...",function(str)){
          str.toLowerCase();
          convertToArray(strcma)
          if(str[2]==NaN){
            return motion.distance(str[1],str[3]);
          }
          else{
            return motion.distance2(str[2],str[3],str[1]);
          }
        }
      }
      else if(str=="v"){
        printOptions();
        terminal.question("...",function(str)){
          str.toLowerCase();
          convertToArray(strcma)
          if(str[2]==NaN){
            return motion.velocity(str[0],str[3]);
          }
          else{
            return motion.velocity2(str[1],str[2],str[3]);
          }
        }
      }
      else if(str=="t"){
        printOptions();
        terminal.question("...",function(str)){
          str.toLowerCase();
          convertToArray(strcma)
          if(str[2]==NaN){
            return motion.time(str[0],str[1]);
          }
          else if(str=="a"){
            printOptions();
            terminal.question("...",function(str)){
              str.toLowerCase();
              convertToArray(strcma)
              return motion.acceleration(str[1],[3]);
            }
          };
        }
      }
      else if(str=="energy"){
        terminal.question("which variable are you solving for?", function(str){
          str.toLowerCase();
          if(str=="ke"){
            printOptions();
            terminal.question("...",function(str)){
              str.toLowerCase();
              convertToArray(strcma)
              return energy.kineticEnergy(str[4],str[1]);
          }
          else if(str=="m"){
            printOptions();
            terminal.question("...",function(str)){
              str.toLowerCase();
              convertToArray(strcma);
              return energy.mass(str[5],str[1]);
          }
      }
      else if(str=="v"){
        
      }
      else{

      }
    }
  }
});
