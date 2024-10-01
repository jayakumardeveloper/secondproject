// Digital Marketing partner slider setup

if (document.querySelector(".partnerSlider")) {
  new Swiper(".partnerSlider", {
    spaceBetween: 30,
    slidesPerView: 3,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
    },
  });
}

// Digital Marketing project Slider

if (document.querySelector(".projectSlider")) {
  new Swiper(".projectSlider", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".project-slider-next",
      prevEl: ".project-slider-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

// Digital Marketing testimonials slider
if (document.querySelector(".testimonialsSlider")) {
  new Swiper(".testimonialsSlider", {
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
  });
}

// Mobile App testimonials slider
if (document.querySelector(".h2-testimonialsSlider")) {
  new Swiper(".h2-testimonialsSlider", {
    direction: "vertical",
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
  });
}

// faq

const faqsWrapper = document.querySelectorAll(".faq-wrapper");

faqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  window.addEventListener("load", (event) => {
    faqs.forEach((item, index) => {
      if (index !== 0) {
        item.classList.remove("active-faq");
        item.style.height = item.children[0].clientHeight + 10 + "px";
      } else {
        item.classList.add("active-faq");
      }
    });
  });
});

faqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  faqs.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < e.target.parentElement.children.length; i++) {
        if (e.target.parentElement.children[i] === e.target) {
          e.target.parentElement.children[i].classList.add("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight +
            e.target.parentElement.children[i].children[1].clientHeight +
            10 +
            "px";
        } else {
          e.target.parentElement.children[i].classList.remove("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight +
            10 +
            "px";
        }
      }
    });
  });
});

// faq home 2
const h2FaqsWrapper = document.querySelectorAll(".h2-faq-wrapper");

h2FaqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  window.addEventListener("load", (event) => {
    faqs.forEach((item, index) => {
      if (index !== 0) {
        item.classList.remove("active-faq");
        item.style.height = item.children[0].clientHeight + "px";
      } else {
        item.classList.add("active-faq");
      }
    });
  });
});

h2FaqsWrapper.forEach((element) => {
  const faqs = element.querySelectorAll(".faq-toggler");
  faqs.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < e.target.parentElement.children.length; i++) {
        if (e.target.parentElement.children[i] === e.target) {
          e.target.parentElement.children[i].classList.add("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight +
            e.target.parentElement.children[i].children[1].clientHeight +
            "px";
        } else {
          e.target.parentElement.children[i].classList.remove("active-faq");
          e.target.parentElement.children[i].style.height =
            e.target.parentElement.children[i].children[0].clientHeight + "px";
        }
      }
    });
  });
});

// counter

const counter = (item) => {
  let countdown = null;
  const count = Number(item.getAttribute("data-count-fm"));
  const valueType = item.getAttribute("data-type-fm");
  const speed = Number(item.getAttribute("data-speed-fm"));
  let startNumber = 0;
  clearInterval(countdown);
  countdown = setInterval(function () {
    item.innerText = startNumber + valueType;
    if (count > 10000 && startNumber < count - 10000) {
      startNumber += 1000;
    } else if (count > 1000 && startNumber < count - 1000) {
      startNumber += 100;
    } else if (count > 100 && startNumber < count - 100) {
      startNumber += 10;
    } else {
      startNumber++;
    }
    if (startNumber > count) {
      clearInterval(countdown);
    }
  }, speed / count);
};

// scroll control

let running = [];

const scrollAnimate = (event) => {
  const allData = document.querySelectorAll("[data-scroll-fm='scroll']");
  if (allData) {
    allData.forEach((item) => {
      const rect = item.getBoundingClientRect()?.y;
      if (rect - window.innerHeight <= 0 && rect >= 0) {
        if (running.indexOf(item) < 0) {
          const animType = item.getAttribute("data-anim-type");
          switch (animType) {
            case "count-width":
              if (item.classList.value.includes("width-increase")) {
                item.classList.remove("width-increase");
                setTimeout(() => {
                  item.classList.add("width-increase");
                }, 10);
              } else {
                item.classList.add("width-increase");
              }

              break;

            default:
              break;
          }
          if (item.getAttribute("data-count-fm")) {
            counter(item);
          }
          running.push(item);
        }
      } else {
        running = running.filter((value) => value != item);
      }
    });
  }
};

window.addEventListener("load", (event) => {
  scrollAnimate(event);
});

window.addEventListener("scroll", (event) => {
  scrollAnimate(event);
  // sticky header
  const header = document.getElementById("stickyHeader");
  if (!header.classList.value.includes("bg-white") && window.scrollY > 0) {
    header.classList.add("bg-white", "shadow-card-shadow");
  } else if (
    header.classList.value.includes("bg-white", "shadow-card-shadow") &&
    window.scrollY === 0
  ) {
    header.classList.remove("bg-white", "shadow-card-shadow");
  }
});

// IT Solutions project Slider

if (document.querySelector(".projectSlider-h3")) {
  new Swiper(".projectSlider-h3", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".project-slider-next",
      prevEl: ".project-slider-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

if (document.querySelector(".testimonials-h3")) {
  new Swiper(".testimonials-h3", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonials-slider-next",
      prevEl: ".testimonials-slider-prev",
    },
    loop: true,
  });
}

// Thumbslider
if (document.querySelector(".project-detail-slider-thumb")) {
  const swiperThumb = new Swiper(".project-detail-slider-thumb", {
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".project-detail-slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiperThumb,
    },
  });
}

// modal slider
// image slider zoom
let sliderActive = 0;
const swiper3 = new Swiper(".modal-slider", {
  initialSlide: sliderActive,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const zoomBtns = document.querySelectorAll(".zoom-slider");

if (zoomBtns) {
  zoomBtns.forEach((btn, index) => {
    btn.addEventListener("click", (index) => {
      document.getElementById("slider-modal").classList.remove("hidden");
      sliderActive = index;
    });
  });
}

if (document.getElementById("modal-close")) {
  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("slider-modal").classList.add("hidden");
  });
}

if (document.querySelector(".ms-swiper")) {
  new Swiper(".ms-swiper", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
}

// Home four testimonials slider
if (document.querySelector(".h4-testimonialsSlider")) {
  new Swiper(".h4-testimonialsSlider", {
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-slider-next",
      prevEl: ".testimonial-slider-prev",
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });
}

// team slider
if (document.querySelector(".h4-teamSlider")) {
  new Swiper(".h4-teamSlider", {
    spaceBetween: 30,
    slidesPerView: 1,
    // centeredSlides: "auto",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}
// Navigation bar
let lastScrollTop = 0;
// const navbar = document.getElementById("mnav-menu-item");
const navbar = document.getElementById("stickyHeader");

window.addEventListener("scroll", function () {
  // Check if the window width is greater than 1024px
  if (window.innerWidth > 2500) {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.transform = "translateY(-200%)";
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  } else {
    // Reset the navbar position if the screen is less than or equal to 1024px
    navbar.style.transform = "translateY(0)";
  }
});
// Dropdown Filter
$(document).ready(function () {
  // Dropdown for products
  const groupItem = 'groupItem';
  const beforeAction = 'beforeAction';
  const header = $('#stickyHeader');
  $('.MainMenu').hide();
  $('.nav-link.prod_menu').click(function () {
    $('.Comm_MainMenu').hide();
    $('.nav-link.comm_menu').removeClass(groupItem).removeClass(beforeAction);
    $('.all_prod_tab').not('.products').hide();
    $('.all_prod_tab.products').show()
    $('.tab-category li').removeClass('active').first().addClass('active');
    $('.MainMenu').toggle();
    $('.MainMenu').css("top", "92.5px");
    $('.MainMenu').css("min-height", "calc(100vh - 160px)");
    // Check if the menu is now visible
    if ($('.MainMenu').is(':visible')) {
      $('#root').css("overflow", "hidden"); // Hide overflow when menu is open
      $('.MainMenu').css("top", "92.5px");
      $('.nav-link.prod_menu').addClass(groupItem).addClass(beforeAction);
      header.addClass("bg-white shadow-card-shadow");
    } else {
      $('#root').css("overflow", "auto"); // Restore overflow when menu is closed
      $('.nav-link.prod_menu').removeClass(groupItem).removeClass(beforeAction);
      // header.removeClass("bg-white shadow-card-shadow");
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    }
    $('.MainMenu .close').click(function () {
      $('.MainMenu').hide();
      $('#root').css("overflow", "auto");
      $('.nav-link.prod_menu').removeClass(groupItem).removeClass(beforeAction);
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    });
  });
  // Dropdown for Community
  $('.Comm_MainMenu').hide();
  $('.nav-link.comm_menu').click(function () {
    $('.MainMenu').hide();
    $('.nav-link.prod_menu').removeClass(groupItem).removeClass(beforeAction);
    $('.Comm_MainMenu').toggle();
    $('.Comm_MainMenu').css("top", "92.5px");
    $('.Comm_MainMenu').css("min-height", "calc(100vh - 160px)");
    // Check if the menu is now visible
    if ($('.Comm_MainMenu').is(':visible')) {
      $('#root').css("overflow", "hidden"); // Hide overflow when menu is open
      $('.Comm_MainMenu').css("top", "92.5px");
      $('.nav-link.comm_menu').addClass(groupItem).addClass(beforeAction);
      header.addClass("bg-white shadow-card-shadow");
    } else {
      $('#root').css("overflow", "auto"); // Restore overflow when menu is closed
      $('.nav-link.comm_menu').removeClass(groupItem).removeClass(beforeAction);
      // header.removeClass("bg-white shadow-card-shadow");
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    }
    $('.Comm_MainMenu .close').click(function () {
      $('.Comm_MainMenu').hide();
      $('#root').css("overflow", "auto");
      $('.nav-link.comm_menu').removeClass(groupItem).removeClass(beforeAction);
      if ($(window).scrollTop() === 0) {
        header.removeClass("bg-white shadow-card-shadow");
      }
    });
  });
});

$(document).ready(function () {
  $('.all_prod_tab').not('.products').hide();
  $('.tab-category li').removeClass('active').first().addClass('active');
  $('.tab-category li').click(function () {
    var value = $(this).attr('data-filter');
    $('.all_prod_tab').not('.' + value).hide();
    $('.all_prod_tab').filter('.' + value).show();
    $('.tab-category li').removeClass('active');
    $(this).addClass('active');
    setActiveRMCategory(value);
  });
  $('.RM_prod_categories li').hover(
    function () {
      $('.RM_prod_categories li').removeClass('active');
      $(this).addClass('active');
    },
    function () { }
  );
  function setActiveRMCategory(category) {
    $('.RM_prod_categories li').removeClass('active');
    $('.' + category + ' .RM_prod_categories li').first().addClass('active');
    $('.' + category + ' .RM_prod_details').first().show();
    $('.' + category + ' .RM_prod_details').not('#detail-1').hide();
  }
  //////
  $('.RM_prod_details').not('#detail-1').hide();

  // $('#detail-1').show();

  $('.RM_prod_categories li').hover(
    function () {
      var target = $(this).data('target');
      $('.RM_prod_details').hide();
      $('#detail-' + target).show();
    },
    function () {
      // $('.RM_prod_details').hide();
      // $('#detail-1').show();
    }
  );
});
// All products load more
$(document).ready(function () {
  // Hide all items except the first 8
  $('#product-list .RM-productDiv').slice(8).addClass('hidden-list');

  // Show more items when the button is clicked
  $('#load-more').on('click', function () {
    let hiddenItems = $('#product-list .RM-productDiv.hidden-list');

    // Show up to 4 hidden items at a time
    hiddenItems.slice(0, 4).removeClass('hidden-list');

    // Hide the button if there are no more hidden items
    if (hiddenItems.length <= 4) {
      $(this).addClass('hidden-list');
    }
  });
});
// All products scroll tabs
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const tabs = gsap.utils.toArray(".RM-Left_list li");
  const amount = tabs.length;
  const rightElements = document.querySelector(".RM-Right_content");
  let active;

  // Calculate total height of all right elements
  const elementHeight = rightElements.querySelector(".RM-Right_element").offsetHeight;
  const totalHeight = elementHeight * amount;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".RM-prodScroll",
      start: "top top",
      // end: "+=" + (totalHeight - window.innerHeight), // Dynamic end point
      end: totalHeight, // Dynamic end point
      pin: true,
      scrub: 1,
      markers: false
    }
  });
  console.log("Element Height:", elementHeight);
  console.log("Total Height:", totalHeight);
  console.log("Window Height:", window.innerHeight - 125);


  tl.to(rightElements, {
    y: -((amount - 1) * elementHeight),
    ease: "none",
    duration: 1
  });

  const st = tl.scrollTrigger;
  tabs.forEach((tab, i) => {
    const position = i / (amount - 1);
    const link = tab.querySelector("a");

    tl.add("tab-" + (i + 1), position).call(() => {
      if (active !== undefined) {
        tabs[active].classList.toggle("RM-Selectlist");
      }
      tab.classList.toggle("RM-Selectlist");
      active = i;
    }, null, position);

    link.addEventListener("click", (e) => {
      e.preventDefault();
      gsap.to(window, {
        scrollTo: {
          y: st.start + (st.end - st.start) * (position / tl.duration())
        },
        duration: 0.6,
        ease: "power1.inOut"
      });
    });
  });
  console.log("Start Position:", st.start);  // Logs start position
  console.log("End Position:", st.end);      // Logs end position
  const startElement = document.querySelector(".RM-prodScroll");
  const startPos = startElement.getBoundingClientRect().top; // Height from the top of the viewport
  console.log("Start Position (pixels from top):", startPos);

  const endPos = startPos + totalHeight;  // Add total height to the start position
  console.log("End Position (pixels from top):", endPos);

  tl.to({}, { duration: 0.5 });
});
