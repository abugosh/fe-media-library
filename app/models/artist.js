import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  albums: DS.hasMany('album', {async: true}),
  basedIn: DS.attr('string'),
  foundingYear: DS.attr('number'),
  updatedAt: DS.attr('date')
});
