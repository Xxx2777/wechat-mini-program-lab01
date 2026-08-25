Page({
  data:{
  message:"Hello World",
  flag:true
  },
  changeText:function(){
  let flag=this.data.flag;
  this.setData({
  flag:!flag,
  message:flag?
  "Hello":
  "Hello World"
  })
  }
  })
