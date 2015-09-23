$(window).load(function(){
    var product = function(){
        var innerProductHeight = $('.product-block').height();
        $('.product-content').css('height', innerProductHeight);
    }
    product();
    $(window).resize(function(){
    	product();
    })
});