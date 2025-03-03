function greet(username) {
  console.log('Hello '+username);
}

// The module.exports is a special object which is included in every JS file in the Node.js application by default. module is a variable that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.
module.exports = greet;