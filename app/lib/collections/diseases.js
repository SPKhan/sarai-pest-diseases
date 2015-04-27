Diseases = new Mongo.Collection('diseases');

// Extended configuration
Diseases.initEasySearch(['name','image-url'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

if (Meteor.isServer) {
  Diseases.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Diseases.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
