/*****************************************************************************/
/* Navigation: Event Handlers */
/*****************************************************************************/
Template.Navigation.events({
  "click #toggle-side-navigation": function(e) {
    e.preventDefault();
    $('core-drawer-panel#core-drawer-panel-main')[0].togglePanel();
  }
});

/*****************************************************************************/
/* Navigation: Helpers */
/*****************************************************************************/
Template.Navigation.helpers({
  isHome: isHome,
  isDesktop: function() { 
    return isDesktop.get() 
  },
  showMenuButton: function() {
    return (this.isTopNav && !isDesktop.get())
  },
  showLogo: function() {
    return true;
    //return this.isTopNav
  },
  showTopNavMenu: function() {
    return (this.isTopNav && isDesktop.get())
  },
  showSideNavMenu: function() {
    return !this.isTopNav;
  },
  menuArray: function() {
    return [
      {
        name: "About",
        path: "about",
        linkInside: true
      },      
      {
        name: "Pests",
        path: "pests",
        linkInside: true
      },      
      {
        name: "Diseases",
        path: "diseases",
        linkInside: true
      },      
      {
        name: "Contact Us",
        path: "contact",
        linkInside: true
      }
    ]
  },

});

/*****************************************************************************/
/* Navigation: Lifecycle Hooks */
/*****************************************************************************/
Template.Navigation.created = function () {
};

Template.Navigation.rendered = function () {
};

Template.Navigation.destroyed = function () {
};

/*****************************************************************************/
/* private functions
/*****************************************************************************/
