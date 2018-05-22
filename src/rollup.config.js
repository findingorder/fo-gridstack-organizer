// rollup.config.js
// import resolve  from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
// import svg      from 'rollup-plugin-svg'
// import vue      from 'rollup-plugin-vue'

import postcss from 'rollup-plugin-postcss'

export default {
    input: 'fo-gridstack-organizer-merged.js',
    output: {
        file: '../dist/fo-gridstack-organizer-bundle.js',
        format: 'es'
    },
    plugins: [ 
        // resolve({
        //     browser: true
        // }),
        // vue(),
        // commonjs(),
        // svg(),
        postcss({
            plugins: []
        })
    ]
}

