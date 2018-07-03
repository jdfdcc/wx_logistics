//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[1, 2],
    data: {
      msg: app.globalData.name
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 跳转页面
  toPageTest: function () {
    wx.navigateTo({
      url: '../demo/test/test',
    })
  },
  onMyEvent: function (e, param1) {
    console.log(e, param1);
    this.setData({
      data: {
        msg: '我改变了，重新渲染了吗'
      }
    })
  },

  test: function () {
    console.log('31312')
  },
  // 获取位置
  markertap: function (e) {
    console.log(e)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
