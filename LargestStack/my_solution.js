class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.items.length) {
        return this.items.pop();
      }
      return null;
    }
  
    peek() {
      if (this.items.length) {
        return this.items[this.items.length-1];
      }
      return null;
    }
  }
  
  class MaxStack {
    constructor () {
      /* 
      We use two stack here. One stack to
      store all the values. Another stack 
      to store max values.
      */
      this.stack = new Stack()
      this.maxStack = new Stack() 
    }
  
    push (item) {
      // Push item to the main stack
      this.stack.push(item)
  
      /* 
      If the items array in the max stack is 
      empty or if the current item pushed to 
      the main stack is greater than or equal 
      to the last item in the items array in 
      the max stack, push item to the max stack. 
      */
  
      if (!this.maxStack.peek() || item > this.maxStack.peek()) {
        this.maxStack.push(item)
      }
    }
  
    pop () {
      // Pop last item out from main stack items array
      const item = this.stack.pop()
  
      /* 
      If the item popped out from the main stack is 
      equal to the last item in the maxStack items 
      array, pop it out as well. 
      */
  
      if (item === this.maxStack.peek()) {
        this.maxStack.pop()
      }
  
      return item
    }
  
    peek () {
      if (this.stack.items.length) {
        return this.stack.items[this.stack.items.length - 1]
      }
  
      return null
    }
  
  
    getMax () {
      return this.maxStack.peek()
    }
  }
  
  /* Some console.log tests */
  const maxStack = new MaxStack();
  console.log(maxStack.getMax());   // should print `null`
  
  maxStack.push(1);
  console.log(maxStack.getMax());   // should print 1
  
  maxStack.push(100);
  console.log(maxStack.getMax());   // should print 100
  
  maxStack.pop();
  console.log(maxStack.getMax());   // should print 1