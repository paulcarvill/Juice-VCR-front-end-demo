JuiceVCR.Views.NextButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      skipVid();
      // TODO: change text of play/pauyse button to 'play' because we always play when you skip to another track
    }
})