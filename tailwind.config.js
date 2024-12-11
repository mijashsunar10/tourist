import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        container:
        {
            padding:
            {
                DEFAULT: '15PX',
            },
        },

        screens:
        {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        backgroundImage:
        {
            hero: 'url(/public/tourist/images/bg.jpg)',
            grid: 'url(/public/tourist/images/grid.png)',

        },
        fontFamily:
        {
              primary: 'DM Serif Display',
            secondary: 'Jost'

        },
        extend: {
            // fontFamily: {
            //     sans: ['Figtree', ...defaultTheme.fontFamily.sans],
              
            // },
            colors:
            {
                primary:{
                    DEFAULT:'#292f36',
                    hover:'#343e4a',
                },
                secondary:'#4d5053',
                accent:{
                    DEFAULT:'#cda274',
                    secondary:'#f4f0ec',
                    hover:'#b88c5d'
                },
            }
        },
    },

    plugins: [forms],
};
