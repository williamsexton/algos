function add(a, b) {
  var arrA = a.split("")
  var arrB = b.split("")

  var carryTheOne = 0;
  arrA = arrA.map(element => Number(element))
  arrB = arrB.map(element => Number(element))
  var arrSwap = [];
  if (arrB.length > arrA.length) {
    arrSwap = arrA.slice(0);
    arrA = arrB.slice(0);
    arrA = arrSwap;
  } // makes arrA the longer one always
  var loopLength = arrA.length
  for (var i = 1; i <= loopLength; i++) {      //for loop itterating through arrA
    if (i <= arrB.length) {
      if (arrA[arrA.length - i] + arrB[arrB.length - i] + carryTheOne > 9) {
        arrA[arrA.length - i] = (arrA[arrA.length - i] + arrB[arrB.length - i] + carryTheOne) % 10
        carryTheOne = 1;
        if (i === arrA.length) arrA.unshift("1")
      } else {
        arrA[arrA.length - i] = (arrA[arrA.length - i] + arrB[arrB.length - i] + carryTheOne) % 10
        carryTheOne = 0;
      }
    }  //while there are digits in both arrays
    else {
      if (arrA[arrA.length - i] + carryTheOne > 9) {
        arrA[arrA.length - i] = (arrA[arrA.length - i] + carryTheOne) % 10
        carryTheOne = 1;
        if (i === arrA.length) arrA.unshift("1")
      }
      else {
        arrA[arrA.length - i] = (arrA[arrA.length - i] + carryTheOne)
        carryTheOne = 0;
      }
    } /// carrys remaining ones and adds a digit if necesary
  }
  return arrA.join("");
}