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
      // $('#info').toggle();
      // $('#info').html(window.JuiceVCR.data[currentVideoIndex].id + "<br />" + 
      //     window.JuiceVCR.data[currentVideoIndex].tracktitle + "<br />" + 
      //     window.JuiceVCR.data[currentVideoIndex].album + "<br />" + 
      //     window.JuiceVCR.data[currentVideoIndex].artist + "<br />" + 
      //     window.JuiceVCR.data[currentVideoIndex].label + "<br />" + 
      //     window.JuiceVCR.data[currentVideoIndex].publisher + "<br />" + 
      //     window.JuiceVCR.data[currentVideoIndex].body + "<br />" + 
      //     window.JuiceVCR.data[currentVideoIndex].tags
      //   );
      // }
})