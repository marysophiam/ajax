"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(fortune) {
    $('#fortune-text').html(fortune);
}

function getFortune(evt) {
    evt.preventDefault();
    $.get('/fortune', showFortune);
}
    // TODO: get the fortune and show it in the #fortune-text div

$('#get-fortune-button').on('click', getFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // This is still broken, start here when you come back to it
    $.get(url, function (weather) {
        $('#weather-form').html(weather);
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


