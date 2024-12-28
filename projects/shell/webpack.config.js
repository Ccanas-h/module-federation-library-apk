const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {

    //SI usamos loadRemoteModule no necesitamos importarlo desde aca. 
    //https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/tutorial/tutorial.md
    // mfe1: 'http://localhost:4201/remoteEntry.js',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
