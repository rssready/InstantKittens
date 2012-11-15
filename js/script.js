$(document).ready(function(){

    var kittah_count = readCookie('kittahcount');
    if(kittah_count == null) {
        kittah_count = 1;
        createCookie('kittahcount', 1, 1000);
    } else {
        kittah_count = parseInt(kittah_count);
    }
    $('#kitty-counter span').text(kittah_count);

    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $('#wrap').css({ 'height' : winHeight , 'width' : winWidth });

    $(window).resize(function(){
      var winWidth = $(window).width();
      var winHeight = $(window).height();
      $('#wrap').css({ 'height' : winHeight , 'width' : winWidth });
    });

    var slides = [
      {image : '001.gif'},
      {image : '002.gif'},
      {image : '003.gif'},
      {image : '004.gif'},
      {image : '005.gif'},
      {image : '006.gif'},
      {image : '007.gif'},
      {image : '008.gif'},
      {image : '009.gif'},
      {image : '010.gif'},
      {image : '011.gif'},
      {image : '012.gif'},
      {image : '013.gif'},
      {image : '014.gif'},
      {image : '015.gif'},
      {image : '016.gif'},
      {image : '017.gif'},
      {image : '018.gif'},
      {image : '019.gif'},
      {image : '020.gif'},
      {image : '021.gif'},
      {image : '022.gif'},
      {image : '023.gif'},
      {image : '024.gif'},
      {image : '025.gif'},
      {image : '026.gif'},
      {image : '027.gif'},
      {image : '028.gif'},
      {image : '029.gif'},
      {image : '030.gif'},
      {image : '031.gif'},
      {image : '032.gif'},
      {image : '033.gif'},
      {image : '034.gif'},
      {image : '035.gif'},
      {image : '036.gif'},
      {image : '037.gif'},
      {image : '038.gif'},
      {image : '039.gif'},
      {image : '040.gif'},
      {image : '041.gif'},
      {image : '042.gif'},
      {image : '043.gif'},
      {image : '044.gif'},
      {image : '045.gif'},
      {image : '046.gif'},
      {image : '047.gif'},
      {image : '048.gif'},
      {image : '049.gif'},
      {image : '050.gif'},
      {image : '051.gif'},
      {image : '052.gif'},
      {image : '053.gif'},
      {image : '054.gif'},
      {image : '055.gif'},
      {image : '056.gif'},
      {image : '057.gif'},
      {image : '058.gif'},
      {image : '059.gif'},
      {image : '060.gif'},
      {image : '061.gif'}
      ];

        var newKitty = function(){
            
            // How many images are there?
            var imageNum  = Math.floor((Math.random()*slides.length)+1);
            
            $('#kitty').css( 'background-image' , 'url(img/' + slides[imageNum].image + ')' ).attr('kitty' , slides[imageNum].image);
            
            kittah_count++;
            $('#kitty-counter span').text(kittah_count);
            createCookie('kittahcount', kittah_count, 1000);
            
            // Tracking
            _gaq.push(['_trackEvent', 'clicks', 'nextImage', 'KittyClicked', 1]);
            
            // Nix hash tag
            var url = window.location.hash;
            if (url != ''){
                window.location.hash = ''
            }
        }

        // Query String Stuff
        var url = window.location.hash;
        if (url != ''){
            var permaLink = url.replace('#kitty=' , '');
            $('#kitty').css( 'background-image' , 'url(img/' + permaLink + '.gif)' ).attr('kitty' , permaLink);   
        }
        else {
            var imageNum  = Math.floor((Math.random()*slides.length)+1);
            $('#kitty').css( 'background-image' , 'url(img/' + slides[imageNum].image + ')' ).attr('kitty' , slides[imageNum].image);
        }

        // Click
        $('#kitty').click(function() {
            newKitty();
        });
        
        // Arrows Buttons
        $(document).keydown(function(e){
            if (e.keyCode == 32) { 
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
        $('#about .close').click(function(e){
            e.preventDefault();
            
            $('#open').removeClass('active');
            $('#about').slideUp();
        });
        
        // Link Stuff
        $('#link-open').click(function(e){
            e.preventDefault();
            
            $('#link').slideDown();
            
            var currentCat = $('#kitty').attr('kitty').replace('.gif', '');

            $('#link').find('input').val('http://instantkittens.com/#kitty=' + currentCat);
        });
        $('#link .close').click(function(e){
            e.preventDefault();
            
            $('#link').slideUp();
        });

        $('#copy').click(function(e) {
            e.preventDefault();
            
            $(this).zclip({
                path:'js/ZeroClipboard.swf',
                copy:function(){return $('#link input').val();
                }
            });
            
        });
        
        $('#link input').focus(function(){
            var $this = $(this);
           $this.select();
           $this.mouseup(function() {
                // Prevent further mouseup intervention
                $this.unbind("mouseup");
                return false;
            });
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







