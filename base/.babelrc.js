const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    // if we are not in a test mode turn the module trans piling off to let
    // webpack converting those module, this is necessary for webpack to
    // received the module not converted to leverage all the benefit of tree
    // shaking and code splitting
    ['@babel/preset-env', {modules: isTest ? 'commonjs' : false}],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties', // allow you to write state
    // ={} instead of this.state ={} in a class
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import', // support dynamic import for
    // code-spitting
  ],
}
