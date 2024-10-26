// Strech Image 
function gm_stretch() {
    var windowWidth = window.innerWidth;

    document.querySelectorAll(".row .gm_stretch-element-inside-column").forEach(function (element) {
        var row = element.closest(".row");
        var cols = element.closest('[class^="col-"]');
        var colsHeight = cols.offsetHeight;

        var rect = element.getBoundingClientRect();
        var rowRect = row.getBoundingClientRect();
        var colsRect = cols.getBoundingClientRect();

        var elementLeft = rect.left;
        var elementRight = rect.right;
        var rowLeft = rowRect.left + (parseFloat(getComputedStyle(row).paddingLeft) || 0);
        var rowRight = windowWidth - rowRect.right + (parseFloat(getComputedStyle(row).paddingRight) || 0);

        var colsLeft = colsRect.left;
        var colsRight = windowWidth - colsRect.right;

        var styles = {
            "marginLeft": "0px",
            "marginRight": "0px"
        };

        if (Math.round(rowLeft) === Math.round(colsLeft)) {
            var marginLeft = parseFloat(getComputedStyle(element).marginLeft) || 0;
            styles.marginLeft = (marginLeft - elementLeft) + "px";
        }

        if (Math.round(rowRight) === Math.round(colsRight)) {
            var marginRight = parseFloat(getComputedStyle(element).marginRight) || 0;
            styles.marginRight = (marginRight - (windowWidth - elementRight)) + "px";
        }

        Object.assign(element.style, styles);
    });
}

gm_stretch();


// Collection Slide 
var swiper = new Swiper(".gm_collections_slides", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".gm_collection_pagi",
        type: "progressbar",
    },
});

// Testimonial 
var swiper = new Swiper('.gm_testimonial', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.gm_testi-next',
        prevEl: '.gm_testi-prev',
    },
    slidesPerView: 2,
    spaceBetween: 30,
});
// Brand Carousel 
var swiper = new Swiper('.gm_brand_slider ', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});


// Collection Product carousel
var swiper = new Swiper('.gm_collection_slider ', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.gm_collection-next',
        prevEl: '.gm_collection-prev',
    },
});

// Countdown Timer 
document.addEventListener("DOMContentLoaded", () => {
    const offerTimer = document.querySelector(".gm_offer_timer");
    const offerDate = new Date(offerTimer.getAttribute("data-offer-date")).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = offerDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            offerTimer.innerHTML = `<ul>
            <li>${days}<span>Days</span> </li>
            <li class="gm_timerSeparator"><span>:</span></li>
            <li>${String(hours).padStart(2, '0')}<span>Hrs</span> </li>
            <li class="gm_timerSeparator"><span>:</span></li>
            <li>${String(minutes).padStart(2, '0')}<span>Mins</span> </li>
            <li class="gm_timerSeparator"><span>:</span></li>
            <li>${String(seconds).padStart(2, '0')}<span>Secs</span></li>
            </ul>
            `;
        } else {
            offerTimer.innerHTML = "Offer Expired!";
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(updateCountdown, 1000);
    updateCountdown(); // Call immediately to avoid 1-second delay
});