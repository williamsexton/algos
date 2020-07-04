/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
[0, 1], [1, 2], [3, 4]
var canFinish = function (numCourses, prerequisites) {
  while (prerequisites.length) {
    let left = new Set();
    let right = new Set();
    for (let arr of prerequisites) {
      left.add(arr[0])
      right.add(arr[1])
    };
    let exclude = new Set([...right].filter(ele => {
      return !left.has(ele)
    }));
    let prevLength = prerequisites.length;
    prerequisites = prerequisites.filter(pair => {
      return !exclude.has(pair[1])
    });
    if (prerequisites.length === prevLength) return false;
  }
  return true
};