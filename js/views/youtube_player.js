define(["jquery","underscore","backbone"],function(e,t,n){var r=n.View.extend({el:"#youtube-player-container",events:{"click .hide-player":"hide","click .show-player":"show","click .pause":"pause","click .play":"playVideo","click .volume-down":"decreaseVolume","click .volume-up":"increaseVolume"},initialize:function(){window.onYouTubeIframeAPIReady=t.bind(this.createPlayer,this);var e=require(["http://www.youtube.com/iframe_api?&ghost="],function(){})},createPlayer:function(){this.player=new YT.Player("player",{height:"270",width:"270",playerVars:{autoplay:1,enablejsapi:1},events:{onReady:e.proxy(this.onPlayerReady,this),onStateChange:e.proxy(this.onPlayerStateChange,this)}})},onPlayerReady:function(){this.queue&&this.play(this.queue)},onPlayerStateChange:function(){},play:function(e){if(!this.player.loadVideoById){this.show(),this.queue=e;return}this.player.loadVideoById(e.id),this.$el.addClass("yt-playing"),this.show()},pause:function(e){e.preventDefault(),this.$el.removeClass("yt-playing"),this.player.pauseVideo()},playVideo:function(e){e&&e.preventDefault(),this.$el.addClass("yt-playing"),this.player.playVideo()},decreaseVolume:function(e){e&&e.preventDefault(),this.player.setVolume(this.player.getVolume()-5)},increaseVolume:function(e){e&&e.preventDefault(),this.player.setVolume(this.player.getVolume()+5)},show:function(e){e&&e.preventDefault(),this.$el.addClass("show-youtube-player")},hide:function(e){e.preventDefault(),this.$el.removeClass("show-youtube-player")}});return r})