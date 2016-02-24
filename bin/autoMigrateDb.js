var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.dataSources.storydb;
var lbTables = ['Story' ];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Looback tables [' + lbTables + '] created in ', ds.adapter.name);
  ds.disconnect();
});
