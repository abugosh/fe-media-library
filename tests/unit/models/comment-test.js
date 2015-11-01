import { moduleForModel, test } from 'ember-qunit';

moduleForModel('comment', 'Unit | Model | comment', {
  // Specify the other units that are required for this test.
  needs: ['model:album']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});


test('has expected properties', function(assert) {
  // I'd rather use the activemodel adapter/serializer to format this
  var rawModel = {"author":"Evan Willum","album_id":10,"message":"Good album, but I liked the first one.","id":1,"updatedAt":"Sat Oct 31 2015 19:52:44 GMT-0500 (CDT)"};
  var model = this.subject(rawModel);

  assert.equal(model.get('author'), rawModel['author']);
  assert.equal(model.get('message'), rawModel['message']);
  assert.equal(model.get('updatedAt'), new Date(rawModel['updatedAt']));
});

