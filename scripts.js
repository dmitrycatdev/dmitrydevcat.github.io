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

// анимированный скроллы
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

// изменение высоты фото относительно ширины
$(function(){
    $('.img_height_resize').height($('.img_height_resize').width());
  
    $(window).resize(function(){
      $('.img_height_resize').height($('.img_height_resize').width());
    });
  });
