// pages/demo/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fontSize:[25, 30, 35, 40, 45, 50],
    testText: '13771152499',
    checked: false
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * @name 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('我点击了分享')
  },

  /**
   * 获取输入框的值
   */
  getText: function () {
    console.log(this.data.testText)
    // 修改值
    this.setData({
      checked: !this.data.checked
    })
  },

  /**
   * 监听数据变化的时候
   */
  inputText: function (e) {
    console.log(e)
    this.setData({
      testText: e.detail.value
    })
  },

  switchChange: function (e) {
    console.log(e)
  }
})