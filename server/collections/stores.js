Stores = new Mongo.Collection('stores');

Meteor.methods({
  createStore: function(name, url) {
    check(Meteor.userId(), String);
    check(name, String);
    check(url, Match.OneOf(String, undefined));

    return Stores.insert({
      name: name,
      url: url,
      owner_id: Meteor.userId()
    });
  }
});
