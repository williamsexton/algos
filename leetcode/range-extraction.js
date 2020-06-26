function solution(list) {
  var result = ""
  var onstreak = false;
  list.forEach((element, idx) => {
    if (element + 1 === list[idx + 1] && element - 1 === list[idx - 1]) {

    } else if (element + 1 === list[idx + 1] && element - 1 !== list[idx - 1] && element + 2 === list[idx + 2]) {
      result += element + "-";
    } else {
      result += element
      if (idx !== list.length - 1) result += ",";
    }
  })
  return result;
}