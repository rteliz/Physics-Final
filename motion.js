var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
  let distance = v*t;
  return distance;
};

exports.distance2 = function(a,t,v){
  let distance2 = (t*t*a)+(v*t)/2;
  return distance2;
};

exports.velocity = function(d,t){
  let velocity = d/t;
  return velocity;
};

exports.velocity2 = function(vi,a,t){
  let velocity2 = vi+(a*t);
  return velocity2;
};

exports.time = function(d,v){
  let time = d/v;
  return time;
};

exports.time2 = function(vf,vi,a){
  let time2 = (vf-vi)/a;
  return time2;

};

exports.acceleration = function(v,t){
  let acceleration = v/t;
  return acceleration;
};
