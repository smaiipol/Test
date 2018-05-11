jQuery(document).ready(function(e) {
    var c = e(".cd-auto-hide-header"),
    m = e(".cd-secondary-nav"),
    i = e(".sub-nav-hero"),
    f = c.height();
    var h = false,
    k = 0,
    j = 0,
    b = 10,
    g = 150;
    c.on("click", ".nav-trigger",
    function(n) {
        n.preventDefault();
        c.toggleClass("nav-open")
    });
    e(window).on("scroll",
    function() {
        if (!h) {
            h = true; (!window.requestAnimationFrame) ? setTimeout(l, 250) : requestAnimationFrame(l)
        }
    });
    e(window).on("resize",
    function() {
        f = c.height()
    });
    function l() {
        var n = e(window).scrollTop(); (i.length > 0) ? d(n) : a(n);
        k = n;
        h = false
    }
    function a(n) {
        if (k - n > b) {
            c.removeClass("is-hidden")
        } else {
            if (n - k > b && n > g) {
                c.addClass("is-hidden")
            }
        }
    }
    function d(o) {
        var n = i.offset().top - m.height() - c.height();
        if (k >= o) {
            if (o < n) {
                c.removeClass("is-hidden");
                m.removeClass("fixed slide-up");
                i.removeClass("secondary-nav-fixed")
            } else {
                if (k - o > b) {
                    c.removeClass("is-hidden");
                    m.removeClass("slide-up").addClass("fixed");
                    i.addClass("secondary-nav-fixed")
                }
            }
        } else {
            if (o > n + g) {
                c.addClass("is-hidden");
                m.addClass("fixed slide-up");
                i.addClass("secondary-nav-fixed")
            } else {
                if (o > n) {
                    c.removeClass("is-hidden");
                    m.addClass("fixed").removeClass("slide-up");
                    i.addClass("secondary-nav-fixed")
                }
            }
        }
    }
});