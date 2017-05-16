var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
  let distance = v*t;
  return distance;
};

exports.distance2 = function(a,t,v){
  let distance2 = (t*t*a/2)+(v*t);
  return distance2;
};

exports.velocity = function(d,t){
  let velocity = d*t;
  return velocity;
};

exports.velocity2 = function(){

};

exports.time = function(d,v){
  let time = d/v;
  return time;
};

exports.time2 = function(){
  
};

exports.acceleration = function(v,t){
  let acceleration = v/t,
  return acceleration;
};
