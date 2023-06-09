<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

/**
 * Disable extra RSS feeds.
 *
 * @return void
 */
add_filter('feed_links_show_comments_feed', '__return_false');

/**
 * Disable recent comments CSS.
 *
 * @return void
 */
add_filter('show_recent_comments_widget_style', '__return_false');

// Suppression des type inutile script et style
add_filter('script_loader_tag', function($tag, $handle){
    return preg_replace( "/type=['\"]text\/(javascript|css)['\"]/", '', $tag );
}, 10, 2);

add_filter('style_loader_tag', function($tag, $handle){
    return preg_replace( "/type=['\"]text\/(javascript|css)['\"]/", '', $tag );
}, 10, 2);

// Suppression des lazy sur images -- bug le rendu au scroll
// add_filter( 'wp_lazy_loading_enabled', '__return_false' );
