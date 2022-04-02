Package.describe({
  name: 'ubesthelp:meteor-measured',
  version: '1.0.4',
  summary: 'Meteor metrics library',
  git: 'https://github.com/ubesthelp/meteor-measured',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');
  api.use('ecmascript');

  api.mainModule('meteor-measured.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('ubesthelp:meteor-measured');
  api.mainModule('meteor-measured-tests.js');
});
