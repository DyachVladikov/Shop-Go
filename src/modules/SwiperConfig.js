// swiperConfig.js

export function createSwiperConfig({
  nextSelector,
  prevSelector,
  options = {},
}) {
  return {
    modules: options.modules || [],
    spaceBetween: options.spaceBetween || 20,
    slidesPerView: options.slidesPerView || 3,
    breakpoints:
      options.breakpoints || {
        320: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      },

    onInit: (swiper) => {
      const prevEl = document.querySelector(prevSelector);
      const nextEl = document.querySelector(nextSelector);

      if (!prevEl || !nextEl) {
        console.warn("❗ Swiper: не найдены элементы навигации", {
          prevSelector,
          nextSelector,
        });
        return;
      }

      // Настраиваем навигацию
      swiper.params.navigation.prevEl = prevEl;
      swiper.params.navigation.nextEl = nextEl;
      swiper.navigation.init();
      swiper.navigation.update();

      // ✅ Добавляем обработчики для состояния кнопок
      const updateNavState = () => {
        if (swiper.isBeginning) {
          prevEl.classList.add("swiper-button-disabled");
        } else {
          prevEl.classList.remove("swiper-button-disabled");
        }

        if (swiper.isEnd) {
          nextEl.classList.add("swiper-button-disabled");
        } else {
          nextEl.classList.remove("swiper-button-disabled");
        }
      };

      // Вызываем при инициализации и при смене слайда
      swiper.on("slideChange", updateNavState);
      swiper.on("reachBeginning", updateNavState);
      swiper.on("reachEnd", updateNavState);
      swiper.on("fromEdge", updateNavState);

      // Инициализируем сразу
      updateNavState();

      // Вызываем внешний onInit, если есть
      if (options.onInit) options.onInit(swiper);
    },
  };
}

