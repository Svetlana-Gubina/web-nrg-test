$(function() { 
    // Start autoplay
    var auto = true;
     
    // Pause duration between slides (ms)
    var pause = 4000;

    // Get parent element
    var $this = $('#slider');
 
    // Slides container
    var slidesCont = $this.children('.slider__slides');
    // Get all slides
    var slides = slidesCont.children('.slider__slide');
 
    // Get Previous / Next links
    var arrowsCont = $('.slider__handles');  
    var prevSlide = arrowsCont.children('.slider__handles-btn--left');
    var nextSlide = arrowsCont.children('.slider__handles-btn--right');
 
    // Total slides count
    var slidesCount = slides.length;
 
    // Set currentSlide to first child
    var currentSlide = slides.first();
    var currentSlideIndex = 1;

    // Holds setInterval for autoplay, so we can reset it when user navigates
    var autoPlay = null;

    // Hide all slides except first and add active class to first
    slides.not(':first').css('display', 'none');
    currentSlide.addClass('active');

    // Function responsible for fading to next slide
    function autoFadeNext() {
        currentSlide.removeClass('active').fadeOut(700);
     
        if(currentSlideIndex == slidesCount) {
            currentSlide = slides.first();
            currentSlide.delay(500).addClass('active').fadeIn(700);
            currentSlideIndex = 1;
        } else {
            currentSlideIndex++;
            currentSlide = currentSlide.next();
            currentSlide.delay(500).addClass('active').fadeIn(700);
        }
    }

    // Function responsible for fading to next slide
    function fadeNext() {
        currentSlide.removeClass('active').fadeOut(700);
     
        if(currentSlideIndex == slidesCount) {
            return;
        } else {
            currentSlideIndex++;
            currentSlide = currentSlide.next();
            currentSlide.delay(500).addClass('active').fadeIn(700);
            prevSlide.prop('disabled', false);
            nextSlide.prop('disabled', true);
        }
    }

    // Function responsible for fading to previous slide
    function fadePrev() {
        currentSlide.removeClass('active').fadeOut(700);

        if(currentSlideIndex == 1) {
            return;
        } else {
            currentSlideIndex--;
            currentSlide = currentSlide.prev();
            currentSlide.delay(500).addClass('active').fadeIn(700);
            prevSlide.prop('disabled', true);
            nextSlide.prop('disabled', false);
        }
    }

    // Function that starts the autoplay and resets it
    // in case user navigated (clicked prev or next)
    function AutoPlay() {
        clearInterval(autoPlay);
     
        if(auto == true) {
            autoPlay = setInterval(function() {autoFadeNext()}, pause);
        }
    }

    // Detect if user clicked on arrow for next slide and fade next slide if it did
    $(nextSlide).click(function(e) {
        e.preventDefault();
        fadeNext();
        AutoPlay();
    });
     
    // Detect if user clicked on arrow for previous slide and fade previous slide if it did
    $(prevSlide).click(function(e) { 
        e.preventDefault();
        fadePrev();
        AutoPlay();
    });

    // Start autoplay if auto is set to true
    AutoPlay();
});
  
$(function(){
	$(".page-header__contacts-feedback").fancybox({
        margin: 0,
        padding: 0,
        maxWidth: 466,
		closeBtn: false,
        modal: true,
        type: 'inline',
        animationEffect: "fade",
        transitionIn: "fade",
        transitionOut: "fade"
	});
});