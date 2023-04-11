// ========> SHOW SIDEBAR

// ========> SIDEBAR SHOW
/* Validtes If Constant Exist*/ 

// ========> SIDEBAR HIDDEN
/* Validtes If Constant Exist*/ 

// ========> SKILLS TABS
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target);

            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills__active")
            })

            target.classList.add("skills__active")


            tabs.forEach(tab => {
                tab.classList.remove("skills__active")
            })

            tab.classList.add("skills__active")
        })
      })

// ========> MIXITUP FILTER PORTFOLIO <=================
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

// ========> Link Active Work <=================
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

// ========> WORK POPUP <=================
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement)
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open")
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtite span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

// ========> SERVICE MODAL <=================
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        });
    });
})

// ========> SWIPER TESTIMONIAL <=================
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

// ========> INPUT ANIMATION <=================
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus")
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value === ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})
// ========> SCROLL SECTION ACTIVE LINK <=================
//get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

//add an eventlistener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    //get current scroll position
    let scrollY = window.pageYOffset;
    //now loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        // -if our current scroll position enters the space where the current section on screen is, add an active class
        // to corresponding navigation link, else remove it
        // -To know which link needs to be active class, we use sectionId variable we are getting while looping through
        // section as a selector

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*='" + sectionId + "']").classList.add("active-link");
        } else {
            document.querySelector(".nav__menu a[href*='" + sectionId + "']").classList.remove("active-link");
        }
    });
}


// ========> SHOW SCROLLUP <=================



