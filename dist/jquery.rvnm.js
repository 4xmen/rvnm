;
(function ($) {

    $.fn.rvnm = function (options) {


        /**
         * settings ofplgin 
         * @type Object
         */
        var settings = $.extend({
            wrapper: '#wrapper', // main page wrapper
            mode: 'default', // mode of menu (default = desktop| minimal = tablet | mobile)
            responsive: true // repsonsve mode only work in default mode
        }, options);

        /**
         * sizetrigger is function to change nav box size 
         * or control reponsive & mode of menu
         * @returns {undefined}
         */
        this.sizetrigger = function () {
            // repsonvive mode controller
            if (settings.responsive && settings.mode === 'default') {
                // if window size between 450 and 768 active minimal
                if ($(window).width() > 450 && $(window).width() < 768) {
                    if (!$(self).hasClass('rvnm-minimal')) {
                        // fix extended  after switch from defualt to minimal
                        $(self).find('.rvnm-collapseable ul').attr('style','');
                        $(self).find('.rvnm-collapseable').addClass('rvnm-expandable').removeClass('rvnm-collapseable');
                    }
                    $(settings.wrapper).removeClass('rvnm-mobile');
                    $(self).removeClass('rvnm-mobile');
                    $(settings.wrapper).addClass('rvnm-minimal');
                    $(self).addClass('rvnm-minimal');
                }
                // if window size less than 450 active mobile mode
                if ($(window).width() <= 450) {
                    $(settings.wrapper).removeClass('rvnm-minimal');
                    $(self).removeClass('rvnm-minimal');
                    $(settings.wrapper).addClass('rvnm-mobile');
                    $(self).addClass('rvnm-mobile');
                }
                // if window size greater than 768 active desktop mode by
                // remove minimal & mobile calss
                if ($(window).width() >= 768) {
                    $(settings.wrapper).removeClass('rvnm-minimal');
                    $(self).removeClass('rvnm-minimal');
                    $(settings.wrapper).removeClass('rvnm-mobile');
                    $(self).removeClass('rvnm-mobile');
                }
            }
            $(".rvnm-navbar-box").css('height', '');
            if (settings.mode !== 'mobile' && !$(self).hasClass('rvnm-mobile')) {
                if ($(".rvnm-navbar-box").height() < $("body").height() || $("body").height() < $(window).height()) {
                    if ($("body").height() > $(window).height()) {
                        $(".rvnm-navbar-box").height($('body').height());
                    } else {
                        $(".rvnm-navbar-box").height($(window).height());
                    }

                }
            }


        };

        // set plugn selector to self for use in other place of plugin
        var self = this;

        this.each(function () {
            // add rvnm-navbar-box to menu
            $(this).addClass('rvnm-navbar-box');
            // add expandable class to li's has ul child
            $(this).find('li:has(> ul)').addClass('rvnm-expandable');
            // rvnm-wrapper class to main content element
            $(settings.wrapper).addClass('rvnm-wrapper');
            // check if minimal mode active change mode
            if ($(this).hasClass('rvnm-minimal') || settings.mode === 'minimal') {
                $(settings.wrapper).addClass('rvnm-minimal');
                $(this).addClass('rvnm-minimal');
                settings.mode = 'minimal';
            }
            // check if mobile mode active change mode
            if ($(this).hasClass('rvnm-minimal') || settings.mode === 'mobile') {
                $(settings.wrapper).addClass('rvnm-mobile');
                $(this).addClass('rvnm-mobile');
                settings.mode = 'mobile';
            }

            // resize navbar box
            self.sizetrigger();

            // add triger windows resize
            $(window).bind('resize.rvnm', function () {
                self.sizetrigger();
            });

            // add click event to expandable link 
            $(document).on('click', '.rvnm-expandable > a', function (e) {
                // check click only this element
                if (e.target !== e.currentTarget)
                    return false;
                // check is first level of li child 
                // try to close other expanded items
                if ($(this).parent().closest('.rvnm-collapseable').length === 0) {
                    $(".rvnm-collapseable > a").click();
                }
                // add collapseable class to parent of link and remove expandable
                $(this).parent().addClass('rvnm-collapseable').removeClass('rvnm-expandable');
                // slide down first level ul 
                $(this).parent().find('> ul').slideDown(300, function () {
                    // then use size triger
                    self.sizetrigger();
                });
                // if href is # link should not be work
                if ($(this).attr('href') === '#') {
                    return false;
                }
            });


            // add click event to collapseable link 
            $(document).on('click', '.rvnm-collapseable > a', function (e) {
                // check click only this element
                if (e.target !== e.currentTarget)
                    return false;
                // add expandable class to parent of link and remove collapseable
                $(this).parent().addClass('rvnm-expandable').removeClass('rvnm-collapseable');
                // slide up first level ul of this
                $(this).parent().find('> ul').slideUp(300, function () {
                    self.sizetrigger();
                });

                // if href is # link should not be work
                if ($(this).attr('href') === '#') {
                    return false;
                }
            });


            // click an nav box when has rvnm-mobile class
            $(document).on('click', '.rvnm-mobile', function (e) {
                if (e.target !== e.currentTarget)
                    return false;
                // try to expand menu
                $(this).toggleClass('rvnm-mobile-expand');
            });

            // on mouseenter when menu is minimal 
            $(document).on('mouseenter', '.rvnm-navbar-box.rvnm-minimal  li', function (e) {
                // if menu is first level li 
                if ($(this).closest('.rvnm-minimal-expand').length === 0) {
                    // show menu
                    $(this).addClass('rvnm-minimal-expand');
                }
            });
            // on mouseleave when menu is minimal 
            $(document).on('mouseleave', '.rvnm-navbar-box.rvnm-minimal  li.rvnm-minimal-expand', function (e) {
                $(".rvnm-minimal-expand .rvnm-collapseable ul").slideUp();
                $(".rvnm-minimal-expand .rvnm-collapseable").addClass('rvnm-expandable').removeClass('rvnm-collapseable');
                $(this).removeClass('rvnm-minimal-expand');
            });


        });




    };

}(jQuery));