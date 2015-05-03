Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  waitOn: function() { return Meteor.subscribe('plantProblem'); }
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('about', {
  name: 'about',
  controller: 'AboutController',
  action: 'action',
  where: 'client'
});

Router.route('contact', {
  name: 'contact',
  controller: 'ContactController',
  action: 'action',
  where: 'client'
});

Router.route('pests', {
  name: 'pests',
  controller: 'PestsController',
  action: 'action',
  where: 'client'
});

Router.route('diseases', {
  name: 'diseases',
  controller: 'DiseasesController',
  action: 'action',
  where: 'client'
});

Router.route('search', {
  name: 'search',
  controller: 'SearchController',
  action: 'action',
  where: 'client'
});

Router.route('image_search', {
  name: 'imageSearch',
  controller: 'ImageSearchController',
  action: 'action',
  where: 'client'
});

Router.route('/entity/:_id', {
  name: 'entityPage',
  data: function() { 
  	return PlantProblem.findOne(this.params._id); }
});

