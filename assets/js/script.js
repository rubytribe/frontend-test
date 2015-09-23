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