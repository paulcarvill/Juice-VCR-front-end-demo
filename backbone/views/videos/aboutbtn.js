JuiceVCR.Views.AboutButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      window.about.display();
      myPlayer1.userActive(false);
    }
})