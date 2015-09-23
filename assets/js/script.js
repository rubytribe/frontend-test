// Products in list
$(window).load(function(){
    var product = function(){
        var innerProductHeight = $('.product').height();
        $('.product-content').css('height', innerProductHeight);
    }
    product();
    $(window).resize(function(){
    	product();
    })
});

// Navbar
var navbar = function(){
  if ($(window).width() < 768) {
     $('.navbar-collapse').removeClass('in').addClass('out');
  }else{
    $('.navbar-collapse').removeClass('out').addClass('in');
  }
}
navbar();
$(window).resize(function(){
  navbar();
})