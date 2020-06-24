function nextBigger(n) {
  var numArray = String(n).split("")
  var digitCollector = [];
  var numSwap = 0;
  var collectCounter = numArray.length - 1
  var isChanged = false;

  while (numArray.length > 0) {
    digitCollector.push(Number(numArray.pop()));
    if (Number(numArray[numArray.length - 1]) < Number(digitCollector[digitCollector.length - 1])) {
      for (i = 0; i < digitCollector.length; i++) {
        if (Number(digitCollector[i]) > Number(numArray[numArray.length - 1])) {
          numSwap = numArray[numArray.length - 1];
          numArray[numArray.length - 1] = digitCollector[i];
          digitCollector[i] = numSwap;
          isChanged = true;
          break;
        }
      }
      if (isChanged) break;
    }
  }

  if (!isChanged) return -1;
  return Number(numArray.join("") + sortArray(digitCollector).join(""))
}

function min(array) {
  var min = Infinity
  var minIdx = 0;
  for (var i = 0; i < array.length; i++) {
    if (Number(array[i]) < min) {
      min = Number(array[i]);
      minIdx = i;
    }
  }
  return min
}
function sortArray(array) {
  var isSorted = false;
  var numswap = 0;
  while (!isSorted) {
    isSorted = true
    for (var i = 0; i < array.length - 1; i++) {
      if (Number(array[i + 1]) < Number(array[i])) {
        numswap = array[i + 1];
        array[i + 1] = array[i];
        array[i] = numswap;
        isSorted = false;
      }
    }
  }
  return array;
}