"use strict";
class InputError extends Error {
  constructor(msg) {
    super();
    this.name = "InputError";
    this.message = msg || "";
  }
}
const Debug = {
  check(obj, type) {
    if (obj === null || obj === void 0)
      throw new InputError("first argument is " + obj);
    if (typeof type != "function")
      throw new InputError("second argument is not a function");
    if (!this.is(obj, type))
      throw new InputError("expected " + type.name + ", got " + obj.constructor.name);
  },
  is(obj, type) {
    if (obj === null || obj === void 0)
      return false;
    return obj instanceof type || typeof obj == type.name.toLowerCase();
  }
};
