import Swiper from "swiper";
import { Navigation, Pagination, Thumbs, FreeMode, Grid } from "swiper/modules";

const offerSlider = document.querySelector(".offers__wrapper");
if (offerSlider) {
  let offerSwiper = new Swiper(offerSlider, {
    modules: [Pagination],
    wrapperClass: "offers__body",
    slideClass: "offers__item",
    loop: false,
    centeredSlides: false,
    spaceBetween: 7.4,
    slidesPerView: 7,
    lockClass: "swiper-lock",
    pagination: {
      el: ".slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
      },
      390: {
        slidesPerView: 2.06,
        slidesPerGroup: 2,
      },
      991.98: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1400: {
        slidesPerView: 7,
      },
    },
  });
}
const advantagesSlider = document.querySelector(".advantages__wrapper");
if (advantagesSlider) {
  let advantagesSwiper = new Swiper(advantagesSlider, {
    modules: [Navigation, Pagination, Grid],
    wrapperClass: "advantages__body",
    slideClass: "advantages__item",
    loop: false,
    spaceBetween: 30,
    lockClass: "swiper-lock",
    speed: 800,
    pagination: {
      el: ".slider-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".advantages__controls .slider-button-next",
      prevEl: ".advantages__controls .slider-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        grid: {
          rows: 3,
          fill: "row",
        },
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
      767.98: {
        grid: {
          rows: 1,
          fill: "column",
        },
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup: 4,
      },
      1200: {
        grid: {
          rows: 1,
          fill: "row",
        },
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
      },
    },
  });
}
const partnerSlider = document.querySelector(".partners__wrapper");
if (partnerSlider) {
  let partnerSwiper = new Swiper(partnerSlider, {
    modules: [Navigation, Pagination],
    wrapperClass: "partners__body",
    slideClass: "partners__item",
    loop: false,
    spaceBetween: 30,
    slidesPerView: 6,
    slidesPerGroup: 2,
    speed: 800,
    pagination: {
      el: partnerSlider.nextElementSibling,
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".partners__controls .slider-button-next",
      prevEl: ".partners__controls .slider-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 6,
      },
    },
  });
}
const videoSlider = document.querySelector(".video-block__wrapper");
if (videoSlider) {
  let videoSwiper = new Swiper(videoSlider, {
    modules: [Navigation, Pagination],
    wrapperClass: "video-block__body",
    slideClass: "video-block__item",
    loop: false,
    spaceBetween: 30,
    slidesPerView: 3,
    slidesPerGroup: 1,
    speed: 800,
    pagination: {
      el: ".video-block__pagination.slider-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".video-block__controls .slider-button-next",
      prevEl: ".video-block__controls .slider-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 8,
        centeredSlides: false,
        slidesPerGroup: 1,
      },
      390: {
        slidesPerView: "auto",
        spaceBetween: 8,
        centeredSlides: true,
      },
      767.98: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        centeredSlides: false,
      },
    },
  });
}
const categoriesSlider = document.querySelector(".categories__body");
if (categoriesSlider) {
  let partionSwiper = new Swiper(categoriesSlider, {
    modules: [Navigation, Pagination],
    wrapperClass: "categories__wrapper",
    loop: false,
    spaceBetween: 12,
    slidesPerView: 6,
    slidesPerGroup: 3,
    speed: 800,
    pagination: {
      el: ".categories__pagination.slider-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".categories__controls .slider-button-next",
      prevEl: ".categories__controls .slider-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 1,
        centeredSlides: true,
      },
      767.98: {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 3,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 3,
        centeredSlides: false,
      },
    },
  });
}
const productSlider = document.querySelectorAll(".products-wrapper");
if (productSlider) {
  [...productSlider].forEach((slider) => {
    let productSwiper = new Swiper(slider, {
      modules: [Navigation, Pagination],
      wrapperClass: "products-body",
      slideClass: "products-item",
      loop: false,
      centeredSlides: false,
      spaceBetween: 30,
      slidesPerView: 4,
      allowTouchMove: true,
      speed: 1000,
      pagination: {
        el: slider.nextElementSibling,
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: slider.querySelector(".slider-button-next"),
        prevEl: slider.querySelector(".slider-button-prev"),
      },
      breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 16,
          slidesPerGroup: 2,
        },
        991.98: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 3,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 4,
        },
      },
    });
  });
}
let root = document.querySelectorAll("[data-slider]");
// Создаем новый observer (наблюдатель)
root.forEach((wrapper) => {
  let options = {
    root: wrapper,
  };
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // получаем свойства, которые доступны в объекте entry
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        target.classList.remove("hidden");
      } else {
        target.classList.add("hidden");
      }
    });
  }, options);
  // Задаем элемент(-ы) для наблюдения
  let elements = wrapper.querySelectorAll("[data-slide]");
  // Прикрепляем его к «наблюдателю»
  elements.forEach(function (item) {
    observer.observe(item);
  });
});

const cardMainSlider = document.querySelector(".main-slider-wrapper");
const cardThumbsSlider = document.querySelector(".thumbs-slider-wrapper");
let cardNavSwiper;
if (cardMainSlider) {
  cardNavSwiper = new Swiper(cardThumbsSlider, {
    modules: [Thumbs, Navigation],
    direction: "vertical",
    slidesPerView: 5,
    spaceBetween: 10,
    slideClass: "thumbs-slider-item",
    wrapperClass: "thumbs-slider-body",
    speed: 600,
    navigation: {
      nextEl: ".thumbs-slider__controls .slider-button-next",
      prevEl: ".thumbs-slider__controls .slider-button-prev",
    },
  });
  let cardMainSwiper = new Swiper(cardMainSlider, {
    modules: [Thumbs, Navigation, Pagination],
    slidesPerView: 1,
    grabCursor: false,
    slideClass: "main-slider-item",
    wrapperClass: "main-slider-body",
    speed: 600,
    spaceBetween: 10,
    thumbs: {
      swiper: cardNavSwiper,
    },
    pagination: {
      el: ".main-slider__pagination.slider-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider__controls .slider-button-next",
      prevEl: ".main-slider__controls .slider-button-prev",
    },
    breakpoints: {
      300: {
        allowTouchMove: true,
      },
      767.98: {
        allowTouchMove: false,
      },
    },
  });
}

const personalBoxSlider = document.querySelector(".personal-slider .swiper");
let personalBoxSwiper;
if (personalBoxSlider) {
  const sliderPagiantion = personalBoxSlider.parentNode.querySelector(
    ".personal-slider__pagination"
  );
  personalBoxSwiper = new Swiper(personalBoxSlider, {
    modules: [Pagination],
    slideClass: "card-product",
    speed: 600,
    watchSlidesProgress: true,
    pagination: {
      el: sliderPagiantion,
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      479.98: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767.98: {
        spaceBetween: 16,
        slidesPerView: 3,
      },
    },
    on: {
      init: function (swiper) {
        const slides = swiper.slides;
        if (slides.length <= swiper.passedParams.slidesPerView) {
          swiper.pagination.destroy();
          sliderPagiantion.remove();
        }
      },
    },
  });
}

// Slider in preview card
const previewProducts = document.querySelectorAll(".card-product");
if (previewProducts) {
  [...previewProducts].forEach((el) => {
    let currentProduct = el;
    const imageSwitchItems = currentProduct.querySelectorAll(
      ".image-switch__item"
    );
    const imagePagination = currentProduct.querySelector(".image-pagination");
    if (imageSwitchItems.length > 1) {
      imageSwitchItems.forEach((el, index) => {
        el.setAttribute("data-index", index);
        imagePagination.innerHTML += `<li class="image-pagination__item ${
          index == 0 ? "image-pagination__item--active" : ""
        }" data-index="${index}"></li>`;
        el.addEventListener("mouseenter", (e) => {
          el.classList.add("show");
          currentProduct
            .querySelectorAll(".image-pagination__item")
            .forEach((el) => {
              el.classList.remove("image-pagination__item--active");
            });
          currentProduct
            .querySelector(
              `.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`
            )
            .classList.add("image-pagination__item--active");
        });
        el.addEventListener("mouseleave", (e) => {
          el.classList.remove("show");
          currentProduct
            .querySelectorAll(".image-pagination__item")
            .forEach((el) => {
              el.classList.remove("image-pagination__item--active");
            });
          currentProduct
            .querySelector(`.image-pagination__item[data-index="0"]`)
            .classList.add("image-pagination__item--active");
        });
        el.addEventListener("click", (e) => {
          el.classList.add("show");
          currentProduct
            .querySelectorAll(".image-pagination__item")
            .forEach((el) => {
              el.classList.remove("image-pagination__item--active");
            });
          currentProduct
            .querySelector(
              `.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`
            )
            .classList.add("image-pagination__item--active");
        });
      });
    }
  });
}
