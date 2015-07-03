JuiceVCR.Views.AboutButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      console.log('clicked. show about panel');
      $('#about').toggle();
    }
})