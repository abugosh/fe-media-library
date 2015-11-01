import Ember from 'ember';
import { module, test } from 'qunit';
import { make, makeList } from 'ember-data-factory-guy';
import startApp from 'fe-ember-candidate/tests/helpers/start-app';

var album, comments;
module('Acceptance | album show', {
  beforeEach: function() {
    this.application = startApp();
    comments = makeList('comment', 5);
    album = make('album', {comments: comments});
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /albums/1', function(assert) {
  visit('/albums/' + album.id);

  andThen(function() {
    assert.equal(currentURL(), '/albums/' + album.id);
  });
});

test('the album page should have a header with the album name', function(assert) {
  visit('/albums/' + album.id);

  andThen(function() {
    assert.equal(find('h2.album-name').text(), album.get('name'));
  });
});

test('the album page should have a link back to the album artist', function(assert) {
  visit('/albums/' + album.id);

  andThen(function() {
    click('div.back-link a');

    andThen(function() {
      assert.equal(currentURL(), '/artists/' + album.get('artist').id);
    });
  });
});

test('the album page should have a comment list structure', function(assert) {
  visit('/albums/' + album.id);

  andThen(function() {
    assert.equal(find('ul.comments').length, 1);
    assert.equal(find('ul.comments li.comment').length, comments.length);
  });
});

