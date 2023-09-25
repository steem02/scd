export function delayForDemo<T>(
  promise: () => Promise<T>, delay: number = 300
): () => Promise<T> {
  return async () =>
    await new Promise(resolve => {
      setTimeout(resolve, delay)
    }).then(async () => await promise())
}
