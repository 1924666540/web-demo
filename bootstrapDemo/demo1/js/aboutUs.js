$('.tab-menu .tab-item').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active')

})
$('.tab-menu .about').on('click', function () {

  

  $.get("./tabs/tab-item-aboutUs.html",
    function (data) {
      $('.tab-text').html('');
      $('.tab-text').append(data);
      
    },
    "html"
  );


})
$('.tab-menu .culture').on('click', function () {
 
  $.get("./tabs/tab-item-culture.html",
    function (data) {
       $('.tab-text').html('');
      $('.tab-text').append(data)

    },
    "html"
  );

})
$('.tab-menu .partner').on('click', function () {
  
  $.get("./tabs/tab-item-partner.html",
    function (data) {
      $('.tab-text').html('');
      $('.tab-text').append(data)

    },
    "html"
  );

})
$('.tab-menu .honor').on('click', function () {
  
  $.get("./tabs/tab-item-honor.html",
    function (data) {
      $('.tab-text').html('');
      $('.tab-text').append(data)

    },
    "html"
  );

})