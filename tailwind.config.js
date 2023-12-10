/** @type {import('tailwindcss').Config} config */
const config = {
    content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js}'],
    theme: {
        extend: {
            colors: {}, // Extend Tailwind's default colors
            fontFamily: {
                title: 'arial',
                body: 'arial',
            },
            container: {
                center: true,
                padding: '2rem',
            },
        },
    },
    plugins: [],
};

export default config;
