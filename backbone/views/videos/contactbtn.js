JuiceVCR.Views.ContactButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      console.log('clicked. show contact panel');
      $('#contact').toggle();
    }
})