const MNode = require("./mnode");
class MStack {
  constructor() {
      this.head = null;
      this.count = 0 ;
  }

  size(){
      return this.count;
      let count = 0;
      while(n!==null){
        n = n.getNext();
        count += 1;
      }
      return count;
    }

  top(){

    return this.head;
  }

  push(value){
  const newNode = new MNode(value);
  newNode.setNext(this.head);
  this.head = newNode;
  this.head.push(item);

  }

  pop(){
    if (!this.head) {
       throw "stack empty";
     }
     const popped = this.head;
     this.head = this.head.getNext();
     popped.setNext(null);
     return popped;
  }

}
module.exports = MStack
