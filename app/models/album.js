import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('number'),
  artist: DS.belongsTo('artist'),
  totalSold: DS.attr('number'),
  comments: DS.hasMany('comment', {async: true}),
  updated_at: DS.attr('date')
});
