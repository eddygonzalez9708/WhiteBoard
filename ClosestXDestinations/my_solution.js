function ClosestXdestinations(numDestinations, allLocations, numDeliveries) {
  // WRITE YOUR CODE HERE
  
  const results = []
  const return_arr = []
  
  for (let x = 0; x < numDestinations; x++) {
    results.push(Math.pow(allLocations[x][0]**2 + allLocations[x][1]**2, 1/2))
  } 
  
  const sorted_result = [...results].sort((a, b) => a - b)
  
  for (let y = 0; y < numDeliveries; y++) {
    return_arr.push(allLocations[results.indexOf(sorted_result[y])])
  }
    
    return return_arr
  }
  
  // Tests
  
  console.log(ClosestXdestinations(3, [[1, -3], [1, 2], [3, 4]], 1)) // should return [[1, 2]]
  console.log(ClosestXdestinations(6, [[3, 6], [2, 4], [5, 3], [2, 7], [1, 8], [7, 9]], 3)) // should return [[ 2, 4 ], [ 5, 3 ], [ 3, 6 ]]
  
  
  
  