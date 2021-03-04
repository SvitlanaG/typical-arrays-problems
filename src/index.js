
exports.min = function min (array) {
  let minValue = 0;
    if (typeof array !== 'undefined' && array.length) {
      minValue = array.sort(function(a, b) {return a - b}).shift();
      return minValue;
    } else return minValue;
}

exports.max = function max (array) {
  let maxValue = 0;
  if (typeof array !== 'undefined' && array.length) {
    maxValue = array.sort(function(a, b) {return b - a}).shift();
    return maxValue;
  } else return maxValue;
}

exports.avg = function avg (array) {
  let avgValue = 0;
  if (typeof array !== 'undefined' && array.length) {
    avgValue = array.reduce((function(total, num) {return total + num})) / array.length;
    return avgValue;
  } else return avgValue;
}
