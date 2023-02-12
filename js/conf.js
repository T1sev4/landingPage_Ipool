let numbers = document.querySelectorAll('.counter-number');
let numberProcent = document.querySelector('#counter-number-procent');
numbers.forEach((number) => {
    number.innerHTML = '0';
    function changeNumbers() {
        let finalValue = +number.getAttribute('data-num');
        let value = +number.innerHTML;
        let increament = finalValue / 9;
        if (value < finalValue) {
            number.innerHTML = Math.round(value + increament);
            setTimeout(changeNumbers, 50);
        } else {
            number.innerHTML = finalValue;
        }
    }
    changeNumbers();
});

let header = document.querySelector('.header');

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.header').addClass('scrolling');
    } else {
        $('.header').removeClass('scrolling');
    }
});
