/*****************************************************************************/
/* Pests: Event Handlers */
/*****************************************************************************/
Template.Pests.events({
});

/*****************************************************************************/
/* Pests: Helpers */
/*****************************************************************************/
Template.Pests.helpers({
	pests: function(){
		return PlantProblem.find({'type': 'Pest'});
	},
	imageName: function(str){
		return str.replace(/\s/g, '');
	},
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
});

/*****************************************************************************/
/* Pests: Lifecycle Hooks */
/*****************************************************************************/
Template.Pests.created = function () {
};

Template.Pests.rendered = function () {
};

Template.Pests.destroyed = function () {
};


