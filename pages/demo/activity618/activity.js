let http = require('./../../../utils/http.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: `country_als.png-h_bg.png-ball.png-char.png-country_als.png-spoiler.png-rule.png-footer.png
      -competition_bg.png-line.jpg-result_item.png-win_bg.png-last_result.png-country_bg.png-ipt.png-clock.png
      -competition_title.png-reward.png-tuiguang.png-fire.png-/bg/1.png-/bg/2.png`.split('-')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下啦操作')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  testHttp: function () {
    console.log('test_http')
    http().then(e => {
      console.log(e)
      // wx.showModal({
      //   title: '提示',
      //   content: '这是一个模态弹窗',
      //   success: function (res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })
      wx.showToast({
        title: '恭喜你完成！！',
        icon: 'success',
        duration: 2000
      })
    })
  }
})