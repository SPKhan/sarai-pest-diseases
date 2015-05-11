/*****************************************************************************/
/* Auxillary: Event Handlers */
/*****************************************************************************/
Template.Auxillary.events({
  "click #toggle-side-navigation": function(e) {
    e.preventDefault();
    $('core-drawer-panel#core-drawer-panel-main')[0].togglePanel();
  }
});

/*****************************************************************************/
/* Auxillary: Helpers */
/*****************************************************************************/
Template.Auxillary.helpers({
  auxArray: function() {
    return [
      {
        name: "REGION",
        path: "rice",
        linkInside: true
      },
      
      {
        name: "I",
        path: "corn",
        linkInside: true
      },      
      
      {
        name: "II",
        path: "banana",
        linkInside: true
      },
      {
        name: "III",
        path: "coconut",
        linkInside: true
      },
      
      {
        name: "IV",
        path: "coffee",
        linkInside: true
      },      
      
      {
        name: "V",
        path: "cacao",
        linkInside: true
      },      
      
      {
        name: "VI",
        path: "cacao",
        linkInside: true
      },      
      
      {
        name: "VII",
        path: "cacao",
        linkInside: true
      },      
      
      {
        name: "VIII",
        path: "cacao",
        linkInside: true
      },      
      
      {
        name: "IX",
        path: "cacao",
        linkInside: true
      },      
      
      {
        name: "X",
        path: "cacao",
        linkInside: true
      },      
      
      {
        name: "XI",
        path: "cacao",
        linkInside: true
      },      
      
      {
        name: "XII",
        path: "cacao",
        linkInside: true
      },      
      
      {
        name: "ARMM",
        path: "cacao",
        linkInside: true
      },      
      
      {
        name: "NCR",
        path: "cacao",
        linkInside: true
      }
    ]
  }
});

/*****************************************************************************/
/* Auxillary: Lifecycle Hooks */
/*****************************************************************************/
Template.Auxillary.created = function () {
};

Template.Auxillary.rendered = function () {
};

Template.Auxillary.destroyed = function () {
};

/*****************************************************************************/
/* private functions
/*****************************************************************************/
