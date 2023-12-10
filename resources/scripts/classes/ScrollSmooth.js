export default class SmoothScroll {
    constructor(_device) {
        this.device = _device;
        this.load();
        this.data = {
            y: 0,
            totalHeight: null,
            lastUpdate: 0,
            factor: 0.05,
            lastDelta: 0,
            frameRateFactor: (now) =>
                Math.min(5, (now - this.data.lastUpdate) / (1000 / 60)),
        };
        // Observe div resize
        if (typeof ResizeObserver != 'undefined') {
            const resize_observer = new ResizeObserver(() =>
                this.smoothScrollResizeAction(),
            );
            resize_observer.observe(this.contentBox);
        }
        window.addEventListener('resize', (e) => {
            this.smoothScrollResizeAction(e ?? true);
        });
        this.loop();
    }

    load() {
        this.isPointerCoarse = matchMedia('(pointer:coarse)').matches;
        this.contentBox = document.querySelector('#js-contentBox');
        // this.staticSections = document.querySelectorAll('.js-static')
    }

    unload() {
        window.scrollTo(0, 0);
        this.data.y = 0;
    }

    goToEventsSection() {
        const events = document.querySelector('#events');
        let y = events.getBoundingClientRect().top - 90;
        this.goTo(y);
    }

    goTo(_y) {
        window.scrollTo(0, _y);
        this.data.lastUpdate = new Date();
    }

    loop() {
        requestAnimationFrame(() => this.loop());
        const now = new Date();
        const windowY = window.scrollY;
        const scrollDelta = windowY - this.data.y;
        if (scrollDelta != 0) {
            if (windowY >= this.data.totalHeight * 0.99) {
                this.smoothScrollResizeAction(false);
            }
            if (this.isPointerCoarse) {
                this.updateCurrentY(windowY);
            } else if (scrollDelta < 1 && scrollDelta > -1) {
                this.updateCurrentY(windowY);
            } else {
                this.updateCurrentY(
                    this.data.y +
                        (windowY - this.data.y) *
                            this.data.factor *
                            this.data.frameRateFactor(now),
                );
            }
        }
        this.data.lastUpdate = now;
        this.data.lastDelta = scrollDelta;
    }

    updateCurrentY(value) {
        if (!this.isPointerCoarse && value > this.data.totalHeight) {
            window.scrollTo(0, this.data.totalHeight);
        }
        this.data.y = Math.min(value, this.data.totalHeight);
        // this.staticSections.forEach(section => {
        //     section.style.transform = `translateY(${this.data.y}px)`
        // })
        this.contentBox.style.transform = `translateY(${-this.data.y}px)`;
    }

    smoothScrollResizeAction(_withScrollUpdate = true) {
        const main = this.contentBox.querySelector('main');
        const margin = main
            ? main.getBoundingClientRect().top + this.data.y
            : 0;
        document.body.style.height = `${
            this.contentBox.offsetHeight + margin + this.device.screen.height
        }px`;
        this.data.totalHeight =
            this.contentBox.offsetHeight + margin - this.device.screen.height;
        if (_withScrollUpdate) {
            this.updateCurrentY(window.scrollY);
        }
    }
}
