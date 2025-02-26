<?php

namespace App\Config;

use Illuminate\Support\Str;

class RelativeUrls
{

    /**
     * Handle the module.
     */
    public function handle(): void
    {

        foreach ([
            'bloginfo_url' => [$this, 'relativeUrl'],
            'the_permalink' => [$this, 'relativeUrl'],
            'wp_list_pages' => [$this, 'relativeUrl'],
            'wp_list_categories' => [$this, 'relativeUrl'],
            'wp_get_attachment_url' => [$this, 'relativeUrl'],
            'the_content_more_link' => [$this, 'relativeUrl'],
            'the_tags' => [$this, 'relativeUrl'],
            'get_pagenum_link' => [$this, 'relativeUrl'],
            'get_comment_link' => [$this, 'relativeUrl'],
            'month_link' => [$this, 'relativeUrl'],
            'day_link' => [$this, 'relativeUrl'],
            'year_link' => [$this, 'relativeUrl'],
            'term_link' => [$this, 'relativeUrl'],
            'the_author_posts_link' => [$this, 'relativeUrl'],
            'script_loader_src' => [$this, 'relativeUrl'],
            'style_loader_src' => [$this, 'relativeUrl'],
            'theme_file_uri' => [$this, 'relativeUrl'],
            'parent_theme_file_uri' => [$this, 'relativeUrl'],
        ] as $hook => $function) {
            add_filter($hook, $function, 10, 1);
        }

        add_filter('wp_calculate_image_srcset', [$this, 'imageSrcset'], 10, 1);

        $this->handleCompatibility();
    }

    /**
     * Handle compatibility with third-party plugins.
     */
    protected function handleCompatibility(): self
    {
        return $this->handleSeoFramework();
    }

    /**
     * Handle The SEO Framework compatibility.
     */
    protected function handleSeoFramework(): self
    {
        add_filter('the_seo_framework_do_before_output', fn () => remove_filter('wp_get_attachment_url', [$this, 'relativeUrl']));
        add_filter('the_seo_framework_do_after_output', fn () => add_filter('wp_get_attachment_url', [$this, 'relativeUrl']));

        return $this;
    }

    /**
     * Convert an absolute URL to a relative URL.
     */
    public function relativeUrl(string $url): string
    {

        if (is_feed()) {
            return $url;
        }
        if ($this->compareBaseUrl(network_home_url(), $url)) {
            return wp_make_link_relative($url);
        }
        return $url;
    }

    /**
     * Convert multiple URL sources to relative URLs.
     */
    public function imageSrcset(string|array $sources): string|array
    {
        if (! is_array($sources)) {
            return $sources;
        }

        return array_map(function ($source) {
            $source['url'] = $this->relativeUrl($source['url']);

            return $source;
        }, $sources);
    }

    /**
     * Determine if two URLs contain the same base URL.
     */
    protected function compareBaseUrl(string $baseUrl, string $inputUrl, bool $strict = true): bool
    {
        $baseUrl = trailingslashit($baseUrl);
        $inputUrl = trailingslashit($inputUrl);

        if ($baseUrl === $inputUrl) {
            return true;
        }

        $inputUrl = wp_parse_url($inputUrl);

        if (! isset($inputUrl['host'])) {
            return true;
        }

        $baseUrl = wp_parse_url($baseUrl);

        if (! isset($baseUrl['host'])) {
            return false;
        }

        if (! $strict || ! isset($inputUrl['scheme']) || ! isset($baseUrl['scheme'])) {
            $inputUrl['scheme'] = $baseUrl['scheme'] = 'soil';
        }

        if (
            ! Str::is($baseUrl['scheme'], $inputUrl['scheme']) ||
            ! Str::is($baseUrl['host'], $inputUrl['host'])
        ) {
            return false;
        }

        if (isset($baseUrl['port']) || isset($inputUrl['port'])) {
            return isset($baseUrl['port'], $inputUrl['port']) && Str::is($baseUrl['port'], $inputUrl['port']);
        }

        return true;
    }
}
