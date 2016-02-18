// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
  },
  waitOn: function() {
    return [
      Meteor.subscribe('stores'),
    ];
  }
});
