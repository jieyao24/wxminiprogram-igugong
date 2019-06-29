Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedDate:'2019-06-29'
  },
  dateChange(e) {
    this.setData({
      selectedDate: e.detail.value
    });
  },

  success: function () {
    wx.showModal({
      title: '购票成功',
      content: '电子门票已存入“首页”-“我的卡包”内。祝您旅途愉快',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
