$(document).ready(function(){

    var kittah_count = 1;

    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $('#wrap').css({ 'height' : winHeight , 'width' : winWidth });

    $(window).resize(function(){
      var winWidth = $(window).width();
      var winHeight = $(window).height();
      $('#wrap').css({ 'height' : winHeight , 'width' : winWidth });
    });

    var slides = [
      {image : 'img/001.gif'},
      {image : 'img/002.gif'},
      {image : 'img/003.gif'},
      {image : 'img/004.gif'},
      {image : 'img/005.gif'},
      {image : 'img/006.gif'},
      {image : 'img/007.gif'},
      {image : 'img/008.gif'},
      {image : 'img/009.gif'},
      {image : 'img/010.gif'},
      {image : 'img/011.gif'},
      {image : 'img/012.gif'},
      {image : 'img/013.gif'},
      {image : 'img/014.gif'},
      {image : 'img/015.gif'},
      {image : 'img/016.gif'},
      {image : 'img/017.gif'},
      {image : 'img/018.gif'},
      {image : 'img/019.gif'},
      {image : 'img/020.gif'},
      {image : 'img/021.gif'},
      {image : 'img/022.gif'},
      {image : 'img/023.gif'},
      {image : 'img/024.gif'},
      {image : 'img/025.gif'},
      {image : 'img/026.gif'},
      {image : 'img/027.gif'},
      {image : 'img/028.gif'},
      {image : 'img/029.gif'},
      {image : 'img/030.gif'},
      {image : 'img/031.gif'},
      {image : 'img/032.gif'},
      {image : 'img/033.gif'},
      {image : 'img/034.gif'},
      {image : 'img/035.gif'},
      {image : 'img/036.gif'},
      {image : 'img/037.gif'},
      {image : 'img/038.gif'},
      {image : 'img/039.gif'},
      {image : 'img/040.gif'},
      {image : 'img/041.gif'},
      {image : 'img/042.gif'},
      {image : 'img/043.gif'},
      {image : 'img/044.gif'},
      {image : 'img/045.gif'},
      {image : 'img/046.gif'},
      {image : 'img/047.gif'},
      {image : 'img/048.gif'},
      {image : 'img/049.gif'},
      {image : 'img/050.gif'},
      {image : 'img/051.gif'},
      {image : 'img/052.gif'},
      {image : 'img/053.gif'},
      {image : 'img/054.gif'},
      {image : 'img/055.gif'},
      {image : 'img/056.gif'},
      {image : 'img/057.gif'},
      {image : 'img/058.gif'},
      {image : 'img/059.gif'},
      {image : 'img/060.gif'},
      {image : 'img/061.gif'}
      ];

      var newKitty = function(){
        var imageNum  = Math.floor((Math.random()*slides.length)+1);
        $('#kitty').css( 'background-image' , 'url(' + slides[imageNum].image + ')' );
        kittah_count++;
        $('#kitty-counter span').text(kittah_count);
      }

      var imageNum  = Math.floor((Math.random()*slides.length)+1);
      $('#kitty').css( 'background-image' , 'url(' + slides[imageNum].image + ')' );

      // Click
      $('#kitty').click(function() {
        newKitty();
      });

      // Arrows Buttons
      $(document).keydown(function(e){
          if (e.keyCode == 37) { 
             newKitty();
             return false;
          }
          if (e.keyCode == 39) { 
             newKitty();
             return false;
          }
      });
      
    // == Audio Stuff
    pauseMusic();
    
    // == About section
    $('#open').click(function(e){
        e.preventDefault();
        
        $(this).addClass('active');
        $('#about').slideDown();
    });
    $('#close').click(function(e){
        e.preventDefault();
        
        $('#open').removeClass('active');
        $('#about').slideUp();
    });

});

// Clicktoggle function
(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function(e) {
        	e.preventDefault();
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));


// Pause
function pauseMusic () {            
    $('#pause').clickToggle(
        function(){
            $('#music')[0].pause();
            $(this).addClass('muted');
        },
        function(){
            $('#music')[0].play();
            $(this).removeClass('muted');
        }
    );
}







