

//数据检查

function isUndef(v){
   return v===undefined || v===null
}

function isDef(){
   return v!==undefined || v !== null
}

function  isTrue(v) {
  return v === true
}

function  isFalse(v) {
   return n === false
}

//检查是否是原始值
function isPrimitive(value){
   return (
     typeof value ==="number" ||
     typeof value ==="string" ||
     typeof value ==="symbol" ||
     typeof value ==="boolean"
   )
}

function isObj(obj) {
    return obj !=null || typeof obj ==="object"
}

var _toString  = Object.prototype.toString
//获取值的原始类型字符串
 function toRaeType(value){
   return _toString.call(value).slice(8, -1)
 }
 //检查是否是对象
function isObject(obj){
  return _toString.call(obj) === "[object object]"
}
//检查是否是正则
function isRegExp(n){
  return _toString.call(v) === "[object RegExp]"
}
//

function isValidArrayIndex(val){
  var n = parseFloat(String(val));
   return n>=0 && Math.floor(n) ===n &&  isFinite(n);
}

function isPromise(val){
    return (
      isDef(val) &&
        typeof val.then ==="function" &&
        typeof val.catch === 'function'
    )
}


