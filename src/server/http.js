import axios from 'axios';

const TIME_OUT_MS = 60 * 1000 // 默认请求超时时间
const BASE_URL = '//localhost:3000/';

axios.interceptors.request.use(function(config) {
  // 处理请求参数
  config.data = JSON.stringify(config.data)

  //将token写入请求头
 // if (window.localStorage.getItem('token')) {
    config.headers.Authorization =window.localStorage.getItem('userInfo')? `${JSON.parse(window.localStorage.getItem('userInfo')).token}`:{};
  //}

  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


/*
 * @param response 返回数据列表
 */
function handleResults (response) {
  let remoteResponse = response.data;
  var result = {
    code:remoteResponse.code,
    success: false,
    message: remoteResponse.msg,
    data: {
      total: 0,
      results: []
    }
  }
  if (remoteResponse.code==1) {
    result.data.results = remoteResponse.data
    result.data.total = remoteResponse.total
    result.success = true
  }
  return result
}

function handleUrl (url) {
  url = BASE_URL + url
// BASE_URL是接口的ip前缀，比如http:10.100.1.1:8989/
  return url
}

/*
 * @param data 参数列表
 * @return
 */
function handleParams (data) {
  return data
}

export default {
  /*
   * @param url
   * @param data
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  post (url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {

        }
      }
    )
  },
  /*
   * get 请求
   * @param url
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  get (url, response, exception) {
    axios({
      method: 'get',
      url: handleUrl(url),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {

        }
      }
    )
  },
  /*
   * 导入文件
   * @param url
   * @param data
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  uploadFile (url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      dataType: 'json',
      processData: false,
      contentType: false
    }).then(
      (result) => {
        response(handleResults(result, data))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {

        }
      }
    )
  },
  /*
   * 下载文件用，导出 Excel 表格可以用这个方法
   * @param url
   * @param param
   * @param fileName 如果是导出 Excel 表格文件名后缀最好用.xls 而不是.xlsx，否则文件可能会因为格式错误导致无法打开
   * @param exception 异常的回调函数
   */
  downloadFile (url, data, fileName, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      responseType: 'blob'
    }).then(
      (result) => {
        const excelBlob = result.data
        if ('msSaveOrOpenBlob' in navigator) {
          // Microsoft Edge and Microsoft Internet Explorer 10-11
          window.navigator.msSaveOrOpenBlob(excelBlob, fileName)
        } else {
          const elink = document.createElement('a')
          elink.download = fileName
          elink.style.display = 'none'
          const blob = new Blob([excelBlob])
          elink.href = URL.createObjectURL(blob)
          document.body.appendChild(elink)
          elink.click()
          document.body.removeChild(elink)
        }
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },
  uploadFileFormData (url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: data,
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  }
}
