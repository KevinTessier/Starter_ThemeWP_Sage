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
 * Allowed block Gutenberg
 */
add_filter( 'allowed_block_types_all', function() {
    // list active block gutenberg
  	return [
        'core/heading',
        'core/paragraph',
        'core/list',
        'core/list-item',
        'core/buttons',
        'core/button',
        'core/group',
        'core/image',

        // active Block Custom
        // 'acf/name-block',
    ];
}, 10, 0 );
// Suppression des SVG duotone de WordPress

if(has_action("wp_body_open", "wp_global_styles_render_svg_filters"))
  remove_action("wp_body_open", "wp_global_styles_render_svg_filters");

// Suppression des SVG duotone du plugin Gutenberg

if(has_action("wp_body_open", "gutenberg_global_styles_render_svg_filters"))
  remove_action("wp_body_open", "gutenberg_global_styles_render_svg_filters");

// add_action("wp_enqueue_scripts", function() {
//     try{
//       $styles = wp_styles();
//       $dep = $styles->query("global-styles");
//       if(! $dep) return;
//       $css = $dep->extra["after"];
//       if(! $css) return;

//       $css = is_array($css) ? implode("; ", $css) : $css;
//       $css = preg_replace('/--wp--preset--duotone--.*?\)\s*;/', "", $css);
//       $css = preg_replace('/--wp--preset--gradient--.*?\)\s*;/', "", $css);
//       $css = preg_replace('/--wp--preset--color--.*?\)\s*;/', "", $css);
//       $css = preg_replace('/--wp--preset--shadow--.*?\)\s*;/', "", $css);
//       $dep->extra["after"] = array($css);
//     }
//     catch(\Exception $ex){
//       if(defined("WP_DEBUG") && WP_DEBUG){
//         if(defined("WP_DEBUG_DISPLAY") && WP_DEBUG_DISPLAY) echo $ex->getMessage();
//         if(defined("WP_DEBUG_LOG") && WP_DEBUG_LOG) error_log($ex->getMessage());
//       }
//     }
//   });
