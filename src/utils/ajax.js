const api = "https://user-gw.demo.mararun.com/v2";
const ajax = (url,params,method) => {
  return new Promise((resolve,reject)=>{
    let ct = 'application/x-www-form-urlencoded';
    if(method == 'GET'){
      ct = 'application/json';
    }
    wx.request({
        url:    url,
        method: method,
        data:   params,
        header: {'Content-Type': ct},
        success: function (res) {
          resolve(res.data);
        },
        fail: function (res) {
          resolve(res);
        }
    })
  })
}

const ajaxGet = (uri,params)=>{
  const url  = `${api}/${uri}`;
  return ajax(url,params,'GET');
}

const ajaxPost = (uri,params)=>{
  const url  = `${api}/${uri}`;
  return ajax(url,params,'Post');
}
export {
  ajaxGet,
  ajaxPost
}

