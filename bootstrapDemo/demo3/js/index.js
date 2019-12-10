$(function(){

  $('.header .meun-btn').on('touchstart',function(){
    $('.header .menu-small').css({
      right:0
    })
  })

  $('.header .close').on('touchstart',function(){
    $('.header .menu-small').css({
      right:'-40%'
    })

  })
 
})
