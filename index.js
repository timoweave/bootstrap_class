function init() {

    add_nav_click();
    activate_hints();
    // add_carousel_buttons();
    add_modal_clicks();

    function add_nav_click() {
        var nav_anchors = $("ul.nav.navbar-nav li a");
        
        nav_anchors.on("click", function() {
            var element = $(this)[0];
            var tag_id = '#' + element.href.split()[1];
            var tag_label = element.text;
            update_bread(tag_id, tag_label);

            clear_nav();
            
            $(this).parent().addClass("active");        
        });
    }

    function clear_nav() {
        var active_nav = $(".nav").find(".active");
        active_nav.removeClass("active");
    }

    function update_bread(tag, label) {

        var breadcrumb = $('.breadcrumb');

        var anchor = $('<a>');
        var list_item = $('<li>').addClass("active").append(anchor);

        anchor.attr("href", tag);        
        anchor.text(label);        

        if (breadcrumb.children().length > 1) {
            breadcrumb.children().last().remove();
        }
        breadcrumb.append(list_item);
    }

    function activate_hints() {
        $('[data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    }

    function add_carousel_buttons() {
        var carousel = $("#food_carousel");

        var change = $("#food_carousel_change");
        change.click(function() {
            alert("play");
            carousel.carousel('play');
        });

        var pause = $("#food_carousel_pause");
        pause.click(function() {
            alert("pause");
            carousel.carousel('pause');
        });
    }

    function add_modal_clicks() {
        set_button_modal_click($('.show_rsvp'), $('#rsvp_modal'), 'show');
        set_button_modal_click($('.hide_rsvp'), $('#rsvp_modal'), 'hide');
        set_button_modal_click($('.show_login'), $('#login_modal'), 'show');
        set_button_modal_click($('.hide_login'), $('#login_modal'), 'hide');

        function set_button_modal_click(button, modal, action) {
            button.on('click', function() {
                modal.modal(action);
            });
        }
    }

}

$(document).ready(function() {
    init();
    console.log("loaded");    
});





