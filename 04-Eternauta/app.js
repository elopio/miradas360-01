

var createPlayerFor = function(selector){
	var playSelector = selector + 'Play';
	var audioToPlay = document.querySelector(selector);
	var playerAnimationTrigger = document.querySelector(playSelector);
	var mainEventPlay = function(){
		audioToPlay.emit('play');
	};
	playerAnimationTrigger.el.addEventListener('animationend',mainEventPlay);
	playerAnimationTrigger.addEventListener('animationend',mainEventPlay);
}





var players = ['#first','#devoto'];
for (var i = 0; i < players.length; i++) {
	createPlayerFor(players[i]);
};

