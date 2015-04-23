/*****************************************************************************/
/* Search: Event Handlers */
/*****************************************************************************/
Template.Search.events({
  "keyup #search_box": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    Meteor.subscribe('diseases',text);
  }, 200)
});

/*****************************************************************************/
/* Search: Helpers */
/*****************************************************************************/
Template.Search.helpers({
  search_results: function(){
    return Diseases.find();
  }
});

/*****************************************************************************/
/* Search: Lifecycle Hooks */
/*****************************************************************************/
Template.Search.created = function () {
};

Template.Search.rendered = function () {
};

Template.Search.destroyed = function () {
};

