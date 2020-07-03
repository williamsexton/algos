/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
[0, 1], [1, 2], [3, 4]
var canFinish = function (numCourses, prerequisites) {
  while (prerequisites.length) {
    let left = [];
    let right = [];
    for (let arr of prerequisites) {
      left.push(arr[0])
      right.push(arr[1])
    };
    let exclude = right.filter(ele => {
      return !left.includes(ele)
    });
    let prevLength = prerequisites.length;
    prerequisites = prerequisites.filter(pair => {
      return !exclude.some(ele => {
        return pair.includes(ele)
      })
    });
    if (prerequisites.length === prevLength) return false;
  }
  return true
};