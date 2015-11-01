import { moduleForComponent, test } from 'ember-qunit';
import { make } from 'ember-data-factory-guy';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('comment-li', 'Integration | Component | comment li', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{comment-li}}`);

  assert.ok(this.$().text().trim().indexOf('says') > -1);
  assert.ok(this.$().text().trim().indexOf('on') > -1);
});

test('it puts the comment data in the component', function(assert) {
  var comment = make('comment');

  this.render(hbs`{{comment-li comment=comment}}`);

  this.set('comment', comment);

  var out = this.$().text().trim();

  assert.ok(out.indexOf(comment.get('author')) > -1);
  assert.ok(out.indexOf(comment.get('message')) > -1);
  assert.ok(out.indexOf(comment.get('updatedAt')) > -1);
});

