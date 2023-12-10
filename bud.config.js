/**
 * Compiler configuration
 *
 * @see {@link https://roots.io/docs/sage sage documentation}
 * @see {@link https://bud.js.org/guides/configure bud.js configuration guide}
 *
 * @type {import('@roots/bud').Config}
 */
export default async (app) => {
    /**
     * Application assets & entrypoints
     *
     * @see {@link https://bud.js.org/docs/bud.entry}
     * @see {@link https://bud.js.org/docs/bud.assets}
     */
    app.entry('app', ['@scripts/app', '@styles/app'])
        .entry('editor', ['@scripts/editor', '@styles/editor'])
        .assets(['images']);

    /**
     * Set public path
     *
     * @see {@link https://bud.js.org/docs/bud.setPublicPath}
     */
    app.setPublicPath('public/');

    /**
     * Development server settings
     *
     * @see {@link https://bud.js.org/docs/bud.setUrl}
     * @see {@link https://bud.js.org/docs/bud.setProxyUrl}
     * @see {@link https://bud.js.org/docs/bud.watch}
     */
    app.setUrl('http://localhost:3000')
        .setProxyUrl('http://example.test')
        .watch(['resources/views', 'app']);

    /**
     * Generate WordPress `theme.json`
     *
     * @note This overwrites `theme.json` on every build.
     *
     * @see {@link https://bud.js.org/extensions/sage/theme.json}
     * @see {@link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-json}
     */
    app.wpjson
        .setSettings({
            color: {
                custom: false,
                customDuotone: false,
                customGradient: false,
                defaultDuotone: false,
                defaultGradients: false,
                defaultPalette: false,
                duotone: [],
            },
            spacing: {
                padding: false,
                units: ['px', '%', 'rem'],
            },
            typography: {
                customFontSize: false,
                fluid: true,
                fontSizes: [
                    {
                        slug: 'text-xs',
                        size: '0.75rem',
                        name: 'text-xs',
                        fluid: {
                            min: '0.5rem',
                            max: '0.75rem',
                        },
                    },
                    {
                        slug: 'text-sm',
                        size: '0.875rem',
                        name: 'text-xs',
                        fluid: {
                            min: '0.75rem',
                            max: '0.875rem',
                        },
                    },
                    {
                        slug: 'text-base',
                        size: '1rem',
                        name: 'text-base',
                        fluid: {
                            min: '0.75rem',
                            max: '1rem',
                        },
                    },
                    {
                        slug: 'text-lg',
                        size: '1.125rem',
                        name: 'text-lg',
                        fluid: {
                            min: '1rem',
                            max: '1.125rem',
                        },
                    },
                    {
                        slug: 'text-xl',
                        size: '1.25rem',
                        name: 'text-xl',
                        fluid: {
                            min: '1.125rem',
                            max: '1.25rem',
                        },
                    },
                    {
                        slug: 'text-2xl',
                        size: '1.5rem',
                        name: 'text-2xl',
                        fluid: {
                            min: '1.25rem',
                            max: '1.5rem',
                        },
                    },
                    {
                        slug: 'text-3xl',
                        size: '1.5rem',
                        name: 'text-3xl',
                        fluid: {
                            min: '1.5rem',
                            max: '1.875rem',
                        },
                    },
                    {
                        slug: 'text-4xl',
                        size: '2.25rem',
                        name: 'text-4xl',
                        fluid: {
                            min: '1.875rem',
                            max: '2.25rem',
                        },
                    },
                    {
                        slug: 'text-5xl',
                        size: '3rem',
                        name: 'text-5xl',
                        fluid: {
                            min: '2.25rem',
                            max: '3rem',
                        },
                    },
                    {
                        slug: 'text-6xl',
                        size: '3.75rem',
                        name: 'text-6xl',
                        fluid: {
                            min: '3rem',
                            max: '3.75rem',
                        },
                    },
                    {
                        slug: 'text-7xl',
                        size: '4.5rem',
                        name: 'text-7xl',
                        fluid: {
                            min: '3.75rem',
                            max: '4.5rem',
                        },
                    },
                    {
                        slug: 'text-8xl',
                        size: '6rem',
                        name: 'text-8xl',
                        fluid: {
                            min: '4.5rem',
                            max: '6rem',
                        },
                    },
                    {
                        slug: 'text-9xl',
                        size: '8rem',
                        name: 'text-9xl',
                        fluid: {
                            min: '6rem',
                            max: '8rem',
                        },
                    },
                ],
                'line-height': [
                    {
                        slug: 'leading-none',
                        size: '1',
                        name: 'leading-none	',
                    },
                    {
                        slug: 'leading-tight',
                        size: '1.25',
                        name: 'leading-tight',
                    },
                    {
                        slug: 'leading-snug',
                        size: '1.375',
                        name: 'leading-snug',
                    },
                    {
                        slug: 'leading-normal',
                        size: '1.5',
                        name: 'leading-normal',
                    },
                    {
                        slug: 'leading-relaxed',
                        size: '1.625',
                        name: 'leading-relaxed',
                    },
                    {
                        slug: 'leading-loose',
                        size: '2',
                        name: 'leading-loose',
                    },
                ],
            },
        })
        .useTailwindColors()
        .useTailwindFontFamily();
    // .useTailwindFontSize();
};
