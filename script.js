console.log('script.js sourced!');

$('Document').ready(function () {
    $('body').append('<h2>Cookies all the way down!</H2>');
    $('body').prepend('<h2>All the way to the top!</h2>');
    $('li').css('color', 'blue');
    $('#kevin li').css('color', 'maroon');
    $('.food').css('color', 'pink');
    $('#chief').css('color', 'green');
    // $('ul:first li:last-child').css('color', 'black');
    $('ul').first().children().last().css("color", "black");

    var clicks = 0

    $('#kevinNewFavorite').on('click', function () {
        var kevinsFavorite = $('#kevinsNewFavoriteInput').val();
        // $('#kevin').append('<li>'+kevinsFavorite+'</li>')
        $('#kevin').append('<li>' + kevinsFavorite + '<button class="deleteme">Delete me</button></li>')
    });


    $('#brendtsNewFavorite').on('click', function () {
        var brendtsFavorite = $('#brendtsNewFavoriteInput').val();
        $('#brendt').append('<li>' + brendtsFavorite + '<button class="deleteme">Delete me</button></li>')

    });

    $('ul').on('click', '.deleteme', function () {
        $(this).parent().remove()
    })






});