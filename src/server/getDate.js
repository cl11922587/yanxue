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

     },
    postLogin(data,response,exception){
      http.post(api.index.login,data,(e)=>{
        response(e);
      },(e)=>{
        exception(e)
      })
    },
    postCreateOrder(data,response,exception){
      http.post(api.index.creatOrder,data,(e)=>{
        response(e);
      },(e)=>{
        exception(e)
      })
    },
    getOrderList(data,response,exception){
      http.get(api.index.orderList + '?limit=' + data.limit + '&page=' + data.page,(e)=>{
        response(e);
      },(e)=>{
        exception(e)
      })
    },
     getOrderDetail(data,response,exception){
    http.get(api.index.orderDetail + '?id=' + data.id,(e)=>{
      response(e);
    },(e)=>{
      exception(e)
    })
  }
}

