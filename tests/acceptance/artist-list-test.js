import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'fe-ember-candidate/tests/helpers/start-app';

module('Acceptance | artist list', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
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
  visit('/');

  andThen(function() {
    assert.equal(find('ul.artists').length, 1);
    assert.ok(find('ul.artists li').length > 0);
  });
});

test('find an artist in the list', function(assert) {
  visit('/');

  andThen(function() {
    // This test is a place holder for now, I'll figure out the real structure later
    assert.equal(find('ul.artists li:first').text(), 'Some Artist');
  });
});

