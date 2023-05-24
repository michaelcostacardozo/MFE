export const noop = () => { };

export const isEmptyObject = obj => {
  if (obj == null || typeof obj === 'string') {
    return true;
  }

  if (obj.keys !== 'undefined') {
    return Object.keys(obj).length === 0;
  }

  return true;
};

export const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);

export const t = (value, substitutions) => {
  if (value && substitutions) {
    for (const key in substitutions) {
      value = value.replace(new RegExp(`__${key}__`, 'gi'), substitutions[key]);
    }
  }

  return value;
};

export const debounce = (func, delay) => {
  let inDebounce;
  return function (event, data) {
    const myEvent = { ...event };
    clearTimeout(inDebounce);
    inDebounce = setTimeout(func, delay, myEvent, data);
  };
};

export const isPromise = (p) => typeof p === 'object' && typeof p.then === 'function';
