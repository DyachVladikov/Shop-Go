

export function createSwiperConfig({
  nextSelector,
  prevSelector,
  options = {},
}) {
  return {
    modules: options.modules || [],
    spaceBetween: options.spaceBetween || 20,
    slidesPerView: options.slidesPerView || 3,
    loop: options.loop || false,
    centeredSlides: options.centeredSlides ?? false,
    initialSlide: options.initialSlide || 0,
    observer: options.observer ?? true,
    observeParents: options.observeParents ?? true,

    breakpoints:
      options.breakpoints ?? [],
    effect: options.effect,

    

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
        if(options.loop != true)
        {
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
        }
        else
        {
          return;
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

