/*==================================
* Strech Image 
==================================*/
function gm_stretch() {
    var windowWidth = window.innerWidth;

    // Apply stretch logic only if the window width is greater than 1921px
    if (windowWidth < 1921) {
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
    } else {
        // Reset styles when width is 1920px or below
        document.querySelectorAll(".row .gm_stretch-element-inside-column").forEach(function (element) {
            element.style.marginLeft = "";
            element.style.marginRight = "-315px";
        });
    }
}

// Call the function on load
gm_stretch();

// Also call it on window resize to ensure responsiveness
window.addEventListener('resize', gm_stretch);


/*==================================
* Collection Slide
==================================*/
var swiper = new Swiper(".gm_collections_slides", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".gm_collection_pagi",
        type: "progressbar",
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 18
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});

/*==================================
* Testimonial
==================================*/
var swiper = new Swiper('.gm_testimonial', {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.gm_testi-next',
        prevEl: '.gm_testi-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
});

/*==================================
* Testimonial Two
==================================*/
var swiper = new Swiper('.gm_testimonial-two', {
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

/*==================================
* Brand Carousel
==================================*/
var swiper = new Swiper('.gm_brand_slider ', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3100,
        disableOnInteraction: false,
    },
});

/*==================================
* Brand Carousel Two
==================================*/
var swiper = new Swiper('.gm_brand_slider-two ', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

/*==================================
* Collection Product carousel
==================================*/
var swiper = new Swiper('.gm_collection_slider', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    initialSlide: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.gm_collection-next',
        prevEl: '.gm_collection-prev',
    },
});

/*==================================
* Countdown Timer 
==================================*/
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
    updateCountdown();
});

/*==================================
* Header Search Open
==================================*/
document.querySelector(".gm_headerSearch-open").addEventListener("click", function () {
    document.querySelector(".gm_search_form").classList.add("active");
});

document.querySelector(".gm_search_form .close").addEventListener("click", function () {
    document.querySelector(".gm_search_form").classList.remove("active");
});

/*==================================
* Hero 03 Plus Toggle 
==================================*/
document.querySelectorAll('.gm_hero_right_content_03 i').forEach(function (icon) {
    icon.addEventListener('click', function () {
        // Hide other open items
        document.querySelectorAll('.gm_hreoR_cnt_pdt.active').forEach(function (openContent) {
            if (openContent !== icon.nextElementSibling) {
                openContent.classList.remove('active');
            }
        });

        // Toggle the clicked item
        const content = this.nextElementSibling;
        content.classList.toggle('active');
    });
});

/*==================================
* Category Hover Image
==================================*/
const categoryLinks = document.querySelectorAll('.gm_fitnessCat_wrap li a');

categoryLinks.forEach(link => {
    const images = link.parentElement.querySelectorAll('img'); // Get all <img> tags inside the <li>

    link.addEventListener('mouseover', () => {
        images.forEach(img => img.classList.add('hovered')); // Add 'hovered' to all images
    });

    link.addEventListener('mouseout', () => {
        images.forEach(img => img.classList.remove('hovered')); // Remove 'hovered' from all images
    });
});