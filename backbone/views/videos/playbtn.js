JuiceVCR.Views.PlayButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    playing: true,

    doclick: function(){
      if(this.playing){
      	this.playing = false;
      	$(this.el).text('play');
      	window.app.videoPlayer.pause();
        $('.woop').removeClass('woop');

      } else {
      	this.playing = true;
      	$(this.el).text('pause');
      	window.app.videoPlayer.play();
      }
    }
})