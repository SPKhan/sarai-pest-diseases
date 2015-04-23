Template.SearchLayout.helpers({
  forceNarrow: function() {
    return true;
  },
  disableEdgeSwipe: function() {
    return isDesktop.get()
  },
  responsiveWidth: 750
});

Template.SearchLayout.events({
});

Template.SearchLayout.rendered = function(){
  checkIsDesktop()
  $(window).resize(checkIsDesktop);
  
  this.find('.content')._uihooks = {
		insertElement: function(node, next) {
			$(node).hide().insertBefore(next).fadeIn();
		},
		removeElement: function(node) {
			$(node).fadeOut(function() {
				$(this).remove();
			});
		}
	}
  
};
