function scramble(str1, str2) {
  var lc1 = letterCounter(str1)
  var lc2 = letterCounter(str2)
  for (keys in lc2) {
    if (lc2[keys] > lc1[keys] || lc1[keys] === undefined) return false;
  }
  return true;
}

