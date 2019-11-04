/*
*模块统一加载组件
* 全局引用
* */
import Vue from 'vue'
function changeStr(str){
  return str.charAt(0).toUpperCase()+str.slice(1);
}
const requireComponents = require.context('.',true,/\.vue$/);
requireComponents.keys().forEach(fillName=>{
  const config = requireComponents(fillName);
  const ComponentName = changeStr(
    fillName.replace(/^\.\//,'').replace(/\.\w+$/,'')
  );
  Vue.component(ComponentName,config.default|| config);
});
