const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'admin',

  exposes: {
    // './Component': './projects/admin/src/app/app.component.ts',
    './Module': './projects/admin/src/app/admin/admin.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
