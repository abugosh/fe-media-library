import { moduleForComponent, test } from 'ember-qunit';
import { make } from 'ember-data-factory-guy';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('album-li', 'Integration | Component | album li', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{album-li}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it puts the album data in the component', function(assert) {
  var album = make('album');

  this.render(hbs`{{album-li album=album}}`);

  this.set('album', album);

  var out = this.$().text().trim();

  assert.equal(out, album.get('name'));
});

