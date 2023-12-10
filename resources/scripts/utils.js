const utils = {
    splitChar: (el) => {
        const chars = el.split('');
        const res = chars
            .map(function (el) {
                el = el === ' ' ? '&nbsp;' : el;
                return `<span>${el}</span>`;
            })
            .join('');
        return res;
    },
    move: (e, $el) => {
        let x = e.pageX - $el.offsetLeft - $el.offsetWidth / 2;
        let y = e.pageY - $el.offsetTop - $el.offsetHeight / 2;
        let xPourcent = (x * 100) / $el.offsetWidth / 5;
        let yPourcent = (y * 100) / $el.offsetHeight / 5;
        $el.style.transform =
            'rotateX(' + -yPourcent + 'deg) rotateY(' + xPourcent + 'deg)';
    },
    reinit: (e, $el) => {
        setTimeout(() => {
            $el.style.transform = '';
        }, 200);
    },
};

export default utils;
