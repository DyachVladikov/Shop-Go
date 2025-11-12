

export function createSwiperConfig({
  nextSelector,
  prevSelector,
  pagination,
  options = {},
}) {
  //отключение дефолтных кнопок, когда навигации нет
  const navigationConfig = (nextSelector && prevSelector) ? {
    nextEl: nextSelector,
    prevEl: prevSelector,
  } : false;

  return {
    modules: options.modules || [],
    spaceBetween: options.spaceBetween || 20,
    slidesPerView: options.slidesPerView || 3,
    slidesPerGroup: options.slidesPerGroup ?? 1,
    loop: options.loop || false,
    centeredSlides: options.centeredSlides ?? false,
    initialSlide: options.initialSlide || 0,
    observer: options.observer ?? true,
    observeParents: options.observeParents ?? true,
    grid: options.grid ?? {},
    breakpoints:options.breakpoints ?? [],
    effect: options.effect,
    pagination: pagination || false,
    navigation: navigationConfig,
    
    

    onInit: (swiper) => {
      const prevEl = document.querySelector(prevSelector);
      const nextEl = document.querySelector(nextSelector);
      const paginationElement = document.querySelector(pagination?.selector); 

      //пагинация(перемещение элементов в собственный элемент пагинации)
      if (paginationElement) {
        paginationElement.innerHTML = '';
        swiper.pagination.bullets.forEach(bullet => {
          paginationElement.appendChild(bullet);
        });
        swiper.pagination.el = paginationElement;
      }

      const updateNavState = () => {
        if(options.loop != true) 
        {
          if (swiper.isBeginning) {
            prevEl?.classList.add("swiper-button-disabled");
          } else {
            prevEl?.classList.remove("swiper-button-disabled");
          }

          if (swiper.isEnd) {
            nextEl?.classList.add("swiper-button-disabled");
          } else {
            nextEl?.classList.remove("swiper-button-disabled");
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

