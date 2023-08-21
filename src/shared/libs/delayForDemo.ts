export function delayForDemo<T>(
  promise: () => Promise<T>, delay: number = 300,
): () => Promise<T> {
  return () =>
    new Promise(resolve => {
      setTimeout(resolve, delay);
    }).then(() => promise());
}

