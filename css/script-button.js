$(function() {
    $('#a').hover(function() {
        $('#b').css('background', 'linear-gradient(to right, #ffd96a 50%, white 50%)');
    }, function() {
        // on mouseout, reset the background colour
        $('#b').css('background', 'linear-gradient(to right, #ffe18b 50%, white 50%)');
    });
});

$(function() {
    $('#c').hover(function() {
        $('#d').css('background', 'linear-gradient(to right, #669885 50%, white 50%)');
    }, function() {
        // on mouseout, reset the background colour
        $('#d').css('background', 'linear-gradient(to right, #84B6A3 50%, white 50%)');
    });
});