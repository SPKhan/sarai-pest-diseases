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
  where: 'client',
  waitOn: function() { return Meteor.subscribe('plantProblem'); }
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
  where: 'client',
  waitOn: function() { 
    return Meteor.subscribe('plantProblem'); },
  

});

Router.route('diseases', {
  name: 'diseases',
  controller: 'DiseasesController',
  action: 'action',
  where: 'client',
  waitOn: function() { return Meteor.subscribe('plantProblem'); }
});

Router.route('image_search', {
  name: 'imageSearch',
  controller: 'ImageSearchController',
  action: 'action',
  where: 'client',
  waitOn: function() { return Meteor.subscribe('plantProblem'); }
});


Router.route('/entity/:_id', {
  name: 'entityPage',
  data: function() { 
  	return PlantProblem.findOne(this.params._id); }
});



Router.route('pest_search', {
  name: 'pestSearch',
  controller: 'PestSearchController',
  action: 'action',
  where: 'client',
  waitOn: function() { 
    Session.set('data',undefined);
    return Meteor.subscribe('plantProblem'); }
});

Router.route('disease_search', {
  name: 'diseaseSearch',
  controller: 'DiseaseSearchController',
  action: 'action',
  where: 'client',
  waitOn: function() { 
    Session.set('data',undefined);
    return Meteor.subscribe('plantProblem'); }
});