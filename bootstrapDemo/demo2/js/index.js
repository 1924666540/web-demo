$(function(){
  $('.menu-btn').on('click',function(){
    $(this).find('span:nth-child(1)').toggle();
    $(this).toggleClass('active')
    $('.sub-menu').toggleClass('active')
  })
})