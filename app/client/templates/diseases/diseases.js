/*****************************************************************************/
/* Diseases: Event Handlers */
/*****************************************************************************/
Template.Diseases.events({
});

/*****************************************************************************/
/* Diseases: Helpers */
/*****************************************************************************/
Template.Diseases.helpers({
	diseases: function(){
		return PlantProblem.find({'type': 'Disease'});
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
/* Diseases: Lifecycle Hooks */
/*****************************************************************************/
Template.Diseases.created = function () {
};

Template.Diseases.rendered = function () {
};

Template.Diseases.destroyed = function () {
};
