import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
//  album_ids: DS.hasMany('Album'),
  basedIn: DS.attr('string'),
  foundingYear: DS.attr('number'),
  updatedAt: DS.attr('date')
});
