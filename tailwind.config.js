const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {},
    },

    plugins: [require('@tailwindcss/forms')],
};
