function sortArray(array, sortType) {
    if (sortType === 'asc') {
        return array.sort((a, b) => {
            return a - b
        });
    } else {
        return array.sort((a, b) => {
          return  b - a
        });
    }
}
sortArray([14, 7, 6, 8], 'asc');