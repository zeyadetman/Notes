export function watchAnyObject(
  object = {},
  methods = [],
  callbackBefore = function () {},
  callbackAfter = function () {}
) {
  for (let method of methods) {
    const original = object[method].bind(object);
    const newMethod = function (...args) {
      // @ts-ignore
      callbackBefore(method, ...args);
      const result = original.apply(null, args);
      // @ts-ignore
      callbackAfter(method, ...args);
      return result;
    };
    object[method] = newMethod.bind(object);
  }
}
