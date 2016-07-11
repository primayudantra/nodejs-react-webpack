var createTestFunction = function(numberOfProperties){
  var test = function(fn, str, nmbr, bool, obj) {
    for(var i=0; i<numberOfProperties; i++) {
      this["f"+i] = function(){};
      this["s"+i] = "string";
      this["o"+i] = {};
      this["b"+i] = true;
    }
  };
  for(var i=0; i<numberOfProperties; i++) {
    test.prototype["f"+i] = function(){};
    test.prototype["s"+i] = "string";
    test.prototype["o"+i] = {};
    test.prototype["b"+i] = true;
  }
  return test;
}

var Noop = function() {};

var method1 = function(fn){
  var args = Object.create(arguments);
  args.unshift(null);
  return new(Function.prototype.bind.apply(fn, args))();
}

var method2 = function(fn){
  Noop.prototype = fn.prototype;
  var f = new Noop();
  Noop.prototype = null;
  var i = fn.apply(f, arguments);
  return typeof i === "object" || typeof i === "function" ? i : f;
}

var test1 = createTestFunction(1);
var test10 = createTestFunction(10);
var test100 = createTestFunction(100);
var test1000 = createTestFunction(1000);


//////////////////////////////////////////////////////////////

method1(test1, "test", 1, true, {});

//////////////////////////////////////////////////////////////

method2(test1, "test", 1, true, {});

//////////////////////////////////////////////////////////////

"http://jsperf.com/pca-function-instantiation"