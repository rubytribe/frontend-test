$('.filters').click(function(e){
  e.preventDefault();
  $('.sidebar').toggleClass('sidebar-show');
  $('.sidebar-mask').fadeIn(300);
});
$('body').on('click','.sidebar-mask', function(){
  $(this).fadeOut(300);
  $('.sidebar').removeClass('sidebar-show');
})