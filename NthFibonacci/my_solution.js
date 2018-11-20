// Naive Solution 

function naiveNthFib(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    
    return naiveNthFib(n-1) + naiveNthFib(n-2);
}
  
console.log(naiveNthFib(5)) // should print 5 
  
// More efficient solution

function betterNthFib(n) {
    let cache = {
        1: 1,
        2: 1
    }
    
    if (n === 1 || n === 2) {
      return 1
    }
  
    for (let x = 3; x <= n; x++) {
      cache[x] = cache[x - 1] + cache[x - 2]
    } 
  
    return cache[n]
}
  
console.log(betterNthFib(1000)) // should print 4.346655768693743e+208 in less than 1 second  