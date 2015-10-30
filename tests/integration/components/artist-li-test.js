import { moduleForComponent, test } from 'ember-qunit';
import { make } from 'ember-data-factory-guy';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('artist-li', 'Integration | Component | artist li', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{artist-li}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it puts the artist data in the component', function(assert) {
  var artist = make('artist');

  this.render(hbs`{{artist-li artist=artist}}`);

  this.set('artist', artist);

  var out = this.$().text().trim();

  assert.equal(out, artist.get('name'));
});

