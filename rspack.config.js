/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  entry: {
    main: './src/main.ts',
  },
  externalsType: 'commonjs',
  externals: {
    '@nestjs/common': '@nestjs/common',
    '@nestjs/core': '@nestjs/core',
    'tslib': 'tslib',
  },
  target: 'node',
};
