$(document).ready(function(){
    var winHeight = $(window).height();
    
    $('.container').css('min-height',winHeight);
    $('footer').css('min-height',winHeight);
    
    $('footer').css('top',winHeight-60);
    $('.toggle-footer').click(function(){
      $('footer').toggleClass('visible');
      return false;
    });
    
    $('.project-index.inactive .project').click(function() {
      $('.project-index').removeClass('inactive');
      $(this).parent().addClass('selected');
      $('.project-index').delay(1500).fadeOut(500);
      $('.container').delay(1500).addClass('loading');
      
      var href = $(this).attr('href');
      setTimeout(function() {window.location = href}, 2500);
      return false;
    });
    
    $('.show-video').click(function(){
      $('.video-overlay').fadeIn();
    });
    $('.close-video').click(function(){
      $('.video-overlay').fadeOut();
    });
    
    $(window).resize(function(){
      var winHeight = $(window).height();
      $('footer').css('top',winHeight-60);
    });
  });