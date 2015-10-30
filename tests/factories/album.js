import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('album', {
  sequences: {
    name: function(num) { return "Album" + num; },
    year: function(num) { return 1900 + num; },
    totalSold: function(num) { return num; },
    updatedAt: function() { return new Date(); }
  },
  default: {
    name: FactoryGuy.generate('name'),
    year: FactoryGuy.generate('year'),
    artist: {},
    totalSold: FactoryGuy.generate('totalSold'),
    updatedAt: FactoryGuy.generate('updatedAt')
  }
});
