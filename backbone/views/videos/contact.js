JuiceVCR.Views.ContactView = Backbone.View.extend({
	events: {
		"click a" : "doClick"
	},

	display: function(){
		$(this.el).toggleClass('mesh');
	},

	doClick: function(){
		$(this.el).toggleClass('mesh');
		$('body').removeClass('woop');
      	$(window).mousemove(mousetimer);
	}
})