module.exports = {
    mode: 'jit',
    purge: ['./public/index.html', './src/**/*.{svelte,js,ts}'],
    darkMode: false, // or 'media' or 'class'
    plugins: [require('@tailwindcss/forms'),],
    corePlugins: {preflight: false,},
}
