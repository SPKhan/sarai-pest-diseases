/*****************************************************************************/
/* ImageSearch: Event Handlers */
/*****************************************************************************/
Template.ImageSearch.events({
	'change .myFileInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
	        if (err){
	          // handle error
	          console.log(err);
	        } else {
	            // handle success depending what you need to do
	            console.log("success");
	          var imagesURL = {
	            "image": "/images/" + fileObj._id
	          };
	        }
	      });
	    });
	  }
});

/*****************************************************************************/
/* ImageSearch: Helpers */
/*****************************************************************************/
Template.ImageSearch.helpers({
});

/*****************************************************************************/
/* ImageSearch: Lifecycle Hooks */
/*****************************************************************************/
Template.ImageSearch.created = function () {
};

Template.ImageSearch.rendered = function () {
};

Template.ImageSearch.destroyed = function () {
};
