// Runtime is O(n)
// Space Complexity is O(n)

function reconstructTrip(tickets) {
    const trip = []
    const cache = {}
  
    for (let x = 0; x < tickets.length; x++) {
      if (tickets[x][0] === null) {
        trip.push(tickets[x][1])
        continue
      }
  
      cache[tickets[x][0]] = tickets[x][1]
    }
  
    let next = trip[0]
  
    while (trip.length < tickets.length - 1) {
      trip.push(cache[next])
      next = cache[next]
    }
  
    return trip
  }
  
  const tickets = [
    ['PIT', 'ORD'],
    ['XNA', 'CID'],
    ['SFO', 'BHM'],
    ['FLG', 'XNA'],
    [null, 'LAX'],
    ['LAX', 'SFO'],
    ['CID', 'SLC'],
    ['ORD', null],
    ['SLC', 'PIT'],
    ['BHM', 'FLG']
  ]
  
  console.log(reconstructTrip(tickets)) // ['LAX', 'SFO', 'BHM', 'FLG', 'XNA', CID, 'SLC', 'PIT', 'ORD']
  
  