/**
 * Creates a new class.
 * @param {string} name class' name
 * @param {object} proto class' prototype
 * @constructor
 */
var Class = function Class(name, proto) {
  proto || (proto = {});

  var newClass = function () {
    this.init && this.init();
  };

  newClass.prototype = Object.create(Class.prototype);
  newClass.prototype.constructor = newClass;
  newClass.className = name;
  newClass.inherits = Class.inherits;

  Object.keys(proto).forEach(function (key) {
    newClass.prototype[key] = proto[key];
  });

  return newClass;
};

Class.inherits = function inherits(superClass) {
  this.superClass = superClass;

  return this;
};

Class.prototype.superClass = function superClass() {
  return this.constructor.superClass;
};

Class.prototype._superClassCall = function _superClassCall(methodName, args) {
  var superClass = this.superClass();

  if (!superClass || !methodName) {
    return;
  }

  var superMethod = superClass.prototype[methodName];

  if (superMethod) {
    return superMethod.apply(this, args);
  }
};

Class.prototype._super = function _super() {
  var methodName = arguments.callee.caller.name;
  var args = Array.prototype.slice.call(arguments);
  return this._superClassCall(methodName, args);
};
