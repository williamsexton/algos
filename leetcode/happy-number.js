/****
  @param {number} n
  @return {boolean}
*/
var isHappy = function (n) {
  let visited = new Set()
  visited.add(n)
  let newNum = n + ""

  while (true) {
    newNum = newNum.split("").map((num) => parseInt(num) ** 2).reduce((a, b) => a + b, 0);
    if (newNum === 1) return true
    if (visited.has(newNum)) return false
    visited.add(newNum)
    newNum = newNum + ""
    console.log(newNum)
  }

}