import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('number'),
  artist: DS.belongsTo('artist'),
  totalSold: DS.attr('number'),
  // comments: DS.hasMany('comments'),
  updated_at: DS.attr('date')
});
