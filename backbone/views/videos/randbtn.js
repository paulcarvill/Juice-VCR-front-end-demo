JuiceVCR.Views.RandomButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      console.log('clicked random');
      var rand = Math.floor(Math.random() * (window.JuiceVCR.data.length - 0)) + 0;
      console.log(rand);
      if (rand === currentVideoIndex) {
        rand += 1;
      }
      if(rand >= window.JuiceVCR.data.length){
        rand = 0;
      }
      currentVideoIndex = rand;
      myPlayer1.src({ type: window.JuiceVCR.data[currentVideoIndex].videotype, src: window.JuiceVCR.data[currentVideoIndex].videourl });
    }
})