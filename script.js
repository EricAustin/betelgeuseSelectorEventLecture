console.log('script.js sourced!');


$('Document').ready(function () {
    $('body').append('<h2>Not just down, all the way down!</H2>');
    $('body').prepend('<h2>All the way to the top!</h2>');
    $('li').css('color', 'blue');
    $('#kevin li').css('color', 'maroon');
    $('.food').css('color', 'pink');
    $('#chief').css('color', 'green');
    // $('ul:first li:last-child').css('color', 'black');
    $('ul').first().children().last().css( "color", "black");

    var clicks = 0
    
    $('#kevinNewFavorite').on('click', function(){
        $('#kevin').append('<li>light sabers</li>')
        // clicks++;
        // console.log('button was clicked', clicks, 'times');
    });








});