$(document).ready(function() {
    var $window = $(window);
    
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 979) {
            $('#changedataplacement').attr('data-placement','right');
        }  
        else {  
            $('#changedataplacement').attr('data-placement','left'); 
        } 
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});