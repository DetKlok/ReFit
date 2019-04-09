jQuery(function(){
    initTabsGallery();
});

function initTabsGallery() {
    jQuery('.gallery-tab').each(function(){
        var thisGallery = jQuery(this);
        var galleryViewbox = thisGallery.find('.viewbox');
        var controlsHolder = thisGallery.find('.controls-holder');
        var buttons = thisGallery.find('.controls-holder a');

        galleryViewbox.html(buttons.eq(0).html());
        buttons.eq(0).addClass('active');

        buttons.on('click', function(e) {
            var thisBtn = jQuery(this);
            e.preventDefault();
            galleryViewbox.find('img').fadeOut(300, function() {
                galleryViewbox.find('img').attr('src', thisBtn.find('img').attr('src'));
                galleryViewbox.find('img').fadeIn(300);
                buttons.removeClass('active');
                thisBtn.addClass('active');
            })
            console.log(jQuery(this))
        })
    })
}