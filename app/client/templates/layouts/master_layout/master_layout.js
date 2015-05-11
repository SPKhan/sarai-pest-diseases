
Template.MasterLayout.helpers({
  forceNarrow: function() {
    // if (isHome()) return isHome();
    // else return !isDesktop.get();
    return true;
  },
  disableEdgeSwipe: function() {
    return isDesktop.get()
  },
  responsiveWidth: 750,
  applicationName: function(name) {
    //var name;
    name = "PESTS AND DISEASES";
    return name;
  }
});

Template.MasterLayout.events({
});



Template.MasterLayout.rendered = function() {
  checkIsDesktop()
  $(window).resize(checkIsDesktop);

  $('.materialboxed').materialbox();
  
  this.find('.content')._uihooks = {
    insertElement: function(node, next) {
      $(node)
      .hide()
      .insertBefore(next)
      .fadeIn();
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
      $(this).remove();
      });
    }
  }
  
}
