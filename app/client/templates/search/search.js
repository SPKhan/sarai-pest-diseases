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

