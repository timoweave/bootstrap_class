function init() {

    add_nav_click();

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
    console.log("loaded");
}

init();

