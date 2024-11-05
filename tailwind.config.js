import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                Roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'war0' : '#AFEBFD',
                'war1': '#0bb3e4',
                'war2': '#2af599',
                'abu1': '#3C5157',
                'abu2': '#2D3A3D',
            },
            backgroundImage: {
                'wargrad': 'linear-gradient(to right, #0bb3e4, #2af599)',
                'wargradwar': 'linear-gradient(to right, #0bb3e4, #0bb3e4)',
            }
        },
    },

    plugins: [forms],
};
