import { moduleForModel, test } from 'ember-qunit';

moduleForModel('album', 'Unit | Model | album', {
  // Specify the other units that are required for this test.
  needs: ['model:artist', 'model:comment']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('has expected properties', function(assert) {
  // I'd rather use the activemodel adapter/serializer to format this
  var rawModel = {"name":"Mega Album","year":2001,"artist_id":1,"totalSold":10001,"comment_ids":[],"id":1,"updatedAt":"Fri Oct 30 2015 17:33:06 GMT-0500 (CDT)"};
  var model = this.subject(rawModel);

  assert.equal(model.get('name'), rawModel['name']);
  assert.equal(model.get('year'), rawModel['year']);
  assert.equal(model.get('totalSold'), rawModel['totalSold']);
  assert.equal(model.get('updatedAt'), new Date(rawModel['updatedAt']));
});
