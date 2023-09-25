function debounce(func: () => void, duration: number) {
  let timer: any
  return (...args: []) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      func(...args as [])
    }, duration)
  }
}
