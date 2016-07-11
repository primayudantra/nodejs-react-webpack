QUnit.test( "Core - Input Type Handling", inputs);
QUnit.test( "Core - Basics objct()", news);
QUnit.test( "Core - Basics extend: objct.extend()", extend);
QUnit.test( "Decorator – Basic function behavior", basic);
QUnit.test( "Decorator – Calls and Params from objct", calls);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function extend(assert, options) {
	var prefix = "Basics Extend: ";
	var arg = "arg";
	var a = {
	    a : "A",                    
	    getA : function(){ return this.a },
	    getValue:function(){ 
	       	return this.a; 
	    }
	}

	////////////////////////////////////////////////////////////

	var b =  function(){
		this.getB = function(){ return this.b }	
	};
	b.prototype.b = "B";
	b.prototype.getValue = function(){ 
		return this.b 
	}

	b.static = function(){ return "B" }

	////////////////////////////////////////////////////////////

	var c = function (param){    
	    var c = "C";    // private property
	    this.getC = function(){ return c }  
	    this.getValue = function(){ return c}
	}

	c.static = function(){ return "C" }

	////////////////////////////////////////////////////////////


	var fABC = objct.extend(a, b, c);
	var i1ABC = fABC(arg);
	var i2ABC = new objct.extend(a, b, c);


	assert.strictEqual( typeof fABC , "function", prefix+"Factory f(a,b,c) is Function");
	assert.strictEqual( typeof i1ABC , "object", prefix+"Instance i(a,b,c) is Object");
	assert.strictEqual(i1ABC, a, prefix+"i(a,b,c) === a");

	assert.strictEqual(i1ABC.getA(), "A", prefix+"i(a,b,c).getA() === 'A'");
	assert.strictEqual(i1ABC.getB(), "B", prefix+"i(a,b,c).getB() === 'B'");
	assert.strictEqual(i1ABC.getC(), "C", prefix+"i(a,b,c).getC() === 'C'");

	assert.strictEqual(i1ABC.a, "A", prefix+"i(a,b,c).a === 'A'");
	assert.strictEqual(i1ABC.b, "B", prefix+"i(a,b,c).b === 'B'");
	assert.strictEqual(i1ABC.c, undefined, prefix+"i(a,b,c).c === undefined");

	assert.strictEqual(i1ABC.getValue(), "C", prefix+"i(a,b,c).getValue() === 'C'");

	assert.strictEqual(fABC.static(), "C", prefix+"f(a,b,c).static() === 'C'");


	i2ABC.a="X";
	assert.ok( i1ABC.a === "X" && i2ABC.a === "X" && a.a === "X", prefix+"i(a,b,c).a === i2(a,b,c).a === a.a");


	var a = {
    a : "A",                    
    getA : function(){ return this.a },
    getValue:function(){ 
       	return this.a; 
    }
	}

	var fCBA = objct.extend(function(param){
		assert.strictEqual( param, arg, prefix+" Arguments passed to constructor");
		return c;
	}, b, a);
	var i1CBA = fCBA(arg);

	assert.strictEqual( typeof fCBA , "function", prefix+"Factory f(c, b, a) is Function");
	assert.strictEqual( typeof i1CBA , "function", prefix+"Instance i(c, b, a) is Function");
	assert.strictEqual(i1CBA, c, prefix+"i(c,b,a) === c");

	assert.strictEqual(fCBA.static(), "B", prefix+"f(c,b,a).static() === 'B'");
	assert.strictEqual(i1CBA.static(), "C", prefix+"i(c,b,a).static() === 'C'");

	assert.strictEqual(i1CBA.getA(), "A", prefix+"i(c,b,a).getA() === 'A'");
	assert.strictEqual(i1CBA.getB(), "B", prefix+"i(c,b,a).getB() === 'B'");
	assert.strictEqual(i1CBA.getC, undefined, prefix+"i(c,b,a).getC is undefined");

	assert.strictEqual(i1CBA.a, "A", prefix+"i(c,b,a).a === 'A'");
	assert.strictEqual(i1CBA.b, "B", prefix+"i(c,b,a).b === 'B'");

	assert.strictEqual(i1CBA.getValue(), "A", prefix+"i(c,b,a).getValue() === 'A'");

	var c = function (){    
    var c = "C";    // private property
    this.getC = function(){ return c }  
    this.getValue = function(){ return c}
	}

	c.static = function(){ return "C" }

	var d = function(param){}
	d.prototype.d = "D";
	d.prototype.getValue = function(){ return this.d }; 


	var fDACB = objct.extend(d, a, c, b);
	var i1DACB = fDACB(arg);
	var i2DACB = new objct.extend(d, a, c, b);

	assert.ok(i1DACB instanceof d, prefix+" i(d,a,c,b) instanceof d");

	d.prototype.d = "X";

	// assert.ok( i1DACB.d === "X" && i2DACB.d === "X", prefix+"i(a,b,c).d === i2(a,b,c).d === 'X' -> prototype reference kept");



	////////////////////////////////////////////////////////////

	var e = function(){
		assert.strictEqual( this , a , prefix+"Constructors called with correct context");
	}

	var fE= objct.extend(e);

	fAeE = objct.extend(a, e, fE);

	iAeE = fAeE();

}

////////////////////////////////////////////////////////////////

function news(assert, options) {
	var prefix = "Basics New: ";
	var arg = "arg";
	var a = {
	    a : "A",                    
	    getA : function(){ return this.a },
	    getValue:function(){ 
	       	return this.a; 
	    }
	}

	////////////////////////////////////////////////////////////

	var b =  function(){};
	b.prototype.b = "B";
	b.prototype.getB = function(){ return this.b }
	b.prototype.getValue = function(){ 
		return this.b 
	}

	b.static = function(){ return "B" }

	////////////////////////////////////////////////////////////

	var c = function (param){    
    var c = "C";    // private property
    this.getC = function(){ return c }  
    this.getValue = function(){ return c}
	}

	c.static = function(){ return "C" }

	////////////////////////////////////////////////////////////

	var fABC = objct(a, b, c);
	var fABCx = objct([[a, b], c]);
	var fAB = objct(a, b);
	var fcAB = objct(c, fAB);
	var fABc = objct([fAB, c]);

	var fciAB = objct(c, fAB());
	var fiABc = objct(fAB(), c);

	var fCAB = objct(c, a, b);

	var i1ABC = fABC(arg);
	var i1ABCx = fABCx(arg);

	var i2ABC = new objct(a, b, c);
	var i1CAB = fCAB(arg);
	var i1ABc = fABc(arg);
	var i1cAB = fcAB(arg);

	var i1iABc = fiABc(arg);
	var i1ciAB = fciAB(arg);


	assert.propEqual(i1ABC, i1ABCx, prefix+" i([[a,b],c]) === i(a,b,c) – Arrays are handled as grouping of Objects/Functions without further effect.");

	assert.strictEqual( typeof fABC , "function", prefix+"Factory f(a,b,c) is Function");
	assert.strictEqual( typeof i1ABC , "object", prefix+"Instance i(a,b,c) is Object");
	assert.strictEqual(i1ABC.getA(), "A", prefix+"i(a,b,c).getA() === 'A'");
	assert.strictEqual(i1ABC.getB(), "B", prefix+"i(a,b,c).getB() === 'B'");
	assert.strictEqual(i1ABC.getC(), "C", prefix+"i(a,b,c).getC() === 'C'");

	assert.strictEqual(i1ABC.a, "A", prefix+"i(a,b,c).a === 'A'");
	assert.strictEqual(i1ABC.b, "B", prefix+"i(a,b,c).b === 'B'");
	assert.strictEqual(i1ABC.c, undefined, prefix+"i(a,b,c).c === undefined");

	assert.strictEqual(i1ABC.getValue(), "C", prefix+"i(a,b,c).getValue() === 'C'");
	assert.strictEqual(i1CAB.getValue(), "B", prefix+"i(c,a,b).getValue() === 'B'");


	assert.strictEqual(fABC.static(), "C", prefix+"f(a,b,c).static() === 'C'");
	assert.strictEqual(fCAB.static(), "B", prefix+"f(c,a,b).static() === 'B'");

	i2ABC.a="X";
	assert.ok( i1ABC.a === "A" && i2ABC.a === "X", prefix+"Instance i(a,b,c).a separate from i2(a,b,c).a");

	assert.propEqual(i1ABC, i1ABc, prefix+"i(f(a,b),c) === i(a,b,c)");
	assert.propEqual(i1iABc, i1ABc, prefix+"i(i(a,b),c) === i(a,b,c)");
	
	assert.propEqual(i1ABC, i1cAB, prefix+"i(c, f(a,b)) === i(a,b,c)");
	assert.propEqual(i1ciAB, i1cAB, prefix+"i(c, i(a,b)) === i(a,b,c)");
}

////////////////////////////////////////////////////////////////

function inputs( assert ) {
	
	assert.ok(objct({},function(){},{},[function(){},{}])(), "Ok: N Params - Objects and Functions and Arrays" );
	assert.ok(objct(function(){return "";},{})(), "Ok: First Params Function Return ommitted when !extend -> new");
	assert.ok(objct(function(){return {}},{},function(){},{})(), "Ok: First Params Function Return - Object" );
	assert.ok(objct(function(){return function(){}},{},function(){},{})(), "Ok: First Params Function Return - Function" );
	// assert.ok(objct(true), "Ok: 1st Param - Boolean" );


	assert.throws( function(){
		objct("")()
	}, /Unexpected 'string'/, "Threw: 1st Param - Unexpected String" );

	assert.throws( function(){
		objct(1)()
	}, /Unexpected 'number'/, "Threw: 1st Param - Unexpected Number" );

	assert.throws( function(){
		objct(false)()
	}, /Unexpected 'boolean'/, "Threw: 1st Param - Unexpected Boolean" );

	assert.throws( function(){
		objct([""])()
	}, /Unexpected 'string'/, "Threw: Unexpected String in array" );

	assert.throws( function(){
		objct([1])()
	}, /Unexpected 'number'/, "Threw: Unexpected Number in array" );

	assert.throws( function(){
		objct([false])()
	}, /Unexpected 'boolean'/, "Threw: Unexpected Boolean in array" );

	assert.throws( function(){
		objct(function(){},{}, "")()
	}, /Unexpected 'string'/, "Threw: Ntn Param - Unexpected String" );

	assert.throws( function(){
		objct(function(){},{}, 1)()
	}, /Unexpected 'number'/, "Threw: Ntn Param - Unexpected Number" );	

	assert.throws( function(){
		objct(function(){},{}, true)()
	}, /Unexpected 'boolean'/, "Threw: Ntn Param - Unexpected Boolean" );	
}
////////////////////////////////////////////////////////////////

function calls(assert){
// assert.strictEqual( typeof fABC , "function", prefix+"Factory f(a,b,c) is Function");
// assert.ok( i1ABC.a === "X" && i2ABC.a === "X" && a.a === "X", prefix+"i(a,b,c).a === i2(a,b,c).a === a.a");
// assert.propEqual(i1ciAB, i1cAB, prefix+"i(c, i(a,b)) === i(a,b,c)");
// assert.throws( function(){}, /Unexpected 'array'/, "Threw: Ntn Param - Unexpected Array" );
  var a = {
      a : "A",                    
      getA : function(){ return this.a },
      getValue:function(){ 
           return this.a; 
      }
  }

  ////////////////////////////////////////////////////////////

  var b =  function(){
    this.getB = function(){ return this.b }  
  };
  b.prototype.b = "B";
  b.prototype.getValue = function(){ 
    return this.b 
  }

  b.static = function(){ return "B" }

  ////////////////////////////////////////////////////////////

  var args1 = {one:1};
  var args2 = [2];
  var args3 = function(){return 3};
  var args4 = 4;
  var args5 = "five"; 

  var reference = {};
  
  var decorateModule = function(param1, param2, param3, param4, param5){
    assert.strictEqual( typeof param1 , "object", "decorateModule 1st param === 'object'");
    assert.strictEqual( typeof param1.modules , "object", "decorateModule param1.modules === 'object'");
    assert.strictEqual( param1.modules[1].obj , a, "decorateModule param1.modules[0].obj === a");
    assert.strictEqual( typeof param1.args , "object", "decorateModule param1.args === 'object'");
    assert.strictEqual( param1.args[0] , args1, "decorateModule param1.args[0] === 1st argument passed to factory");
    assert.strictEqual( param1.target , undefined, "decorateModule param1.target === undefined");
    assert.strictEqual( param1.key , undefined, "decorateModule param1.key === undefined");
    assert.strictEqual( param3 , args1, "3rd param in decorate comes from newDecorator(2nd)");
    assert.strictEqual( param4 , args2, "4th param in decorate comes from newDecorator(3rd)");
    assert.strictEqual( param5 , args3, "5th param in decorate comes from newDecorator(4rd)");    
    return param2;
  }
  var decorateProperty1 = function(param1, param2, param3, param4, param5){
    assert.strictEqual( typeof param1 , "object", "decorateProperty 1st param === 'object'");
    assert.strictEqual( typeof param1.modules , "object", "decorateModule param1.modules === 'object'");
    assert.strictEqual( param1.modules[1].obj , a, "decorateModule param1.modules[0].obj === a");
    assert.strictEqual( typeof param1.args , "object", "decorateModule param1.args === 'object'");
    assert.strictEqual( param1.args[0] , args1, "decorateModule param1.args[0] === 1st argument passed to factory");
    assert.strictEqual( param1.target , this, "decorateModule param1.target === this");
    assert.strictEqual( param1.key , "prop1", "decorateModule param1.key === 'prop1'");
    assert.strictEqual( param2 , args1, "2nd param in decorate comes from newDecorator(1st)");
    assert.strictEqual( param3 , args2, "3rd param in decorate comes from newDecorator(2nd)");
    assert.strictEqual( param4 , args3, "4th param in decorate comes from newDecorator(3rd)");    
    return "decorateProperty1";
  }
  var decorateProperty2 = function(){
    assert.strictEqual(reference, this, "decorateProperty 'this' === instance");
    return "decorateProperty2";
  }    
  
  var newPropertyDecorator1 = objct.e.decorator(decorateProperty1);
  var newPropertyDecorator2 = objct.e.decorator(decorateProperty2);
  var newModuleDecorator = objct.e.decorator(decorateModule);

  var object = {
    prop1 : newPropertyDecorator1(args1, args2, args3),
    prop2 : "hello",
    prop3 : "test"
  };
 
  var factory1  = objct(a, object, b);
  var instance1 = factory1(args1);

  assert.strictEqual(instance1.prop1, object.prop1, "factory without enabling decorators: Decorator not executed");

  var factory2  = objct.e(a, object, b);
  var instance2 = factory2(args1);

  assert.strictEqual(instance2.prop1, "decorateProperty1", "factory with enabling decorators: Decorators executed, return value bound to property");

  var factory3  = objct.e(a, newModuleDecorator(b, args1, args2, args3));
  var instance3 = factory3(args1);
  var instance5  = new objct.e(a, b);
  
  assert.propEqual(instance5, instance3, "passing module through decorator unchanged");

  var instance4  = new objct.e.extend(reference, a, {
    prop : newPropertyDecorator2()
  }, b );
 

}

////////////////////////////////////////////////////////////////

function basic(assert){
// assert.strictEqual( typeof fABC , "function", prefix+"Factory f(a,b,c) is Function");
// assert.ok( i1ABC.a === "X" && i2ABC.a === "X" && a.a === "X", prefix+"i(a,b,c).a === i2(a,b,c).a === a.a");
// assert.propEqual(i1ciAB, i1cAB, prefix+"i(c, i(a,b)) === i(a,b,c)");
// assert.throws( function(){}, /Unexpected 'array'/, "Threw: Ntn Param - Unexpected Array" );

  var args1 = {one:1};
  var args2 = [2];
  var args3 = function(){return 3};
  var args4 = 4;
  var args5 = "five"; 

  var decorate = function(param1, param2, param3, param4, param5){
    assert.strictEqual( param1 , args4, "1st param in decorate comes from decorated(1st)");
    assert.notEqual( param2 , args5, "2nd param in decorate is not from decorated(2nd)");
    assert.strictEqual( param2 , args1, "2nd param in decorate comes from newDecorator(1st)");
    assert.strictEqual( param3 , args2, "3rd param in decorate comes from newDecorator(2nd)");
    assert.strictEqual( param4 , args3, "4th param in decorate comes from newDecorator(3rd)");
    assert.strictEqual( param5 , undefined, "5th param in decorate is undefined");
  }

  var newDecorator = objct.e.decorator(decorate);

  var decorated = newDecorator(args1, args2, args3);

  assert.strictEqual( typeof objct.e.decorator , "function", "objct.e.decorator is funciton");
  assert.strictEqual( typeof newDecorator , "function", "newDecorator = objct.e.decorator() is function");
  assert.strictEqual( typeof decorated , "function", "decorated = newDecorator() is function");
  assert.strictEqual( decorated.hash , "jmuMMRs6AUUG293HXcs8Z0ofQlkG0hqiNAJlZq2hHYakBQmyfnRuCsh2yf-d7n", "decorated has .hash property");

  assert.throws( function(){
    objct.e.decorator("string");
  }, /Unexpected 'string'/, "Threw: Unexpected Parameter -> needs function" );


  decorated(args4, args5);

}


