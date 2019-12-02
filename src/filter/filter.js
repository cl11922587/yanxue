import moment from "moment"

var priceDoubel =function (value) {
  if(!value) return;
  return  (Math.floor(value*100)/100).toFixed(2);
};

var orderStatus =function (value) {
  if(!value) return;
  if(value==1){
    return '待支付'
  }else if(value==2){
    return '已支付待确认'
  }
  else if(value==3){
    return '待出行'
  }else if(value==4){
    return '已完成'
  }else if(value==5){
    return '已退款'
  }
};

var sizeColor = function(value,size){
  var reg = new RegExp(size, "g");
  return value.replace(reg,'<span class="red">'+size+'</span>');

};

var trimStr =function(value,trim){
  // trim 1为所有空格， 2前后空格，3前空格，4后空格
  if(!value && typeof value !=="string") {
    return value;
  }
   switch (trim){
     case 1:
       return value.replace(/\s+/g,"")
     case 2:
       return value.replace(/(^\s*)|(\s*$)/g, "");
     case 3:
       return value.replace(/(^\s*)/g, "");
     case 4:
       return value.replace(/(\s*$)/g, "");
     default:
       return value;
   }

};

 function forMat(value){
    return moment(value).format("YYYY-MM-DD HH:mm:ss");
 }

export default {
  priceDoubel,
  orderStatus,
  trimStr,
  sizeColor,
  forMat
};
