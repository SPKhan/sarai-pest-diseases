/*****************************************************************************/
/* DiseaseSearch: Event Handlers */
/*****************************************************************************/
Template.DiseaseSearch.events({
	"click .add": function (event, template) {
    			$.ajax({
					type:"POST",
					url:"http://127.0.0.1:5000/diseaseAddTrainingData",
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
/* DiseaseSearch: Helpers */
/*****************************************************************************/
Template.DiseaseSearch.helpers({
	myCallbacks: function() {
	    return {
	         finished: function(index, fileInfo, context) {
	         	filename = "../uploads/"+fileInfo.name;
	         	$('.jqDropZone').html("<img src='"+fileInfo.url+"' width='100%' height='295px'/>");
	         	$.ajax({
					type:"POST",
					url:"http://127.0.0.1:5000/diseaseImageSearch",
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
					values.push(PlantProblem.findOne({'type': 'Disease','name':Session.get('data')[i].name}));
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
/* DiseaseSearch: Lifecycle Hooks */
/*****************************************************************************/
Template.DiseaseSearch.created = function () {
};

Template.DiseaseSearch.rendered = function () {
	$('.jqDropZone').html("");
};

Template.DiseaseSearch.destroyed = function () {
};
