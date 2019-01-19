function integerPairs(arr, num) {
  // Runtime O(n log n)
  arr.sort((a, b) => a - b)

  let count_down = arr.length / 2 - 1
  
  // Runtime O(n)
  for (let x = arr.length / 2; x <= arr.length; x++) {
    if (arr[x] + arr[count_down] === num) {
      console.log(`${arr[x]} ${arr[count_down]}`)
    }
    count_down--
  }
}

integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
// should print '6 5', '7 4', '8 3', '9 2', '10 1'