const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        // Dark blue
        'body-background': '#1E1E2C',

        '@btn-default-bg': '#23272A',

        '@primary-color': '#FFA878', // This needs to be modified as we go

        '@text-color-secondary': '#b9b9b9',

        '@text-color': '#fff',
        '@text-secondary-color': '#535378',

        // Layout
        // THe top of the navbar where the user pfp is
        '@layout-header-background': '@body-background',
        // The bottom of the navbar, closing button
        '@layout-trigger-background': '#23272A',

        'layout-body-background': '@body-background',

        // Alert background
        '@message-notice-content-bg': '#23272A',

        // Dashboard navbar colors
        '@menu-bg': '#202225',

        // Modal colors
        '@modal-header-bg': '@menu-bg',
        '@modal-footer-bg': '@menu-bg',
        '@modal-content-bg': '#2f3136',

        // Select colors
        '@select-background': '#23272A',
        '@select-dropdown-bg': '#23272A',
        '@select-selection-item-bg': '#23272A',
        '@select-item-selected-bg': '#2f3136',
        '@select-item-active-bg': '#2f3136',

        // Card colors
        '@card-head-color': '@text-color',
        '@card-background': '@body-background',
        '@card-actions-background': '#7289DA',
      },
    },
  })
);
