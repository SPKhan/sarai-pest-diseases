/*****************************************************************************/
/* entityPage: Event Handlers */
/*****************************************************************************/
Template.entityPage.events({
});

/*****************************************************************************/
/* entityPage: Helpers */
/*****************************************************************************/
Template.entityPage.helpers({
	equals: function(v1, v2) {
		return (v1 === v2);
	},
	searchPath: function(){
		return "home";
	},
	imageName: function(str){
		return str.replace(/\s/g, '');
	}
});

/*****************************************************************************/
/* entityPage: Lifecycle Hooks */
/*****************************************************************************/
Template.entityPage.created = function () {
};

Template.entityPage.rendered = function () {
	$('.materialboxed').materialbox();
};

Template.entityPage.destroyed = function () {
};
