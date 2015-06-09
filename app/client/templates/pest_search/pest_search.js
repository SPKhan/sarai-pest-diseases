/*****************************************************************************/
/* PestSearch: Event Handlers */
/*****************************************************************************/
Template.PestSearch.events({
	"click .add": function (event, template) {
    			$.ajax({
					type:"POST",
					url:"http://127.0.0.1:5000/addTrainingData",
					dataType:"json",
					data: 
						{
							'flag':'true',
							'type': 'pest',
							'target': event.target.id,
							'filename': Session.get("filename"),
						},
					success: function(result){
						
					},
					error: function(error){
						
					}
				});	
    			Session.set("filename",undefined);

				$('.add').remove();
				$('#modal1').openModal();
				$("#confirm").remove();
  	},
  	"click .no": function (event, template) {
    			$.ajax({
					type:"POST",
					url:"http://127.0.0.1:5000/addTrainingData",
					dataType:"json",
					data: 
						{
							'flag': 'false',
							'filename': Session.get("filename"),
						},
					success: function(result){
						
					},
					error: function(error){
						
					}
				});	
    			Session.set("filename",undefined);
				$("#confirm").remove();
  	},

  	"click .yes": function (event, template) {
    			$('.add').show();
    			$("#confirm").html("<div class='section no-pad-bot'><p>Please select by clicking the button 'This is it!'</p></div>");
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
	         	Session.set("filename",filename);
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
	$('.jqDropZone').html("<img src='/images/drop-here.png' width='100%' height='295px'/>");
};

Template.PestSearch.destroyed = function () {
};
