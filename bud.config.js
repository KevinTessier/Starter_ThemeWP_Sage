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
      .setVersion(3)
      .setSettings({
          appearanceTools: false,
          border: {
              color: false,
              radius: false,
              style: false,
              width: false
          },
          color: {
              background: true,
              button: true,
              caption: false,
              custom: false,
              customDuotone: false,
              customGradient: false,
              defaultGradients: false,
              defaultPalette: true,
              duotone: [],
              gradients: [],
              link: false,
              palette: [],
              text: true
          },
          custom: {},
          dimensions: {
              aspectRatio: false,
              minHeight: false,
              defaultAspectRatios: false,
              aspectRatios: null,
          },
          layout: {
              contentSize: "800px",
              wideSize: "1000px"
          },
          spacing: {
              blockGap: null,
              margin: false,
              padding: false,
              customSpacingSize: false,
              units: [ "px", "em", "rem", "vh", "vw" ],
              spacingScale: null,
              spacingSizes: []
          },
          typography: {
              customFontSize: false,
              dropCap: false,
              fluid: true,
              fontFamilies: [],
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
              fontStyle: false,
              fontWeight: false,
              letterSpacing: false,
              lineHeight: false,
              textAlign: true,
              textColumns: false,
              textDecoration: false,
              textTransform: false
          },
          blocks: {
              "core/paragraph": {
                  border: {},
                  color: {},
                  custom: {},
                  layout: {},
                  spacing: {},
                  typography: {}
              },
          },
          spacing: {
              padding: false,
              units: ['px', '%', 'rem'],
          },
      })
      .useTailwindFontFamily()
      .enable()
};
