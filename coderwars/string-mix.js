function mix(s1, s2) {
  var lc1 = lettercount(s1);
  var lc2 = lettercount(s2);
  var list = listBuilder(lc1, lc2)
  var result = ""
  list = sortListByNumber(list);
  list = sortListBySource(list)
  list = sortListByLetter(list);
  for (var i = 0; i < list.length; i++) {
    result += list[i][2] + ":"
    for (var j = 0; j < list[i][1]; j++) result += list[i][0]
    if (i !== list.length - 1) result += "/"
  }
  return result;
}

function lettercount(str) {
  var result = {}
  var lowers = 'abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < str.length; i++) {
    if (result[str[i]] === undefined && lowers.indexOf(str[i]) !== -1) result[str[i]] = 1;
    else if (lowers.indexOf(str[i]) !== -1) result[str[i]] += 1;
  }
  return result
}

function listBuilder(lc1, lc2) {
  var result = []
  var used = []
  for (var keys in lc1) {
    if (lc1[keys] > lc2[keys] || lc2[keys] === undefined) {
      if (lc1[keys] > 1 && !used.includes(keys)) {
        result.push([keys, lc1[keys], '1'])
        used.push(keys)
      }
    }
  }
  for (var keys in lc2) {
    if (lc2[keys] > lc1[keys] || lc1[keys] === undefined) {
      if (lc2[keys] > 1 && !used.includes(keys)) {
        result.push([keys, lc2[keys], '2'])
      }
    } else if (lc1[keys] === lc2[keys] && lc1[keys] > 1 && !used.includes(keys)) {
      result.push([keys, lc2[keys], '='])
      used.push(keys)
    }
  }
  return result;
}


function sortListByNumber(list) {
  var newList = []
  while (newList.length < list.length) {
    var max = -1 * Infinity;
    var maxIndex = -1
    for (var i = 0; i < list.length; i++) {
      if (list[i][1] > max) {
        max = list[i][1]
        maxIndex = i
      }
    }
    newList.push(list[maxIndex])
    list[maxIndex] = [0, 0, 0]

  }
  return newList;
}
function sortListByLetter(list) {
  var changeEle = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
      if (list[i][1] === list[j][1] && alphabet.indexOf(list[i][0]) > alphabet.indexOf(list[j][0]) && list[i][2] === list[j][2]) {
        changeEle = list[i].slice(0)
        list[i] = list[j].slice(0)
        list[j] = changeEle
      }
    }
  }
  return list;
}
function sortListBySource(list) {
  var changeEle = [];
  var order = { "1": 3, "2": 2, "=": 1 }
  for (var i = 0; i < list.length; i++) {
    for (var j = i + 1; j < list.length; j++) {
      if (list[i][1] === list[j][1] && order[list[i][2]] < order[list[j][2]]) {
        changeEle = list[i].slice(0)
        list[i] = list[j].slice(0)
        list[j] = changeEle
      }
    }
  }
  return list;
}