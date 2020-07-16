const maopao = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - (i + 1); j++) {
      (arr[j] > arr[j + 1]) && ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]])
    }
  }
  return arr
}

console.log(
  maopao([1, 78, 2, 4, 6, 8, 3])
)