
//
function toStringOver(e){return Object.prototype.toString.call(e)};
function classOf(e){return e===null?'null':e===undefined?'undefined':toStringOver(e).slice(8,-1).toLowerCase()};

//
function isFunction(e,i){var s='function';return typeof e===s?i?classOf(e)===s:true:false};//@ i:strongcheck!


//
through={
 array:function(e,f){for(var i=0,l=e.length;i<l;i++){f(e[i],i,e)}},
 object:function(e,f){for(var i in e){if(e.hasOwnProperty(i)){f(e[i],i,e)}}}
};



function traverse(e,a,b){//@ e:iterated, a:callback, b:scope  in which to execute the callback
	if(isFunction(a)){var o=through[classOf(e)]||0;if(o){var f=b?function(i,e){a.call(b,e[i],i,e)}:a;o(e,f);o=1}};
	return o
};


/*
"should throw an error
when no object or array is given
 callback is not a function
Warning: it's not meant to be used with nodeList
*/


/*test*/

var testobject={a: 2,e: 15,b: 0,c: 1,d: 2}, testarray=[2,0,1,2];


console.clear();
//
var m=[testobject,testarray,window.alert,undefined,null,
""," ","foo",new String("foo"),Infinity,
0,1,1.2,new Number(1.2) ,
false,true,new Boolean(true),
[],[[]],[1,2,3],new Array(1, 2, 3),
/abc/g ,new RegExp("meow"),
{},new Object(),
alert,new Function(""),
Date(),new Date(),
Error(),new Error()];
//
m.forEach(function(e){traverse(e,function(x){console.log(x)})});





