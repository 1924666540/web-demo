$(function () {
  var current = null;
  $('.exhibits .photo').on('click', function () {
    current = $(this);
    $('#myModal .show-photo').attr('src', current.find('img').attr('src'))
    $('#myModal').modal('show')
  })
  $('#myModal .btn-prev').on('click', function () {
    if (current.parent().prev().find('.photo')[0]) {
      current = current.parent().prev().find('.photo');
      $('#myModal .show-photo').attr('src', current.find('img').attr('src'))
    } else {
      return;
    }
  })
  $('#myModal .btn-next').on('click', function () {
    if (current.parent().next().find('.photo')[0]) {
      current = current.parent().next().find('.photo');
      $('#myModal .show-photo').attr('src', current.find('img').attr('src'))
    } else {
      return;
    }
  })

})