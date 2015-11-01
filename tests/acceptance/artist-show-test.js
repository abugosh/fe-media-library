import Ember from 'ember';
import { module, test } from 'qunit';
import { make, makeList } from 'ember-data-factory-guy';
import startApp from 'fe-ember-candidate/tests/helpers/start-app';

var artist, albums;
module('Acceptance | artist show', {
  beforeEach: function() {
    this.application = startApp();
    albums = makeList('album', 3);
    artist = make('artist', {albums: albums});
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting the new /artists/n', function(assert) {
  visit('/artists/' + artist.id);

  andThen(function() {
    assert.equal(currentURL(), '/artists/' + artist.id);
  });
});

test('the artist page should have a header with the artist name', function(assert) {
  visit('/artists/' + artist.id);

  andThen(function() {
    assert.equal(find('h2.artist-name').text(), artist.get('name'));
  });
});

test('the artist page should have a album list structure', function(assert) {
  visit('/artists/' + artist.id);

  andThen(function() {
    assert.equal(find('ul.albums').length, 1);
    assert.equal(find('ul.albums li.album').length, albums.length);
  });
});

test('the artist page should have a link back to the main artist list', function(assert) {
  visit('/artists/' + artist.id);

  andThen(function() {
    click('div.back-link a');

    andThen(function() {
      assert.equal(currentURL(), '/');
    });
  });
});

