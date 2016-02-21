Package.describe({
  name: 'rudolfs:wnumb',
  version: '0.0.3',
  summary: 'wNumb.js for Meteor',
  git: 'https://github.com/rudza/meteor-wnumb',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('wNumb.js');
  api.export('wNumb', ['client','server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rudolfs:wnumb');
});
