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
  infrastructureLogging: {
    debug: false
  },
  resolve: {
    alias: {
      // # Scenario 1
      //  It works
      // './environments/environment': '/..{absolutePathToTheApp}/nestapp/src/environments/environment.prod.ts',
      //
      // # Scenario 2 (relative path)
      // it should work also but it doesn't 
      './environments/environment.ts': './environments/environment.prod.ts',
    }
  }
};
