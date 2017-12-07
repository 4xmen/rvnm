;(function ($) {

    $.fn.rvnm = function (options) {

        var settings = $.extend({
            wrapper:'#wrapper'
        }, options);


        this.each(function () {
            $(this).addClass('rvnm-navbar-box');
            $(settings.wrapper).addClass('rvnm-wrapper');
        });


    };

}(jQuery));