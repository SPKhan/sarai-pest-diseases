/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */
 
 Meteor.publish('diseases',function(query){
 	return Diseases.find({name:query});
 });
