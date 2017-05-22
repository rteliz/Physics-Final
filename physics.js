const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function end(){
    terminal.close();
}

function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");

}

function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}

terminal.question("What type of equation are you looking for?",function(str)){
    str.toLowerCase();
    //you will configure your series of questions inside here.
    if(str=="motion"){
      terminal.question("What variable are you solving for?",function(str)){
          str.toLowerCase();
          if(str=="d"){
            printOptions();
            terminal.question("...",function(str)){
                str.toLowerCase();
                str=convertToArray(str);
                if(Number.isNaN(str[2])){
                    console.log(motion.distance(str[1],str[3]));
                    end();
                }
                else{
                  console.log(motion.distance2(str[2],str[3],str[1]));
                  end();
                }
            }

          }
          else if(str=="v"){
            printOptions();
            terminal.question("...",function(str)){
                str.toLowerCase();
                str=convertToArray(str);
                if(Number.isNan(str[2]==NaN)){
                  console.log(motion.velocity(str[0],str[3]));
                  end();
                }
                else{
                  console.log(motion.velocity2(str[1],str[2],str[3]));
                  end();
                }
              }
            }
          else if(str=="t"){
          printOptions();
          terminal.question("...",function(str)){
              str.toLowerCase();
              str=convertToArray(str);
              if(Number.isNaN(str[2]==NaN)){
                console.log(motion.time(str[0],str[1]));
                end();
              }
            }
          }
        else if(str=="a"){
          printOptions();
          terminal.question("...",function(str)){
            str.toLowerCase();
            str=convertToArray(str);
            console.log(motion.acceleration(str[1],str[3]));
            end();
          }
        }
      }
    }
    else if(str=="energy"){
      terminal.question("What variable are you solving for?",function(str)){
          str.toLowerCase();
          if(str=="ke"){
            printOptions();
            terminal.question("...",function(str)){
                str.toLowerCase();
                str=convertToArray(str);
                console.log(energy.kineticEnergy(str[4],str[1]));
                end();
              }
            }
          else if(str=="m"){
            printOptions();
            terminal.question("...",function(str)){
                str.toLowerCase();
                str=convertToArray(str);
                console.log(energy.mass(str[5],str[1]));
                end();
        }
      }
        else if(str=="v"){
            printOptions();
            terminal.question("...",function(str)){
                str.toLowerCase();
                str=convertToArray(str);
                console.log(energy.velocity(str[5],str[4]));
                end();
        }
    }
  }
    else{
        console.log("try again, ol' buddy ol' pal");
        end();
    }
});
