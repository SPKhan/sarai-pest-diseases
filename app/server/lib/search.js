SearchSource.defineSource('diseases', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};
  
  if(searchText) {

    var selector = {name: searchText};
    
    return Diseases.find(selector, options).fetch();
  } else {
    return Diseases.find({}, options).fetch();
  }
});
