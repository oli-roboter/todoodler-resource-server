const common = {
  module: {
    loaders: [ /* common loaders */]
  },
  plugins: [ /* common plugins */],
  resolve: {
    extensions: ['', '.js', '.jsx'] // common extensions
  }
  // other plugins, postcss config etc. common for frontend and backend
};

const frontend = {
  entry: [
    'frontend.js'
  ],
  output: {
    filename: 'frontend-output.js'
  }
  // other loaders, plugins etc. specific for frontend
};

const backend = {
  entry: [
    'backend.js'
  ],
  output: {
    filename: 'backend-output.js'
  },
  target: 'node',
  externals: // specify for example node_modules to be not bundled
   // other loaders, plugins etc. specific for backend
};

module.exports = [
  Object.assign({}, common, frontend),
  Object.assign({}, common, backend)
];