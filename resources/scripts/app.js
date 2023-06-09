import domReady from '@roots/sage/client/dom-ready';
import ToogleBurger from '@scripts/features/toogleBurger.js';

/**
 * Application entrypoint
 */
domReady(async () => {
  ToogleBurger.init();
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
