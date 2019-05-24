const getPower = require('./json/parent_getPower.json');
const reConfig = require('./json/parent_reConfig.json');
const reConList = require('./json/parent_reconlist.json');
const reGroup = require('./json/parent_reGroup.json');

function Mock(app) {
  app.get('/xxxx/yyy', function(req, res) {
    console.log('getPower111');
    res.json(getPower);
  });
  app.post('/reconfig', function(req, res) {
    console.log('reConfig111');
    res.json(reConfig);
  });
  app.post('/conlist', function(req, res) {
    console.log('reConList111');
    res.json(reConList);
  });
  app.post('/regroup', function(req, res) {
    console.log('reGroup111');
    res.json(reGroup);
  });
}
devServer: {
    port: 8082,
    host: '0.0.0.0',
    headers: {
      'X-foo': '112233'
    },
    inline: true,
    overlay: true,
    stats: 'errors-only',
    before: function(app) {
      console.log(app);
      if (process.env.NODE_ENV === 'mock') {
        Mock(app);
      }
    }
  },
  plugins: [
    // 设置环境变量信息
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]

{
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --progress --colors --devtool cheap-module-eval-source-map --hot --inline",
    "build": "cross-env NODE_ENV=production webpack --progress --colors --devtool cheap-module-source-map",
    "build:dll": "webpack --config webpack.dll.config.js",
    "start": "webpack-dev-server --progress --colors --devtool cheap-module-eval-source-map --hot --inline",
    "mock": "cross-env NODE_ENV=mock npm run start"
  },
}
