;
(function ($) {

    $.fn.rvnm = function (options) {

        var settings = $.extend({
            wrapper: '#wrapper'
        }, options);




        this.each(function () {
            $(this).addClass('rvnm-navbar-box');

            $(this).find('li:has(> ul)').addClass('rvnm-expandable');
            $(settings.wrapper).addClass('rvnm-wrapper');


            // resize navbar box
            $(".rvnm-navbar-box").height($('body').height());

            // add triger windows resize
            $(window).bind('resize', function () {
                $(".rvnm-navbar-box").height($('body').height());
            });

            $(document).on('click', '.rvnm-expandable > a', function (e) {
                if (e.target !== e.currentTarget)
                    return false;
                $(this).parent().addClass('rvnm-collapseable').removeClass('rvnm-expandable');
                $(this).parent().find('> ul').slideDown(300);
                if ($(this).attr('href') == '#') {
                    return false;
                }
            });

            $(document).on('click', '.rvnm-collapseable > a', function (e) {
                if (e.target !== e.currentTarget)
                    return false;
                $(this).parent().addClass('rvnm-expandable').removeClass('rvnm-collapseable');
                $(this).parent().find('> ul').slideUp(300);
                if ($(this).attr('href') == '#') {
                    return false;
                }
            });


        });




    };

}(jQuery));