Package.describe({
  name: "kevbuk:moment-range",
  summary: "Fancy date ranges for Moment.js packaged for Meteor.",
  version: "2.2.0",
  git: "https://github.com/kevb/meteor-moment-range"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.use('momentjs:moment@2.11.2', where);
  api.add_files('lib/moment-range/lib/moment-range.js', where);
});
