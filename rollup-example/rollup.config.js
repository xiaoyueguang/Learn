export default {
  entry: './src/index.js',
  format: 'cjs',
  dest: './dist/rollup.bundle.js',
  external: ['lodash'],
  sourceMap: true,
  banner: '/* Rollup-example\n */'
}