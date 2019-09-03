function solve (arr, startIndex, endIndex) {
    if (!Array.isArray(arr) || arr.some(x => isNaN(x))) {
      return NaN
    }
  
    startIndex = Math.max(0, startIndex)
    endIndex = Math.min(arr.length, endIndex + 1)
    let sum = arr.slice(startIndex, endIndex).reduce((acc, e) => acc + e, 0)
  
    return sum
  }
solve([10, 20, 30, 40, 50, 60], 3, 300)