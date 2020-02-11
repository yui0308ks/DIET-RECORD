$(function(){

  $('#new_post').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      $('.form-control').val('');
    })
    .fail(function(){
      alert('全て入力してね！！！');
    })
    .always(function(){
      $('.form__btn').prop('disabled', false);
    })
  });
});