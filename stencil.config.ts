import {Config} from '@stencil/core';
import {sass} from '@stencil/sass';

export const config: Config = {
  namespace: 'webtraining-components-demo',
  outputTargets: [
    {type: 'dist'},
    {type: 'docs'},
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/globals/_variables.scss'
      ]
    }),
  ],
};
