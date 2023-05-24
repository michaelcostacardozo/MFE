export const subscribe = (eventName, listener, options?) =>
  document.addEventListener(eventName, listener, options)


export const unsubscribe = (eventName, listener) => {
  document.removeEventListener(eventName, listener);
}

export const publish = (eventName, data) => {
  const event = new CustomEvent(eventName, { detail: data });

  document.dispatchEvent(event);
}
