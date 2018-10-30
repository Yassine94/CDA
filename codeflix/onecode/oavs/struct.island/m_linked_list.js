const mNode = require("./m_node");
class mLinkedList{
  constructor() {
    this._head = null
    this._length = 0

  }

    // get_Head(){
    //   return this._head;
    // }
    //
    // set_Head(_data){
    //   this._data = _data
    // }
    // get_Length(){
    //   return this._length;
    // }
    //
    // set_Length(node){
    //   this._next = node
    // }

    length(){
      return this._length
    }

    isEmpty(){
      if (this._head == null) {
        return true
      }
      else {
        return false
      }
    }

    push(){

      let parent = this;
   if (data instanceof Array) {
     _data.forEach(function(value) {
       parent.push(value);
     });
   }

      const newNode = new mNode(element);
      if(this._head === null){
        this._head = newNode;
      } else {
        let current = this._head;
        while (current.getNext() !== null) {
          current = current.getNext();

        }
          current.setNext(newNode);
      }
       this._length++;
    }
    pop(){
      if (!this._head) {
        throw "list empty";
      }
      const popped = this._head;
      this._head = this._head.getNext();
      popped.setNext(null);
      this._length--;
      return popped;
    }


    getNodeByIndex(index){
    let i = 0;
    let n = this._head;
    while (i < index && n.getNext()) {
      i++;
      n = n.getNext();
    }
    if (i == index) {
      return n;
    }
    else {
      throw "out of space";
    }
  }
  popNodeByIndex(index){


  let nodeToRemove = this._head;
  if (this._length == 1) {
    this._head = null
  }
  else {
    this._head =  this._head.get_next();

  }
  this._length--;
  nodeToRemove.set_next(null)
  return nodeToRemove;
  }
  getNodeByValue(v){
    let i = 0;
    let n = this._head;
    while (i < v && n.getNext()) {
      i++;
      n = n.getNext();
    }
    if (i == ) {
      n.setNext(null);
      return n;
    }
    else {
      throw "out of space";
    }

  }
  reverseList(){


    var current = this._head;
    var next = null;
    var prev = null;

    while(curr) {
      next = current.getNext();

      current._next = prev;

      prev = current;

      current = next;
    }
    this._head = prev;


  }

  forEach(func) {
   let n = this._head;
   while(n.getNext()) {
     func(n);
     n = n.getNext();
   }
   return this;
 }

  toArray(){
 let tab = [];
 let head = this._head
 while (_head.get_next() != null) {
   tab.push(_head.get_data())
   head = _head.get_Next()

 }
  toString(){

  }
}


module.exports = mLinkedList();
