jQuery(window).scroll(function()
{
    var $div = $('.block');
    $div.each(function(i,el)
    {
        var top  = $(el).offset().top-90;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom)
        {
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
});
$( document ).ready(function() {
    $(function () {
        var elWrap = $('.slider'),
            el = elWrap.find('div.slide'),
            indexImg = 1,
            indexMax = el.length;
        
        function change () {
            el.fadeOut(500);
            el.filter(':nth-child('+indexImg+')').fadeIn(500);
        }	
            
        function autoCange () {	
            indexImg++;
            if(indexImg > indexMax) {
                indexImg = 1;
            }			
            change ();
        }	
        var interval = setInterval(autoCange, 4000);

        $('.project_info').hover(function() {
            $('div.project_info p').fadeIn(500);
            $('div.project_info a').fadeIn(500);
            
            clearInterval(interval);
        }, function(){
            $('div.project_info p').fadeOut(500);
            $('div.project_info a').fadeOut(500);
            
            interval = setInterval(autoCange, 4000);
        });
        $('div.next').click(function() {
            indexImg++;
            if(indexImg > indexMax) {
                indexImg = 1;
            }
            change ();
        });
        $('div.prev').click(function() {
            indexImg--;
            if(indexImg < 1) {
                indexImg = indexMax;
            }
            change ();
        });	
    });
});
// анимированный скролл
$(document).ready(function()
{
    $(".scroll").on("click","a", function (event) 
    {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});
jQuery(function(){
    $('a[href="#lp"]').click(function(){
            $('div[id="lp"]').fadeIn();
            return false;
    });
    $('div[id="lp"]').click(function(){
        $('div[id="lp"]').fadeOut();
    });

    $('a[href="#siteviz"]').click(function(){
            $('div[id="siteviz"]').fadeIn();
        return false;
    });
    $('div[id="siteviz"]').click(function(){
        $('div[id="siteviz"]').fadeOut();
    });

    $('a[href="#int_shop"]').click(function(){
            $('div[id="int_shop"]').fadeIn();
        return false;
    });
    $('div[id="int_shop"]').click(function(){
        $('div[id="int_shop"]').fadeOut();
    });

    $('a[href="#verstka"]').click(function(){
            $('div[id="verstka"]').fadeIn();
        return false;
    });
    $('div[id="verstka"]').click(function(){
        $('div[id="verstka"]').fadeOut();
    });
    
    $('a[href="#application"]').click(function(){
            $('div[id="application"]').fadeIn();
        return false;
    });
    $('div[id="application"]').click(function(){
        $('div[id="application"]').fadeOut();
    });

    $('a[href="#ispr"]').click(function(){
            $('div[id="ispr"]').fadeIn();
        return false;
    });
    $('div[id="ispr"]').click(function(){
        $('div[id="ispr"]').fadeOut();
    });
    
    $('a[href="#seo"]').click(function(){
            $('div[id="seo"]').fadeIn();
        return false;
    });
    $('div[id="seo"]').click(function(){
        $('div[id="seo"]').fadeOut();
    });
    
});
// изменение высоты фото относительно ширины
$(function(){
    $('.img_height_resize').height($('.img_height_resize').width());
    $(window).resize(function(){
        $('.img_height_resize').height($('.img_height_resize').width());
    });
    $('.sotial_icon').height($('.sotial_icon').width());
    $(window).resize(function(){
        $('.sotial_icon').height($('.sotial_icon').width());
    });
});;
jQuery(function(){
                
    $(window).scroll(function(){
        $('#hr')['slide'+($(window).scrollTop() > 1600 ? 'Down': 'Up')](300);

    });
});
jQuery(function(){
                
    $(window).scroll(function(){
        $('#skills_menu_info')['slide'+($(window).scrollTop() > 1000 ? 'Down': 'Up')](500);

    });
});
jQuery(function(){
    
    $(window).scroll(function(){
        $('#left')['slide'+($(window).scrollTop() > 500 ? 'Down': 'Up')](300);
        $('#right')['slide'+($(window).scrollTop() > 500 ? 'Down': 'Up')](300);

    });
});
