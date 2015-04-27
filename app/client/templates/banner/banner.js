/*****************************************************************************/
/* Banner: Event Handlers */
/*****************************************************************************/
Template.Banner.events({
});

/*****************************************************************************/
/* Banner: Helpers */
/*****************************************************************************/
Template.Banner.helpers({
	searchPath: function(){
		return "search";
	},
	imageSearchPath: function(){
		return "image_search";
	}
});

/*****************************************************************************/
/* Banner: Lifecycle Hooks */
/*****************************************************************************/
Template.Banner.created = function () {

};

Template.Banner.rendered = function () {
		$('.parallax').parallax();
};

Template.Banner.destroyed = function () {
};
