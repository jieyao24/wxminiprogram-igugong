// pages/listen/listen.js
const innerAudioContext=wx.createInnerAudioContext();
innerAudioContext.autopaly=false;
//innerAudioContext.src=
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  begin: function(e){
    if (e.target.dataset.src == 1){
      innerAudioContext.src = "https://img.dpm.org.cn/Uploads/File/2017/04/27/u5901614952a14.mp3"
      innerAudioContext.play()
    }
    if (e.target.dataset.src == 2) {
      innerAudioContext.src = "https://img.dpm.org.cn/Uploads/File/2017/04/27/u590161c9b1679.mp3"
      innerAudioContext.play()
    }
    if (e.target.dataset.src == 3) {
      innerAudioContext.src = "https://img.dpm.org.cn/Uploads/File/2017/04/27/u5901620f58025.mp3"
      innerAudioContext.play()
    }
    if (e.target.dataset.src == 4) {
      innerAudioContext.src = "https://img.dpm.org.cn/Uploads/File/2017/04/27/u590161f5629ac.mp3"
      innerAudioContext.play()
    }
    if (e.target.dataset.src == 5) {
      innerAudioContext.src = "https://img.dpm.org.cn/Uploads/File/2017/04/27/u590161c9b1679.mp3"
      innerAudioContext.play()
    }
    if (e.target.dataset.src == 6) {
      innerAudioContext.src = "https://img.dpm.org.cn/Uploads/File/2017/04/27/u590161b754954.mp3"
      innerAudioContext.play()
    }
    if (e.target.dataset.src == 7) {
      innerAudioContext.src = "https://img.dpm.org.cn/Uploads/File/2017/04/26/u590079fa1a052.mp3"
      innerAudioContext.play()
    }
    if (e.target.dataset.src == 8) {
      innerAudioContext.src = "https://img.dpm.org.cn/Uploads/File/2017/04/27/u590161e0c4f10.mp3"
      innerAudioContext.play()
    }
  },
  end: function(){
    innerAudioContext.stop();
  }
})