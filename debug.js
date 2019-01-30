"use strict";
const InputError = function(msg) {
  this.name = "InputError";
  if (msg) this.message = msg;
};
InputError.prototype = Error.prototype;
const Debug = {
  check(obj, type) {
    if (obj === null || obj === void 0) throw new InputError("first argument is " + obj);
    if (typeof type != "function") throw new InputError("second argument is not a function");
    if (obj instanceof type || typeof obj == type.name.toLowerCase()) return;
    throw new InputError("expected " + type.name + ", got " + obj.constructor.name);
  }
};
