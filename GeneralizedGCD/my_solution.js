// Runtime is O(n)

function generalizedGCD(num, arr) {
    let greatest_result = 0
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] % num === 0) {
        if (arr[x] / num > greatest_result) {
          greatest_result = arr[x] / num
        }
      }
    }
  
    return greatest_result
  }
  
  console.log(generalizedGCD(5, [2, 3, 4, 5, 6])) // Should return 1
  console.log(generalizedGCD(5, [2, 4, 6, 8, 10])) // Should return 2