/*****************************************************************************/
/* ImageSearch: Event Handlers */
/*****************************************************************************/
Template.ImageSearch.events({

});

/*****************************************************************************/
/* ImageSearch: Helpers */
/*****************************************************************************/
Template.ImageSearch.helpers({
	 myCallbacks: function() {
	    return {
	         finished: function(index, fileInfo, context) {
	         	//insert ajax call to api
	         	
	         }
	    }
	  }
});

/*****************************************************************************/
/* ImageSearch: Lifecycle Hooks */
/*****************************************************************************/
Template.ImageSearch.created = function () {
};

Template.ImageSearch.rendered = function () {
};

Template.ImageSearch.destroyed = function () {
};
