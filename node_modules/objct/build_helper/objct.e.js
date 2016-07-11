var objct = require("../e");

if(typeof define === "function" && define.amd) 
  define(function(){return objct;});
else if(typeof window === "object")
  window.objct = objct;