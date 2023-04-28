import $, { timers } from "jquery";

import * as bootstrap from 'bootstrap';


$(document).ready(function () {
    const fillModal = (modal, source) => {
        modal.find(".modal-title").html(source.find(".card-title").html())
        modal.find(".modal-body").html(source.find(".card-text").html())
        modal.attr('current-item', source.attr('id'));
    };

    $(document).on('click', '.card', function (e) {
        const modal = $(document).find("#modal");
        fillModal(modal, $(this));
    });

    $(document).on('keydown', function (e) {
        const modal = $(document).find("#modal");
        const cardsList = $(document).find('.card').toArray().map((item) => {
            return $(item).attr('id')
        });
        const current = cardsList.findIndex(element => element == modal.attr("current-item"));

        if (current == -1) {
            throw new Error("invalid card index");
        }

        if (e.which == 37) { // Left Arrow Key
            const prevSlide = current > 0 ? cardsList[current - 1] : cardsList[cardsList.length - 1];
            fillModal(modal, $(document).find(`#${prevSlide}`));
        } else if (e.which == 39) { // Right Arrow Key
            const nextSlide = current < cardsList.length - 1 ? cardsList[current + 1] : cardsList[0];
            fillModal(modal, $(document).find(`#${nextSlide}`));
        }
    });

    $(document).on("click", ".Atomic", function (e) {
        var toast = new bootstrap.Toast($('.toast'));
        toast.show();
    })

    $(function () {
        $('[data-toggle="popover"]').popover();
    });
});