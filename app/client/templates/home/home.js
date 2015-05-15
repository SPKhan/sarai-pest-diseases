/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
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
	searchPath: function(){
		return "search";
	},
	imageSearchPath: function(){
		return "image_search";
	},
	pests: function(){
		return PlantProblem.find({'type': 'Pest'},{'limit':6});
	},
	diseases: function(){
		return PlantProblem.find({'type': 'Disease'},{'limit':6});
	}
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
	
};

Template.Home.destroyed = function () {
};
