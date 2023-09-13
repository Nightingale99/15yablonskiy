            const swiper = new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                slidesPerView: 'auto', // Автоматическое определение количества видимых слайдов
                spaceBetween: 10, // Отступ между слайдами (замените на свой желаемый отступ)
                loop: true,
              
                // If we need pagination
                pagination: {
                  el: '.swiper-pagination',
                },
                breakpoints: {
                  767 : {
                    enabled: false,
                  }
                },
            });

let moreBrands = document.querySelector('.swiper-container__more-brands');
let classCheckout = 0;
let hidenBrands = document.querySelectorAll('.tablet-none');

moreBrands.addEventListener('click', function(evt){
    evt.preventDefault();
        if (classCheckout === 0){
        moreBrands.classList.add('opened');
        moreBrands.textContent = 'Скрыть';
        for (let i = 0; i < hidenBrands.length; i++){
            hidenBrands[i].classList.remove('tablet-none');
        }
        classCheckout = 1;
        } else {
        moreBrands.classList.remove('opened');
        moreBrands.textContent = 'Показать все';
        for (let i = 0; i < hidenBrands.length; i++){
            hidenBrands[i].classList.add('tablet-none');
        }
        classCheckout = 0;
        }
        
    });