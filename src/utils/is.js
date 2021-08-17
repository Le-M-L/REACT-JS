
export function is(val, type) {
  return toString.call(val) === `[object ${type}]`;
}

export function isObject(val) {
  return val !== null && is(val, 'Object');
}

export function isNumber(val) {
  return is(val, 'Number');
}

export function isPromise(val) {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function isString(val) {
  return is(val, 'String');
}

export function isFunction(val) {
  return typeof val === 'function';
}

export function isBoolean(val) {
  return is(val, 'Boolean');
}

export function isRegExp(val) {
  return is(val, 'RegExp');
}

export function isArray(val) {
  return val && Array.isArray(val);
}

export function isWindow(val) {
  return typeof window !== 'undefined' && is(val, 'Window');
}

export function isUrl(path) {
    const reg =
      /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
    return reg.test(path);
  }