

export default  class test{

	 constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

	add(x){
		return this.x+this.y;
	}
};

