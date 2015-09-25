'use strict';

document.addEventListener('DOMContentLoaded', function () {
    //$('#exampleModal').modal();

    $('.nav-sidebar a').click(function (e) {
        $('.nav-sidebar .active').removeClass('active');

        $(this).parent().toggleClass('active');
    })
}, false);