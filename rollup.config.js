import babel from '@rollup/plugin-babel'    
 
const config = {
    input: 'src/main.js',
    output: {
        file: 'dist/main.js',
        format: 'es'
    },
    external: ['react'],
    plugins: [babel({ exclude: 'node_modules/**' })]
}
 
export default config