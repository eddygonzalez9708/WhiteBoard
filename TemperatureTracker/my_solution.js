class TempTracker {
    constructor (temp) {
      this.cache = {}
      this.count = 1
      this.max = null 
      this.min = null
      this.mode = []
      this.temps = []
      this.total = 0
    }
  
    insert (temp) {
      this.total += temp
      this.temps.push(temp)
      
      if (temp > this.max ||
      this.max === null) {
        let mem = this.max
        this.max = temp
        if (mem < this.min || this.min === null) {
          this.min = mem
        }
      }
  
      if (temp < this.min) {
        this.min = temp
      }
  
      if (this.cache[temp]) {
        this.cache[temp] += 1
      } else {
        this.cache[temp] = 1
      }
  
  
      if (this.cache[temp] > this.count) {
        this.mode = []
        this.mode.push(temp)
        this.count = this.cache[temp]
      } else if (this.cache[temp] === this.count) {
        this.mode.push(temp)
      }
    }
  
    getMax () {
      if (this.max !== null) {
        return this.max
      } else {
        return "No max value."
      }
    }
  
    getMin () {
      if (this.min !== null) {
        return this.min
      } else {
        return "No min value."
      }
    }
  
    getMean () {
      return Number((this.total / this.temps.length).toFixed(2))
    }
  
    getMedian () {
      if (this.temps.length > 2) {
        let num = this.temps.length % 2

        if (num === 0) {
          const even = this.temps.length / 2
          return (this.temps[even] + this.temps[even - 1]) / 2 
        } else {
          return this.temps[Math.floor(this.temps.length / 2)]
        }
      } else {
        return this.temps.length > 0 ? 
            this.temps.length > 1 ? 
                (this.temps[0] + this.temps[1]) / 2 
                    : this.temps : "No values entered."
      }
    }
  
    getMode () {
      return this.mode
    }
  }
  
  const obj = new TempTracker()
  
  obj.insert(5)
  console.log(obj.temps)
  console.log(obj.getMax())
  console.log(obj.getMin())
  console.log(obj.getMean())
  console.log(obj.getMedian())
  console.log(obj.getMode())
  
  console.log()
  
  obj.insert(6)
  console.log(obj.temps)
  console.log(obj.getMax())
  console.log(obj.getMin())
  console.log(obj.getMean())
  console.log(obj.getMedian())
  console.log(obj.getMode())
  
  console.log()
  
  obj.insert(3)
  console.log(obj.temps)
  console.log(obj.getMax())
  console.log(obj.getMin())
  console.log(obj.getMean())
  console.log(obj.getMedian())
  console.log(obj.getMode())
  
  console.log()
  
  obj.insert(10)
  console.log(obj.temps)
  console.log(obj.getMax())
  console.log(obj.getMin())
  console.log(obj.getMean())
  console.log(obj.getMedian())
  console.log(obj.getMode())
  
  console.log()
  
  obj.insert(4)
  console.log(obj.temps)
  console.log(obj.getMax())
  console.log(obj.getMin())
  console.log(obj.getMean())
  console.log(obj.getMedian())
  console.log(obj.getMode())
  
  console.log()
  
  obj.insert(4)
  console.log(obj.temps)
  console.log(obj.getMax())
  console.log(obj.getMin())
  console.log(obj.getMean())
  console.log(obj.getMedian())
  console.log(obj.getMode())
  
  console.log()
  
  obj.insert(22)
  console.log(obj.temps)
  console.log(obj.getMax())
  console.log(obj.getMin())
  console.log(obj.getMean())
  console.log(obj.getMedian())
  console.log(obj.getMode())
  
  console.log()
  
  obj.insert(55)
  console.log(obj.temps)
  console.log(obj.getMax())
  console.log(obj.getMin())
  console.log(obj.getMean())
  console.log(obj.getMedian())
  console.log(obj.getMode())
  