Template.MasterLayout.helpers({
  forceNarrow: function() {
    return true;
  },
  disableEdgeSwipe: function() {
    return isDesktop.get()
  },
  responsiveWidth: 750
});

Template.MasterLayout.events({
});

Template.MasterLayout.rendered = function(){
  checkIsDesktop()
  $(window).resize(checkIsDesktop);
};
