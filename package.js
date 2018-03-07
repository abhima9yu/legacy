Package.describe({
  git: 'https://github.com/abhima9yu/meteor-active-route.git',
  name: 'active-route',
  summary: 'Active route helpers',
  version: '2.3.3'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');

  api.use([
    'check',
    'coffeescript',
    'reactive-dict',
    'underscore'
  ]);

  api.use([
    'kadira:flow-router@2.0.0',
    'templating'
  ], {weak: true});

  api.export('ActiveRoute');

  api.addFiles('lib/activeroute.coffee');

  api.addFiles('client/helpers.coffee', 'client');
});

Package.onTest(function(api) {
  api.versionsFrom(['1.0', '1.2']);

  api.use([
    'check',
    'coffeescript',
    'reactive-dict',
    'templating',
    'underscore'
  ]);

  api.use([
    'active-route'
  ]);
});

