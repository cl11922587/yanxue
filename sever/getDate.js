import * as news  from  './tempdata/news'

const setpromise =data=>{
      return new Promise((resolve, reject)=>{
        resolve(data)
      })

};

var  NewList = () =>setpromise(news.news);
export {
  NewList
}
