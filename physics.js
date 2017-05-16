const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?",function(str){

    //you will configure your series of questions inside here.


});

function distance(v,t){
    let distance=v*t;
    return distance;
}
function ke(m,v){
    let energy=m*v*v/2;
    return energy;
}
