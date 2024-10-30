/*==================================
* Sicky Headaer
==================================*/
window.addEventListener("scroll", function () {
    const scrollBar = window.scrollY;
    const headers = document.querySelectorAll(".header-sticky");

    headers.forEach(header => {
        if (scrollBar > 150) {
            header.classList.add("sticky-on");
        } else {
            header.classList.remove("sticky-on");
        }
    });
});


/*==================================
* Mobile Menu
==================================*/
document.addEventListener("DOMContentLoaded", function () {
    const menuToggler = document.querySelector(".gm_menu_toggler");
    const closeButton = document.querySelector(".gm_mobile-menu .close");
    const mobileMenu = document.querySelector(".gm_mobile-menu");

    if (menuToggler) {
        menuToggler.addEventListener("click", function () {
            mobileMenu.classList.add("active");
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", function () {
            mobileMenu.classList.remove("active");
        });
    }

    document.querySelectorAll(".gm_mobile-menu ul li.has-submenu i").forEach(function (icon) {
        icon.addEventListener("click", function () {
            const submenu = this.nextElementSibling;
            if (submenu) {
                submenu.style.display = submenu.style.display === "none" ? "block" : "none";
            }
            this.classList.toggle("icon-rotate");
        });
    });

    document.addEventListener("mouseup", function (e) {
        if (mobileMenu && !mobileMenu.contains(e.target) && e.target !== mobileMenu) {
            mobileMenu.classList.remove("active");
        }
    });
});


/*==================================
* Scroll to top Button
==================================*/
window.addEventListener("scroll", function () {
    const scrollBar = window.scrollY;
    const scrollTopBtn = document.querySelector(".scroll-top-btn");

    if (scrollBar > 150) {
        scrollTopBtn.style.display = "block"; // Equivalent to fadeIn()
    } else {
        scrollTopBtn.style.display = "none"; // Equivalent to fadeOut()
    }
});

// Scroll to top on button click
document.querySelector(".scroll-top-btn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
});

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
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        480: {
            spaceBetween: 15
        },
        576: {
            spaceBetween: 15,
            slidesPerView: 2
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        992: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        1280: {
            spaceBetween: 30,
            slidesPerView: 2
        }
    }
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
    slidesPerView: 1,
    spaceBetween: 15,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});

/*==================================
* Collection Product carousel
==================================*/
var swiper = new Swiper('.gm_collection_slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 18,
    initialSlide: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.gm_collection-next',
        prevEl: '.gm_collection-prev',
    },
    breakpoints: {
        576: {
            spaceBetween: 20,
            slidesPerView: 3
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 3
        },
        992: {
            spaceBetween: 20,
            slidesPerView: 4
        },
        1280: {
            spaceBetween: 30,
            slidesPerView: 4
        }
    }
});

/*==================================
* Offer Product carousel
==================================*/
var swiper = new Swiper('.gm_offerPd_deal', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    initialSlide: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".gm_offerPd_pagin",
        clickable: true,
    },
    breakpoints: {
        768: {
            spaceBetween: 30,
            slidesPerView: 1
        },
        992: {
            spaceBetween: 20,
            slidesPerView: 2
        },
        1280: {
            spaceBetween: 30,
            slidesPerView: 2
        }
    }
});

/*==================================
* Product Tab  
==================================*/
window.addEventListener('load', function () {
    const shuffleWrapper = document.querySelector('.gm_ncollPDshuffle_wrap');
    if (shuffleWrapper) {
        const Shuffle = window.Shuffle;
        const grid = new Shuffle(shuffleWrapper, {
            itemSelector: '.gm_ncollPD_item',
            sizer: '.shuf_sizer',
        });

        // Select all filter nav items
        const filterItems = document.querySelectorAll('.gm_NewCollfilter_nav li');
        filterItems.forEach(item => {
            item.addEventListener('click', function () {
                filterItems.forEach(el => el.classList.remove('active'));
                this.classList.add('active');
                const groupName = this.getAttribute('data-group');
                grid.filter(groupName);
            });
        });
    }
});


/*==================================
* Countdown Timer 
==================================*/
document.addEventListener("DOMContentLoaded", () => {
    const offerTimers = document.querySelectorAll(".gm_offer_timer");

    offerTimers.forEach((offerTimer) => {
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
                    <li>${days}<span>Days</span></li>
                    <li class="gm_timerSeparator"><span>:</span></li>
                    <li>${String(hours).padStart(2, '0')}<span>Hrs</span></li>
                    <li class="gm_timerSeparator"><span>:</span></li>
                    <li>${String(minutes).padStart(2, '0')}<span>Mins</span></li>
                    <li class="gm_timerSeparator"><span>:</span></li>
                    <li>${String(seconds).padStart(2, '0')}<span>Secs</span></li>
                </ul>`;
            } else {
                offerTimer.innerHTML = "Offer Expired!";
                clearInterval(intervalId);
            }
        }

        const intervalId = setInterval(updateCountdown, 1000);
        updateCountdown();
    });
});

/*==================================
* Header Search Open
==================================*/
document.addEventListener("DOMContentLoaded", function () {
    const searchOpen = document.querySelector(".gm_headerSearch-open");
    const searchForm = document.querySelector(".gm_search_form");
    const searchClose = document.querySelector(".gm_search_form .close");

    if (searchOpen && searchForm && searchClose) {
        searchOpen.addEventListener("click", function () {
            searchForm.classList.add("active");
        });

        searchClose.addEventListener("click", function () {
            searchForm.classList.remove("active");
        });
    }
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