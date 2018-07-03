/**
 * @name 调用后台获取用户数据
 */
const http = function () {
  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    let opt = {
      url: 'https://cd-uat.iyunbao.com/open/v1/commodity/getRevealAndAuthenticate/1007995/22695002/false', //仅为示例，并非真实的接口地址
      data: {},
      // （需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      method: "GET",
      header: {
        'content-type': 'application/json'
      },
      // 如果设为json，会尝试对返回的数据做一次 JSON.parse
      dataType: 'json',
      success: function (res) {
        resolve(res.data)
      },
      fail: function (res) {
      },
      // 接口调用结束的回调函数（调用成功、失败都会执行）
      complete: function () {
        wx.hideLoading()
      }
    }
    let requestTask = wx.request(opt)
    // requestTask.abort() // 取消请求任务
  })
}

// 倒出数据
module.exports = http