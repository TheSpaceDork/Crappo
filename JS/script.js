let third = document.getElementById('3');
let third_h1 = document.getElementById('3_h1');
let btn_div = document.getElementById('btn_trans_main');
let btn_p = document.getElementById('btn_transition');
let arrow = document.getElementById('last_p');
let last_txt = document.getElementById('main_txt');
// Second set of variables for card 2
let second = document.getElementById('2');
let second_h1 = document.getElementById('2_h1');
let btn_div2 = document.getElementById('btn_trans_main2');
let btn_p2 = document.getElementById('btn_transition2');
let arrow2 = document.getElementById('last_p2');
let last_txt2 = document.getElementById('main_txt2');
// first set of variables for card 1
let first = document.getElementById('1');
let first_h1 = document.getElementById('1_h1');
let btn_div1 = document.getElementById('btn_trans_main1');
let btn_p1 = document.getElementById('btn_transition1');
let arrow1 = document.getElementById('last_p1');
let last_txt1 = document.getElementById('main_txt1');
function changeColor() {
    third.classList.toggle('colorChange');
    third_h1.classList.toggle('morecolorchange');
    btn_div.classList.toggle('trans_div');
    btn_p.classList.toggle('trans_p');
    // last_p.classList.toggle('morecolorchange');
    last_txt.classList.toggle('morecolorchange');
    // second color change
     second.classList.remove('colorChange');
    second_h1.classList.remove('morecolorchange');
    btn_div2.classList.remove('trans_div');
    btn_p2.classList.remove('trans_p');
    // last_p.classList.toggle('morecolorchange');
    last_txt2.classList.remove('morecolorchange');
    first.classList.remove('colorChange');
    first_h1.classList.remove('morecolorchange');
    btn_div1.classList.remove('trans_div');
    btn_p1.classList.remove('trans_p');
    // last_p.classList.toggle('morecolorchange');
    last_txt1.classList.remove('morecolorchange');
}
function changeColor2() {
    // second card variables

    second.classList.toggle('colorChange');
    second_h1.classList.toggle('morecolorchange');
    btn_div2.classList.toggle('trans_div');
    btn_p2.classList.toggle('trans_p');
    // last_p.classList.toggle('morecolorchange');
    last_txt2.classList.toggle('morecolorchange');
    // third color change
 third.classList.remove('colorChange');
    third_h1.classList.remove('morecolorchange');
    btn_div.classList.remove('trans_div');
    btn_p.classList.remove('trans_p');
    // last_p.classList.toggle('morecolorchange');
    last_txt.classList.remove('morecolorchange');
     first.classList.remove('colorChange');
    first_h1.classList.remove('morecolorchange');
    btn_div1.classList.remove('trans_div');
    btn_p1.classList.remove('trans_p');
    // last_p.classList.toggle('morecolorchange');
    last_txt1.classList.remove('morecolorchange');
};
function changeColor1() {
     first.classList.toggle('colorChange');
    first_h1.classList.toggle('morecolorchange');
    btn_div1.classList.toggle('trans_div');
    btn_p1.classList.toggle('trans_p');
    // last_p.classList.toggle('morecolorchange');
    last_txt1.classList.toggle('morecolorchange');
    // removal of other classes
     third.classList.remove('colorChange');
    third_h1.classList.remove('morecolorchange');
    btn_div.classList.remove('trans_div');
    btn_p.classList.remove('trans_p');
    // last_p.classList.toggle('morecolorchange');
    last_txt.classList.remove('morecolorchange');
      second.classList.remove('colorChange');
    second_h1.classList.remove('morecolorchange');
    btn_div2.classList.remove('trans_div');
    btn_p2.classList.remove('trans_p');
    // last_p.classList.toggle('morecolorchange');
    last_txt2.classList.remove('morecolorchange');
}

// Mobile nav functionality
let openMenu = document.getElementById('openMenu');
let menu = document.getElementById('menu');
let close = document.getElementById('close');
function openNav() {
    menu.classList.toggle('open');

}
function closeNav() {
    menu.classList.toggle('close');
}
// Scrolling animations
        ScrollReveal({
            reset: true,
            distance: '60px',
            duration: 2500,
            delay: 300
        });

        ScrollReveal().reveal('.save', {
            origin: 'left'
        });

        ScrollReveal().reveal('.down', {
            origin: 'bottom'
        });

        ScrollReveal().reveal('.scale', {
            scale: 0.50
        });

        ScrollReveal().reveal('.main_image', {
            origin: 'right'
        });

        ScrollReveal().reveal('.icons img', {
            origin: 'bottom',
            interval: 100
        });
        //
        ScrollReveal().reveal('.left', {
            origin: 'left'
        });
        ScrollReveal().reveal('.resume', {
            origin: 'bottom'
        });