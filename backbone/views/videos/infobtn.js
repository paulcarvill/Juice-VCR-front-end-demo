JuiceVCR.Views.InfoButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      if (!myPlayer1.videoIsFullscreen) {
        myPlayer1.requestFullscreen();
      } else {
        myPlayer1.exitFullScreen();
      }
    }
})