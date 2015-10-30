import { moduleForModel, test } from 'ember-qunit';

moduleForModel('artist', 'Unit | Model | artist', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('has expected properties', function(assert) {
  var raw_model = {"name":"Some Artist","album_ids":[1,2],"based_in":"Los Angeles","founding_year":2001,"id":1,"updated_at":"Thu Oct 29 2015 20:19:31 GMT-0500 (CDT)"};
  var model = this.subject(raw_model);

  assert.equal(model.get('name'), raw_model["name"]);
  assert.equal(model.get('based_in'), raw_model["based_in"]);
  assert.equal(model.get('founding_year'), raw_model["founding_year"]);
  assert.equal(model.get('updated_at'), new Date(raw_model["updated_at"]));
});
