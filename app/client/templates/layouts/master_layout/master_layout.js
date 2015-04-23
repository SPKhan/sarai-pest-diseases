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
