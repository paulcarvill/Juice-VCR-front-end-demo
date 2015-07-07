JuiceVCR.Views.AboutButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      window.about.display();
      $(window).unbind('mousemove', mousetimer);
      $('body').addClass('woop');
      clearTimeout(timeout);
    }
})