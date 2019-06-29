const app = getApp();
Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        title: '紫禁服饰',
        img: 'https://img.dpm.org.cn/Uploads/Picture/2019/02/28/s5c773b03352a1.jpg',
        url: '/indexes/indexes'
    },
      {
        title: '出行甄选',
        img: 'https://img.dpm.org.cn/Uploads/Picture/2017/06/30/s5955a4f5bf3a3.jpg',
        url: '/animation/animation'
      },
      {
        title: '家居陈设',
        img: 'https://img.dpm.org.cn/Uploads/Picture/dc/cegift/cegift7685.jpg',
        url: '/drawer/drawer'
      },
      {
        title: '紫禁藏书',
        img: 'https://img.dpm.org.cn/Uploads/Picture/dc/cegift/cegift8509.jpg',
        url: '/verticalnav/verticalnav'
      },
      {
        title: '国礼之选',
        img: 'https://www.dpm.org.cn/Uploads/Picture/dc/cegift/cegift5593.jpg',
        url: '/verticalnav/verticalnav'
      }
    ]
  },
  methods: {
    toChild(e) {
      wx.navigateTo({
        url: '/pages/plugin' + e.currentTarget.dataset.url
      })
    },
  }
});