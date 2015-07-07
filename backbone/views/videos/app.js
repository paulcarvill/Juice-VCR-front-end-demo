JuiceVCR.Views.AppView = Backbone.View.extend({

	currentVideoIndex: 0,

	initialize: function(){
		_.bindAll(this, 'playVid', 'skipVid');

		for(var i = 0; i < JuiceVCR.data.length; i++){
			window.playlist.create(JuiceVCR.data[i]);
		}
		this.playVid();
	},

	playVid: function(){
		this.vid = window.playlist.at(this.currentVideoIndex);

		this.videoPlayer = videojs('vid1', {
			type: this.vid.get('videotype'),
			src: this.vid.get('videourl'),
			techOrder: ["youtube", "vimeo"],
			autoplay: true,
			inactivityTimeout: 3000
		});

		this.infopane = new JuiceVCR.Views.InfoView( { el : $('#info'), model: this.vid.toJSON() });

		this.videoPlayer.on('useractive', this.useractive);
		this.videoPlayer.on('userinactive', this.userinactive);
		this.videoPlayer.on('ended', this.skipVid);
	},

	skipVid: function(){
		this.currentVideoIndex += 1;
		if(this.currentVideoIndex >= window.playlist.length){
			this.currentVideoIndex = 0;
		}
		this.vid = window.playlist.at(this.currentVideoIndex);

		this.videoPlayer.src({
			type: this.vid.get('videotype'),
			src: this.vid.get('videourl')
		});
		
		this.infopane = new JuiceVCR.Views.InfoView( { el : $('#info'), model: this.vid.toJSON() });
	},

	skipVidBack: function(){
		this.currentVideoIndex -= 1;
      	if(this.currentVideoIndex === -1){
      		this.currentVideoIndex = window.playlist.length-1;
      	}
      	this.vid = window.playlist.at(this.currentVideoIndex);

		this.videoPlayer.src({
			type: this.vid.get('videotype'),
			src: this.vid.get('videourl')
		});

		this.infopane = new JuiceVCR.Views.InfoView( { el : $('#info'), model: this.vid.toJSON() });
    },

    playRandom: function(){
    	var rand = Math.floor(Math.random() * (window.playlist.length - 0)) + 0;
    	if (rand === this.currentVideoIndex) {
        	rand += 1;
      	}
      	if(rand >= window.playlist.length){
        	rand = 0;
      	}		
      
      	this.currentVideoIndex = rand;
      	
      	this.vid = window.playlist.at(this.currentVideoIndex);

		this.videoPlayer.src({
			type: this.vid.get('videotype'),
			src: this.vid.get('videourl')
		});
    },

	useractive: function(){
		$('body').removeClass('woop');
	},

	userinactive: function() {
		$('body').addClass('woop');
	}

})