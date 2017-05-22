$(document).ready(function($){

  /* ---------- Account Nav ---------- */
  $('.app-topper .account-name').click(function(){
    if ($('.layer-account').is(':visible')) {
      $('.layer-account').slideUp();
    } else {
      $('.layer-account').slideDown();
    }
  });

  /* ---------- Timeline view on fullscreen ---------- */
  $('.timeline-box .btn-fullscreen').click(function(){
    if ($('.timeline-box').hasClass('is-fullscreen')) {
      $('.timeline-box').removeClass('is-fullscreen');
      $('.project-box').removeClass('is-hide');
    } else {
      $('.project-box').addClass('is-hide');
      $('.timeline-box').addClass('is-fullscreen');
    }
  });

  /* ---------- Welcome Layer ----------- */
  $('.layer-welcome button').click(function(){
    $('.layer-welcome').slideUp('fast');
    $('.blind').fadeOut();
  });

  $('.organize-box li').click(function(){
    $(this).parent('ul').find('li').removeClass('is-select');
    $(this).addClass('is-select');
  });

  if($('.app-container').outerHeight() > $(document).height()){
    $('.app-footer').removeClass('fixed');
  } else {
    $('.app-footer').addClass('fixed');
  }

  $(window).resize(function(){
    if($('.app-container').outerHeight() > $(document).height()){
      $('.app-footer').removeClass('fixed');
    } else {
      $('.app-footer').addClass('fixed');
    }
  });

  // Loading sample
  var loadingHTML = $('<div class="loading"><svg width="48px" viewBox="0 0 310 160" xmlns="http://www.w3.org/2000/svg"><path d="M50 0 100 0 50 160 0 160"></path><path transform="translate(100, 80) scale(-1, 1) translate(-100, -80)" d="M100 0 150 0 100 160 50 160"></path><path d="M150 0 200 0 150 160 100 160"></path><path transform="translate(200, 80) scale(-1, 1) translate(-200, -80)" d="M200 0 250 0 200 160 150 160"></path><path d="M260 0 310 0 260 160 210 160"></path></svg></div>');
  var appContainer = $('.app-container')
  var appTopper = $('.app-topper')
  loadingHTML.insertAfter(appTopper);
  $('.loading').fadeIn('fast').delay('1200').fadeOut('fast');
  appContainer.delay('1200').fadeIn();

  $('body.login button:enabled').click(function(){
    window.location.href = './monitoring.html';
  });

  $('.status-fail button').hover(function(){
    $(this).toggleClass('animated');
  });

  // Project item setting
  var projectSetHTML = $('<div class="layer layer-setting"><ul class="layer-nav"><li><a href="#"><i class="fa fa-repeat"></i>Rebuild</a></li><li><a href="#"><i class="fa fa-cog"></i>Setting</a></li></ul></div>');
  $('.btn-project-qsetting').click(function(){
    $('.layer-setting').remove();
    projectSetHTML.insertAfter($(this));
  });

  $('.project-status button, .layer-setting li:first-child a').click(function(){
    $('.layer').slideUp('fast');
    $('.blind').fadeIn('fast');
    $('.layer-building').slideDown();
  });

  $('.projectlist-item strong').click(function(){
    $('.projectlist-box li').removeClass('is-current');
    $('.layer-setting').remove();
    $(this).closest('li').addClass('is-current');
  });

  // Scroll detecting navigation
  lastScroll = 0;
  $(window).on('scroll',function() {
    var scroll = $(window).scrollTop();
    var gnb = $('.page-gnb')
    var gnbHeight = $('.page-gnb').outerHeight();
    if(lastScroll - scroll > 0) {
      gnb.slideDown().addClass('is-scroll');
    } else if(scroll > 0){
      gnb.slideUp().removeClass('is-scroll');
    }
    lastScroll = scroll;
  });

});
