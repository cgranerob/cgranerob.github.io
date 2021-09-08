$(document).ready(function(){
  
  $(function(){
    
    var videos = $('.video'),
        state = false;
    
    videos.each(function(){
    
      var videocon = $(this),
          btn = videocon.find('.expandvideo'),
          video = videocon.find('.videocontainer');

      btn.on('click', function() {
        
        if ( state == false ) {
          
            video.animate({width: '500px', height: '500px'}, 'fast', function() { state = true; btn.html('Close Video'); });
          
        } else {
          
          video.animate({width: '100px', height: '80px'}, 'fast', function() { state = false; btn.html('Show Video'); });
          
        }
        
      });
      
    });
    
  });
  
});