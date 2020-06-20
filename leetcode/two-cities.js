var twoCitySchedCost = function (costs) {
  sorted = costs.sort((ele1, ele2) => -(Math.abs(ele1[0] - ele1[1]) - Math.abs(ele2[0] - ele2[1])))
  let cityA = []
  let cityB = []
  let i = 0;
  let cost = 0;
  while (cityA.length < costs.length / 2 && cityB.length < costs.length / 2) {
    if (costs[i][0] <= costs[i][1]) {
      cost += costs[i][0]
      cityA.push(costs[i][0])
    } else {
      cost += costs[i][1]
      cityB.push(costs[i][1])
    }
    i++
  }
  while (cityA.length < costs.length / 2 || cityB.length < costs.length / 2) {
    if (cityA.length < costs.length / 2) {
      cost += costs[i][0]
      cityA.push(costs[i])
    } else {
      cost += costs[i][1]
      cityB.push(costs[i])
    }
    i++
  }
  return cost;
}