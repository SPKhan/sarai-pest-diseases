var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['name'];

PackageSearch = new SearchSource('diseases', fields, options);
