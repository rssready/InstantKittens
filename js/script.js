var kittah_count = '';
var slides = '';

$(document).ready(function(){

    kittah_count = 1;

    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $('#wrap').css({ 'height' : winHeight , 'width' : winWidth });

    $(window).resize(function(){
      var winWidth = $(window).width();
      var winHeight = $(window).height();
      $('#wrap').css({ 'height' : winHeight , 'width' : winWidth });
    });

    slides = [
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
        {image: '061.gif'},
        {image: '062.gif'},
        {image: '063.gif'},
        {image: '064.gif'},
        {image: '065.gif'},
        {image: '066.gif'},
        {image: '067.gif'},
        {image: '068.gif'},
        {image: '069.gif'},
        {image: '070.gif'},
        {image: '071.gif'},
        {image: '072.gif'},
        {image: '073.gif'},
        {image: '074.gif'},
        {image: '075.gif'},
        {image: '076.gif'},
        {image: '077.gif'},
        {image: '078.gif'},
        {image: '079.gif'},
        {image: '080.gif'},
        {image: '081.gif'},
        {image: '082.gif'},
        {image: '083.gif'},
        {image: '084.gif'},
        {image: '085.gif'},
        {image: '086.gif'},
        {image: '087.gif'},
        {image: '088.gif'},
        {image: '089.gif'},
        {image: '090.gif'},
        {image: '091.gif'},
        {image: '092.gif'},
        {image: '093.gif'},
        {image: '094.gif'},
        {image: '095.gif'},
        {image: '096.gif'},
        {image: '097.gif'},
        {image: '098.gif'},
        {image: '099.gif'},
        {image: '100.gif'},
        {image: '101.gif'},
        {image: '102.gif'},
        {image: '103.gif'},
        {image: '104.gif'},
        {image: '105.gif'},
        {image: '106.gif'},
        {image: '107.gif'},
        {image: '108.gif'},
        {image: '109.gif'},
        {image: '110.gif'},
        {image: '111.gif'},
        {image: '112.gif'},
        {image: '113.gif'},
        {image: '114.gif'},
        {image: '115.gif'},
        {image: '116.gif'},
        {image: '117.gif'},
        {image: '118.gif'},
        {image: '119.gif'},
        {image: '120.gif'},
        {image: '121.gif'},
        {image: '122.gif'},
        {image: '123.gif'},
        {image: '124.gif'},
        {image: '125.gif'},
        {image: '126.gif'},
        {image: '127.gif'},
        {image: '128.gif'},
        {image: '129.gif'},
        {image: '130.gif'},
        {image: '131.gif'},
        {image: '132.gif'},
        {image: '133.gif'},
        {image: '134.gif'},
        {image: '135.gif'},
        {image: '136.gif'},
        {image: '137.gif'},
        {image: '138.gif'},
        {image: '139.gif'},
        {image: '140.gif'},
        {image: '141.gif'},
        {image: '142.gif'},
        {image: '143.gif'},
        {image: '144.gif'},
        {image: '145.gif'},
        {image: '146.gif'},
        {image: '147.gif'},
        {image: '148.gif'},
        {image: '149.gif'},
        {image: '150.gif'},
        {image: '151.gif'},
        {image: '152.gif'},
        {image: '153.gif'},
        {image: '154.gif'},
        {image: '155.gif'},
        {image: '156.gif'},
        {image: '157.gif'},
        {image: '158.gif'},
        {image: '159.gif'},
        {image: '160.gif'},
        {image: '161.gif'},
        {image: '162.gif'},
        {image: '163.gif'},
        {image: '164.gif'},
        {image: '165.gif'},
        {image: '166.gif'},
        {image: '167.gif'},
        {image: '168.gif'},
        {image: '169.gif'},
        {image: '170.gif'},
        {image: '171.gif'},
        {image: '172.gif'},
        {image: '173.gif'},
        {image: '174.gif'},
        {image: '175.gif'},
        {image: '176.gif'},
        {image: '177.gif'},
        {image: '178.gif'},
        {image: '179.gif'},
        {image: '180.gif'},
        {image: '181.gif'},
        {image: '182.gif'},
        {image: '183.gif'},
        {image: '184.gif'},
        {image: '185.gif'},
        {image: '186.gif'},
        {image: '187.gif'},
        {image: '188.gif'},
        {image: '189.gif'},
        {image: '190.gif'},
        {image: '191.gif'},
        {image: '192.gif'},
        {image: '193.gif'},
        {image: '194.gif'},
        {image: '195.gif'},
        {image: '196.gif'},
        {image: '197.gif'},
        {image: '198.gif'},
        {image: '199.gif'},
        {image: '200.gif'},
        {image: '201.gif'},
        {image: '202.gif'},
        {image: '203.gif'},
        {image: '204.gif'},
        {image: '205.gif'},
        {image: '206.gif'},
        {image: '207.gif'},
        {image: '208.gif'},
        {image: '209.gif'},
        {image: '210.gif'},
        {image: '211.gif'},
        {image: '212.gif'},
        {image: '213.gif'},
        {image: '214.gif'},
        {image: '215.gif'},
        {image: '216.gif'},
        {image: '217.gif'},
        {image: '218.gif'},
        {image: '219.gif'},
        {image: '220.gif'},
        {image: '221.gif'}
      ];

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
            changePerma();
            
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

// New Kitty
function newKitty () {
            
    // How many images are there?
    var imageNum  = Math.floor((Math.random()*slides.length)+1);
    
    $('#kitty').css( 'background-image' , 'url(img/' + slides[imageNum].image + ')' ).attr('kitty' , slides[imageNum].image);
    
    kittah_count++;
    $('#kitty-counter span').text(kittah_count);
    
    // Tracking
    _gaq.push(['_trackEvent', 'clicks', 'nextImage', 'KittyClicked', 1]);
    
    // Nix hash tag
    var url = window.location.hash;
    if (url != ''){
        window.location.hash = ''
    }
    
    changePerma();
}

// Permalink
function changePerma () {
    var currentCat = $('#kitty').attr('kitty').replace('.gif', '');
    $('#link').find('input').val('http://instantkittens.com/#kitty=' + currentCat);
}





