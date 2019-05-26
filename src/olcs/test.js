
export default  class test{
	
	 constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
	add(){
		return this.x+this.y;
	}
};

