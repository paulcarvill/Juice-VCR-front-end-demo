JuiceVCR.Views.PrevButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      console.log('clicked prev');
      currentVideoIndex -= 1;
      if(currentVideoIndex === -1){
      	currentVideoIndex = window.JuiceVCR.data.length-1;
      }
      myPlayer1.src({ type: window.JuiceVCR.data[currentVideoIndex].videotype, src: window.JuiceVCR.data[currentVideoIndex].videourl });
    }
})