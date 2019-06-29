Page({
  data: {
    timeArray: ['全部', '唐', '元', '明','明永乐','明成化','明正德','明嘉靖','明万历','明崇祯','清','请早期','清顺治','清康熙','清雍正','清中期','清乾隆','清嘉庆','清道光','清晚期','清咸丰','清同治','清光绪','清宣统','近现代','不详'],
    versionArray: ['全部', '内府泥金写本', '南府抄本', '抄本', '朱墨套印本', '内府戏本', '明清抄本'],
    printArray: ['全部','故宫出版社','紫禁城出版社','其他出版社'],
    index1: 0,
    index2: 0,
    index3: 0,
    customItem: '全部',
  },
  bindPickerChange: function (e) {
    var prop = e.target.dataset.index;
    var changed={};
    changed[prop]=e.detail.value;
    this.setData(changed);
  }
})
