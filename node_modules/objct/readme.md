# Objct
A fast, modular oop-inheritance library for javascript. Minimal basics combined with powerful decorators. 

[![npm version](https://badge.fury.io/js/objct.svg)](http://badge.fury.io/js/objct)
[![Bower version](https://badge.fury.io/bo/objct.svg)](http://badge.fury.io/bo/objct)

- [About](#about)
- [Features](#features)
- [objct()](#objct-1)
  - [factory( parameters, ... )](#factory-parameters--)
  - [Static Properties](#static-properties)
  - [new objct()](#new-objct)
- [objct.e()](objct-e)
  - [Decorators](#sdaf)
    - [Module Decorators](#sdfa)
    - [Property Decorators](#sdfa)
    - [Create Custom Decorators](#sdfa)
- [API](#api)
  - [objct()](#adsf)
  - [objct.extend()](#adsf)
  - [objct.isObjct()](#adsf)
  - [objct.isArray()](#adsf)
  - [objct.e()](#adsf)
  - [objct.e.extend()](#adsf)
  - [objct.e.decorator()](#adsf)
- [Decorators](#sdaf)
  - [objct.e.deep](#adsf)
  - [objct.e.modify](#adsf)
- [License](#license)



## About
_Objct_ has originally been developed for visual programming in ThreeJS where independent instances of modules were essential to keep my molecules from interfering with each other. The task of creating, combining and instanciating modules/objects while preserving all necessary closures to keep them separate quickly became complex and tedious. I needed a solid and easy to use solution which was the birth of this library. Since then _Objct_ has proven to be invaluable in multiple projects and has constantly been improved and reduced to the max with each new usecase.

It's speed is now comparable with other libraries' `extend` or `assign` methods ( see [jsPref - objct()](https://jsperf.com/objct) and [jsPref - objct.extend()](https://jsperf.com/objct-extend). Thats nice, however _Objct_ has been built for a different use case and can do more than just combine objects:

## Features

* __Light weight and fast.__
* __No special syntax__ Private, privileged and public method definitions work as usual.
* __Multiple inheritance__ `objects`, `functions` and `objcts` can be modular assembled for each _Objct_.
* __Closures are preserved__ for each new instance.
* __Easily extendable__ with powerfull decorators.



## objct()

`objct()` combines _modules_ into a new `objct`. 

_Modules_ can be `functions`, `objects` or `objcts`.<br>
`objcts` are modular factories. When called they create a new, independent instance of the combined modules.

On instanciation all _modules_ passed to `objct()` are combined in the same sequence they were added to `objct()`.<br>
`objects` are merged shallowly into the new instance while __`functions` are instanciated with `new` to create their private closure__ – the resulting object is then also merged into the instance.

```javascript
//////////////////////////////////////////////////////////////////////////////
// Modules

var a = {
	a : "A",					
	getValue:function(){ return this.a }
}

var b =  function(){};
b.prototype.b = "B";
b.prototype.getValue = function(){ return this.b }

var c = function (){	
	var c = "C"; // private property
	this.getC = function(){	return c } // privileged method
	this.getValue = function(){ return c } // privileged method
}

//////////////////////////////////////////////////////////////////////////////
// Factories

var factoryABC = objct(a,b,c);
var factoryCBA = objct(c,b,a);

var factoryAB = objct(a,b);

var factoryABc = objct(factoryAB, c); // same as factoryABC

//////////////////////////////////////////////////////////////////////////////
// Basic inheritance

var instanceABC = factoryABC(); // 

instanceABC.a === "A";
instanceABC.b === "B";
instanceABC.c === undefined;
instanceABC.getC() === "C"; // privileged method has access to c

//////////////////////////////////////////////////////////////////////////////
// Existing properties are overwritten by later added modules 

var instanceABC = factoryABC()
var instanceCBA = factoryCBA();

instanceABC.getValue() === "C";
instanceCBA.getValue() === "A";

//////////////////////////////////////////////////////////////////////////////
// Instances are separate

var instance1 = factoryABC()
var instance2 = factoryABC()

instance2.a = "X"; // redefine a in instance2

instance1.a === "A"  // instance 1 is not affected
instance2.a === "X";

```

[JS Fiddle](https://jsfiddle.net/7hfxwt2L/)

### factory( parameters, ... );

A factory takes an arbitrary amount of parameters when called. These parameters are passes to all functions when instanciating them.


```javascript
//////////////////////////////////////////////////////////////////////////////
// Modules

var a = function (prefix){	
	this.a = prefix+"A";
}
var b = function (prefix){	
	this.b = prefix+"B";
}
var c = function (prefix, suffix){	
	this.c = prefix+"C"+suffix;
}

//////////////////////////////////////////////////////////////////////////////

var factory = objct(a,b,c);

var instance = factory("x-", "-y");

instance.a === "x-A";
instance.b === "x-B";
instance.c === "x-C-y";

```
[JS Fiddle](https://jsfiddle.net/q7u53yyu/)

### Static properties

Static properties of functions passed to `objct()` are preserved accessible on the factory object. The same overwrite rules apply.

```javascript
//////////////////////////////////////////////////////////////////////////////
// Modules

var a = function(){};
a.static = "A";
a.A = function(){
	return "A";
};

var b = function(){};
b.static = "B";
b.B = function(){
	return "B";
};

//////////////////////////////////////////////////////////////////////////////

var factoryAB = objct(a, b);
var factoryBA = objct(b, a);

factoryAB.A() === "A";
factoryAB.B() === "B";

factoryAB.static === "B";
factoryBA.static === "A";

var instanceAB = factoryAB();

instanceAB.static === undefined;
```
[JS Fiddle](https://jsfiddle.net/91skkmd7/1/)

### new objct()

Using the `new` operator to call `objct()` skips the factory and directly returns a new instance of the passed _modules_.
`new objct(..)` is a nicer/ more readable way to write `objct(...)()`.

## objct.e()
`objct.e()` works exactly the same as `objct()` does. With the only difference, that `objct.e()` looks for _decorators_. This comes with a certain loss of performance so `objct.e()` should only be used when using decorators.

### Decorators
__Decorators can only be used with `objct.e()`. `objct()` will not ignore / handle them as normal `functions`.__


#### Module Decorators

#### Property Decorators

#### Create Custom Decorators

## API

### objct()

### objct.extend()
`objct.extend()` works `objct()` does - with the difference that instead of creating a new instance, the first module is extendend and __changed__. (The results of `objct.extend()` and `objct()` are only different if the first module is an `object`, if the first module is a `function` or an `objct` there is no differnce in the result.)

### objct.isObjct()

### objct.isArray()

### objct.e()

### objct.e.extend()
`objct.e.extend()` works exactly the same as [`objct.extend()`](#objctextend) does, but also looks for decorators like [`objct.e()`](#objcte) does.

### objct.e.decorator()

## Decorators

### objct.e.deep

### objct.e.modify
