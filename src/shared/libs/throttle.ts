function throttle(func: () => void, duration: number) {
  let isThrottling = false;
  let lastArgs: any[];

  function wrapper(...args: any[]) {
    if (isThrottling) {
      lastArgs = args;
      return;
    }

    func(...args as []);
    isThrottling = true;

    setTimeout(() => {
      isThrottling = false;

      if (lastArgs) {
        wrapper(...lastArgs as any);
        lastArgs = undefined;
      }
    }, duration);
  }

  return wrapper;
}