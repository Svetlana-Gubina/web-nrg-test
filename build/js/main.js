$.fn.log = function() {
    console.log.apply(console, this);
    return this;
};

$(function() { 
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

    // Hide all slides except first and add active class to first
    slides.not(':first').css('display', 'none');
    currentSlide.addClass('active');
    prevSlide.prop('disabled', true);

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

    // Detect if user clicked on arrow for next slide and fade next slide if it did
    $(nextSlide).click(function(e) {
        e.preventDefault();
        fadeNext();
    });
     
    // Detect if user clicked on arrow for previous slide and fade previous slide if it did
    $(prevSlide).click(function(e) { 
        e.preventDefault();
        fadePrev();
    });
});
  
$(function(){
	$(".page-header__contacts-feedback").fancybox({
		closeBtn: false,
        modal: true,
        type: 'inline',
	});
});