// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes:'理综',
    longitude: 100.324520,
    latitude: 23.21229,
    accuracy:"",
    speed:"",
    markers: [{
      iconPath: "../../static/icon/anquan.png",
      id: 0,
      latitude: 39.02113552517361,
      longitude: 117.70715901692708,
      width: 50,
      height: 50
    },{
      iconPath: "../../static/icon/anquan.png",
      id: 1,
      latitude: 35.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    //路线图
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 35.10229
      }, {
        longitude: 100.324520,
        latitude: 23.21229
      }],
      color:"#f40",
      width: 5,
    }],
    scale:16,
    selectedId:1,

    //附近的地址
    nearList:[{
      id:0,
      title:"东方新锐局",
      addr:"广东省福田区"
    },{
      id:1,
      title:"东方新锐局",
      addr:"广东省福田区"
    },
    {
      id:2,
      title:"东方新锐局",
      addr:"广东省福田区"
    },{
      id:3,
      title:"东方新锐局",
      addr:"广东省福田区"
    },{
      id:4,
      title:"东方新锐局",
      addr:"广东省福田区"
    }],
    // controls: [{
    //   id: 1,
    //   iconPath: '../../static/icon/faxian.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.toMyPosition();
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
  go(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  show(){
    this.setData({
      mes:'文综'
    })
    wx.showToast({
      title: '成功',
      duration: 2000,
      icon: "success",
      image: '/static/icon/baocun.png',
      mask: true,
      success: (res) => {},
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  //地图拖动
  regionchange(e) {
    console.log(e)
  },
  // 选择某个点
  choosePosition(e){
    console.log(e)
    
  },
  markertap(e) {
    console.log(e.detail.markerId)
  },
  controltap(e) {
    console.log(e.detail.controlId)
  },
  //获取定位
  getLocation(){
    // wx.getLocation({
    //   type: 'gcj02',
    //   success: (res)=> {
    //     const latitude = res.latitude
    //     const longitude = res.longitude
    //     const speed = res.speed
    //     const accuracy = res.accuracy
    //     let obj = this.data.markers[1]
    //     obj.latitude = latitude;
    //     obj.longitude = longitude;
    //     let markers = this.data.markers;
    //     markers.splice(1,1,obj)
    //     this.setData({
    //       latitude,
    //       longitude,
    //       speed,
    //       accuracy,
    //       markers
    //     })

    //     let obj1 = {
    //       points: [{
    //           longitude: longitude,
    //           latitude: latitude
    //         },{
    //         longitude: 113.3245211,
    //         latitude: 35.10229
    //       }],
    //       color:"#0099FF",
    //       width: 5,
    //     }
    //     let polyline = this.data.polyline
    //     polyline.push(obj1)
    //     this.setData({
    //       polyline
    //     })
       
    //   }
    //  })
    wx.chooseLocation({
      success:(res)=>{
        const latitude = res.latitude
        const longitude = res.longitude
        let mpCtx = wx.createMapContext("map");
        this.setData({
          longitude,
          latitude
        })
        mpCtx.moveToLocation({
          latitude,
          longitude,
          success:(res)=>{
           
          }
        });
      }
    })
  },
  toMyPosition(e){
    let mpCtx = wx.createMapContext("map");
    mpCtx.moveToLocation();
  },
  // 选中区域列表
  chooseCenter(e){
    let selectedId = e.currentTarget.id;
    this.setData({
      selectedId
    })
  }
})