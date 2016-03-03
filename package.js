Package.describe({
  name: "kevbuk:moment-range",
  summary: "Fancy date ranges for Moment.js packaged for Meteor.",
  version: "2.2.0"
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  api.use('momentjs:moment', where);
  api.add_files('lib/moment-range/lib/moment-range.js', where);
});
