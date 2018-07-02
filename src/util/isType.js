const isType = function (value,type){
  return Object.prototype.toString.call(value) == `[object ${type}]`;
};
export default isType;