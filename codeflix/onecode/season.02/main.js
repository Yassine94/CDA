
const{transform} = require('./streambox');
const file = process.argv[2]


transform(file,/[ab]/,(x)=>{return x.toUpperCase()})
