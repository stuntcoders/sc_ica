Template.home.helpers({

});

Template.home.events({
  'submit #create-store': function(event) {

    event.preventDefault();

    Meteor.call('createStore',
      event.target.name.value,
      event.target.url.value
    );

    event.target.name.value = '';
    event.target.url.value = '';
  }
});
