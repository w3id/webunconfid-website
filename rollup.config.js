
import copy from 'rollup-plugin-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

export default [{
    input: 'src/t-app.js',
    plugins:[
        copy({
            targets: [
              { src: 'index.html', dest: 'dist' },
              { src: 'manifest.json', dest: 'dist' },
              { src:'node_modules/milligram/dist/milligram.min.css', dest: 'dist/css'},
              { src: 'img/**/*', dest: 'dist/img' },
              { src: 'data/**/*', dest: 'dist/data' }
            ]
          }),
        nodeResolve(),
        isProduction && terser(),
        !isProduction && serve({
            port: 9000,
            contentBase:'dist',
            historyApiFallback: true
        })
    ],
    output: {
      file: 'dist/src/t-app.js',
      format: 'esm'
    }
  }, {
    input: 'src/t-schedule.js',
    plugins:[
        isProduction && terser()
    ],
    output: {
      file: 'dist/src/t-schedule.js',
      format: 'esm'
    }
  }, {
    input: 'src/t-shell.js',
    plugins:[
        isProduction && terser()
    ],
    output: {
      file: 'dist/src/t-shell.js',
      format: 'esm'
    }
  }, {
    input: 'src/t-coc.js',
    plugins:[
        isProduction && terser()
    ],
    output: {
      file: 'dist/src/t-coc.js',
      format: 'esm'
    }
  }
];