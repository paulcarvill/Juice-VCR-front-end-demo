JuiceVCR.Views.ShowView = Backbone.View.extend({
  events: {
      "mouseover": "doover",
      "mouseout":  "doout"
      // "click .toggle"   : "toggleDone",
      // "dblclick .view"  : "edit",
      // "click a.destroy" : "clear",
      // "keypress .edit"  : "updateOnEnter",
      // "blur .edit"      : "close"
    },

    doover: function(){
      console.log('over');
    },

    doout: function(){
      console.log('out');
    }
})