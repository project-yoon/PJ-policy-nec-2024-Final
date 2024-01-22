$(document).on('ready', function() {
	if(parent.$('#indexIframe').length > 0){
		parent.$('html, body').scrollTop(parent.$('#indexIframe').offset().top);
	}

	var resizeWidth = 0;

    document.createElement('nav');
    if ($(window).width() > 1279) {
        $('.nav').find('.drop-menu').css('transition', 'all .6s cubic-bezier(0.77, 0, 0.175, 1)');
    }

    var Drawer = (function() {
        var $window = $(window),
            $drawer = $('.drawer'),
            $opener = $('.menu-open'),
            $closer = $('.menu-close');

        (function init() {
            if ($window.width() > 1199) {
                removeTransition();
            } else {
                setTransition();
            }

            addEvent();
        })();

        function addEvent() {
            $opener.on('click', drawerOpen);
            $closer.on('click', drawerClose);
            $window.on('resize', resizeWindow);
        }

        function resizeWindow() {
            if ($window.width() > 1279) {
                removeTransition();
            } else {
                setTransition();
            }
        }

        function setTransition() {
            $drawer.css('z-index', '9999');
        }

        function removeTransition() {
            $drawer.removeAttr('style');
        }

        function drawerOpen() {
            $drawer.addClass('-active');
        }

        function drawerClose(e) {
            $drawer.removeClass('-active');
            $('.nav > ul > li').toggleClass('-active').siblings().removeClass('-active');
            e.preventDefault();
        }
    })();

    var Nav = (function() {
        var $nav = $('.nav');

        (function init() {
            addEvent();
        })();

        function addEvent() {
            $(window).resize(onResize);

            if ($(window).width() > 1279) {
                $('.nav').on('mouseleave', deactivate);
                $('.nav').on('mouseenter focusin', 'a', activate);
            } else {
                $('.nav > ul > li > a').on('click', clickOpen);
            }

            var $anchors = $('a', '.nav')
            var $firstAnchor = $anchors.first();
            var $lastAnchor = $anchors.last();

            $firstAnchor.on('keydown.close', function(e){
                if(e.keyCode === 9 && e.shiftKey){
                    $nav.find('.-active').removeClass('-active');
                }
            });
            $lastAnchor.on('keydown.close', function(e){
                if(e.keyCode === 9 && !e.shiftKey){
                    $nav.find('.-active').removeClass('-active');
                }
            });

            var $anchorsDep1 = $('nav > ul li')
            var $firstAnchorDep1 = $anchorsDep1.first('a');
            var $lastAnchorDep1 = $anchorsDep1.last('a');

            $firstAnchorDep1.on('mouseleave', function(e){
            	if ($(window).width() > 1199) {
            		$(this).removeClass('-active');
            	}
            });
            $lastAnchorDep1.on('mouseleave', function(e){
            	if ($(window).width() > 1199) {
            		$(this).removeClass('-active');
            	}
            });
            $('.drop-menu').on('mouseleave', function(){
            	if ($(window).width() > 1199) {
            		$nav.find('.-active').removeClass('-active');
            	}
            });
        }

        function onResize() {
            if ($(window).width() > 1279) {
                setTransition();
            } else {
                removeTransition();
            }

            if ($(window).width() > 1279) {
                $('.nav').off('mouseenter focusin', 'a').on('mouseenter focusin', 'a', activate);
                $('.nav').off('mouseleave', 'a').on('mouseleave', 'a', deactivate);

            } else {
                $('.nav').off('mouseenter focusin', 'a');
                $('.nav').off('mouseleave');

                $('.nav > ul > li > a').off().on('click', clickOpen);
            }

            if(resizeWidth != $(window).width()) {
            	_FN_RESIZE_CALL();
            }

            resizeWidth = $(window).width();
        }

        function activate(e) {
            $(e.currentTarget).parent().toggleClass('-active').siblings().removeClass('-active');
            e.preventDefault();
        }

        function clickOpen(e) {
            $(this).parent().toggleClass('-active').siblings().removeClass('-active');
            e.preventDefault();
        }

        function deactivate() {
            $nav.find('.drop-menu').removeClass('-active');

            var $anchorsDep1 = $('nav > ul li')
            var $firstAnchorDep1 = $anchorsDep1.first('a');
            var $lastAnchorDep1 = $anchorsDep1.last('a');

            $firstAnchorDep1.on('mouseleave', function(e){
            	if ($(window).width() > 1199) {
            		$(this).removeClass('-active');
            	}
            });
            $lastAnchorDep1.on('mouseleave', function(e){
            	if ($(window).width() > 1199) {
            		$(this).removeClass('-active');
            	}
            });
        }

        function setTransition() {
            $('.nav').find('.drop-menu').css('transition', 'all .6s cubic-bezier(0.77, 0, 0.175, 1)');
        }

        function removeTransition() {
            $('.nav').find('.drop-menu').removeAttr('style');
        }
    })();

    var Chatroom = (function() {
        open_chatroom();

        $(window).resize(function() {
            open_chatroom();
        });

        function open_chatroom() {
            var windowWidth = $(window).width();
            if (windowWidth < 1200) {
                $(".mobile-btn").css('display', 'block');
                $(".pc-btn").css('display', 'none');
                $(".mobile-area").css('display', 'block');
                $(".pc-area").css('display', 'none');
            } else {
                $(".mobile-btn").css('display', 'none');
                $(".pc-btn").css('display', 'block');
                $(".mobile-area").css('display', 'none');
                $(".pc-area").css('display', 'block');
            }
        }
    })();

    var accordion = (function() {
        $('.accordion').on('click', '.accordion-title', function() {
            var $title = $('.accordion-title');
            var $content = $('.accordion-content');
            $title.not($(this)).removeClass('-active');
            $content.not($(this).next()).removeClass('-active').find('.accordion-content-inner').slideUp();
            $(this).toggleClass('-active').next().toggleClass('-active').find('.accordion-content-inner').slideToggle();

			setTimeout(function(){
				_FN_RESIZE_CALL();
			}, 500);
        });
    })();

    var accordionsunger = (function() {
        $('.accordionsunger').on('click', '.accordion-title', function() {

        	var $title = "";
            var $content = "";

            $('.accordion-title').each(function(i) {

                $title = $('.accordion-title').eq(i);
                $content = $('.accordion-content').eq(i);

                $title.not($(this)).removeClass('-active');
                $content.not($(this).next()).removeClass('-active').find('.accordion-content-inner').slideUp();
                $(this).toggleClass('-active').next().toggleClass('-active').find('.accordion-content-inner').slideToggle();

            });

			setTimeout(function(){
				_FN_RESIZE_CALL();
			}, 500);
        });
    })();

    var mainTab = (function() {

        var $tabW = $('.tab-set');
        $tabW.find('.tabs  li').on('click', function(e) {
            e.preventDefault();
            var $self = $(this),
                tabs = $self.parent(),
                index = tabs.children().index(this);
            tabs.parent().next('.tab-box').children().hide().eq(index).show();
        });

    })();

    var tabEvent = (function() {

        //tab swipe
        function tabSwipe() {
            if ($('.tabs').length < 1) {
                return
            };
            var tabWid = 40;
            var liLen = $('.tabs li').length;
            var active = 0;

            for (var i = 0; i < liLen; i++) {
                tabWid += $('.tabs li').eq(i).outerWidth(true);
            }

            $('.tabs ul').css('width', tabWid);

            tabScroll = new IScroll('.tabs', {
                scrollX: true,
                scrollY: false,
                preventDefault: false
            });

            $('.tabs li').each(function(i, tar) {
                if ($(tar).find("a").hasClass("on") == true) {
                    active = i;
                    return false;
                }
            });
            setTimeout(function() {
                if (active < 1) {
                    return
                }
                tabScroll.scrollToElement($('.tabs li').eq(active - 1)[0], 500);
            }, 10);
        }

        //tab-menu click
        function tabClick() {

            $('.tabs li> a').on('click', function() {
                var $this = $(this);
                var tabLink = $('.tabs li> a');

                if ($this.hasClass('noton')) {
                	 return;
                } else if ($this.hasClass('on')) {
                    return;
                } else {
                    tabLink.removeClass('on');
                    $this.addClass('on');
                };

                if ($('.tab').length > 0) {
                    return;
                } else {
                    if ($this.parent().is(':first-child')) {
                        tabScroll.scrollToElement($this.parent().parent()[0], 500);
                    } else {
                        tabScroll.scrollToElement($this.parent().prev()[0], 500);
                    }
                }

            });

            $('.controls .btn-prev').on('click', function() {
                if ($('.tabs li> a').parent().is(':first-child')) {
                    tabScroll.scrollToElement($('.tabs li> a').parent().parent()[0], 500);
                } else {
                    tabScroll.scrollToElement($(this).parent().prev()[0], 500);
                }

            });

            $('.controls .btn-next').on('click', function() {
                if ($(this).parent().is(':first-child')) {
                    tabScroll.scrollToElement($(this).parent().parent()[0], 500);
                } else {
                    tabScroll.scrollToElement($(this).parent().prev()[0], 500);
                }

            })
        }

        if ($('.tabs').find('li').length > 4) {
            $('.controls').addClass('-block');
        }

        tabSwipe();
        tabClick();
    })();


    var tooltip = (function() {

        $('.btn-tooltip').on({
            "mouseover": function() {
                $(this).next('.tooltip').show();
            },
            "mouseout": function() {
                $(this).next('.tooltip').hide();
            },
            "click": function() {
                var $tooltip = $(this).next('.tooltip');
                if ($tooltip.hasClass('-active')) {
                    $tooltip.removeClass('-active');
                    $tooltip.hide();
                } else {
                    $tooltip.addClass('-active');
                    $tooltip.show();
                }
            }
        })
        $('.btn-tooltip').focus(function(){
            $(this).next('.tooltip').show();
        });
        $('.btn-tooltip').blur(function(){
            $(this).next('.tooltip').hide();
        });
    })();

    var svg = (function() {

        var windowWidth = $(window).width();
        if (windowWidth < 1200) {
            $('g').on({
                "click": function() {
                    if ($(this).hasClass('-active')) {
                        $(this).removeClass('-active');
                    } else {
                    	var id = $(this).find('a').attr('data-id');
                    	if ($("#"+id).hasClass('-active')) {
	                        $('g').removeClass('-active');
	                        $(this).addClass('-active');
                    	}
                    }
                }
            })
        } else {
            $('g').on({
                "mouseover": function() {
                	var id = $(this).find('a').attr('data-id');
                	if ($("#"+id).hasClass('-active')) {
	                    $('g').removeClass('-active');
	                    $(this).addClass('-active');
                	}
                },
                "mouseout": function() {
                	var id = $(this).find('a').attr('data-id');
                	if ($("#"+id).hasClass('-active')) {
                		$(this).removeClass('-active');
                	}
                }
            })
        }

        // SUB MENO : 20191020 지도에 데이터를 가지고 이동할 수 있도록 로직 추가
        $("[data-tab]").on("click", function(event) {
            event.preventDefault();
            var all = $(this).attr("data-tab");
            var me = $(this).attr("href");
            var id = $(this).attr("data-id");
            $(this).attr('data-focus', 'on');

            if($("#"+id).hasClass("-active")) {
	            $(all).hide();
                $(me).show().attr("tabindex", 0).focus();

	            if(id != "" && id != undefined) {
	            	$("#sidoId").val(id);
	            	fnSiDoMapView();
	            }

	            $("[data-tab]").removeClass("on");
                $(this).addClass("on").attr('data-focus', 'on');
            }
        });

        $('.btn-back').on('click', function(event) {
            event.preventDefault();
            $(this).parent().css('display', 'none').removeAttr("tabindex").hide();
            $(this).parent().siblings('.map-group2').css('display', 'none');
            $("a[data-focus=on]").focus();
            setTimeout(function(){
                $("a[data-focus=on]").removeAttr("data-focus");
            }, 500);
        })

        $('.map-group2 .btn-close').on('click', function(event) {
            event.preventDefault();
            $(this).parent().css('display', 'none').removeAttr("tabindex").hide();
            $("a[data-focus=on]").focus();
            setTimeout(function(){
                $(".map-group2 a[data-focus=on]").removeAttr("data-focus");
            }, 500);
        })
    })();

    var search = (function() {
        $('.search-open').on('click', function() {
            if ($(this).hasClass('-active')) {
                $(this).removeClass('-active');
                $('.wrapper').removeClass('bg');

            } else {
                $(this).addClass('-active');
                $('.wrapper').addClass('bg');
            }
        })

    })();

    var layer = (function() {
        $('.btn-layer').on('click', function() {
            var layer = $(this).next('.layer-box');

            if ($(this).hasClass('-active')) {
                layer.hide();
                $('.btn-layer').removeClass('-active');
            } else {
                $('.btn-layer').removeClass('-active');
                $('.layer-box').hide();
                layer.show();
                $(this).addClass('-active');
            }
        });

        $('.btn-close').on('click', function() {
            $(this).parent('.layer-box').hide();
            $(this).parent().siblings('.btn-layer').removeClass('-active');
        })
    })();

    var select = (function() {
        var selectTarget = $('select');
        selectTarget.on('click', function() {
            if ($(this).hasClass('-focus')) {
                selectTarget.removeClass('-focus');
            } else {
                selectTarget.removeClass('-focus');
                $(this).addClass('-focus');
            }
        })
    })();

//    var modal = (function() {
//        $('.btn-area').on('click', function() {
//        	console.log("btn_area");
//            if ($(this).hasClass('-active')) {
//                $(this).removeClass('-active');
//            } else {
//                $('.btn-area').removeClass('-active');
//                $(this).addClass('-active');
//            }
//        })
//
//        $('.modal').on('hidden.bs.modal', function(e) {
//            $('.btn-area').removeClass('-active');
//        })
//    })();

     $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $('.btn-top-m').stop().fadeIn(); //220405_수정
        } else {
            $('.btn-top-m').fadeOut();
        }

        $('.btn-top-m').click(function(){
            $('html, body').scrollTop(0);
            return false;
        });
    });
});