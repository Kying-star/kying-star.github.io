const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]

function quickSort(array) {
    if (array.length < 2) return array
    let pivot = array[array.length - 1]
    let left = array.filter((v, i) => v <= pivot && i != array.length -1)
    let right = array.filter(v => v > pivot)
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr))
  