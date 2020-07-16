const kuaipai = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  //找一个中间点
  const midIndex = Math.floor(arr.length / 2)
  const mid = arr.splice(midIndex, 1)[0]
  //左边 右边
  const left = []
  const right = []
  arr.forEach(item => {
    item > mid ? right.push(item) : left.push(item)
  });
  return [...kuaipai(left), mid, ...kuaipai(right)]
}

console.log(
  kuaipai([1, 5, 6, 345, 23, 7, 4, 6, 45])
)
