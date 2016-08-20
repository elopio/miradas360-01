

var createPlayerFor = function(selector){
	var playSelector = selector + 'Play';
	var audioToPlay = document.querySelector('#' + selector);
	var playerAnimationTrigger = document.querySelector('#' + playSelector);
	var mainEventPlay = function(){
		audioToPlay.emit('play' + selector);
	};
	playerAnimationTrigger.el.addEventListener('animationend',mainEventPlay);
	playerAnimationTrigger.addEventListener('animationend',mainEventPlay);
}





var players = ['first','devoto','bosch','adios'];
for (var i = 0; i < players.length; i++) {
	createPlayerFor(players[i]);
};

