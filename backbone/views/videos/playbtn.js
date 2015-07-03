JuiceVCR.Views.PlayButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    playing: true,

    doclick: function(){
      console.log('clicked play');
      if(this.playing){
      	this.playing = false;
      	$(this.el).text('play');
      	myPlayer1.pause();
      } else {
      	this.playing = true;
      	$(this.el).text('pause');
      	myPlayer1.play();
      }
    }
})