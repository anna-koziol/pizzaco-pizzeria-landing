$(document).ready(function () {
    console.log("Start")
    $(".menu-position:nth-child(1)").css("color", "#557669");
    $(".menu-position:nth-child(1)").css("border-bottom", "3px solid #557669");

    $(".menu-position").click(function () {
        console.log(this.innerHTML);
        $("table").css("display", "none");
        $(".menu-position").css("color", "black");
        $(".menu-position").css("border-bottom", "3px solid transparent");

        switch (this.innerHTML) {
            case "Pizza":
                $(".menu-position:nth-child(1)").css("color", "#557669");
                $(".menu-position:nth-child(1)").css("border-bottom", "3px solid #557669");
                $("#table-pizza").css("display", "table");
                break;
            case "Napoje":
                $(".menu-position:nth-child(2)").css("color", "#557669");
                $(".menu-position:nth-child(2)").css("border-bottom", "3px solid #557669");
                $("#table-drinks").css("display", "table");
                break;
            case "Dania":
                $(".menu-position:nth-child(3)").css("color", "#557669");
                $(".menu-position:nth-child(3)").css("border-bottom", "3px solid #557669");
                $("#table-dinner").css("display", "table");
                break;
            default:
                $(".menu-position:nth-child(1)").css("color", "#557669");
                $(".menu-position:nth-child(1)").css("border-bottom", "3px solid #557669");
                $("#table-pizza").css("display", "table");
        }
    })

    $("#know-offer").click(function () {
        document.querySelector('#introduction').scrollIntoView({ behavior: 'smooth' });
    })

    $(".nav-item").click(function () {
        switch (this.id) {
            case "aboutHref":
                document.querySelector('#aboutDiv').scrollIntoView({ behavior: 'smooth' });
                break;
            case "menuHref":
                document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
                break;
            case "specialtiesHref":
                document.querySelector('#specialties').scrollIntoView({ behavior: 'smooth' });
                break;
            case "promotionsHref":
                document.querySelector('#promotions').scrollIntoView({ behavior: 'smooth' });
                break;
            case "opinionsHref":
                document.querySelector('#reviews').scrollIntoView({ behavior: 'smooth' });
                break;
            case "contactHref":
                document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
        }

    });



    let about = $("#aboutDiv").position().top;

    let menuTop = $("#menu").offset().top;
    let specialtiesTop = $("#specialties").offset().top;
    let promotionsTop = $("#promotions").offset().top;
    let reviewsTop = $("#reviews").offset().top;
    let bannerTop = $("#banner").offset().top;

    let menuBottom = menuTop + $("#menu").outerHeight();
    let specialtiesBottom = specialtiesTop + $("#specialties").outerHeight();
    let promotionsBottom = promotionsTop + $("#promotions").outerHeight();
    let reviewsBottom = reviewsTop + $("#reviews").outerHeight();
    let bannerBottom = bannerTop + $("#banner").outerHeight();


    $(window).scroll(function () {
        var windowTop = $(window).scrollTop();
        var windowBottom = (windowTop + $(window).height());

        if (window.scrollY >= about) { $(".navbar").css("display", "flex"); }

        else { $(".navbar").css("display", "none"); }

        if ((menuBottom >= windowTop) && (menuTop <= windowBottom)) { $("#menu-section").addClass('slide-in-bottom'); }

        if ((specialtiesBottom >= windowTop) && (specialtiesTop <= windowBottom)) { $(".specialties-section").addClass('slide-in-bottom'); }

        if ((promotionsBottom >= windowTop) && (promotionsTop <= windowBottom)) { $("#promotions").addClass('slide-in-bottom'); }

        if ((reviewsBottom >= windowTop) && (reviewsTop <= windowBottom)) {
            $("#reviews").addClass('slide-in-bottom');
            $(".reviews").addClass('slide-in-bottom');
        }

        if ((bannerBottom >= windowTop) && (bannerTop <= windowBottom)) { $("#banner").addClass('slide-in-bottom'); }
    })
})