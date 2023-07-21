const TOP_BANNER = document.querySelector('.TopBanner');
const TOP_BANNER_BTN = document.querySelector('.TopBanner span');

TOP_BANNER_BTN.addEventListener('click', () => {
    TOP_BANNER.classList.add('on');
});

const HEADER = document.querySelector('.Header');
window.addEventListener('scroll', () => {
    //스크롤 값을 구해서 0 이상이면 on 붙이고 아니면 땐다.
    const SCT = window.scrollY;
    SCT > 0 ? HEADER.classList.add('on') : HEADER.classList.remove('on');
});


//main_slide
const SLIDE_NUM = document.querySelector('.slide_num strong');
const SLIDE_NUM_T = document.querySelector('.slide_num span');
const SLIDE_LIST = document.querySelectorAll('.MainVisual .list li');

console.log(SLIDE_LIST);

const MAIN_SLIDE = new Swiper('.main_slide', {
    loop: true,
    slideActiveClass: 'on',
    on: {
        init: function () {
            //console.log(this.realIndex, this.slides.length)
            SLIDE_NUM.innerHTML = this.realIndex + 1;
            SLIDE_NUM_T.innerHTML = this.slides.length;
        },
        slideChangeTransitionStart: function () {
            SLIDE_NUM.innerHTML = this.realIndex + 1;
            //SLIDE_NUM_T.innerHTML = this.slides.length;
            SLIDE_LIST.forEach(it => it.classList.remove('on'));
            SLIDE_LIST[this.realIndex].classList.add('on');
        }
    }
});

SLIDE_LIST.forEach((it, idx) => {
    it.addEventListener('click', e => {
        e.preventDefault();
        MAIN_SLIDE.slideTo(idx)
    })
})