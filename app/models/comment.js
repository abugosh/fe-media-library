import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  album: DS.belongsTo('album'),
  message: DS.attr('string'),
  updatedAt: DS.attr('date')
});
