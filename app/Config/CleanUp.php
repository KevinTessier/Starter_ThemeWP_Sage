<?php

namespace App\Config;

use Illuminate\Support\Str;

class CleanUp
{
    /**
     * Handle the module.
     */
    public function handle(): void
    {
        $this
            ->handleObscurity()
            ->handleCleanHtmlMarkup()
            ->handleDisableEmojis()
            ->handleDisableGutenbergBlockCss()
            ->handleDisableExtraRss()
            ->handleDisableRecentCommentsCss()
            ->handleDisableGalleryCss();
    }

    /**
     * Obscure and suppress WordPress information.
     */
    protected function handleObscurity(): self
    {
        foreach ([
            'adjacent_posts_rel_link_wp_head',
            'rest_output_link_wp_head',
            'rsd_link',
            'wlwmanifest_link',
            'wp_generator',
            'wp_oembed_add_discovery_links',
            'wp_oembed_add_host_js',
            'wp_shortlink_wp_head',
        ] as $hook) {
            remove_filter('wp_head', $hook);
        }

        add_filter('get_bloginfo_rss', fn ($value) => ! Str::is($value, __('Just another WordPress site')) ? $value : '');
        add_filter('the_generator', '__return_false');


        return $this;
    }


    /**
     * Clean HTML5 markup.
     */
    protected function handleCleanHtmlMarkup(): self
    {

        foreach ([
            'body_class' => [$this, 'bodyClass'],
            'language_attributes' => [$this, 'languageAttributes'],
            'style_loader_tag' => [$this, 'cleanStylesheetLinks'],
            'script_loader_tag' => [$this, 'cleanScriptTags'],
            'get_avatar' => [$this, 'removeSelfClosingTags'],
            'comment_id_fields' => [$this, 'removeSelfClosingTags'],
            'post_thumbnail_html' => [$this, 'removeSelfClosingTags'],
        ] as $hook => $function) {
            add_filter($hook, $function);
        }

        add_filter('site_icon_meta_tags', fn ($tags) => array_map([$this, 'removeSelfClosingTags'], $tags), 20);

        return $this;
    }

    /**
     * Disable WordPress emojis.
     */
    protected function handleDisableEmojis(): self
    {

        add_filter('emoji_svg_url', '__return_false');
        remove_filter('wp_head', 'print_emoji_detection_script', 7);

        foreach ([
            'admin_print_scripts' =>  'print_emoji_detection_script',
            'wp_print_styles' => 'print_emoji_styles',
            'admin_print_styles' => 'print_emoji_styles',
            'the_content_feed' => 'wp_staticize_emoji',
            'comment_text_rss' => 'wp_staticize_emoji',
            'wp_mail' => 'wp_staticize_emoji_for_email',
        ] as $hook => $function) {
            remove_filter($hook, $function);
        }

        return $this;
    }

    /**
     * Disable Gutenberg block library CSS.
     */
    protected function handleDisableGutenbergBlockCss(): self
    {

        add_filter('wp_enqueue_scripts', fn () => wp_dequeue_style('wp-block-library'), 200);

        return $this;
    }

    /**
     * Disable extra RSS feeds.
     */
    protected function handleDisableExtraRss(): self
    {

        add_filter('feed_links_show_comments_feed', '__return_false');
        remove_filter('wp_head', 'feed_links_extra', 3);

        return $this;
    }

    /**
     * Disable recent comments CSS.
     */
    protected function handleDisableRecentCommentsCss(): self
    {
        add_filter('show_recent_comments_widget_style', '__return_false');

        return $this;
    }

    /**
     * Disable gallery CSS.
     */
    protected function handleDisableGalleryCss(): self
    {
        add_filter('use_default_gallery_style', '__return_false');

        return $this;
    }

    /**
     * Clean up output of stylesheet <link> tags.
     */
    public function cleanStylesheetLinks(string $html): string
    {
        return Document::make($html)->each(static function ($link) {
            $link->removeAttribute('type');
            $link->removeAttribute('id');

            if (($media = $link->getAttribute('media')) && $media !== 'all') {
                return;
            }

            $link->removeAttribute('media');
        })->html();
    }

    /**
     * Clean up the output of <script> tags.
     */
    public function cleanScriptTags(string $html): string
    {

        // // Suppression des type inutile script et style
        // add_filter('script_loader_tag', function($tag, $handle) {
        //     return preg_replace( "/type=['\"]text\/(javascript|css)['\"]/", '', $tag );
        // }, 10, 2);

        // add_filter('style_loader_tag', function($tag, $handle) {
        //     return preg_replace( "/type=['\"]text\/(javascript|css)['\"]/", '', $tag );
        // }, 10, 2);

        return Document::make($html)->each(static function ($script) {
            $script->removeAttribute('type');
            $script->removeAttribute('id');
        })->html();
    }

    /**
     * Add and remove body_class() classes.
     */
    public function bodyClass(array $classes, array $disallowedClasses = ['page-template-default']): array
    {
        if (is_single() || is_page() && ! is_front_page()) {
            if (! in_array($slug = basename(get_permalink()), $classes, true)) {
                $classes[] = $slug;
            }
        }

        if (is_front_page()) {
            $disallowedClasses[] = 'page-id-'.get_option('page_on_front');
        }

        return collect($classes)
            ->diff($disallowedClasses)
            ->values()
            ->all();
    }

    /**
     * Clean up language_attributes() used in <html> tag.
     */
    public function languageAttributes(): string
    {
        $attributes = [];

        if (is_rtl()) {
            $attributes[] = 'dir="rtl"';
        }

        $lang = esc_attr(get_bloginfo('language'));

        if ($lang) {
            $attributes[] = "lang=\"{$lang}\"";
        }

        return implode(' ', $attributes);
    }

    /**
     * Remove self-closing tags.
     */
    public function removeSelfClosingTags(string|array $html): string|array
    {
        return str_replace(' />', '>', $html);
    }
}
