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
const Rand = {
	value() {
		let array = arguments;
		if (array.length == 1 && Debug.is(array[0], Array))
			array = array[0];
		if (array.length === 0)
			throw new InputError("not enough values");
		return a[this.int(a.length)];
	},
	int(min, max) {
		if (min === void 0) min = 2;
		else Debug.check(min, Number);
		if (max === void 0)
			return Math.floor(Math.random() * min);
		Debug.check(max, Number);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	float(min, max) {
		if (min === void 0) min = 1;
		else Debug.check(min, Number);
		if (max === void 0)
			return Math.random() * min;
		Debug.check(max, Number);
		return Math.random() * (max - min) + min;
	}
};
