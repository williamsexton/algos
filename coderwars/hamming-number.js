//  HAMMING NUMBERS //

// function hamming (n) {
//   var number = 1;
//   var i=2;
//   var counter = 1;
//     while(counter<n){
//       if(i%2 === 0 || i%3 === 0 || i%5 === 0){
//         if(isHamming(i)){
//         number = i;
//         counter++;
//         i++;
//         }
//         else i++
//       }else i++;
//     }
//     if(n%10 === 0 ) console.log(n)
//   return number;
// }

// function isHamming(n){
// var k = n
// while(k%2 === 0) k = k/2;
// while(k%3 === 0) k = k/3;
// while(k%5 === 0) k = k/5;
// return (k===1);
// }


function hamming(n) {
  var i = 0;
  var j = 0;
  var k = 0;
  var ham = 0;
  var hams = [1]
  for (var idx = 0; idx < n; idx++) {
    ham = Math.min(2 * hams[i], 3 * hams[j], 5 * hams[k])
    hams.push(ham)
    if (2 * hams[i] <= ham) i++
    if (3 * hams[j] <= ham) j++
    if (5 * hams[k] <= ham) k++

  }
  return hams[idx - 1]
}