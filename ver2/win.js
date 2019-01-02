$(document).ready(function() {
    var $window = $(window);
    
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 979) {
            $('#changedataplacement').Attr('data-placement','right');
        }  
        else {  
            $('#changedataplacement').Attr('data-placement','left'); 
        } 
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});