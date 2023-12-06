const debounce = (callback: () => void, timer: number): NodeJS.Timeout => {
  return setTimeout(callback, timer)
}

export default debounce
