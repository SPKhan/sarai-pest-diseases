/*****************************************************************************/
/* PestSearch: Event Handlers */
/*****************************************************************************/
Template.PestSearch.events({
	"click .add": function (event, template) {
    			$.ajax({
					type:"POST",
					url:"http://127.0.0.1:5000/pestAddTrainingData",
					dataType:"json",
					data: 
						{
							'input': Session.get('features').toString(),
							'target': event.target.parentNode.id
						},
					success: function(result){
						
					},
					error: function(error){
						
					}
				});	

				$('.add').attr('disabled','disabled');
				$('.add').addClass('grey');
				$('.add').addClass('white-text');
				

  	},
});

/*****************************************************************************/
/* PestSearch: Helpers */
/*****************************************************************************/
Template.PestSearch.helpers({
	 myCallbacks: function() {
	    return {
	         finished: function(index, fileInfo, context) {
	         	Session.set('data',undefined);
	         	filename = "../uploads/"+fileInfo.name;
	         	$('.jqDropZone').html("<img src='"+fileInfo.url+"' width='100%' height='295px'/>");
	         	$.ajax({
					type:"POST",
					url:"http://127.0.0.1:5000/pestImageSearch",
					dataType:"json",
					data: 
						{
							'filename': filename,
						},
					success: function(result){
						Session.set('data',result.data);
						console.log(result.data);
						Session.set('features',result.features);			
					},
					error: function(error){
						
					}
				});
	         }
	    }
	  },
	data: function(){
		values=[];
		if(Session.get('data')){
			for(var i = 0;i<Session.get('data').length;i++){
				values.push(PlantProblem.findOne({'type': 'Pest','name':Session.get('data')[i].name}));
			}
		}
		return values;
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
/* PestSearch: Lifecycle Hooks */
/*****************************************************************************/
Template.PestSearch.created = function () {

};

Template.PestSearch.rendered = function () {
	$('.jqDropZone').html("");
};

Template.PestSearch.destroyed = function () {
};
