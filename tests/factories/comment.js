import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('comment', {
  sequences: {
    author: function(num) { return "Author" + num; },
    message: function(num) { return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum, sem at hendrerit suscipit, sem eros blandit elit, ut faucibus orci elit sit amet erat. Vestibulum ut felis bibendum, elementum orci quis, pretium ligula. Nullam lacus dolor, posuere vel magna et, semper rutrum odio. Nunc at vestibulum arcu. Aliquam venenatis justo lectus, id dictum odio placerat at. Morbi bibendum tristique posuere. Vestibulum ultricies dui justo, vel accumsan augue condimentum eu. Pellentesque vitae lorem et orci finibus consectetur. Pellentesque ac risus dolor. All that and the number " + num; },
    updatedAt: function() { return new Date(); }
  },
  default: {
    author: FactoryGuy.generate('author'),
    message: FactoryGuy.generate('message'),
    album: {},
    updatedAt: FactoryGuy.generate('updatedAt')
  }
});
