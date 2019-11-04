import http from './http.js'
import api from './api.js'

export  default {
      getIndexList(data,response,exception){
        http.get(api.index.proList + '?limit=' + data.limit + '&page=' + data.page + '&type=' + data.type,(e)=>{
          response(e);
        },(e)=>{
          exception(e)
        })
      },
      getNewLit(data,response,exception){
              http.get(api.index.newList+'?type='+data.type+'&limit='+data.limit+'&page='+data.page+'',(e)=>{
                response(e);
              },(e)=>{
                exception(e)
              })
      },
      getNewDetail(data,response,exception){
        http.get(api.index.newDetail+'?id='+data.id+'',(e)=>{
          response(e);
        },(e)=>{
          exception(e)
        })
      },
     getProDetail(data,response,exception){
       http.get(api.index.proDetail+'?id='+data.id+'',(e)=>{
         response(e);
       },(e)=>{
         exception(e)
       })

     }
}

