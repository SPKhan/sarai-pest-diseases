/*****************************************************************************/
/* Search: Event Handlers */
/*****************************************************************************/
Template.Search.events({
  "keyup #search_box": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    PackageSearch.search(text);
  }, 200)
});

/*****************************************************************************/
/* Search: Helpers */
/*****************************************************************************/
Template.Search.helpers({
  getPackages: function() {
    return PackageSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>")
      },
      sort: {isoScore: -1}
    });
  },
  
  isLoading: function() {
    return PackageSearch.getStatus().loading;
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

