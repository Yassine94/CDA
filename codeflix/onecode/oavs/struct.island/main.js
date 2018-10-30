// const MStack = require("./mstack");
// const s = new MStack();
// s.push(1);
// s.push(2);
// s.push(3);
// s.push(4);
// s.pop();
// console.log(s.size());
// console.log(s.top());

// const MNode = require("./mnode");
//
// const st = new MStack();
// console.log(st.size());
//
// st.push(42);
// st.push(1337);
// st.push(86);
//
// console.log(st);

const mLinkedList = require("./m_linkded_list");
const l = new mLinkedList

const mNode = require("./m_node");
const e = new mNode


console.log(l.forEach(function(e) {
e._data *= 2;
return e;
}));
