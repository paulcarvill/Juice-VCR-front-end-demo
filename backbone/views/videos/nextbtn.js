JuiceVCR.Views.NextButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      console.log('clicked next');
      currentVideoIndex += 1;
      if(currentVideoIndex >= window.JuiceVCR.data.length){
      	currentVideoIndex = 0;
      }
      myPlayer1.src({ type: window.JuiceVCR.data[currentVideoIndex].videotype, src: window.JuiceVCR.data[currentVideoIndex].videourl });

      // TODO: change text of play/pauyse button to 'play' because we always play when you skip to another track
    }
})