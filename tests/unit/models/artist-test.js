import { moduleForModel, test } from 'ember-qunit';

moduleForModel('artist', 'Unit | Model | artist', {
  // Specify the other units that are required for this test.
  needs: ['model:album']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('has expected properties', function(assert) {
  // I'd rather use the activemodel adapter/serializer to format this
  //var raw_model = {"name":"Some Artist","album_ids":[1,2],"based_in":"Los Angeles","founding_year":2001,"id":1,"updated_at":"Thu Oct 29 2015 20:19:31 GMT-0500 (CDT)"};
  var raw_model = {"name":"Some Artist","albumIds":[1,2],"basedIn":"Los Angeles","foundingYear":2001,"id":1,"updatedAt":"Thu Oct 29 2015 20:19:31 GMT-0500 (CDT)"};
  var model = this.subject(raw_model);

  assert.equal(model.get('name'), raw_model["name"]);
  assert.equal(model.get('basedIn'), raw_model["basedIn"]);
  assert.equal(model.get('foundingYear'), raw_model["foundingYear"]);
  assert.equal(model.get('updatedAt'), new Date(raw_model["updatedAt"]));
});
