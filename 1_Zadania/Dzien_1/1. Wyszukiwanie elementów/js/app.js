
$(document).ready(function () {

    // Zadania z wykladowca

    // console.log('test');
    $('section').addClass('backgroundElement');
    // $('section.links nav').addClass('hover-effect');
    $('section.links').find('nav').addClass('hover-effect');

    // Zadanie 1

    // $('section.main li').addClass('borderClass colorText backgroundElement');

    // Zadanie 2

    // $('section.main').find('li').addClass('borderClass colorText backgroundElement');
    $('section.main').find('li').addClass(['borderClass', 'colorText', 'backgroundElement']);

    // Zadanie 3

    // $('a').css('color', 'red');
    // $('.menu').find('a').css('color', 'red');
    $('.menu').find('a').first().addClass('biggerMenuFont');

    // Zadanie 4

    $('h1').addClass('creepyHeader');
    $('h1').parent().css('border', '1px solid green');
    $('h1').next().addClass('crazy');

    // Zadanie 5

    console.log($('.menu').children().first());
    console.log($('.menu').children().eq(2));
    console.log($('.menu').children().last());

    $('.menu').children().first().addClass('menuLinks');
    $('.menu').children().eq(2).addClass('menuLinks');
    $('.menu').children().last().addClass('menuLinks');

    // Zadanie 6

    $('.menu').children().eq(2).hide();

    // Zadanie 7

    console.log($('section.form').find('input').first().val());
    console.log($('section.form').find('input').last().val());

    // Zadanie 8

    var codersLinkHref = $('#codersLink').attr('href');
    console.log(codersLinkHref);
    codersLinkHref = ('www.onet.pl');
    console.log(codersLinkHref);

    // Zadanie 9

    // To ponizej nie zmienia atrybutu w htmlu

    $('section.links a').eq(0).data('hover', 'Backbone');
    $('section.links a').eq(1).data('hover', 'Javascript');
    $('section.links a').eq(2).data('hover', 'Angular');
    $('section.links a').eq(3).data('hover', 'Ember');

    console.log($('section.links a').eq(0).data('hover'));
    console.log($('section.links a').eq(1).data('hover'));
    console.log($('section.links a').eq(2).data('hover'));
    console.log($('section.links a').eq(3).data('hover'));

    // To ponizej zmienia atrybut w htmlu

    // $('section.links a').eq(0).attr('data-hover', 'Backbone');
    // $('section.links a').eq(1).attr('data-hover', 'Javascript');
    // $('section.links a').eq(2).attr('data-hover', 'Angular');
    // $('section.links a').eq(3).attr('data-hover', 'Ember');

});

// W pliku index.html znajdziesz sekcję o klasie links.
//     Pobierz atrybut data-hover do zmiennej i wypisz go w konsoli.
//     Spróbuj za pomocą funkcji data oraz attr.
//     Jak widzisz są one źle wpisane w html, spróbuj je podmienić za
// pomocą funkcji data() lub attr().