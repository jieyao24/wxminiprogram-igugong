//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userList: [],
    imgUrls: [
      'https://img.dpm.org.cn/Uploads/Picture/2019/06/03/s5cf474b2dfa5d.jpg',
      'https://img.dpm.org.cn/Uploads/Picture/2019/06/20/s5d0af498e8e94.jpg',
      'https://img.dpm.org.cn/Uploads/Picture/2019/04/30/s5cc7d8a3ad8ad.jpg',
      'https://img.dpm.org.cn/Uploads/Picture/2019/06/26/s5d12ceabcffd3.jpg',
      'https://img.dpm.org.cn/Uploads/Picture/2019/06/20/s5d0b05f91714c.jpg'
    ]
  },
  //事件处理函数
  bindlibrary: function (event){
      wx.navigateTo({
        url: '../library1/library1'
      })
  },
  bindlisten: function (event) {
    wx.navigateTo({
      url: '../listen/listen'
    })
  },
  bindtreasure: function (event) {
    wx.navigateTo({
      url: '../treasure/treasure'
    })
  },
  bindmap: function(event){
    wx.navigateTo({
      url: '../map/map'
    })
  },
  bindpalace: function (event) {
    wx.navigateTo({
      url: '../palace/palace',
    })
  },
  bindappoint (event){
    wx.navigateTo({
      url: '../appointment/appointment',
    })
  },
})
