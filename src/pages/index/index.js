//index.js
//获取应用实例
var app = getApp()
//await 暂时需要这样
const regeneratorRuntime = require('../../utils/runtime.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  async getData(){
    await app.ajaxGet('matchH5/detail',{matchID: 3998713102401616});
    await app.ajaxGet('matchH5/detail',{matchID: 3998713102401616});
    await app.ajaxGet('matchH5/detail',{matchID: 3998713102401616});
    await app.ajaxGet('matchH5/detail',{matchID: 3998713102401616});
    await app.ajaxGet('matchH5/detail',{matchID: 3998713102401616});
    await app.ajaxGet('matchH5/detail',{matchID: 3998713102401616});
  },
  onLoad: function () {
    this.getData();
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
