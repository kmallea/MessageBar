/*

USAGE:
<style> 
.notice {
    position: relative;
    background-color: #feff91;
    border-bottom: solid 2px #000;
    color: #000000;
    font-size:14px;
    padding: 10px;
    font-weight:bold
}
 
.notice-close-btn {
    position: absolute;
    top: 5px;
    right: 10px;
    font-family: Verdana;
    font-size: .8em;
    font-weight: bold;
    cursor: pointer;
}
</style> 

displayNotice('showBeta', 'hide', 'Socializing your sound is going to get even better! <a href="http://beta.twiturm.com" target="_blank">GET EARLY ACCESS!</a>');

*/

function displayNotice(key, value, content) {
    // Check for cookie and exit if exists
    if (readCookie(key) == value) { return; }
    
    // Create div, set content, add class, prepend to body and fade in
    $('<div></div>').html(content + '<span class="notice-close-btn">X</span>').addClass('notice').prependTo('body').hide().fadeIn('slow');
    
    // Add event handler to <span> to act as close button
    $('.notice-close-btn').click(function () {
    	// Set cookie so this doesn't show up again
    	createCookie(key, value, 7);
        $(this).parent().fadeOut();
    });    
}
 
function createCookie(name,value,days) {
    var date = new Date(),
        expires;
    
    if (days) {        
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = '; expires=' + date.toGMTString();
    } else {
        expires = "";
    }
    
    document.cookie = name + '=' + value + expires + '; path=/';
}
 
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') { c = c.substring(1,c.length); }
        if (c.indexOf(nameEQ) == 0) { return c.substring(nameEQ.length,c.length); }
    }
    return null;
}
 
function eraseCookie(name) {
    createCookie(name,"",-1);
}
