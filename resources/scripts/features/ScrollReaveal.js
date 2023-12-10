import ScrollReveal from 'scrollreveal';

window.addEventListener('DOMContentLoaded', function () {
    // const groups = document.querySelectorAll('.wp-block-group');

    // groups.forEach( (group) => {
    //   group.classList.add('load-hidden');

    //   setTimeout(() => {
    //     group.classList.add('reveal');
    //   }, 100);

    // });

    setTimeout(() => {
        ScrollReveal().reveal('.reveal', {
            distance: '10%',
            origin: 'bottom',
            interval: 300,
        });
    }, 200);
});
