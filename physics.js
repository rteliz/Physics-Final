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

                };
            }
        }
    }
}
    else if(str=="energy"){

    }
}
}
});
