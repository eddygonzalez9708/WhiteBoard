function cellCompete(states, days) {
  while (days) {
    const new_state = []
    for (let index = 0; index < states.length; index++) {
      if (index === 0) {
        0 === states[index + 1] ? new_state[index] = 0: new_state[index] = 1
      } else if (index === states.length - 1) {
        0 === states[index - 1] ? new_state[index] = 0: new_state[index] = 1
      } else {
        states[index - 1] === states[index + 1] ? new_state[index] = 0: new_state[index] = 1
      }
    }
    
    days--
    
    states = [...new_state]
  }
  
  return states
}

console.log(cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1)) // Should return [0 1 0 0 1 0 1 0]
console.log(cellCompete([1, 1, 1, 0, 1, 1, 1, 1], 2)) // Should return [0 0 0 0 0 1 1 0]