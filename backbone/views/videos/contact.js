JuiceVCR.Views.ContactView = Backbone.View.extend({
	events: {
		"click a" : "doClick"
	},

	display: function(){
		$(this.el).toggleClass('mesh');
	},

	doClick: function(){
		this.display();
		myPlayer1.userActive(true);
	}
})