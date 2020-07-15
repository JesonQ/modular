module.exports = {
  data:'module1',
  foo(){
    console.log('foo()------',this.data);
  },
  bar(){
    console.log('bar()------',this.data);
  }
}