function formatDuration(seconds) {
  if (seconds === 0) return 'now'
  var result = [];
  var time = { year: Math.floor(seconds / 86400 / 365), day: Math.floor(seconds / 86400) % 365, hour: Math.floor(seconds / 3600) % 24, minute: Math.floor(seconds / 60) % 60, second: seconds % 60 }
  for (keys in time) {
    if (time[keys] !== 0) {
      result.push()
      if (time[keys] > 1) result.push(time[keys] + " " + keys + "s")
      else result.push(time[keys] + " " + keys)
    }
  }
  if (result.length > 1) {
    var ele1 = " and " + result.pop()
    ele1 = result.pop() + ele1
    result.push(ele1)
  }
  return result.join(", ")
}