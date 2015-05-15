/*****************************************************************************/
/* Search: Event Handlers */
/*****************************************************************************/
Template.Search.events({
});

/*****************************************************************************/
/* Search: Helpers */
/*****************************************************************************/
Template.Search.helpers({
	equals: function(v1, v2) {
		return (v1 === v2);
	},
	charLimit: function(str){
		return str.substring(0,160) + "...";
	},
	titleCharLimit: function(str){
		if(str.length > 13)
			return str.substring(0,12) + "...";

		return str;
	},
	imageSearchPath: function(){
		return "image_search";
	},
	imageName: function(str){
		return str.replace(/\s/g, '');
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

