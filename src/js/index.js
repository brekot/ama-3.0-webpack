import Vue from 'vue/dist/vue.min.js';
import VeeValidate from 'vee-validate/dist/vee-validate.min.js';
import axios from 'axios/dist/axios.min.js';
import fslightbox from './fslightbox.js';
import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm.js';

Swiper.use([Navigation, Pagination]);

Vue.use(VeeValidate, {
	classes: true,
	classNames: {
		valid: 'is-valid',
		invalid: 'is-invalid'
	},
	events: 'blur',
});

const ajax = axios.create({
	baseURL: 'https://amalfibaby.ru'
});

var appPersonalForm = new Vue({
	el: '#app',
	data: {
        isMobule: false,
        isCallbackSend: false,
        isQuizSend: false,
		quizStep: 1,
        question: {
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            num5: '',  
        },
        pInfo: {
            name: '',
            phone: '',
            email: ''
        }
	},
	methods: {
		toggleQuestion(num) {

            this.quizStep = num;

            if (num == 6)
            {
                if (this.isMobule)
                {
                    let strSend = 'Запрос цены: ';

                    strSend += this.question.num1 + ' ' + this.question.num2 + ' ';
                    strSend += this.question.num3 + ' ' + this.question.num4 + ' ';
                    strSend += this.question.num5 + ' ';

                    location.href = 'https://wa.me/79869331000?text=' + strSend;
                }
            }
		},
		quizSend() {
			this.$validator.validateAll().then((result) => {

				if (result)
				{
					const data = new FormData();

					for (let value in this.pInfo) data.append(value, this.pInfo[value]);
                    for (let value in this.question) data.append(value, this.question[value]);

			 		ajax.post('/ajax/quiz.php', data)
						.then((response) => {

							if (response.data.status === 'ok')
							{
                                this.isQuizSend = true;
                                yaCounter55197436.reachGoal('quiz');
							}
							else alert('Ошибка отправки запроса');
						});
				}
				else return;
			});
		},
        callbackSend() {
			this.$validator.validateAll().then((result) => {

				if (result)
				{
					const data = new FormData();

					for (let value in this.pInfo) data.append(value, this.pInfo[value]);

			 		ajax.post('/ajax/callback.php', data)
						.then((response) => {

							if (response.data.status === 'ok')
							{
                                this.isCallbackSend = true;
                                yaCounter55197436.reachGoal('form');
							}
							else alert('Ошибка отправки запроса');
						});
				}
				else return;
			});
        }
	},
    mounted() {

        /* - - - Определение типа устройства - - - */
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent))
        {
            this.isMobule = true;
        }
        else
        {
            this.isMobule = false;
        }

        /* - - - Главный слайдер - - - */
        var strSliderMain = 'main-slider';

        var sliderMain = new Swiper(document.querySelector('.' + strSliderMain + ' .swiper-container'), {
            loop: true,
            navigation: {
                prevEl: document.querySelector('.' + strSliderMain + '__prev'),
                nextEl: document.querySelector('.' + strSliderMain + '__next'),
            },
        });

        /* - - - Слайдер продукты - - - */
        var strProductsSlider = 'products-slider';

        var sliderProducts = new Swiper(document.querySelector('.' + strProductsSlider + ' .swiper-container'), {
            loop: true,
            spaceBetween: 50,
            slidesPerView: 4,
            breakpoints: {
                1399: {
                    spaceBetween: 30
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
            },
            navigation: {
                prevEl: document.querySelector('.' + strProductsSlider + '__prev'),
                nextEl: document.querySelector('.' + strProductsSlider + '__next'),
            },
        });

        /* - - - Слайдер причины - - - */
        var strReasonSlider = 'reason-slider';

        var sliderReason = new Swiper(document.querySelector('.' + strReasonSlider + ' .swiper-container'), {
            loop: true,
            spaceBetween: 50,
            slidesPerView: 5,
            breakpoints: {
                1399: {
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
            }
        });

        /* - - - Слайдер проект - - - */
        var strProjectSlider = 'project-slider';

        var sliderProject = new Swiper(document.querySelector('.' + strProjectSlider + ' .swiper-container'), {
            loop: true,
            slidesPerView: 1,
            navigation: {
                prevEl: document.querySelector('.' + strProjectSlider + '__prev'),
                nextEl: document.querySelector('.' + strProjectSlider + '__next'),
            },
        });

        /* - - - Слайдер команда - - - */
        var strTeamSlider = 'team-slider';

        document.querySelector('.' + strTeamSlider + '__count-small').textContent = document.querySelectorAll('.' + strTeamSlider + '__slide').length;

        var sliderTeam = new Swiper(document.querySelector('.' + strTeamSlider + ' .swiper-container'), {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                prevEl: document.querySelector('.' + strTeamSlider + '__prev'),
                nextEl: document.querySelector('.' + strTeamSlider + '__next'),
            },
        });

        sliderTeam.on('slideChange', function () {

            document.querySelector('.' + strTeamSlider + '__count-big').textContent = sliderTeam.realIndex + 1;
        });

        /* - - - Слайдер отзывы (картинки) - - - */
        var strReviewPict = 'review-pict';

        var sliderPict = new Swiper(document.querySelector('.' + strReviewPict + ' .swiper-container'), {
            loop: true,
            spaceBetween: 50,
            slidesPerView: 3,
            breakpoints: {
                1399: {
                    spaceBetween: 30
                },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
            },
        });

        /* - - - Слайдер отзывы (видео) - - - */
        var strReviewVideo = 'review-video';

        var sliderVideo = new Swiper(document.querySelector('.' + strReviewVideo + ' .swiper-container'), {
            loop: true,
            spaceBetween: 50,
            slidesPerView: 3,
            breakpoints: {
                1399: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                767: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
            },
        });

        /* - - - Прокрутка к элементу - - - */
        const anchors = [].slice.call(document.querySelectorAll('.go-to')),
              animationTime = 1000,
              framesCount = 50;

        anchors.forEach(function(item) {
            // каждому якорю присваиваем обработчик события
            item.addEventListener('click', function(e) {
                // убираем стандартное поведение
                e.preventDefault();

                // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
                let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + pageYOffset;

                // запускаем интервал, в котором
                let scroller = setInterval(function() {
                    // считаем на сколько скроллить за 1 такт
                    let scrollBy = coordY / framesCount;

                    // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
                    // и дно страницы не достигнуто
                    if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    // то скроллим на к-во пикселей, которое соответствует одному такту
                        window.scrollBy(0, scrollBy);
                    } else {
                        // иначе добираемся до элемента и выходим из интервала
                        window.scrollTo(0, coordY);
                        clearInterval(scroller);
                    }
                    // время интервала равняется частному от времени анимации и к-ва кадров
                }, animationTime / framesCount);
            });
        });
    }
});

/* - - - Карта - - - */
setTimeout(() => { ymaps.ready(init);  }, 2000);

function init() {

    var myMap = new ymaps.Map("map", {
        center: [55.807933, 37.573392],
        zoom: 16,
        controls: []
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
       // hintContent: 'Собственный значок метки',
       // balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/local/img/map.point.svg',
        // Размеры метки.
        iconImageSize: [120, 120],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-60, -60]
    });

    myMap.geoObjects.add(myPlacemark);
}