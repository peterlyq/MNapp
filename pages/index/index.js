//index.js
//获取应用实例
const app = getApp()
//注册当前页面的实例
Page({
  data: {
    motto: 'Hello World',
    a:'世界你好',
    userInfo: {},
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //     })
    //   }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          })
        }
      })
    }
  },
  onShow:function(){

  },
  onHide:()=>{

  },
  onReady:function(){
    console.log("相当于vue的mounted")
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
    })
  },
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
        console.log(res)
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
            console.log(res)
           
          }
        });
      }
    })
  },
  getPhoneNumber(e){
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  }
})
