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
    // return ((this.isTopNav && isHome()) || 
    //         (this.isTopNav && !isDesktop.get()) || 
    //         (!this.isTopNav && (!isHome() || !isDesktop.get())))
    return true;
  },
  showTopNavMenu: function() {
    // return ((this.isTopNav && isHome() && isDesktop.get()))
    //return true;
    return (this.isTopNav && isDesktop.get())
  },
  showSideNavMenu: function() {
    return !this.isTopNav;
  },
  menuArray: function() {
    return [
      // {
      //   name: "Google",
      //   path: "http://www.google.com",
      //   linkInside: false
      // },
      
      {
        name: "Home",
        path: "inside",
        linkInside: true,
        hasChild: false
      },      
      
      {
        name: "Transparency Seal",
        path: "posts",
        linkInside: true,
        hasChild: false
      },
      {
        name: "Services",
        path: "posts",
        linkInside: true,
        hasChild: false
      },
      {
        name: "Commodities",
        path: "inside",
        linkInside: true,
        hasChild: true,
        sublinks: [
          {
            name: "RICE",
            path: "inside",
            linkInside: true,
            hasChild: false 
          },
          {
            name: "CORN",
            path: "inside",
            linkInside: true,
            hasChild: false 
          }
        ]
      }, 
      {
        name: "Programs",
        path: "settings",
        linkInside: true,
        hasChild: false
      }
    ]
  }
});

/*****************************************************************************/
/* Navigation: Lifecycle Hooks */
/*****************************************************************************/
Template.Navigation.created = function () {
  //$(".dropdown-button").dropdown();
};

Template.Navigation.rendered = function () {
  $('.dropdown-button').dropdown({
     // gutter: 10,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      belowOrigin: true // Displays dropdown below the button
    }
  );
};

Template.Navigation.destroyed = function () {
};

/*****************************************************************************/
/* private functions
/*****************************************************************************/
