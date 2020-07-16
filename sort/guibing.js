const guibing = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  //分成两份
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)
  return hb(guibing(left), guibing(right))
}
const hb = (left, right) => {
  let result = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  if (leftIndex < left.length) {
    result = [...result, ...left.slice(leftIndex, left.length)]
  }
  if (rightIndex < right.length) {
    result = [...result, ...right.slice(rightIndex, right.length)]
  }
  return result
}


console.log(
  guibing([1, 2, 9, 6, 5, 7, 8])
)
