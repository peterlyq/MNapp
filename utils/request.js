import config from "./config"
//GET请求
exports.reqGet = (url,data,cb,needToken=true)=>{
    let token = wx.getStorageSync('user_token')
    if(!token && needToken ){
      wx.showToast({
        title: '请登录',
        icon: 'none',
        duration: 1000,
        mask:true,
        success:(res)=>{
          setTimeout(() => {
            wx.redirectTo({
              url: '/pages/logs/logs',
            })
          }, 1000);
        }
      })
      
    }else{
      wx.request({
        url:config.baseUrl+url,
        header:{
          cookie:token?token:""
        },
        method:"GET",
        data:data,
        success:(res)=>{
          cb(res)
        }
      })
    }
}
//POST请求
exports.reqPost = (url,data,cb)=>{
  let token = wx.getStorageSync('user_token')
  if(!token && needToken ){
    console.log(1)
    wx.showToast({
      title: '请登录',
      icon: 'none',
      duration: 1000,
      mask:true,
      success:(res)=>{
        setTimeout(() => {
          wx.redirectTo({
            url: '/pages/logs/logs',
          })
        }, 1000);
      }
    })}{
      wx.request({
        url:baseUrl+url,
        method:"POST",
        data:data,
        success:cb(res)
      })
    }
    

}