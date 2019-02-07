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
    if (!this.is(type, Function))
      throw new InputError("second argument is not a function");
    if (!this.is(obj, type))
      throw new InputError("expected " + type.name + ", got " + obj.constructor.name);
  },
  multicheck() {
    let a = arguments;
    if (a.length < 2)
      throw new InputError("not enough arguments");
    for (let i = 0; i < a.length - 1; i++)
      this.check(a[i], a[a.length - 1]);
  },
  is(obj, type) {
    if (obj === null || obj === void 0 || typeof type != "function") return false;
    return obj instanceof type || typeof obj == type.name.toLowerCase();
  }
};
