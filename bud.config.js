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
                      slug: 'xs',
                      size: '0.75rem',
                      name: 'xs',
                      fluid: {
                          min: '0.5rem',
                          max: '0.75rem',
                      },
                  },
                  {
                      slug: 'sm',
                      size: '0.875rem',
                      name: 'sm',
                      fluid: {
                          min: '0.75rem',
                          max: '0.875rem',
                      },
                  },
                  {
                      slug: 'base',
                      size: '1rem',
                      name: 'base',
                      fluid: {
                          min: '0.75rem',
                          max: '1rem',
                      },
                  },
                  {
                      slug: 'lg',
                      size: '1.125rem',
                      name: 'lg',
                      fluid: {
                          min: '1rem',
                          max: '1.125rem',
                      },
                  },
                  {
                      slug: 'xl',
                      size: '1.25rem',
                      name: 'xl',
                      fluid: {
                          min: '1.125rem',
                          max: '1.25rem',
                      },
                  },
                  {
                      slug: '2xl',
                      size: '1.5rem',
                      name: '2xl',
                      fluid: {
                          min: '1.25rem',
                          max: '1.5rem',
                      },
                  },
                  {
                      slug: '3xl',
                      size: '1.5rem',
                      name: '3xl',
                      fluid: {
                          min: '1.5rem',
                          max: '1.875rem',
                      },
                  },
                  {
                      slug: '4xl',
                      size: '2.25rem',
                      name: '4xl',
                      fluid: {
                          min: '1.875rem',
                          max: '2.25rem',
                      },
                  },
                  {
                      slug: '5xl',
                      size: '3rem',
                      name: '5xl',
                      fluid: {
                          min: '2.25rem',
                          max: '3rem',
                      },
                  },
                  {
                      slug: '6xl',
                      size: '3.75rem',
                      name: '6xl',
                      fluid: {
                          min: '3rem',
                          max: '3.75rem',
                      },
                  },
                  {
                      slug: '7xl',
                      size: '4.5rem',
                      name: '7xl',
                      fluid: {
                          min: '3.75rem',
                          max: '4.5rem',
                      },
                  },
                  {
                      slug: '8xl',
                      size: '6rem',
                      name: '8xl',
                      fluid: {
                          min: '4.5rem',
                          max: '6rem',
                      },
                  },
                  {
                      slug: '9xl',
                      size: '8rem',
                      name: '9xl',
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
