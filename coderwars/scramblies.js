function scramble(str1, str2) {
  var lc1 = letterCounter(str1)
  var lc2 = letterCounter(str2)
  for (keys in lc2) {
    if (lc2[keys] > lc1[keys] || lc1[keys] === undefined) return false;
  }
  return true;
}

function letterCounter(string) {
  var letterCount = {};
  for (i = 0; i < string.length; i++) {
    if (letterCount[string[i]] === undefined) letterCount[string[i]] = 1
    else letterCount[string[i]] += 1
  }
  return letterCount;
}