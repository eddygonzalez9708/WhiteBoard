function timePlanner(a, b, duration) {  
    let index_a = 0;
    let index_b = 0; 
    let continue_loop = true
  
    while (continue_loop) {
      const first_time = Math.max(a[index_a][0], b[index_b][0])
      const second_time = Math.min(a[index_a][1], b[index_b][1])
      if (first_time + duration <= second_time) {
        return [first_time, first_time+duration]
      } 
  
      if (a.length === index_a - 1 && b.length === index_b - 1) {
        break
      }
  
      if (a[index_a][1] > b[index_b][1]) {
        if (a[index_a][1] === b[index_b][1]) {
          a.length === index_a + 1 ? index_b++ : index_a++
          b.length === index_b + 1 ? index_a++ : index_b++
        } else {
          b.length === index_b + 1 ? continue_loop = false : index_b++
        }
      } else {
        a.length === index_a + 1 ? continue_loop = false : index_a++
      }
    }
  
    return []
  }
  
  const time_one = [[10, 50], [60, 120], [140, 210]]       
  const time_two = [[0, 15], [60, 70]]      
  let duration_one = 8 
  console.log(timePlanner(time_one, time_two, duration_one)) // output: [60, 68]
  
  const time_three = [[10, 50], [60, 120], [140, 210]]
  const time_four = [[0, 15], [60, 72]]
  const duration_two = 12
  console.log(timePlanner(time_three, time_four, duration_two)) // output: [60, 72]
  
  const time_five = [[10, 50], [60, 120], [140, 210]]        
  const time_six = [[0, 15], [60, 70]]         
  const duration_three = 12 
  console.log(timePlanner(time_five, time_six, duration_three)) // output: [] // since there is no common slot  