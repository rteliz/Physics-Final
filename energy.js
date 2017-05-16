var exports = module.exports = {};

//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){
  let ke = m*v*v/2;
  return ke;
};

exports.mass = function(ke,v){
  let mass = 2*ke/(v*v);
  return mass;
};

exports.velocity = function(ke,m){
  let velocity = Math.sqrt(2*ke/m);
  return velocity;
};
