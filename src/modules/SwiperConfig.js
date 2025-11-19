

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
  const isCustomNumbers = pagination?.type === "custom-numbers";
  const paginationConfig = isCustomNumbers ? false : pagination;

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
    pagination: paginationConfig || false,
    navigation: navigationConfig,
    
    

    onInit: (swiper) => {
      const prevEl = document.querySelector(prevSelector);
      const nextEl = document.querySelector(nextSelector);
      const paginationElement = document.querySelector(pagination?.selector); 

      if (isCustomNumbers && paginationElement) {
        createAdvancedNumbersPagination(swiper, paginationElement, pagination, options);
        
        // ФИКС: обновляем пагинацию при смене слайда
        swiper.on('slideChange', function() {
        const paginationElement = document.querySelector(pagination?.selector);
        if (paginationElement) {
            createAdvancedNumbersPagination(swiper, paginationElement, pagination, options);
        }
    });
        
        // ФИКС: обновляем пагинацию при ресайзе (для breakpoints)
        swiper.on('resize', function() {
          setTimeout(() => {
            createAdvancedNumbersPagination(swiper, paginationElement, pagination, options);
          }, 100);
        });
        swiper.on('slidesPerGroupChanged', function() {
          createAdvancedNumbersPagination(swiper, paginationElement, pagination, options);
        });
      } 

      //пагинация(перемещение элементов в собственный элемент пагинации)
      else if (paginationElement  && pagination?.type === "bullets") {
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
        if (pagination?.type === "custom-numbers") {
          updateNumbersPaginationState(swiper, pagination);
        }
        
      }
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

function createAdvancedNumbersPagination(swiper, paginationElement, paginationConfig, options = {}) {
    const totalSlides = calculateRealSlidesCount(swiper, options);
    const maxVisible = paginationConfig.maxVisibleNumbers || 7;
    
    paginationElement.classList.add('custom-numbers-pagination');
    paginationElement.innerHTML = '';
    
    if (totalSlides <= maxVisible) {
        for (let i = 0; i < totalSlides; i++) {
            createNumberElement(swiper, paginationElement, i + 1, i, options);
        }
    } else {
        createComplexPagination(swiper, paginationElement, totalSlides, maxVisible, options);
    }
    
    updateNumbersPaginationState(swiper, paginationConfig, options);
}

function calculateRealSlidesCount(swiper, options) {
    const totalItems = swiper.slides.length;
    const slidesPerView = swiper.params.slidesPerView || options.slidesPerView || 1;
    const gridRows = swiper.params.grid?.rows || options.grid?.rows || 1;
    
    // Количество товаров на одном "виртуальном" слайде
    const itemsPerSlide = slidesPerView * gridRows;
    
    // Реальное количество слайдов для пагинации
    const realSlidesCount = Math.ceil(totalItems / itemsPerSlide);
    
    return realSlidesCount;
}

function getCurrentPaginationIndex(swiper, options = {}) {
    const slidesPerView = swiper.params.slidesPerView || options.slidesPerView || 1;
    const gridRows = swiper.params.grid?.rows || options.grid?.rows || 1;
    const totalItems = swiper.slides.length;
    
    const itemsPerSlide = slidesPerView * gridRows;
    const totalPages = Math.ceil(totalItems / itemsPerSlide);
    const progress = swiper.progress; // от 0 до 1
    let currentPage = Math.floor(progress * (totalPages - 1));
    
    // Корректируем для крайних случаев
    if (swiper.isBeginning) currentPage = 0;
    if (swiper.isEnd) currentPage = totalPages - 1;
    
    // Ограничиваем диапазон
    currentPage = Math.max(0, Math.min(currentPage, totalPages - 1));
    
    return currentPage;
}

function createComplexPagination(swiper, paginationElement, totalSlides, maxVisible, options) {
    const currentPaginationIndex = getCurrentPaginationIndex(swiper, options);
    
    // ОДНО многоточие, которое двигается
    let ellipsisAfter = false;
    let ellipsisBefore = false;
    
    if (currentPaginationIndex <= 3) {
        // В начале: 1 2 3 4 5 ... 8
        ellipsisAfter = true;
        
        // Первые 5 страниц
        for (let i = 0; i < 5 && i < totalSlides; i++) {
            createNumberElement(swiper, paginationElement, i + 1, i, options);
        }
        
    } else if (currentPaginationIndex >= totalSlides - 4) {
        // В конце: 1 ... 4 5 6 7 8
        ellipsisBefore = true;
        
        // Последние 5 страниц
        for (let i = totalSlides - 5; i < totalSlides; i++) {
            createNumberElement(swiper, paginationElement, i + 1, i, options);
        }
        
    } else {
        // В середине: 1 ... 4 5 6 ... 8
        ellipsisBefore = true;
        ellipsisAfter = true;
        
        // Текущая и соседние
        for (let i = currentPaginationIndex - 1; i <= currentPaginationIndex + 1; i++) {
            createNumberElement(swiper, paginationElement, i + 1, i, options);
        }
    }
    
    // Добавляем многоточие ПЕРЕД (если нужно)
    if (ellipsisBefore) {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'pagination-ellipsis';
        ellipsis.textContent = '...';
        paginationElement.insertBefore(ellipsis, paginationElement.firstChild);
        
        // Добавляем первую страницу ПЕРЕД многоточием
        const firstPage = document.createElement('button');
        firstPage.className = 'pagination-number';
        firstPage.textContent = '1';
        firstPage.setAttribute('type', 'button');
        firstPage.setAttribute('data-pagination-index', 0);
        /* firstPage.addEventListener('click', (e) => {
            e.preventDefault();
            swiper.slideTo(getSlideIndexForPagination(swiper, 0, options));
        }); */
        paginationElement.insertBefore(firstPage, paginationElement.firstChild);
    }
    
    // Добавляем многоточие ПОСЛЕ (если нужно)
    if (ellipsisAfter) {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'pagination-ellipsis';
        ellipsis.textContent = '...';
        paginationElement.appendChild(ellipsis);
        
        // Добавляем последнюю страницу ПОСЛЕ многоточия
        const lastPage = document.createElement('button');
        lastPage.className = 'pagination-number';
        lastPage.textContent = totalSlides;
        lastPage.setAttribute('type', 'button');
        lastPage.setAttribute('data-pagination-index', totalSlides - 1);
        /* lastPage.addEventListener('click', (e) => {
            e.preventDefault();
            swiper.slideTo(getSlideIndexForPagination(swiper, totalSlides - 1, options));
        }); */
        paginationElement.appendChild(lastPage);
    }
}

function createNumberElement(swiper, container, number, paginationIndex, options) {
    const numberEl = document.createElement('button');
    numberEl.className = 'pagination-number';
    numberEl.textContent = number;
    numberEl.setAttribute('type', 'button');
    numberEl.setAttribute('data-pagination-index', paginationIndex);
    
    /* numberEl.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetSlideIndex = getSlideIndexForPagination(swiper, paginationIndex, options);
        
        console.log('Клик по пагинации:', paginationIndex);
        
        // Переходим к слайду
        swiper.slideTo(targetSlideIndex);
        
        // ФИКС: слушаем событие перехода и тогда пересоздаем пагинацию
        const onTransitionEnd = () => {
            const paginationElement = document.querySelector('.shop-products__actions-pagination');
            if (paginationElement) {
                createAdvancedNumbersPagination(swiper, paginationElement, paginationConfig, options);
            }
            swiper.off('transitionEnd', onTransitionEnd);
        };
        
        swiper.on('transitionEnd', onTransitionEnd);
    }); */
    
    container.appendChild(numberEl);
}

function updateNumbersPaginationState(swiper, paginationConfig, options) {
    const paginationElement = document.querySelector(paginationConfig.selector);
    if (!paginationElement) return;
    
    // ФИКС: используем правильный расчет текущей страницы
    const currentPaginationIndex = getCurrentPaginationIndex(swiper, options);
    const numberElements = paginationElement.querySelectorAll('.pagination-number');
    
    numberElements.forEach(el => {
        const paginationIndex = parseInt(el.getAttribute('data-pagination-index'));
        const isActive = paginationIndex === currentPaginationIndex;
        el.classList.toggle('active', isActive);
    });
}

function generateNumbersPagination(swiper, current, total, paginationConfig) {
    return '';
}

