JuiceVCR.Views.ContactButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      window.contact.display();
      myPlayer1.userActive(false);
    }
})