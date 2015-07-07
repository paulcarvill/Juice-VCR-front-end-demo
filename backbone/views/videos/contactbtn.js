JuiceVCR.Views.ContactButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      window.contact.display();
      $(window).unbind('mousemove', mousetimer);
      $('body').addClass('woop');
      clearTimeout(timeout);
    }
})