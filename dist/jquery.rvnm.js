;
(function ($) {

    $.fn.rvnm = function (options) {

        var settings = $.extend({
            wrapper: '#wrapper'
        }, options);

        this.sizetrigger = function () {
            $(".rvnm-navbar-box").css('height', '');
            if ($(".rvnm-navbar-box").height() < $("body").height()) {
                $(".rvnm-navbar-box").height($('body').height());
            }
        };

        var self = this;

        this.each(function () {
            $(this).addClass('rvnm-navbar-box');

            $(this).find('li:has(> ul)').addClass('rvnm-expandable');
            $(settings.wrapper).addClass('rvnm-wrapper');


            // resize navbar box
            self.sizetrigger();

            // add triger windows resize
            $(window).bind('resize', function () {
                self.sizetrigger();
            });

            $(document).on('click', '.rvnm-expandable > a', function (e) {
                if (e.target !== e.currentTarget)
                    return false;
                if ($(this).parent().closest('.rvnm-collapseable').length === 0) {
                    $(".rvnm-collapseable > a").click();
                }
                $(this).parent().addClass('rvnm-collapseable').removeClass('rvnm-expandable');
                $(this).parent().find('> ul').slideDown(300, function () {
                    self.sizetrigger();
                });

                if ($(this).attr('href') == '#') {
                    return false;
                }
            });

            $(document).on('click', '.rvnm-collapseable > a', function (e) {
                if (e.target !== e.currentTarget)
                    return false;
                $(this).parent().addClass('rvnm-expandable').removeClass('rvnm-collapseable');
                $(this).parent().find('> ul').slideUp(300, function () {
                    self.sizetrigger();
                });

                if ($(this).attr('href') == '#') {
                    return false;
                }
            });


        });




    };

}(jQuery));