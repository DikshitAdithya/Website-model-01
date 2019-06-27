$(document).ready(function() {
    //alert('width: '+$(window).width()+' height: '+$(window).height());
    /*var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);*/
    if($('.keystatistics').length > 0)
    {
        $('.aboutInfo .keystatistics ul li .info .head .num').each(function(index) {
            $(this).addClass('num'+index);
        });
        var maxValSqft = parseInt($('.aboutInfo .keystatistics ul li .info .head .num.num0').html());
        var maxValPark = parseInt($('.aboutInfo .keystatistics ul li .info .head .num.num1').html());
        var maxValTenanat = parseInt($('.aboutInfo .keystatistics ul li .info .head .num.num2').html());
        $('.aboutInfo .keystatistics ul li .info .head .num').each(function() {
            $(this).text('0');
        });
        var isqft = 1, ipark = 1, itenanat = 1;
        $(window).scroll(function() {
            if($('.aboutInfo .keystatistics').hasClass('numanim') == false)
            {
                $('.keystatistics').addClass('numanim');
                var isqft = 50, ipark = 50, itenanat = 50;
                $('.aboutInfo .keystatistics ul li .info .head .num').each(function() {
                    $(this).text('50');
                });
                setTimeout(function() {
                    if($('.keystatistics').is(':visible') == true)
                    {
                        var interval1 = setInterval(function() {
                            if(isqft >= maxValSqft)
                            {
                                $('.aboutInfo .keystatistics ul li .info .head .num.num0').html(isqft);
                                isqft--;
                            }
                        }, 70);
                        var interval2 = setInterval(function() {
                            if(ipark >= maxValPark)
                            {
                                $('.aboutInfo .keystatistics ul li .info .head .num.num1').html(ipark);
                                ipark--;
                            }
                        }, 70);
                        var interval3 = setInterval(function() {
                            if(itenanat >= maxValTenanat)
                            {
                                $('.aboutInfo .keystatistics ul li .info .head .num.num2').html(itenanat);
                                itenanat--;
                            }
                            else
                            {
                                $('.keystatistics').removeClass('numanim');
                                clearInterval(interval1);
                                clearInterval(interval2);
                                clearInterval(interval3);
                            }
                        }, 75);
                    }
                }, 500);
            }
        });
    }
    $('#unwanted').hide();
    if($('.esrinfoBox').length > 0)
    {
        if($(window).width() >= 580)
        {
            $('.esrinfoBox:nth-child(2n)').each(function() {
                $(this).find('.container').find('.pic').insertAfter($(this).find('.container').find('.detail'));
            });
        }
    }
    
    
    $('.bodWrap .bod ul li .readmore').click(function() {
        if($(this).parent('.detail').parent('li').hasClass('active') == false)
        {
            $('body').append('<div class="popdetailbg"></div>');
            $('.bodWrap .bod ul li').removeClass('active');
            $(this).parent('.detail').parent('li').addClass('active');
        }
        return false;
    });
    $('body').on('click', '.popdetail .popclosebtn, .popdetailbg', function() {
        $('.popdetailbg').remove();
        $('.bodWrap .bod ul li.active').removeClass('active');
    });
    if($('.journeyAccor').length > 0)
    {
        $('.journeyAccor .verticleLine .year').eq(0).addClass('active');
        $('.journeyAccor .verticleLine .year .head').click(function() {
            if($(this).parent('.year').hasClass('active'))
            {
                $(this).parent('.year').removeClass('active');
            }
            else
            {
                $('.journeyAccor .verticleLine .year').removeClass('active');
                $(this).parent('.year').addClass('active');
            }
        });
    }
    if($(window).width() > 768)
    {
        $('.aboutEverstoneRealterm .aboutEverstoneRealtermBox').mouseover(function(e) {
            e.preventDefault();
            $(this).find('.detailWrap').slideDown(500);
        });
        $('.aboutEverstoneRealterm .aboutEverstoneRealtermBox').mouseleave(function(e) {
            e.preventDefault();
            $(this).find('.detailWrap').slideUp(500);
        });
        $('.turnkey .turnkeyListing li').mouseover(function(e) {
            e.preventDefault();
            $(this).find('.caption').find('.info').find('.infoContent').find('a').find('.hover').slideDown(500);
        });
        $('.turnkey .turnkeyListing li').mouseleave(function(e) {
            e.preventDefault();
            $(this).find('.caption').find('.info').find('.infoContent').find('a').find('.hover').slideUp(500);
        });
    }
    if($(window).width() <= 768)
    {
        $('.aboutEverstoneRealterm .aboutEverstoneRealtermBox').click(function(e) {
            if($(this).hasClass('active') == false)
            {
                $('.aboutEverstoneRealterm .aboutEverstoneRealtermBox .detailWrap').slideUp(500);
                $('.aboutEverstoneRealterm .aboutEverstoneRealtermBox').removeClass('active');
                $(this).addClass('active');
                $(this).find('.detailWrap').slideDown(500);
            }
        });
        if($('.Banner').length > 0)
        {
            var banBg = $('.Banner > img').attr('src');
            $('.Banner').css('background-image', 'url('+banBg+')');
            //$('.Banner').css('height', '200px');
        }
    }
    adjustMapHeightOnOurPark();
    $('.ScrollToTopBtn').click(function() {
        //$('html,body').animate({ scrollTop: 0 }, 400);
        $.scrollify.move(0);
    });
	console.log($(window).width()+' X '+$(window).height());
    if(($('header .navigation nav ul li.active').length > 0) == false)
    {
        $('header .navigation nav ul li').eq(0).addClass('active');
    }
    $('header .navigation nav ul li.active').find('ul').show();
    $('header .navigation nav ul li span').click(function() {
        if($(this).parent('li').hasClass('active') == false)
        {
            $('header .navigation nav ul li').removeClass('active');
            $('header .navigation nav ul li ul').slideUp(500);
            $(this).parent('li').addClass('active');
            $(this).parent('li').find('ul').slideDown(500);
        }
        else
        {
            $(this).parent('li').removeClass('active');
            $(this).parent('li').find('ul').slideUp(500);
        }
        return false;
    });
    $('header .navigation').css('min-height', $(window).height()+'px');
    $('.various').fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
    $('.fancybox').fancybox();
    //$('.iframe').click(function() {return false;});
    
    if($(window).width() > 1100)
    {

        $.scrollify({
            section : ".hSliderSec",
            sectionName : "section-name",
            interstitialSection : "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset : 0,
            scrollbars: false,
            standardScrollElements: "",
            setHeights: false,
            overflowScroll: true,
            before:function() {},
            after:function() {},
            afterResize:function() {},
            afterRender:function() {}
        });
        //$('.hBannerSlider ul li > img').height($(window).height()).width($(window).width());
        $('.hBannerSlider ul li').height($(window).height() - 131).width($(window).width());
        $('.hBannerSlider ul li').each(function() {
            var hBanBg = $(this).find('> img').attr('src');
            $(this).css('background-image', 'url('+hBanBg+')');
        });
        
        
        
        $('.Map #Map img').height($(window).height() - 130);
        $('.downArrow').click(function() {
            $.scrollify.next();
        });
        /*var body_h = $('html, body').height();
        var i = $(window).height();
        $(window).scroll(function(){
            var $this = $(this);
             if ($this.scrollTop() >= body_h -i) {
              $('.downArrow').css({'display':'none'});
             }
            else{
                 $('.downArrow').css({'display':'block'});
            }
        })*/
    }
    $('.aboutIndo h3').click(function() {
        $('.aboutIndo .info').slideDown(500);
    });
    
    if($(window).width() < 768)
    {
        $('.Map #Map .mInfo').click(function() {
            $('.Map #Map .mInfo .hdetail').hide();
            $(this).find('.hdetail').show();
        });
        if($('.bod .popdetail').length > 0)
        {
            $('.popdetail .poppic, .popdetail .popdesc, .popdetail .popdesc .scroll').css('height', ($(window).height() * 80 / 100) + 'px');
        }
    }
    
    $('.hBannerSlider ul').bxSlider({
        pause: 6000,
        pager: true,
        controls: false,
        auto: true,
        onSliderLoad: function(){
            var hSlidePagerMargin = 20;
            var hNoOfSlides = $('.hBannerSlider .bx-wrapper .bx-pager .bx-pager-item').length;
            $('.hBannerSlider .bx-wrapper .bx-pager .bx-pager-item').each(function() {
                $(this).css('right', (hSlidePagerMargin * (hNoOfSlides -1))+'px');
                hNoOfSlides--;
            });
        }
    });
    
    fixingHeader();
    $(window).scroll(function() {
        fixingHeader();
    });
    $('#GoogleMap').height($(window).height() - $('header').height());  
    
    
    $('header .topMenuWrap .searchBtn').click(function() {
        $('.searchWrap').toggleClass('open');
    });
    $('body').click(function(e) {
        if( ($(e.target).closest(".navigation ").length > 0) == false ) {
            $('.Menu-btn').removeClass('open');
            $('header .navigation').removeClass('open');
        }
            /*$('.Menu-btn').removeClass('open');
            $('header .navigation').removeClass('open');*/
    });
    $('.Menu-btn').click(function(e) {
        e.stopPropagation();
        if($(this).hasClass('open'))
        {
            $(this).removeClass('open');
            $('header .navigation').removeClass('open');
            //$('header .nav').css('top', '-'+($(window).height())+'px');
        }
        else
        {
            $('.searchWrap').removeClass('open');
            $(this).addClass('open');
            $('header .navigation').addClass('open');
            //$('header .nav').css('top', '0px');
        }
    });
    if($('.tabbingWrap').hasClass('notabbing') == false)
    {
        $('.tabbingWrap .tabs ul li').eq(0).addClass('active');
        $('.tabbingWrap .tabContent .tContent').eq(0).addClass('active');
        $('.tabbingWrap .tabs ul li').click(function() {
            if(!$(this).hasClass('active'))
            {
                $('.tabbingWrap .tabs ul li').removeClass('active');
                $('.tabbingWrap .tabContent .tContent').removeClass('active');
                $(this).addClass('active');
                $('.tabbingWrap .tabContent .tContent').eq($(this).index()).addClass('active');
            }
        });
    }
    /* For Accordion */
    $('.accordionWrap .head').eq(0).addClass('open');
    $('.accordionWrap .desc').eq(0).slideDown(500);
    $('.accordionWrap .head').click(function() {
        if($(this).hasClass('open'))
        {
            $(this).removeClass('open');
            $(this).next('.desc').slideUp(500);
        }
        else
        {
            $('.accordionWrap .head').removeClass('open');
            $('.accordionWrap .desc').slideUp(500);
            $(this).addClass('open');
            $(this).next('.desc').slideDown(500);
            setTimeout(function(){
                var lnkPos = $('.accordionWrap .head.open').offset().top - 110;
                $('html, body').animate({scrollTop:lnkPos}, 500);
            }, 600);
        }
    });

if($('.contactus .message-box').is(':empty')){
    $('.contactus .message-box').hide();
}else{$('.contactus .message-box').show();}
 
var count=0;
    $('.more').attr('titile', 'Show more.')
    $('.more').click(function(){
        count++
    var isEven = function(someNumber){
        return (someNumber % 2)? true:false;
    }
    if(isEven(count)===false){
        $(this).attr('titile', 'Show less.')
        $(this).text('[-]');
        $(this).siblings('.completetext').show();
    }
else if(isEven(count)===true){
    $(this).attr('titile', 'Show more.')
    $(this).text('[+]');
    $(this).siblings('.completetext').hide();
}
})    
 
setTimeout(function(){
    $('.pressReleasePopup').fadeIn(1000);
    $('.overlay').fadeIn(1000);
   
     var _popimgW = $('.pressReleasePopup .poupImg').width()
     var _popimgH = $('.pressReleasePopup .poupImg').height();
     $('.pressReleasePopup').width(_popimgW-30);
     $('.pressReleasePopup').height(_popimgH-30); 
    
}, 5000)
    
$('.pressReleasePopup .ClosePopUp').click(function(){
     $('.pressReleasePopup').fadeOut(500);
    $('.overlay').fadeOut(500)
})
    
   
    
    
    
});
$(window).load(function() {
    
  
    
    adjustMapHeightOnOurPark();
    
    if($(window).width() >= 768)
    {
        $('.aboutInfo .left .ourCapabilities').height($('.aboutInfo .left .ourTeam img').height() - 84);
        $(window).resize(function() {
            $('.aboutInfo .left .ourCapabilities').height($('.aboutInfo .left .ourTeam img').height() - 84);
        });
    }
    
    
    /* For builtToSuit animation */
    $('.ourSolutions .tabbingWrap .tabs ul li').eq(1).click(function() {
        /*if($('.ourSolutions .customBuiltToSuit .right .builtToSuit').is(':visible')) 
        {
            
        };*/
        setTimeout(function() {
            $('.ourSolutions .customBuiltToSuit .right .builtToSuit li').each(function(index) {
                var aimTime = index * 250;
                setTimeout(function() {
                    $('.ourSolutions .customBuiltToSuit .right .builtToSuit li').eq(index).addClass('active');
                }, aimTime);
            });
        }, 1);
    });
    setTimeout(function() {
        $('.ourSolutions .tContent:nth-child(1) .customBuiltToSuit .right .builtToSuit:nth-child(1) li').each(function(index) {
            var aimTime = index * 250;
            setTimeout(function() {
                $('.ourSolutions .tContent:nth-child(1) .customBuiltToSuit .right .builtToSuit li').eq(index).addClass('active');
            }, aimTime);
        });
    }, 250);
    var menuMarginRight = ($(window).width() - $('header .container').width()) / 2;
    $('header .navigation').css({
        'padding-right': menuMarginRight + 'px',
        'width': ($('header .navigation').width() + menuMarginRight)+'px'
    });
});
$(window).resize(function() {
    adjustMapHeightOnOurPark();
});
function adjustMapHeightOnOurPark()
{
    if($('.ourParksDetails .right .areaMap').length > 0)
    {
        $('.ourParksDetails .left .detailMap iframe').css('height', $('.ourParksDetails .right .areaMap img').height()+'px');
    }
}
function fixingHeader() {
    if($(window).width() >= 980)
    {
        if($(window).scrollTop() > 0)
        {;
            $('header').addClass('fixed');
        }
        else
        {
            $('header').removeClass('fixed');
        }
    }
}

