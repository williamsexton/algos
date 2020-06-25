function fib(n) {
  if (n === 0) return 0n;
  if (n < 0) {
    if (n % 2 === 0) return -fib(-n)
    else return fib(-n)
  }
  var binSearch = binarySearch(n)
  console.log(binSearch)
  var fibArr = [1n, 1n]
  var i = 1n;
  binSearch.forEach((element, idx) => {
    fibArr = fibDouble(fibArr);
    i *= 2n
    if (element === 0 && idx !== 0) {
      fibArr = fibMinus(fibArr)
      i--
    }
    if (element === 1) {
      fibArr = fibPlus(fibArr)
      i++
    }
  });
  while (i < n) {
    fibArr = fibDouble(fibArr)
    i *= 2n
  }
  return fibArr[0]
}



function fibDouble(arr) { return [arr[0] * (2n * arr[1] - arr[0]), arr[0] * arr[0] + arr[1] * arr[1]] }
function fibPlus(arr) { return [arr[1], arr[0] + arr[1]] }
function fibMinus(arr) { return [arr[1] - arr[0], arr[0]] }

function binarySearch(n) {
  var result = []
  var resultNum = 1
  var twoPower = 0

  var i = 1;
  while (i < n && 2 * i <= n) {
    i *= 2
    twoPower++
    resultNum = i;
  }
  console.log(n, twoPower)
  while (i !== n) {
    if (i > n) {
      i -= Math.pow(2, twoPower - 1)
      result.push(0)
      twoPower -= 1
    } else {
      i += Math.pow(2, twoPower - 1)
      result.push(1)
      twoPower--
    }

  }
  return result;
}