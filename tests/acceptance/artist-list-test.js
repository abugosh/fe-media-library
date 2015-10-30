import Ember from 'ember';
import { module, test } from 'qunit';
import { make } from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import startApp from 'fe-ember-candidate/tests/helpers/start-app';

module('Acceptance | artist list', {
  beforeEach: function() {
    this.application = startApp();
    TestHelper.setup();
  },

  afterEach: function() {
    TestHelper.teardown();
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('find the artist list structure', function(assert) {
  TestHelper.handleFindAll('artist', 1);

  visit('/');

  andThen(function() {
    assert.equal(find('ul.artists').length, 1);
    assert.ok(find('ul.artists li.artist').length > 0);
  });
});

test('find an artist in the list', function(assert) {
  TestHelper.handleFindAll('artist', 10);
  visit('/');

  andThen(function() {
    // This test is a place holder for now, I'll figure out the real structure later
    assert.equal(find('ul.artists li.artist:first').text(), 'Artist1');
  });
});

test('click on an artist to go to the artist page', function(assert) {
  var artist = make('artist');

  visit('/');

  click('li.artist:first a');

  andThen(function() {
    assert.equal(currentURL(), '/artists/' + artist.get('id'));
  });
});

