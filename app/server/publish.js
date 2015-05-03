/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
Meteor.publish('plantProblem', function(){
	return PlantProblem.find();
});
