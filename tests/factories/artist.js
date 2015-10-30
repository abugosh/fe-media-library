import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('artist', {
  sequences: {
    name: function(num) { return "Artist" + num; },
    location: function(num) { return "Location" + num; },
    year: function(num) { return 1900 + num; },
    updated: function() { return new Date(); }
  },

  default: {
    name: FactoryGuy.generate('name'),
    basedIn: FactoryGuy.generate('location'),
    foundingYear: FactoryGuy.generate('year'),
    updated: FactoryGuy.generate('updated'),
  },

  someArtist: {
    name: "Some Artist"
  }
});
