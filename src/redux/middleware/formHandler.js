const actionListeners = [];

export const formHandlerMiddleware = () => (next) => (action) => {
  const actionPromise = next(action);

  actionListeners.forEach((listener) => listener.emit(action));

  return actionPromise;
};

class ActionListener {
  constructor(finalizer) {
    this.handlers = [];
    this.finalizer = finalizer;
  }

  emit(action) {
    this.handlers.filter((handler) => handler.type === action.type).forEach((handler) => handler.next(action.payload));
  }

  subscribe(type, next) {
    this.handlers.push({ type, next });
  }

  reset() {
    this.handlers = [];
  }

  destroy() {
    this.reset();
    this.finalizer();
  }
}

export const createSubscription = () => {
  let subscriptionIndex = -1;

  const listener = () => actionListeners.splice(subscriptionIndex, 1);

  const subscription = new ActionListener(listener);

  subscriptionIndex = actionListeners.push(subscription) - 1;

  return subscription;
};
