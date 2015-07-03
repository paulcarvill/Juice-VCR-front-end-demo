JuiceVCR.Views.InfoButtonView = Backbone.View.extend({
	events: {
      "click": "doclick"
    },

    doclick: function(){
      console.log('clicked info');
      $('#info').toggle();
      $('#info').text(window.JuiceVCR.data[currentVideoIndex].id + "\r\n" + 
          window.JuiceVCR.data[currentVideoIndex].tracktitle + "\r\n" + 
          window.JuiceVCR.data[currentVideoIndex].album + "\r\n" + 
          window.JuiceVCR.data[currentVideoIndex].artist + "\r\n" + 
          window.JuiceVCR.data[currentVideoIndex].label + "\r\n" + 
          window.JuiceVCR.data[currentVideoIndex].publisher + "\r\n" + 
          window.JuiceVCR.data[currentVideoIndex].body + "\r\n" + 
          window.JuiceVCR.data[currentVideoIndex].tags
        );
    }
})