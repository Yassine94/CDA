class MSet extends Array{
  push(element){
      if (this.indexOf(element) == -1) {
      return  super.push(element);
    }
  }
}
module.exports = MSet;
